import React, { Component } from "react"



export class Childen extends Component {
    constructor(props){
        super(props);
        this.state= {
            nameCon: "Tham"
        }
    }
    render() {

        return (
            <div>  
                <h1>Con {this.props.name}</h1>
                <button onClick={()=>{
                    this.props.onChange(this.state.nameCon,1,2)
                }}>Bam</button>
            </div>
        )
    }
}