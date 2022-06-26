import React from 'react'
import './Header.css'

function Header() {
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

        <form className="inputs-for-header">
          <label htmlFor="datepicker">
            Or pick a past date:
            <input
              className="label-input"
              id="datepicker"
              type="date"
              min=""
              max=""
            />
          </label>

          <div className="button-container">
            <button className="random-picture-button" id="random-day-generator">
              Random
            </button>
            <button className="reset-picture-button" id="reset-button" type='reset' >
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
