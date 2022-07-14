import React from 'react'
import './Modal.css'

function Modal({ open, onClose, children }: any) {
  if (!open) return null

  return (
    <>
      <div className="blackout-background-modal-container"></div>
      <div className="modal-container">
        <button onClick={onClose} className="modal-exit-button">
          X
        </button>
        <p className="modal-description">{children}</p>
      </div>
    </>
  )
}

export { Modal }
