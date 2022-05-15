import React,{useState} from 'react';
import './ToDo.css';
import List from './LIst';

const ToDo = () =>{

    const [item,setItem] = useState();
    const [list,setList] = useState([]);

    function getTime(e){
        setItem(e.target.value);
    }
    function add(e){
        e.preventDefault();
        setList((oldList)=>{
            return [...oldList,item]
        });
        setItem("");
    }

    function del(id){
        alert("deleted");
        setList((oldList) =>{
            return oldList.filter((arrEle,index)=>{
                return index !== id;
            })
        })
    }
   
    return(
        <>
            <div className="container">
                <h3>To Do List</h3>
                <input type="text" placeholder='Add a Item' value={item} onChange={getTime}/>
                <button className='add' onClick={add}>+</button>

                <ol>
                    {
                        list.map((itemVal,index)=>{
                            return<List key={index} id={index} text={itemVal} onSelect={del}/>
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default ToDo;