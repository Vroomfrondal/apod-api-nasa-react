import React from 'react'
import axios, { AxiosRequestHeaders } from 'axios'
import dotenv from 'dotenv'
import './ApiContentResponse.css'

function ApiContentResponse() {
  try {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_NASA_API_KEY
      const url: string = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      const apiResponse: AxiosRequestHeaders = await axios.get(url)

      // Display or do something w/ data
      console.log(apiResponse)
    }
    fetchData()
  } catch (err: any) {
    throw new Error(err)
  }

  return (
    <>
      <section>
        <h2 id="title"></h2>
        <p id="date"></p>
        <p id="credits-wrapper">Media courtsey:</p>
        <p id="copyright"></p>
      </section>

      <section id="media-section">
        {/* <!-- Response from API goes here --> */}
      </section>

      <div className="description-div">
        <p id="description"></p>
      </div>
    </>
  )
}

export default ApiContentResponse
