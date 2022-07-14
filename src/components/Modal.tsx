import React from 'react'
import './Modal.css'

function Modal({ open, onClose, hdImg, image, description }: any) {
  if (!open) return null

  // TODO: image prop can possibly be image or video. Set accoringly
  // ! 2013-08-05 for a video date

  return (
    <>
      <div className="blackout-background-modal-container"></div>
      <div className="modal-flex-container">
        <section className="hide-modal-button-flex-container">
          <div onClick={onClose} className="hide-modal-button">
            <a href="#"></a>
          </div>
        </section>

        <section className="modal-media-container">
          <img
            onClick={() => {
              window.open(hdImg)
            }}
            className="modal-image"
            src={image}
          ></img>
          <p className="modal-description">{description}</p>
        </section>
      </div>
    </>
  )
}

export { Modal }
