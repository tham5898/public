import React, { PureComponent } from 'react';
import Counter from './Counter';
import cartStorage from '../storage/cartStorage';
import Total from './Total';

export default class ShopCart extends PureComponent {

    state = {
        listProduct: JSON.parse(localStorage.getItem('sanPham')) || []

    }
    Delete=(listProduct, index)=>{
      listProduct.splice(index,1)
        return listProduct;
    }
    OnCounter = (id, isTang) => {
        const { listProduct } = this.state
        // const itemCounter = listProduct.map((value, index) => {
        //     if (value.id === id) {
        //         if (isTang) {
        //             value.soluong += 1
        //         }
        //         else if (value.soluong > 0) {
        //             value.soluong -= 1
        //         }
        //         else if(value.soluong === 0){
        //             this.Delete(listProduct, index)
        //         }
        //     }
        //     return value
        // })

        for(let index = 0; index < listProduct.length; ++ index) {
            if(listProduct[index].id === id) {
                if (isTang) {
                    listProduct[index].soluong += 1
                }
                else if (listProduct[index].soluong > 0) {
                    listProduct[index].soluong -= 1
                    if(listProduct[index].soluong === 0){
                        this.Delete(listProduct, index)
                    }
                }
            }
        }
        cartStorage.set(listProduct)
        this.setState({ listProduct: [...listProduct] })

    }
    renderCart = () => {
        const a = this.state.listProduct.map((value, index) => {
            return (
                <tr>
                    <td> <img style={{width: 'auto', height: 200 }} src={value.img} alt="logo1" /></td>
                    <td>{value.name}</td>
                    <td>{value.price}</td>
                    <td>
                        <Counter id={value.id} value={value.soluong} onChange={(id, isTang) => { this.OnCounter(id, isTang) }} />
                    </td>
                    <td> <Total Total={value.price * value.soluong} /></td>
                   
                </tr>
                
            )
        })

        return a;

    }



    total() {
        let totalPrice = 0;
        this.state.listProduct.forEach((value) => {
            totalPrice += value.price * value.soluong
        })


        return (
            <tr>
            <td> </td>
            <td></td>
            <td></td>
            <td>
              Tổng  
            </td>
            <td> <span>{totalPrice}</span> </td>
           
        </tr>

         
        )
    }

    render() {
        console.log(this.state.listProduct)
        return (
            <div className="container">
                <table class="table table-striped " style={{ marginTop: 50 }}>
                    <thead>
                        <tr>
                            <th scope="col">Thông tin sản phẩm</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Tổng tiền</th>
                        </tr>
                    </thead>

                    {this.renderCart()}
                    {this.total()}
                </table>

            </div>
        )
    }
}
