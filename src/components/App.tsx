import React, { useState, useEffect } from 'react'
import { fetchData, displayRequestedData } from '../api/fetchAndDisplayNasaData'
import dotenv from 'dotenv'
import Header from './Header'
import ApiContentResponse from './ApiContentResponse'
import Footer from './Footer'

function App() {
  const [nasaData, setNasaData] = useState({})

  // Default API call
  useEffect(() => {
    const fetchToday = async () => {
      const apiKey = process.env.REACT_APP_NASA_API_KEY!
      const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`!
      const data = await fetchData(baseUrl)

      displayRequestedData(data)
      setNasaData(data)
    }

    fetchToday().catch(console.error)
  }, [])

  // Listen for state from random-button fetch in <Header/>
  const updateStateWithRandomData = (props: any) => {
    setNasaData(props)
  }

  return (
    <>
      <Header data={nasaData} fetchedRandomData={updateStateWithRandomData} />
      <ApiContentResponse data={nasaData} />
      <Footer />
    </>
  )
}

export default App
