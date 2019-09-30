import React from 'react';

export default class Table extends React.Component {
  state = {
    id: 1,
    name: "SamSum",
    img: "",
    price: "100000",
    action: "",
    isShowUpdate: false,
    listUpdate: {},


  }
  onShopCart=()=>{
    this.props.onShopCart1(this.state.value)
  }

  onCart = (id) => {

    this.props.onShopCar(id + 1)
  }
  updateFrom = () => {
    this.setState({
      isShowUpdate: true
    })
  }
  renderDelete = (i) => {
    this.props.remove(i);
  }
  renderTable = () => {
    return this.props.list.map((value, index) => {
      return (<tr>
        <th>{index + 1}</th>
        <th>{value.id}</th>
        <th>{value.name}</th>
        <th>{<img style={{ width: 150, height: 'auto' }} src={value.img} alt="logo1"></img>}</th>

        <th>{value.price}</th>

        <th><button type="button" class="btn btn-outline-danger" onClick={(i) => {
          this.renderDelete(index)
        }}>Delete</button>
          <button type="button" class="btn btn-outline-success" onClick={() => {
            this.props.hamUpdate(value)
            this.updateFrom()


          }}>Update</button>
          <button type="button" class="btn btn-warning" onClick={(e) => { this.onCart(index) } }>Cart</button>
        </th>


      </tr>)
    })
  }
  render() {
    return (
      <table class="table table-striped table-dark" style={{ marginTop: 50 }}>
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Img</th>
            <th scope="col">Price</th>
            <th scope="col"> Action </th>

          </tr>
        </thead>
        {this.renderTable()}


      </table>
    )
  }
}
