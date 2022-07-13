import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import './ApiContentResponse.css'

function ApiContentResponse(props: any) {
  // Modal
  const [openStatus, setOpenStatus] = useState(false)

  return (
    <>
      <main className="body-container">
        <section className="media-details-flex-container">
          <h2 className="media-title" id="media-title"></h2>
          <p className="media-date" id="media-date"></p>
          <p className="credits-wrapper" id="credits-wrapper">
            Media courtsey:
          </p>
          <p id="media-copyright"></p>
        </section>

        <section className="horizontal-body-flex-container">
          <div
            className="media-section-wrapper"
            id="media-section"
            onClick={() => {
              setOpenStatus(true)
            }}
          >
            {/*   <!-- Media Response from API dynamically sets here --> */}
          </div>

          <Modal
            open={openStatus}
            onClose={() => {
              setOpenStatus(false)
            }}
          >
            {props.data.explanation}
          </Modal>

          <div className="description-wrapper">
            <p className="description" id="media-description"></p>
          </div>
        </section>
      </main>
    </>
  )
}

export default ApiContentResponse
