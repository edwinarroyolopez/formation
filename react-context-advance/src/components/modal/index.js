import './style.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../../context/appContext'

class Modal extends Component {
    render(){
        const { toggleModal } = this.context

        const node = (
            <div 
                className="modal-container"
                onClick={(e) => {
                    if(e.target.className=='modal-container'){
                        toggleModal()
                    }
                }}    
            >
                <div className="modal">
                    <h2>Modal</h2>
                </div>
            </div>
        )
    
        return ReactDOM.createPortal(node, document.getElementById('modal'))
    }
}

Modal.contextType = AppContext


export default Modal