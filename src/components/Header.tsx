import React, { useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import './Header.css'
import 'react-datepicker/dist/react-datepicker.css'
import ApiContentResponse from './ApiContentResponse'

function Header() {
  const [startDate, setStartDate] = useState(new Date())

  const handleDateSelect = () => {
    const datepicker = document.querySelector(
      '#datepicker'
    )! as HTMLInputElement

    console.log(startDate)
    // console.log(datepicker.value)
    // setStartDate(datepicker.value)
  }

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
            placeholderText="Pick a date."
            id="datepicker"
            // onSelect={handleDateSelect}
            className="datepicker"
            selected={startDate}
            onChange={handleDateSelect}
            // dateFormat="yyyy-mm-dd"
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
