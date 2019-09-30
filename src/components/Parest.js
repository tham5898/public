import React, { Component } from "react"
import { Childen } from "./Childen";

export class Parest extends Component {
    state = {
        nameDad: "Hung"

    }
    render() {
        return (
            <div>
                <h1> Nội dung </h1>
                <h3>Hổng hiểu </h3>
                <Childen name={this.state.nameDad} onChange={(a,b,c)=>{
                            console.log(a,b,c)
                }}/>
            </div>
        )

    }
}