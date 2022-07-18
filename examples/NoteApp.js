import React, { useState,useEffect,useReducer } from 'react'
import ReactDOM from 'react-dom'
import css from '../src/styles/main.scss'
import NoteList from './component/NoteList';
import Note from './component/Note';
import Alert from './component/Alert';

const NoteApp = () => {

  const noteReducer =(state,action)=>{
    switch (action.type) {
      case "POP_NOTES":
          return action.notes
        case "ADD_NOTES":
           return [
             ...state,
          {title:action.title,text:action.text},
          ]
          case "REMOVE_NOTE":
            return state.filter((note)=>note.title!==action.title)
      default:
        return state;
    }
  }

 
  const [notes,dispatch]=useReducer(noteReducer,[])
  //const [notes,setNote]  =useState([]);
  const [title,setTitle] =useState('');
  const [text,setText]   =useState('');
   
  useEffect(()=>{
    const notesData=JSON.parse(localStorage.getItem('notes'));
    if(notesData)
       dispatch({type:"POP_NOTES",notes:notesData})
  },[])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
  },[notes])


  const addNote =(e)=>{
    e.preventDefault();
    if(title && text){ 
      // setNote([
      //   ...notes,
      // {title,text},
      // ])
      dispatch({type:"ADD_NOTES",title,text})
      setText('');
      setTitle('');
    }   
  }

  const deleteNote=(title)=>{
    // setNote(notes.filter(note=>note.title!==title));
    dispatch({type:"REMOVE_NOTE",title})
  }
  return (
    <div className="container p-5">
          {
            notes.length >0 ?
              <NoteList notes={notes} deleteNote={deleteNote}></NoteList> : <Alert></Alert>                      
          }
     <form onSubmit={addNote}>
          <div className="form-group">
              <input type="text" value={title}  onChange={(e)=>{ setTitle(e.target.value)}} className="form-control mb-2" ></input>
            </div> 
            <div className="form-group">
              <textarea type="text" value={text} onChange={(e)=>{setText(e.target.value)}}className="form-control"></textarea>
            </div> 
        <button className="btn btn-primary btn-block mt-2" type="submit">Add Note</button>      
      </form>
    </div>  
  )
}

ReactDOM.render(<NoteApp></NoteApp>,document.getElementById('root'));


export default NoteApp;