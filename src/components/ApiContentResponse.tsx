import React, { useEffect, useState } from 'react'
import dotenv from 'dotenv'
import { fetchData } from '../api/fetchAndDisplayNasaData'
import { Modal } from '../components/Modal'
import './ApiContentResponse.css'

function ApiContentResponse() {
  // Modal
  const [openStatus, setOpenStatus] = useState(false)

  useEffect(() => {
    const fetchToday = async () => {
      const apiKey = process.env.REACT_APP_NASA_API_KEY!
      const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`!
      fetchData(baseUrl)
    }
    fetchToday().catch(console.error)
  }, [])

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
            Fancy Modal
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
