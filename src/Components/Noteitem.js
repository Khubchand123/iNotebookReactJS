import React from "react";

const Noteitem = (props) =>{
    const {note} = props;
    return(
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-2" style={{color:"red"}}></i>
                    <i className="fa-solid fa-file-pen mx-2" style={{color:"blue"}}></i>
                </div>
                
            </div>
        </div>
    )
}
export default Noteitem;