import React from 'react'
import picture from '../../assets/workcard/workcard1.webp'
import card1 from '../../assets/workcard/workcard2.webp'
import card2 from '../../assets/workcard/workcard3.webp'
import card3 from '../../assets/workcard/workcard4.webp'
import card4 from '../../assets/workcard/workcard5.webp'
import Fade from 'react-reveal/Fade'


const Work = () => {
  const WorkCard = ({pic, title, href, alt}) => (
      <div className="card card-portfolio minorwork border-0 shadow-sm card-hover">
        <a href={href} target="_blank" rel="noreferrer">
          <div className=" border">
            <img src={pic} className="img-fluid" alt={alt} />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
          </div>
        </a>
      </div>

  );
  return (
    <>
    <section className="section-about">
      <div  className="container">
        <div className="row">
          <div className="col-sm-12 position-relative">
          <h2 className='text-center workcard'>My classwork</h2>
            <a href='https://covfefe-react.vercel.app/' target="_blank">
              <div className="card card-portfolio shadow-lg ">
                <div className="card-img">
                  <img src={picture} className="img-fluid" alt="Covfefe" />
                </div>
              
                <div className="sinse-box">
                <h3 style={{color: '#000000'}} classname="sinse-title">Covfefe
                  <br />
                </h3>
                  <p style={{color: '#000000'}}>PWA Application for Coffee Lover</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
        <br />
      <Fade>
      <div className="container content-space-t-4 content-space-b-3">
        <h2 className='text-center workcard'>Other works</h2>
          <div className='row'>
            <div className='col-md-6 col-lg-3 col-sm-12 workcard'>
              <WorkCard pic={card1} title="ESP32 Datalogger" href="https://www.youtube.com/watch?v=Etpgy0ilKz0" alt="crypto work" />
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 workcard'>
              <WorkCard pic={card2} title="Oscillo GUI" href="https://github.com/isarafx/Signal-Final-Project" alt="oscillo scope work"  />
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 workcard'>
              <WorkCard pic={card3} title="Bookstore" href="https://github.com/ButterFine/database-final-project" alt="book store site"  />
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 workcard'>
              <WorkCard pic={card4} title="Equalizer" href="https://github.com/isarafx/equalizer_tkinter" alt="portfolio site"  />
            </div>
          </div>
      </div>
      </Fade>
    

    </>
    

  )
}

export default Work
