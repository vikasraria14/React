import React from 'react';
import logo from './logo.svg';
import 'tachyons';
import {robots} from './robots.js';

class Comp extends React.Component{
    
    render(){
      return(
          
       // {robots.map( rob =><div className=' tc bg-light-green br3 ma3 pa3 grow dib'>
           
        //    <img src='https://robohash.org/asdfghj' alt='im'></img>
         //   <h2>{rob.name}</h2>
         //   <h3>{rob.email}</h3>
         //   </div>
       // )}

       <div className='tc bg-light-blue br3 ma3 pa3 dib'>
            <img src={`https://robohash.org/${this.props.name}asdfghj`}></img>
            <h2>{this.props.name}</h2>
            <h3>{this.props.email}</h3>
       </div>

      )
}
}

export default Comp;



