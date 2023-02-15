import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () =>{
    const a = useContext(NoteContext)
    return(
        <div>This is About {a.class}</div>
    )
}
export default About