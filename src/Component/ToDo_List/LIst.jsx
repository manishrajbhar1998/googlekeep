import React from 'react';

function List(props){
    return(
        <div className='items'>
            <button onClick={()=>{
                props.onSelect(props.id)
            }} className="delete">x</button>
            <li>{props.text}</li>
        </div>
     )
    
}

export default List;