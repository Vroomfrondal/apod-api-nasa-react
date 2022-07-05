import React from 'react'
import { FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div>
          <span className="footer-message"> Made with ❤️ by
            <a href="https://topherdeleon.com" rel="noreferrer" target="_blank">
              Topher
            </a>
          </span>
        </div>

        <a href="https://www.github.com/vroomfrondal" rel="noreferrer" target="_blank">
          <FaGithub className="footer-socials-logos" />
        </a>
        <a href="https://www.linkedin.com/in/topherdeleon/" rel="noreferrer" target="_blank">
          <FaLinkedin className="footer-socials-logos" />
        </a>
        <a href="https://www.topherdeleon.com" rel="noreferrer" target="_blank">
          <FaBriefcase className="footer-socials-logos" />
        </a>
      </section>
    </>
  )
}

export default Footer
