import React from 'react';

export default class Search extends React.Component {
    state={
        keyWord:'',

    }
    OnChange=(e)=>{
        this.setState({
            keyWord: e.target.value
        })

    }
    OnSearch=()=>{
        this.props.OnSearch(this.state.keyWord)
    }
    render() {
        return (

            <div>
                 <input type="text" name="keyWord" placeholder="Enter search" value={this.state.keyWord} onChange={this.OnChange}/>
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.OnSearch}>Search</button>
            </div>


                )
            }
        }
