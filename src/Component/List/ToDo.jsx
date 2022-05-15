import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewList from './NewList';
import './todo.css';

const ToDo = () => {

    const [item, setItem] = useState();
    const [list, setList] = useState([]);
    function itemFun(e){
        setItem(e.target.value);
    }
    function add(e){
        e.preventDefault();
        setList((oldList)=>{
            return [...oldList,item]
        });
        setItem("");
    }

    return(
        <>
            <div className="container">
                <h1>ToDo List</h1>
                <input type="text" placeholder='Add an Item' value={item} onChange={itemFun}/>
                <Button variant="contained" color="success" className="add-btn" onClick={add}><AddIcon/></Button><br/>
                <ol>
                    <li>
                        {
                            list.map((val)=>{
                                return <NewList val={val}/>
                            })
                        }
                    </li>
                </ol>

            </div>
        </>
    );

}

export default ToDo;