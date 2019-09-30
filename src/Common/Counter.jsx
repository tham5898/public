import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        item: 0,
        text: ""
    }
    onTang = () => {
        this.props.onChange(this.props.id, true)

    }
    onGiam = () => {
        this.props.onChange(this.props.id, false)
    }

    render() {
        return (
            <div>

                <button onClick={() => { this.onTang() }}>+</button>

                <button>{this.props.value} </button>

                <button onClick={() => { this.onGiam() }} >-</button>
            </div>
        )
    }
}
