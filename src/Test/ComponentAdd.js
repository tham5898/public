import React, { Component } from "react"
export class ComponentAdd extends Component {
    constructor(props){
        super(props);


        
    }
    state = {
        name: "",
        age: 0
    }
    xulyThem=()=>{
        const obj={name: this.state.name, age: this.state.age}
        this.props.handleClickParent(obj)
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("Ahihi")  
      }

    render() {
        return (
            <div>
                <h3>Them sinh vien</h3>
                <h3>Ten</h3>
                <input type="text" value={this.state.name}
                    onChange={
                        (e) => {
                            this.setState({
                                name: e.target.value
                            })
                        }
                    }
                >

                </input>
                <h3>Tuoi</h3>
                <input type="number" value={this.state.age}
                    onChange={
                        (e) => {
                            this.setState({
                                age: e.target.value
                            })
                        }
                    }
                ></input>
                <p><button onClick={ this.xulyThem}>Add</button></p>
            </div>
        )
    }
}