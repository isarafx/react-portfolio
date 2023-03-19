import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMobile, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="container content-space-t-4 content-space-b-3">
        <p className='TearFooter'><span><FontAwesomeIcon icon={faHeart} /> Made with tear and coffee by me.</span>
            <span>
                <div className='FooterIcon'>
                    <a href="https://www.linkedin.com/in/isarawn/" target="_blank"><FontAwesomeIcon className='fa-xl' icon={faLinkedin} /> </a>   {'  '}
                    <a href="https://github.com/isarafx" target="_blank"><FontAwesomeIcon className='fa-xl' icon={faGithub} /> </a> 
                </div>
            </span>
        </p>
    </div>
  )
}

export default Footer
