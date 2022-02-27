import React from 'react';
import Comp from './Comp';

function Cardlist({robots})
{
    return(
       <div>
           {robots.map( rob => {return( <Comp name={rob.name} email={rob.email} />)})}
       </div>
    );
}

export default Cardlist;