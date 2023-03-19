import React from 'react'
import picture from '../assets/work7.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import Fade from 'react-reveal/Fade'


const Work = () => {
  const WorkCard = ({pic, title, desc}) => (
    // <Card style={{ width: '18rem' }}>
    //   <div className="card card-portfolio minorwork">
    //     <div className="card-img border">
    //       <img src={pic} className="img-fluid" alt="Image" />
    //     </div>
      
    //     <Card.Body>
    //       <Card.Title>{title}</Card.Title>
    //       <Card.Text>
    //         {desc}
    //       </Card.Text>
    //     </Card.Body>
    //   </div>
    // </Card>
      <div className="card card-portfolio minorwork border-0 shadow-sm card-hover">
        <a href='google.com' target="_blank">
          <div className=" border">
            <img src={pic} className="img-fluid" alt="Card image" />
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
            <a href='google.com' target="_blank">
              <div className="card card-portfolio shadow-lg ">
                <div className="card-img">
                  <img src={picture} className="img-fluid" alt="Image" />
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
              <WorkCard pic={card1} title="Crypto GUI" desc="Crpyto GUI connect to bx.com written in JavaFX" />
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 workcard'>
              <WorkCard pic={card2} title="Oscillo GUI" desc="GUI Controlling Oscilloscope with Python/Tkinter" />
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 workcard'>
              <WorkCard pic={card3} title="Bookstore" desc="Somsri's Bookstore web application written in Django" />
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 workcard'>
              <WorkCard pic={card3} title="ETC" desc="Somsri's Bookstore web application written in Django" />
            </div>
          </div>
      </div>
      </Fade>
    

    </>
    

  )
}

export default Work
