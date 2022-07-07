import React from 'react'
import axios from 'axios'

const fetchData = async (url: string) => {
  try {
    const apiResponse = await axios.get(url)

    if (apiResponse.status === 200) {
      const apiData = apiResponse.data
      console.log('NASA Data:',  apiData)
      displayRequestedData(apiData)
    } else
      throw new Error('Nasa seems to be having an issue with their server.')
  } catch (err) {
    console.log('Nasa seems to be having an issue with their server.')
  }
}

const displayRequestedData = (data: any) => {
  const dateEl = document.querySelector('#media-date') as HTMLParagraphElement
  const titleEl = document.querySelector('#media-title') as HTMLHeadingElement
  const copyrightEl = document.querySelector('#media-copyright') as HTMLElement
  const photoExplanationEl = document.querySelector(
    '#media-description'
  ) as HTMLParagraphElement
  const mediaSectionEl = document.querySelector(
    '#media-section'
  ) as HTMLParagraphElement
  const imageSectionEl = `<div class="main-image-container">
                            <a id="img-new-tab" href="" target="_blank" rel="noopener">
                              <div class="image-wrapper"> 
                                <img class="image-of-the-day" id="image_of_the_day" src="" alt="image-by-nasa"> 
                              </div>
                            </a>
                          <div>` as any
  const videoSectionEl = `<div class="video-div"> 
                            <iframe class="video-of-the-day" id="videoLink" src="" frameborder="0"></iframe>
                          </div>` as any

  // Title, Date, Photo Explanation
  titleEl.innerHTML = data.title
  dateEl.innerHTML = data.date
  if (data.explanation === '')
    photoExplanationEl.innerHTML = 'No description provided by NASA.'
  else photoExplanationEl.innerHTML = data.explanation

  // Credit to NASA if media doesn't have author-credits
  if (data.copyright === undefined) copyrightEl.innerHTML = 'NASA'
  else copyrightEl.innerHTML = data.copyright

  // Dynamically supply an HTML element based on if API response is a video or img
  if (data.media_type === 'video') {
    mediaSectionEl.innerHTML = videoSectionEl
    document.querySelector<HTMLVideoElement>('#videoLink')!.src = data.url
  } else {
    mediaSectionEl.innerHTML = imageSectionEl
    document.querySelector<HTMLAnchorElement>('#img-new-tab')!.href = data.hdurl
    document.querySelector<HTMLImageElement>('#image_of_the_day')!.src =
      data.url
  }
}

export { fetchData }
