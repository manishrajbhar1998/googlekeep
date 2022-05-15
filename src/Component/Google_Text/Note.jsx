import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './note.css';


const Note = (props) => {

    const deleteNote = (e) => {
        e.preventDefault();
        props.deleteItem(props.id)
    }
    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className='del_btn' onClick={deleteNote}><DeleteIcon/></button>
            </div>
        </>
    );
}

export default Note;