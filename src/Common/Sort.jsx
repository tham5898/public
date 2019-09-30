import React, { PureComponent } from 'react';

export default class Sort extends PureComponent {
// state={
//     sort:{
//         key: "name",
//         value: 1
//     }
componentWillReceiveProps(nextProps){
    console.log(nextProps)
}

    onClicks=(keySort, valueSort)=>{
        console.log(keySort, valueSort)
        this.props.onSort(keySort,valueSort)
       
    

    }
    render() {
        return (
            <React.Fragment>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div class="dropdown-item" onClick={()=>{this.onClicks('name',1)}}>A-Z</div>
                        <div class="dropdown-item" onClick={()=>{this.onClicks('name',-1)}}>Z-A</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
