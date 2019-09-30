import React, { Component } from "react"
import { ComponentAdd } from "../Test/ComponentAdd";
import { ComponentList } from "../Test/ComponentList";
import { ComponentSeacrch } from "../Test/ComponentSeacrch";
export class Test extends Component {

    state = {
        // timKiem: "",
        list: [{ name: "LVT", age: 14 }],


    }
    
    xulyThem = (sinhVien) => {

        const { list } = this.state
        list.push(sinhVien)
        this.setState({
            list: list
        })

    }
    xulyXoa = (i) => {
        const { list } = this.state
        const filter = list.filter((value, index) => {
            return (index !== i)
        })
        this.setState({
            list: filter
        })
    }

    hamTimKiem = (obj) => {
        //const { timKiem, radioCheck } = this.state
        const { list } = this.state

        const listFilterName = list.filter((value) => {
            return value[obj.check] === obj.timKiem
        })

        this.setState({
            list: listFilterName
        })


    }


    render() {
        return (
            <div>

                < ComponentSeacrch timKiemList={(v1) => {
                    this.hamTimKiem(v1)


                }} />
                <ComponentList list1={this.state.list}
                    remove={(index) => {
                        this.xulyXoa(index)
                    }}
                />
                <ComponentAdd handleClickParent={(a) => {
                    this.xulyThem(a)
                }} />
            </div>
        )
    }
}