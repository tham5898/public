import React from 'react';
import cartStorage from '../storage/cartStorage';
import logo1 from './../Img/dt1.jpg';
import logo2 from './../Img/dt2.jpg';
import logo3 from './../Img/dt3.jpg';
import Add from './Add';
import FromAdd from './FromAdd';
import Search from './Search';
import Sort from './Sort';
import Table from './Table';
import Title from './Title';
import Update from './Update';



let defaultList = [{ id: 1, name: "SamSum", img: logo1, price: "10000000", action: "" },
{ id: 2, name: "SamSum1", img: logo2, price: "10000000", action: "" },
{ id: 3, name: "SamSum2", img: logo3, price: "10000000", action: "" }
];

export default class Manger extends React.Component {

    state = {
        list: defaultList,
        listAdd: { id: 0, name: "", img: "", price: "", action: "", soluong: 0 },
        isOpenAdd: false,
        isOpenUpdate: false,
        listUpdate: {},
        keyWord: '',
        keySort: 'name',
        valueSort: 1
    }
    onShopCar = (id) => {
        const { list } = this.state
        const sanPham = list.find((value) => {
            return value.id === id;

        })
        if (sanPham) {
            const listCart = JSON.parse(cartStorage.get()) || [] ;
            const cart = listCart.find((value) => {
                return value.id === id;
            })


            if (cart) {
                const items = listCart.map((value, index) => {
                    if (value.id === id) {
                        value.soluong += 1
                    } 
                    return value
                })
                cartStorage.set(items)
            } else {
                const sp = {
                    id: sanPham.id,
                    name: sanPham.name,
                    img: sanPham.img,
                    price: sanPham.price,
                    soluong: 1
                }
                listCart.push(sp)
                cartStorage.set(listCart)
            }
        } 
        this.props.history.push('./ShopCart')
    }

    xUpdate = (itemSelected) => {
        this.setState({
            isOpenUpdate: !this.state.isOpenUpdate,
            listUpdate: itemSelected
        })
    }

    xlDelete = (i) => {
        const { list } = this.state;
        const listMove = list.filter((value, index) => {
            return (index !== i)
        })
        this.setState({
            list: listMove
        })
    }
    xlAdd = (listAdd) => {
        const { list } = this.state;

        list.push(listAdd)
        console.log(list)
        this.setState({
            list: list
        })
        defaultList = list;
    }
    OnEventUpdate = (dataUpdate) => {
        const { list } = this.state
        const mapList = defaultList.map((item) => {
            if (item.id === dataUpdate.id) {
                item = dataUpdate
            }
            return item
        })
        this.setState({
            list: mapList
        })
        defaultList = mapList;

    }
    OnSearchList = (keyWord) => {
        const { list } = this.state
        const listSearch = defaultList.filter((item) => {
            return item.name.toLowerCase().includes(keyWord.toLowerCase())

        })
        console.log(listSearch)
        this.setState({

            list: listSearch
        })
    }
    onSorts = (keySort, valueSort) => {
        const { list } = this.state
        if (keySort === 'name') {
            list.sort((a, b) => {
                if (a.name.localeCompare(b.name) > 0) {
                    return valueSort
                } else {
                    return -valueSort
                }
            })
        }

        this.setState({
            keySort: keySort,
            valueSort: valueSort
        })
        console.log(this.state)

    }
    render() {
        return (
            <div className="container">

                <Title />
                <div className="row">'

              <div className='col-4'> <Search OnSearch={this.OnSearchList} /></div>
                    <div className='col-4'>  <Add hamAdd={() => {
                        this.setState({ isOpenAdd: !this.state.isOpenAdd })
                    }} /></div>

                    <div className='col-2'><Sort onSort={this.onSorts}
                        keySort={this.keySort}
                        valueSort={this.valueSort}
                    /></div>
                </div>


                <Table
                    onShopCar={(e) => { this.onShopCar(e) }}
                    history={this.props.history}
                    list={this.state.list}
                    remove={this.xlDelete}
                    hamUpdate={this.xUpdate}
                />
                {
                    this.state.isOpenAdd &&
                    <FromAdd listAdd={this.xlAdd} />

                }
                {this.state.isOpenUpdate &&
                    <Update dataUpdate={this.state.listUpdate}
                        listEd={this.state.list}
                        onUpdate={this.OnEventUpdate}
                    />
                }


            </div>
        )
    }
}


