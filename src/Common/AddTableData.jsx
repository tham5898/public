import React, { Component } from 'react'

export default class AddTableData extends Component {
    state = {
        user: {
            FristName: "",
            LastName: "",
            Gender: "",
            Street: "",
            Email: "",
            Phone: ""
        }

    }
    handleChange = (e) => {
        this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } })
    }
    onClickAdd = () => {
        this.props.onAdd(this.state.user)
    }
    render() {
        return (
            <div className='container'>

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add data</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModal">Add Data</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Frist Name:</label>
                                        <input type="text" name="FristName" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>

                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Last Name:</label>
                                        <input type="text" name="LastName" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Gender:</label>
                                        <input type="text" name="Gender" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Street:</label>
                                        <input type="text" name="Street" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Email:</label>
                                        <input type="text" name="Email" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Phone:</label>
                                        <input type="number" name="Phone" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>

                                </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.onClickAdd}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
