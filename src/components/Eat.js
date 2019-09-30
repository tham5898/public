import React, { Component } from "react"
import './Customer.css'

export class Eat extends Component {
    state = {
        text1: "Drink",
        list: [{ drink: "Milinda", lineThrough: false }]
    }
    xuLy = () => {
        const { list } = this.state;
        let temp = { drink:"", lineThrough: false }
        temp.drink=this.state.text1;
        list.push(temp)
        this.setState({
            list: list
        })
    }
    xuluOnChange = (e) => {
        this.setState({
            text1: e.target.value
        })

    }

    renderItem = () => {
        return this.state.list.map((value, index) => {
            return (<li className={`${(value.lineThrough)? 'lineThrough' : null}`}
            onClick={()=>{
               let lo = this.state.list;
               lo[index].lineThrough=true;
               this.setState({
                   list: lo
               })
            }}
            >{value.drink}</li>)
        })
    }
    render() {
        return (
            <div>
                <p>List</p>
                <ul>
                    <li onClick={() => {
                        alert("Ahihi")
                    }}>Eat</li>
                    <li>Drink</li>
                    {
                        this.renderItem()

                    }

                </ul>
                <input type="text" value={this.state.text1}
                    onChange={
                        this.xuluOnChange
                    }
                ></input>
                <button onClick={
                    this.xuLy
                }>Add</button>
            </div>
        )
    }

}