import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import './Header.css'
import 'react-datepicker/dist/react-datepicker.css'
import { fetchData } from '../api/fetchAndDisplayNasaData'

function Header() {
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NASA_API_KEY!
    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD')
    const dateUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`!

    fetchData(dateUrl)
  }, [selectedDate]) // everytime selectedDate changes, recall function from ApiContentResponse

  return (
    <>
      <header>
        <div className="title-wrapper">
          <h1 className="title">Astronomical Picture of the Day</h1>
          <p>
            Explore the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apod.nasa.gov/apod/archivepixFull.html"
            >
              Universe
            </a>
            !
          </p>
          <p>A picture or video of the day supplied by NASAs Apod Api.</p>
        </div>

        <div className="datepicker">
          <label>Or pick a past date:</label>
          <DatePicker
            placeholderText="Select a date after 2001."
            className="datepicker"
            selected={selectedDate}
            onChange={(date: any) => {
              setSelectedDate(date)
              console.log(date)
            }}
            dateFormat="yyyy-MM-dd"
          />
        </div>

        <form className="header-inputs">
          <div className="button-container">
            <button className="random-picture-button" id="random-day-generator">
              Random
            </button>
            <button
              className="reset-picture-button"
              id="reset-button"
              type="reset"
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
