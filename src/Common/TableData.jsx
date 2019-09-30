import React, { Component } from 'react';
import TablePhanTrang from './TablePhanTrang';
import AddTableData from './AddTableData';
import UpdateData from './UpdateData';

export default class TableData extends Component {
    state = {
        person: [],
        totalData: 0,
        listData: {},
        slTrang: [10, 20, 30],
        user: { FristName: "", LastName: "", Gender: "", Street: "", Email: "", Phone: "" }

    }

    soLuongPhanTuTrongMotTrang=10
    currentPage = 1 // trang dang duoc chon
    componentDidMount() {
        
        this.loadData(this.currentPage, this.soLuongPhanTuTrongMotTrang)

    }




    // result: so luong phan tu trong 1 trang
    // page: so trang
    loadData = (page, result) => {
        fetch('http://18.223.100.67:8080/api/todos?result=' + result + '&sort=name.first,asc&page=' + page)
            .then(response => { return response.json() })
            .then(resData => {
                this.setState({
                    person: resData.content,
                    totalData: resData.total
                });
            })
    }

    // page: 1, 2 , 3 ,4 , 5
    OnPage = (page) => {
        this.currentPage = page + 1;
        this.loadData(this.currentPage, this.soLuongPhanTuTrongMotTrang)
    }

    /**
     * 
     */
    onEvenUpDate = () => {

    }
    OnListAdd = (user) => {
        // console.log(user)
        const savedUser = {
            gender: user.Gender,
            email: user.Email,
            phone: user.Phone,
            name: {
                title: "",
                first: user.FristName,
                last: user.LastName
            }

        }
        // doi data thanh model bod
        const rawResponse = fetch('http://18.223.100.67:8080/api/todo/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(savedUser)
        }).then(res => {
            // them thanh cong
            this.loadData()
            console.log(res.json());
            // load lai data

        })
    }

    onClickUpdate = (personRecord) => { //
        // console.log(personRecord)
        this.setState({
            listData: personRecord
        })
    }
    onSaveUpdateList = (listData) => {
        const id = listData.id
        console.log("listdata", listData)
        const savedUser = {
            gender: listData.Gender,
            email: listData.Email,
            phone: listData.Phone,
            name: {
                title: "",
                first: listData.FristName,
                last: listData.LastName
            }
        }
        const rawResponse = fetch(`http://18.223.100.67:8080/api/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(savedUser)

        }).then(res => {
            // them thanh cong
            this.loadData()
            console.log(res.json());
            // load lai data

        })
    }



    onDeleta = (personRecord) => {
        console.log(personRecord)
        const id = personRecord._id
        const rawResponse = fetch(`http://18.223.100.67:8080/api/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            // them thanh cong
            this.loadData()
            console.log(res.json());
            // load lai data
        })
    }
    onSave = (soLuongPhanTu) => {
        this.soLuongPhanTuTrongMotTrang = soLuongPhanTu ;
        this.currentPage = 1;
        this.loadData(this.currentPage, this.soLuongPhanTuTrongMotTrang)
        
        
    }

    renderDS = () => { // tao dropdown phan trang 
        const { slTrang } = this.state
        const itemDS = slTrang.map((soLuongPhanTu, index) => {
            return (
                <button type="button" class="dropdown-item" data-toggle="modal" onClick={() => this.onSave(soLuongPhanTu)}>{soLuongPhanTu}</button>
            )
        })
        return itemDS
    }
    render() {
        return (
            <div className='container'>
                <AddTableData onAdd={this.OnListAdd} />
                {/* truyen state vua luu vo update data  */}
                <UpdateData dataUpdate={this.state.listData}
                    onSaveUpdate={(listEdit) => {
                        this.onSaveUpdateList(listEdit)
                    }}

                />

                <div className='container'><div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.renderDS()}
                    </div>
                </div></div>


                <table class="table table-striped" style={{ marginTop: 50 }}>

                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Frist Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Street</th>
                            <th scope="col"> Email </th>
                            <th scope="col"> Phone </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.person.map((personRecord, index) => {
                            return (
                                <tr>
                                    <th>{10 * (this.currentPage - 1) + 1 + index}</th>
                                    <th>{personRecord.name.first}</th>
                                    <th>{personRecord.name.last}</th>
                                    <th>{personRecord.gender}</th>
                                    <th>{personRecord.location ? personRecord.location['street'] : ''}</th>
                                    <th>{personRecord.email}</th>
                                    <th>{personRecord.phone}</th>
                                    <th>
                                        {/* <button type="button" class="btn btn-success">Edit</button> */}
                                        <button type="button"
                                            onClick={() => {
                                                this.onClickUpdate(personRecord)
                                            }}

                                            class="btn btn-success" data-toggle="modal" data-target="#exampleModalData" data-whatever="@mdo">Edit</button>
                                        <button type="button" class="btn btn-danger" onClick={() => this.onDeleta(personRecord)}>Move</button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <TablePhanTrang
                    onClick={(index) => this.OnPage(index)}//truyen ra
                    onTotal={this.state.totalData / this.soLuongPhanTuTrongMotTrang}//truyen vo
                />
            </div>

        )
    }
}






