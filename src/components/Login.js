import React, { Component } from "react"
export class Login extends Component {
    state = {
        name: "",
        pass: ""

    }
    xulyLogin = () => {
        const { name, pass } = this.state

        if (name === "Long" && pass === "2708") {
            alert("Ok")
        } else {
            alert("Sai")
        }
    }

    xulyName = (e, name1) => {
        this.setState({ [name1]: e.target.value })
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <h3>User</h3>
                <input type="Text" id="name" Value={this.state.name}
                    onChange={
                        (e) => this.xulyName(e, 'name')
                    }
                />
                <h3>PassWord</h3>
                <input type="password" id="pass" value={this.state.pass}
                    onChange={
                        (e) => this.xulyName(e, 'pass')
                    }

                />
                <button onClick={() => {
                    this.xulyLogin()
                }}>Login</button>

            </div>
        )
    }
}