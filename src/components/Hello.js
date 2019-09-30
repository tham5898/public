import React, { Component } from "react";

export class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name2: "Tham",
            gioiTinh: "Nữ"

        }
    }
    render() {
        return (<div>
            <p>hello {this.props.name}</p>
            <p>Xin chào {this.state.name2}</p>
            <input type="text"
             value={this.state.name2}
             onChange={
                 (e)=>{
                     console.log(e.target.value);
                     this.setState({name2:e.target.value })
                 }
             }
             />

             <h3></h3>
        </div>
        )
    }
}