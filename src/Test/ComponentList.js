import React, { Component } from "react"
export class ComponentList extends Component {
    state = {
        name: "",
        age: 0,
    }

    xulyXoa = (i) => {
        this.props.remove(i)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        
        console.log(nextProps)  
      }

    renderItem = () => {
        return this.props.list1.map((value, index) => {
            return (
                <ItemSV index={index} value={value}
                    xulyXoa1={(i) => { this.xulyXoa(i) }}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>STT</td>
                        <td>Ten</td>
                        <td>Tuoi</td>
                        <td>Thao tac</td>

                    </tr>
                    {
                        this.renderItem()
                    }

                </table>
            </div>
        )
    }
}

function ItemSV(props) {
    return (<tr>
        <td>{props.index + 1}</td>
        <td>{props.value.name}</td>
        <td>{props.value.age}</td>
        <td><button onClick={
            () => { props.xulyXoa1(props.index) }
        }>Xoa</button></td>

    </tr>

    )
}