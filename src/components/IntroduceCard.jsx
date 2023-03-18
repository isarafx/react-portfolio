import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Typed from "typed.js";
import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.png'
import pic5 from '../assets/5.png'
import Fade from 'react-reveal/Fade';

const images = [pic2, pic1, pic3, pic4, pic5]
const IntroduceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const el = useRef(null);
  const lang = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Isara@Isara-MacBookAir > whoami", "PS C:\\> whoami "], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 10,
      typeSpeed: 30,
      backSpeed: 100,
      backDelay: 100
    });
    const program = new Typed(lang.current, {
        strings: ['<span style="color: #4584b6;"><b>Py</b></span><span style="color: yellow;"><b>thon</b></span>',
                '<span style="background-color: #61DBFB; color: #FFFFFF;"><b>React</b></span>',
                '<span style="color: #092e20"><b>Django</b></span>',
                '<span style="color: #069487"><b>FastAPI</b></span>'], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        // startDelay: 3000,
        startDelay: 100,
        typeSpeed: 120,
        backSpeed: 100,
        backDelay: 100,
        // contentType:  "html",
        loop: true

      });

    // Destropying
    return () => {
      typed.destroy();
      program.destroy();
    };
  }, []);
  return (
    <div className="overflow-hidden">
        <div className="container content-space-t-4 content-space-b-3">
            <div className="row justify-content-lg-between align-items-md-center">
            <div className="col-md-6 col-lg-5 mb-7 mb-md-0">
                {/* Heading */}
                <div className="mb-5">
                <span ref={el}></span>
                <h1 className="display-4 mb-3">Isara K.</h1>
                <p className="lead">I'm fresh graduate and software developer. 
                <br />experienced in <span className="language" ref={lang}></span>
                <br />Currently looking for web development career</p>
                </div>
                {/* End Heading */}
                {/* <div className="d-grid d-sm-flex gap-3">
                <a className="btn btn-primary btn-transition" href="#caseStudies">Case studies</a>
                <a className="btn btn-link" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
                </div> */}
            </div>
            {/* End Col */}
            <div className="col-md-6">
                <div className="position-relative">
                <Fade><img className="img-fluid rounded-2" src={images[currentIndex]} alt="Image Description" /></Fade>
                <div className="position-absolute top-0 end-0 w-100 h-100 bg-soft-primary rounded-2 zi-n1 mt-5 me-n5" />
                </div>
            </div>
            {/* End Col */}
            </div>
            {/* End Row */}
        </div>
    </div>
  )
}

export default IntroduceCard
