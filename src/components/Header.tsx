import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import './Header.css'
import { generateRandomDate } from '../utils/randomDate'
import { fetchData, displayRequestedData } from '../api/fetchAndDisplayNasaData'
const apiKey = process.env.REACT_APP_NASA_API_KEY!

function Header(props: any) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Datepicker side-effect
  useEffect(() => {
    const defaultApiCallWrapper = async () => {
      const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD')
      const dateUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`
      const data = await fetchData(dateUrl)

      props.fetchedRandomData(data)
      displayRequestedData(data)
    }
    defaultApiCallWrapper()
  }, [selectedDate])

  const handleResetButton = async (e: any) => {
    e.preventDefault()
    const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`!
    const data = await fetchData(baseUrl)

    props.fetchedRandomData(data)
    displayRequestedData(data)
  }

  const handleRandomButton = async (e: any) => {
    e.preventDefault()
    const randomDate = generateRandomDate(new Date(1995, 6, 16), new Date())
    const formattedRandomDate = dayjs(randomDate).format('YYYY-MM-DD')
    const randomURL =
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedRandomDate}`!
    const data = await fetchData(randomURL)

    props.fetchedRandomData(data)
    displayRequestedData(data)
  }

  return (
    <>
      <header>
        <div className="title-wrapper">
          <h1 className="title">Astronomical Picture of the Day</h1>
          <p className="subtitle">
            Explore the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apod.nasa.gov/apod/archivepixFull.html"
            >
              Universe
            </a>
            ! A daily photo of our amazing Galaxy.
          </p>
        </div>

        <div className="datepicker-input-wrapper">
          <label>Or select a date:</label>
          <DatePicker
            placeholderText="Previous dates only."
            selected={selectedDate}
            onChange={(date: any) => {
              setSelectedDate(date)
            }}
            dateFormat="yyyy-MM-dd"
            className="datepicker-input-custom-text"
            id="datepicker-input"
            showYearDropdown
            minDate={new Date('1995-06-16')}
            maxDate={new Date()}
          />
        </div>

        <form className="header-inputs">
          <div className="button-container">
            <button
              className="random-picture-button"
              id="random-day-button"
              onClick={handleRandomButton}
            >
              Random
            </button>
            <button
              className="reset-picture-button"
              id="reset-button"
              type="reset"
              onClick={handleResetButton}
            >
              Reset
            </button>
          </div>
        </form>
      </header>
    </>
  )
}

export default Header
