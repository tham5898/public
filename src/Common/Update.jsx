import React from 'react';

export default class Update extends React.Component {
    state = {
        id: this.props.dataUpdate.id,
        name: this.props.dataUpdate.name,
        img: this.props.dataUpdate.img,
        price: this.props.dataUpdate.price,
        listAdd: { id: 0, name: "", img: "", price: "", action: "" },
        

    }
    
    edit = () => {
        const listEdit = {
            id: this.state.id,
            name: this.state.name,
            img: this.state.img,
            price: this.state.price
        }
        this.props.onUpdate(listEdit)
    
    }
    renderUpdate = () => {
        this.props.listUpdate()
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <div className="">
                <label for="inputEmail3" className="col-sm-2 col-form-label">id</label>
                <div>
                    <input type="text" name="id" value={this.state.id} onChange={this.handleChange} />
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">img</label>
                <div>
                    <input type="text" name="img" value={this.state.img} onChange={this.handleChange} />
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Price</label>
                <div>
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                </div>
                <button type="button" class="btn btn-outline-success" onClick={() => {
                    this.edit()

                }}>Ok</button>
                <button type="button" class="btn btn-outline-danger">Cancel</button>

            </div>
        )
    }
}
