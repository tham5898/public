import React, { Component } from 'react'

export default class TablePhanTrang extends Component {
    state = {
        list: this.props.onTotal,
        save: 0,
        listUpdate: {}
    }

    onClick = (i) => {
        console.log(i)
        this.props.onClick(i)
        this.setState({
            save: i //thay doi index

        })


    }

    // xuly pre page va next page
    // tep: 1:next 1 page, -1: pre 1 page
    getRender = (tep) => {
        const { save } = this.state
        const { list } = this.state
      
        const listLength = list.length
        const itemTep = save + tep
        if (itemTep >= listLength) {
            console.log(tep)
            return 0
        } if (itemTep < 0) {
            return listLength - 1
        }
        return itemTep


    }

    OnPre = () => { // tro ve trang truoc
        const page = this.getRender(-1)
        this.props.onClick(page)
        this.setState({
            save: page
        })

    }
    onNext = () => {
        const pageNext = this.getRender(1)
        this.props.onClick(pageNext)
        this.setState({
            save: pageNext
        })
    }
    renderItem = () => {
        const { list } = this.state
        const total = this.props.onTotal;
        console.log(list);
        const listItem=[];
        for(let i=0; i<total; i++) {
            if(i === this.state.save){
                listItem.push( <li class="page-item active"><span class="page-link"
                 onClick={() => this.onClick(i)} >{i + 1}</span></li>)  
            } 
            else{
            listItem.push(   <li class="page-item "><span class="page-link" onClick={() => this.onClick(i)} >{i + 1}</span></li>)
            }
          
        }

        return listItem
    
    }

    render() {
        return (
            <div>
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item">
                            <span class="page-link" onClick={this.OnPre}>Previous</span>
                        </li>
                        {this.renderItem()}

                        <li class="page-item">
                            <span class="page-link" onClick={this.onNext} >Next</span>
                        </li>
                    </ul>


                </nav>


            </div>
        )
    }
}
