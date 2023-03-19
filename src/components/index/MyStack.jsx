import React from 'react'
import logo1 from '../../assets/stack/logo-1.webp'
import logo2 from '../../assets/stack/logo-2.webp'
import logo3 from '../../assets/stack/logo-3.webp'
import logo4 from '../../assets/stack/logo-4.webp'
import logo5 from '../../assets/stack/logo-5.webp'
import logo6 from '../../assets/stack/logo-6.webp'

const MyStack = () => {
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

export default MyStack
