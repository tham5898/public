import React, { Component } from "react"
export class ComponentSeacrch extends Component{
    state={
        timKiem: "",
        radioCheck: "name"
    }
    hamTimKiem=(a)=>{
            const obj={timKiem: this.state.timKiem, check: this.state.radioCheck}
        this.props.timKiemList(obj)

    }
    onCheckChanged = (e) => {
        this.setState({
            radioCheck: e.currentTarget.value
        })
    }
    render(){
        return(
            <div>
                 <input type="radio" name="gender" value="name"
                    checked={this.state.radioCheck === "name"}
                    onChange={this.onCheckChanged}
                /> Ten <br />
                <input type="radio" name="gender" value="age"
                    checked={this.state.radioCheck === "age"}
                    onChange={this.onCheckChanged} /> Tuoi <br />
                <input type="text" value={this.state.timKiem}
                    onChange={
                        (e) => {
                            this.setState({
                                timKiem: e.target.value
                            })
                        }
                    }
                ></input>
                <button onClick={
                    this.hamTimKiem
                }>Tim</button>

            </div>
        )
    }
}