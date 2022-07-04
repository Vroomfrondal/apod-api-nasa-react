import React, { useEffect } from 'react'
import dotenv from 'dotenv'
import { fetchData } from '../api/fetchAndDisplayNasaData'
import './ApiContentResponse.css'

function ApiContentResponse() {
  // Default API call onload
  useEffect(() => {
    const apiKey = process.env.REACT_APP_NASA_API_KEY!
    const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`!
    fetchData(baseUrl)
  }, [])

  return (
    <>
      <section className="media-details-flex-wrapper">
        <h2 className="media-title" id="media-title">
          Loading...
        </h2>
        <p className="media-date" id="media-date"></p>
        <p className="credits-wrapper" id="credits-wrapper">
          Media courtsey:
        </p>
        <p id="media-copyright"></p>
      </section>

      <section className="media-section-wrapper" id="media-section">
        {/* <!-- Media Response from API dynamically sets here --> */}
      </section>

      <div className="description-wrapper">
        <p className="media-description" id="media-description"></p>
      </div>
    </>
  )
}

export default ApiContentResponse
