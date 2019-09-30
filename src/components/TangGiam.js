import React, { Component } from "react"
export class TangGiam extends Component {
    state = {
        so: 0,
        ahihi: ""
    }

    tangMot = () => {
        this.setState({
            so: this.state.so + 1,

        });
    }

    giamMot=()=>{
        this.setState({
            so:this.state.so -1
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.so} />
                <button onClick={this.tangMot}>+</button>
                <button onClick={() =>  {
                   this.giamMot();
                }}>-</button>
            </div>
        )
    }
}