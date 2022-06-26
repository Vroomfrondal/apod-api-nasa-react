import React, { useState } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
import './ApiContentResponse.css'

function ApiContentResponse() {
  //prettier-ignore
  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      const apiResponse = await axios.get(url)

      if (apiResponse.status === 200) {
        const apiData = apiResponse.data
        console.log(apiData)

        displayRequestedData(apiData)
      } else throw new Error('Nasa seems to be having an issue with their server.')
    } catch (err) {
      console.log('Nasa seems to be having an issue with their server.')
    }
  }

  //prettier-ignore
  const displayRequestedData = (data: any) => {
    const dateEl = document.querySelector('#date') as HTMLParagraphElement
    const titleEl = document.querySelector('#title') as HTMLHeadingElement
    const copyrightEl = document.querySelector('#copyright') as HTMLElement
    const photoExplanationEl = document.querySelector('#description') as HTMLParagraphElement
    const todaysDate = new Date().toISOString().slice(0, 10) as string
    const mediaSectionEl = document.querySelector('#media-section') as HTMLParagraphElement
    const imageSectionEl = `<a id="img-new-tab" href="" target="_blank" rel="noopener">
                              <div class="image-div"> 
                                  <img id="image_of_the_day" src="" alt="image-by-nasa"> 
                              </div>
                            </a>` as any
    const videoSectionEl = `<div class="video-div"> 
                              <iframe id="videoLink" src="" frameborder="0"></iframe>
                            </div>` as any

    // Title, Date, Media Copyright, Photo Explanation
    titleEl.innerHTML = data.title
    dateEl.innerHTML = data.date
    copyrightEl.innerHTML = data.copyright
    photoExplanationEl.innerHTML = data.explanation

    // Dynamically supply HTML element based on video or img API response
    if (data.media_type === 'video') {
      mediaSectionEl.innerHTML = videoSectionEl
      videoSectionEl!.src = data.url
    } else {
      mediaSectionEl.innerHTML = imageSectionEl
      document.querySelector<HTMLAnchorElement>('#img-new-tab')!.href =
        data.hdurl
      document.querySelector<HTMLImageElement>('#image_of_the_day')!.src =
        data.url
    }
  }

  fetchData()

  return (
    <>
      <section className="media-details-flex-wrapper">
        <h2 id="title">Loading...</h2>
        <p id="date">date</p>
        <p id="credits-wrapper">Media courtsey:</p>
        <p id="copyright">NASA</p>
      </section>

      <section className="media" id="media-section">
        {/* <!-- Media Response from API goes here --> */}
      </section>

      <div className="description-div">
        <p id="description"></p>
      </div>
    </>
  )
}

export default ApiContentResponse
