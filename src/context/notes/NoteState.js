import React,{useState} from 'react'
import noteContext  from './noteContext'

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "63ea6b67417823b09ffde148",
          "user": "63ea6b24417823b09ffde145",
          "title": "khubchand1",
          "description": "My name is1",
          "tag": "person1",
          "date": "2023-02-13T16:55:03.809Z",
          "__v": 0
        },
        {
          "_id": "63ea6bb9417823b09ffde14b",
          "user": "63ea6b24417823b09ffde145",
          "title": "khubchand",
          "description": "My name is",
          "tag": "person",
          "date": "2023-02-13T16:56:25.099Z",
          "__v": 0
        }
      ]
    const [notes,serNotes] = useState(notesInitial);
    return(
        <noteContext.Provider value={{notes,serNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;