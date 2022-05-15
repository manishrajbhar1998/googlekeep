import React,{useState} from "react";
import Header from './Component/Google_Text/Header';
import Footer from './Component/Google_Text/Footer';
import CreateNote from './Component/Google_Text/CreateNote';
import Note from './Component/Google_Text/Note';
import './App.css';

let App = () =>{

    const [addItem,setAddItem] = useState([]);

    const addNote = (note) => {
        alert('clicked');
        setAddItem((oldItem)=>{
            return [...oldItem,note]
        })
    }

    const onDelete = (id) => {

        setAddItem((oldData)=>
            oldData.filter((currEle,index)=>{
                return index !== id;
            })
        )
    }


    return(
        <div>
           <Header/>
           <CreateNote passNote={addNote}/>
           <div className="mapping"> 
           {
               addItem.map((val,index)=>{
                    return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
                })
           }
           </div>
           
           {/* <Footer/> */}
        </div>
    );        
}
export default App;