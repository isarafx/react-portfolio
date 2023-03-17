import React from 'react'
import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.png'
import pic5 from '../assets/5.png'
import logo1 from '../assets/logo-1.png'
import logo2 from '../assets/logo-2.png'
import logo3 from '../assets/logo-3.png'
import logo4 from '../assets/logo-4.png'
import logo5 from '../assets/logo-5.png'
import logo6 from '../assets/logo-6.png'
const images = [pic2, pic1, pic3, pic4, pic5]

const AboutMe = () => {
  return (
    <div className="overflow-hidden">
        <div className="container content-space-t-4 content-space-b-3">
            <div className="row justify-content-lg-between align-items-md-center">
                <div className="col-md-6 system">
                    <div >
                        <div>
                            <h2>System & Tool</h2>
                            <p><b>Operation System</b>: Windows, MacOS</p>
                            <p><b>Language</b>: Python, HTML, CSS, JS</p>
                            <p><b>Database</b>: MongoDB, PostgresQL</p>
                            <p><b>Framework</b>: React, Django, FastAPI</p>
                            <p><b>Others</b>: GIT, Docker, Linux command</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5 mb-7 mb-md-0 stack container">
                    
                    <div class="row ms-auto">
                        <div class="col">
                            <img className="img-fluid " src={logo1} alt="Image Description" />
                        </div>
                        <div class="col"> 
                            <img className="img-fluid " src={logo2} alt="Image Description" />
                        </div>
                    </div> 
                    <br />
                    <div class="row ms-auto">
                        <div class="col">
                            <img className="img-fluid " src={logo3} alt="Image Description" />
                        </div>
                        <div class="col">
                            <img className="img-fluid " src={logo4} alt="Image Description" />
                        </div>
                    </div> 
                    <br />
                    <div class="row ms-auto">
                        <div class="col">
                            <img className="img-fluid " src={logo5} alt="Image Description" />
                        </div>
                        <div class="col">
                            <img className="img-fluid " src={logo6} alt="Image Description" />
                        </div>
                    </div> 
                </div>
                <br />
                
                    
            </div>
        </div>
    </div>
  )
}

export default AboutMe
