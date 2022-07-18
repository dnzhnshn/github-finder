import React from 'react'
import Note from './Note';

const NoteList = ({notes,deleteNote}) => {
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col" style={{width:'20%'}}>Title</th>
      <th scope="col">Note</th>
      <th scope="col" style={{width:'5%'}}>Delete</th>
    </tr>
  </thead>
  <tbody>  
      {
        notes.map((note)=>  <Note key={note.title} title={note.title} text={note.text} deleteNote={deleteNote}></Note>
        )        
      }
  </tbody>
</table>
  )
}

export default NoteList
