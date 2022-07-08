import React from 'react'
import './Modal.css'

function Modal({ open, children }: any) {
  if (!open) return null

  return (
    <>
      <div>{children}</div>
      <div className="test">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        nostrum magnam praesentium quam natus expedita fugit exercitationem.
        Omnis dolorem voluptatem fugit quidem cumque, porro perspiciatis
        provident eveniet? Veniam, autem odit.
      </div>
    </>
  )
}

export { Modal }

export default Modal
