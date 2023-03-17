import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMobile, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="container content-space-t-4 content-space-b-3">
        <p className='TearFooter'><span><FontAwesomeIcon icon={faHeart} /> Made with tear and coffee by Isara K.</span>
            <span>
                <div className='FooterIcon'>
                    <FontAwesomeIcon className='fa-xl' icon={faMobile} />    {'  '}
                    <FontAwesomeIcon className='fa-xl' icon={faMailBulk} />    {'  '}
                    <FontAwesomeIcon className='fa-xl' icon={faLinkedin} />    {'  '}
                    <FontAwesomeIcon className='fa-xl' icon={faGithub} />  
                </div>
            </span>
        </p>
    </div>
  )
}

export default Footer
