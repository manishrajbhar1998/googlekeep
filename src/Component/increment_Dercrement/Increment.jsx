import React,{useState} from 'react';
import './increment.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

function Increment(){

    const [data , setData] = useState(0);

    function increment(){
        setData(data + 1);
    }
    function decrement(){
        if(data >= 1){
            setData(data - 1);
        }else{
            alert("Sorry value Excede");
        }
    }
    return(
        <>
            <div className="container">
                <h3 className='title'>Increment and Decrement</h3>
                <p className='output'>{data}</p><br/>
                <div className="btn">
                <Button onClick={increment} variant="contained" className='btn-green'><AddIcon/></Button>
                <Button onClick={decrement} variant="contained" className='btn-red'><DeleteForeverIcon/></Button>
                </div>
                
            </div>
        </>
    )
}

export default Increment;