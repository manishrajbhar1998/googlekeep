import React,{useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


function NewList(props){
    console.log(props.val)

    const [line,setLine] = useState(false);
    
    function lineThrough(){
        setLine(true);
    }

    return(
        <>
            <span onClick={lineThrough}><DeleteIcon/></span>
            <li style={{textDecoration : line ? 'line-through' : 'none'}}>{props.val}</li><br/>
        </>
    )
}

export default NewList;