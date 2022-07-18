import React from 'react'

const Note = ({text,title,deleteNote}) => {
  return (
    <tr key={title}>
      <td>{title}</td>
      <td >{text}</td>
      <td><button type="button" onClick={()=>deleteNote(title)} className="btn btn-danger btn-sm">X</button></td>
    </tr>
  )
}

export default Note;