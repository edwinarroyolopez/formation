import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

function Modal() {
    const node = (
        <div className="modal-container">
            <div className="modal">
                <h2>Modal</h2>
            </div>
        </div>
    )

    return ReactDOM.createPortal(node, document.getElementById('modal'))
}

export default Modal