import React, { useState } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
import './ApiContentResponse.css'

function ApiContentResponse() {
  const [data, setData] = useState({})

  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_NASA_API_KEY
      const url: string = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      const apiResponse = await axios.get(url)

      if (apiResponse.status === 200) {
        const apiData = apiResponse.data
        console.log(apiData)

        displayRequestedData(apiData)
      } else alert('Nasa seems to be having an issue with their server.')
    } catch (err) {
      console.log('Nasa seems to be having an issue with their server.')
    }
  }

  const displayRequestedData = (data: any) => {
    const date = document.querySelector('#date') as HTMLParagraphElement
    const title = document.querySelector('#title') as HTMLHeadingElement
    const copyright = document.querySelector('#copyright') as HTMLElement
    const information = document.querySelector(
      '#description'
    ) as HTMLParagraphElement
    const currentDate = new Date().toISOString().slice(0, 10) as string
    const mediaSection = document.querySelector(
      '#media-section'
    ) as HTMLParagraphElement
    const imageSection = `<a id="hdimg" href="" target="_blank" rel="noopener">
                            <div class="image-div"> 
                                <img id="image_of_the_day" src="" alt="image-by-nasa"> 
                            </div>
                          </a>`
    const videoSection = `<div class="video-div"> 
                            <iframe id="videoLink" src="" frameborder="0"></iframe>
                          </div>`

    // Display Title, Date, and Media Description
    title.innerHTML = data.title
    date.innerHTML = data.date
    copyright.innerHTML = data.copyright
  }

  fetchData()

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
