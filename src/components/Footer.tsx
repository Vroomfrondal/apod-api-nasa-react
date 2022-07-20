import React from 'react'
import { FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
          <span className="footer-message"> Made with ❤️ by <a href="https://topherdeleon.com" rel="noreferrer" target="_blank">Topher</a>
          </span>
          
          <a href="https://github.com/Vroomfrondal/apod-api-nasa-react" rel="noreferrer" target="_blank">
            <FaGithub className="footer-socials-logos" />
          </a>
          <a href="https://www.linkedin.com/in/topherdeleon/" rel="noreferrer" target="_blank">
            <FaLinkedin className="footer-socials-logos" />
          </a>
          <a href="https://www.topherdeleon.com" rel="noreferrer" target="_blank">
            <FaBriefcase className="footer-socials-logos" />
          </a>
      </footer>
    </>
  )
}

export default Footer
