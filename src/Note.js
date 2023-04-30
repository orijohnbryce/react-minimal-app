import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

function Note({ note }) {
    
    const [showModal, setShowModal ] = useState(false)

    return (<>
        <div style={{
            background: 'linear-gradient(to right, green, yellow)', border: 'dashed yellow 2px', maxWidth: '600px',            
        }}>            
            <span onClick={() => setShowModal(true)}> { note.id} - {note.title} </span>   
            <p style={{textAlign:'right'}}> {note.status }</p>
        </div>

        <Modal show={showModal} onHide={()=>{setShowModal(false)}}>
            <Modal.Header> 
                <h4> { note.title }</h4>
            </Modal.Header>
            <Modal.Body>
                <p> {note.content}</p>
                
            </Modal.Body>
            <Modal.Footer>
                <p> { note.status }</p>
            </Modal.Footer>
        </Modal>

    </>)
}

export default Note