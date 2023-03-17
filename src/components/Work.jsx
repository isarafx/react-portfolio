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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
  return (
    <>
    <section className="section-about">
      <div  className="container">
        <div className="row">
          <div className="col-sm-12 position-relative">
          <h2 className='text-center'>My classwork</h2>
            <div className="about-img-box">
              <img src={picture} alt="" className="img-fluid" />
            </div>
            <div className="sinse-box">
              <h3 className="sinse-title">Covfefe
                <br />
              </h3>
              <p>PWA Application for Coffee Lover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        <br />
      <Fade>
      <div className="container content-space-t-4 content-space-b-3">
        <h2 className='text-center'>Other works</h2>
          <div className='row '>
            <div className='col-sm d-flex justify-content-around'>
              <WorkCard pic={card1} title="Crypto GUI" desc="Crpyto GUI connect to bx.com written in JavaFX" />
            </div>
            <div className='col-sm d-flex justify-content-around'>
              <WorkCard pic={card2} title="Oscillo GUI" desc="GUI Controlling Oscilloscope with Python/Tkinter" />
            </div>
            <div className='col-sm d-flex justify-content-around'>
              <WorkCard pic={card3} title="Bookstore" desc="Somsri's Bookstore web application written in Django" />
            </div>
            <div className='col-sm d-flex justify-content-around'>
              <WorkCard pic={card3} title="Bookstore" desc="Somsri's Bookstore web application written in Django" />
            </div>
          </div>
      </div>
      </Fade>
    

    </>
    

  )
}

export default Work
