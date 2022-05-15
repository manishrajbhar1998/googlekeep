import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import './createNote.css';


const CreateNote = (props) => {

    const [note,setNote] = useState({
        title:'',
        content:''
    });

    const inputEvent = (e) =>{
        e.preventDefault();

        const {name,value} = e.target;

        setNote((oldNote)=>{
            return {
                ...oldNote,
                [name] : value

            };
        });

    }

    const addEvent = (e) =>{
        props.passNote(note);

        setNote({
            title:'',
            content:''
        })
    }



    return(
        <>
            <div className="main_note">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                }}>
                    <input type="text" placeholder='Title' name='title' value={note.title} onChange={inputEvent} /><br/>
                    <textarea placeholder='Wrtie a note...' name='content' value={note.content} onChange={inputEvent} ></textarea><br/>
                    <button className='add_btn' onClick={addEvent}>
                        <AddIcon/>
                    </button>
                </form>
            </div>
        </>
    );
}

export default CreateNote;