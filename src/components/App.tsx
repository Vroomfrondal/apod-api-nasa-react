import React from 'react'
import Header from './Header'
import ApiContentResponse from './ApiContentResponse'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <ApiContentResponse open={false} />
      <Footer />
    </>
  )
}

export default App
