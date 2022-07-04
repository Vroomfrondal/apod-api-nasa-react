import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import './Header.css'
import { generateRandomDate } from '../utils/randomDate'
import { fetchData } from '../api/fetchAndDisplayNasaData'

const apiKey = process.env.REACT_APP_NASA_API_KEY!
const datepickerValue = document.querySelector<HTMLInputElement>('#datepicker-input')!

function Header() {
  const [selectedDate, setSelectedDate] = useState(null)

  // Call API with datepicker's current state
  useEffect(() => {
    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD')
    const dateUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`!

    fetchData(dateUrl)
  }, [selectedDate])

  const handleResetButton = () => {
    const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`!
    fetchData(baseUrl)
  }

  const handleRandomButton = (e: any) => {
    const randomDate = generateRandomDate(new Date(1995, 6, 16), new Date())
    const formattedRandomDate = dayjs(randomDate).format('YYYY-MM-DD')
    const randomURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedRandomDate}`!

    e.preventDefault()

    fetchData(randomURL)
  }

  return (
    <>
      <header>
        <div className="title-wrapper">
          <h1 className="title">Astronomical Picture of the Day</h1>
          <p>
            Explore the&nbsp; <a target="_blank" rel="noopener noreferrer" href="https://apod.nasa.gov/apod/archivepixFull.html">Universe</a>! A daily photo of our amazing Galaxy.
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
            isClearable
            showYearDropdown
            // closeOnScroll={(e) => e.target === document}
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
              id='reset-button'
              type="reset"
              onClick={handleResetButton}
            >
              Reset
            </button>
          </div>
        </form>
        <hr></hr>
      </header>
    </>
  )
}

export default Header
