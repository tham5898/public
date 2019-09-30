import React, { PureComponent } from 'react';

export default class Add extends PureComponent {
  
    render() {

        return (
            <button type="button" onClick={()=>{
                this.props.hamAdd()
            }} class="btn btn-outline-success">Add</button>
        )
    }
}
