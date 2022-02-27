import React from 'react';

class Searchbox extends React.Component{
    render(){
        return(
            <div>
                <input type='text' placeholder='Search Robots' onChange={this.props.srch}></input>
            </div>
        )
    }
}

export default Searchbox;