import React, { PureComponent } from 'react';

export default class FromAdd extends PureComponent {
    state = {
        Id: 1,
        name: "SamSum",
        img: "",
        price: "100000",
    }
    renderAdd = () => {
        this.props.listAdd({ ...this.state })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Id</label>
                <div>
                    <input type="text" name="Id" placeholder="Enter Id" onChange={this.handleChange} />
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div>
                    <input type="text" name="name" placeholder="Enter name" onChange={this.handleChange} />
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">img</label>
                <div>
                    <input type="text" name="img" placeholder="Enter img" onChange={this.handleChange} />
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Price</label>
                <div>
                    <input type="text" name="price" placeholder="Enter price" onChange={this.handleChange} />
                </div>
                <button type="button" class="btn btn-outline-success" onClick={(l) => {
                    this.renderAdd(l)
                }}>Ok</button>
                <button type="button" class="btn btn-outline-danger">Cancel</button>

            </div>

        )
    }
}
