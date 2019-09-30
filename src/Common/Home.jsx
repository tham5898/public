import React from 'react';
import cartStorage from '../storage/cartStorage';
import logo2 from './../Img/x11.jpg';
import logo3 from './../Img/x12.jpg';
import logo4 from './../Img/x3.jpg';
import logo5 from './../Img/x4.jpg';
import Card from './Card';
export default class Home extends React.Component {

    state = {
        list: [
            { id: 1, name: "Product", img: logo4, price: 100000, sale: 80000 },
            { id: 2, name: "San Pham", img: logo2, price: 100000, sale: 80000 },
            { id: 3, name: "San Duct", img: logo3, price: 100000, sale: 80000 },
            { id: 4, name: "Pro Pham", img: logo5, price: 100000, sale: 80000 }
        ]

    }
    onShopCart = (cartId) => {
        const { list } = this.state
        const sanPham = list.find(value => {
            return value.id === cartId
        })
        if (sanPham) {
            const listCart = JSON.parse(cartStorage.get() )|| []
            const cart = listCart.find(value => {
                return value.id === cartId
            })
            console.log(cart);
            if (cart) {
                //console.log(cart);
                const item = listCart.map(value => {
                    if (value.id === cartId) {
                        value.soluong += 1
                    }
                    return value
                })
                cartStorage.set(item)
            }else{
                const sp = {
                    id: sanPham.id,
                    name: sanPham.name,
                    img:sanPham.img,
                    price:sanPham.price,
                    sale: sanPham.sale,
                    soluong: 1

                } 
                listCart.push(sp)
                cartStorage.set(listCart)

                
            }
            this.props.history.push('./ShopCart')
            
        }

    }
    renderCard = () => {
        return this.state.list.map((value, index) => {
            return (<div className="col-sm-6 col-md-3">
                <Card onCart={this.onShopCart}
                 history={this.props.history}
                card={this.state.list[index]} />
            </div>)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <p>New Product</p>
                    {/* <div class="card-deck"> */}
                    <div className="row">
                        {this.renderCard()}
                    </div>
                    {/* </div> */}
                </div>
            </React.Fragment>
        )
    }
}
