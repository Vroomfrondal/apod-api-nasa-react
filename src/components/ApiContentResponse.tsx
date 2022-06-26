import React, { useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
import './ApiContentResponse.css'

function ApiContentResponse() {
  useEffect(() => {
    fetchData()
  }, [])

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
    const todaysDate = new Date().toISOString().slice(0, 10) as string
    const dateEl = document.querySelector('#media-date') as HTMLParagraphElement
    const titleEl = document.querySelector('#media-title') as HTMLHeadingElement
    const copyrightEl = document.querySelector('#media-copyright') as HTMLElement
    const photoExplanationEl = document.querySelector('#media-description') as HTMLParagraphElement
    const mediaSectionEl = document.querySelector('#media-section') as HTMLParagraphElement
    const imageSectionEl = `<a id="img-new-tab" href="" target="_blank" rel="noopener">
                              <div class="image-div"> 
                                  <img id="image_of_the_day" src="" alt="image-by-nasa"> 
                              </div>
                            </a>` as any
    const videoSectionEl = `<div class="video-div"> 
                              <iframe id="videoLink" src="" frameborder="0"></iframe>
                            </div>` as any

    // Title, Date, Photo Explanation
    titleEl.innerHTML = data.title
    dateEl.innerHTML = data.date
    photoExplanationEl.innerHTML = data.explanation

    // Give credit to NASA if copyright isn't present
    if (data.copyright === undefined) copyrightEl.innerHTML = 'NASA'
    else copyrightEl.innerHTML = data.copyright

    // Dynamically supply an HTML element based on if API response is a video or img
    if (data.media_type === 'video') {
      mediaSectionEl.innerHTML = videoSectionEl
      videoSectionEl!.src = data.url
    } else {
      mediaSectionEl.innerHTML = imageSectionEl
      document.querySelector<HTMLAnchorElement>('#img-new-tab')!.href = data.hdurl
      document.querySelector<HTMLImageElement>('#image_of_the_day')!.src = data.url
    }
  }

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
        {/* <!-- Media Response from API goes here --> */}
      </section>

      <div className="description-wrapper">
        <p className="media-description" id="media-description"></p>
      </div>
    </>
  )
}

export default ApiContentResponse
