import React, { Component } from 'react'

export default class UpdateData extends Component {

    state = {
        // khi setstaeat vao user thif _getUserFromProps 
        user: {
            FristName: '',
            LastName: '',
            Gender: '',
            Street: '',
            Email: '',
            Phone: ''
        }
    }

    _getUserFromProps(props) {

        if (props.dataUpdate && props.dataUpdate.name) { // neu ma props.dataUpdate
            // tu tra ve doi tuong da gan data
            const userUpdate = {
                FristName: props.dataUpdate.name.first,
                LastName: props.dataUpdate.name.last,
                Gender: props.dataUpdate.gender,
                Street: this._getStreet(props),
                Email: props.dataUpdate.email,
                Phone: props.dataUpdate.phone,
                id: props.dataUpdate._id
            }

            return userUpdate


        }
        return null;
    }

    _getStreet(props) {
        const location = props.dataUpdate.location;
        let street = "";
        if (location) {
            street = location.street;
        }
        return street;
    }

    componentDidMount() {
        console.log(this.state.dataUpdate);

    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const user = this._getUserFromProps(nextProps)
        console.log("=======")
        console.log(nextProps)

        if (user && user.Email) {
            //user ==== _getUserFromProps
            this.setState({ user: this._getUserFromProps(nextProps) })
        }

        console.log(user)
        console.log("=========")
    }
    handleChange = (e) => {
        let luuUser = {
            ...this.state.user,
            [e.target.name]: e.target.value
        }

        this.setState({ user: luuUser })
    }
    //gọi hàm update
    onClickUpdate = () => {
        const listEdit = {
            FristName: this.state.user.FristName,
            LastName: this.state.user.LastName,
            Gender: this.state.user.Gender,
            Street: this.state.user.Street,
            Email: this.state.user.Email,
            Phone: this.state.user.Phone,
            id: this.state.user.id
        }
        this.props.onSaveUpdate(listEdit)
    }
    render() {
        /// kiem tra data co hay ko
        console.log(this.state.user);
        return (
            <div className='container'>
                <div class="modal fade" id="exampleModalData" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalData">Edit data</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Frist Name:</label>
                                        <input value={this.state.user.FristName} type="text" name="FristName" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>

                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Last Name:</label>
                                        <input value={this.state.user.LastName} type="text" name="LastName" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Gender:</label>
                                        <input value={this.state.user.Gender} type="text" name="Gender" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Street:</label>
                                        <input value={this.state.user.Street} type="text" name="Street" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Email:</label>
                                        <input value={this.state.user.Email} type="text" name="Email" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>
                                    <div class='form-group'>
                                        <label for="recipient-name" class="col-form-label">Phone:</label>
                                        <input value={this.state.user.Phone} type="number" name="Phone" class="form-control" id="recipient-name" onChange={this.handleChange}></input>
                                    </div>

                                </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* tao ham onClickUpdate  */}
                                <button type="button" class="btn btn-primary" onClick={this.onClickUpdate}>

                                    Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
