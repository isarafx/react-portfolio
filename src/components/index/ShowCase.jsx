import Carousel from 'react-bootstrap/Carousel';

import aruba1 from '../../assets/carousel/aruba1.webp'
import aruba2 from '../../assets/carousel/aruba2.webp'
import aruba3 from '../../assets/carousel/aruba3.webp'
import aruba4 from '../../assets/carousel/aruba4.webp'
import bank1 from '../../assets/carousel/bank1.webp'
import bank2 from '../../assets/carousel/bank2.webp'
import ta1 from '../../assets/carousel/ta1.webp'
import ta2 from '../../assets/carousel/ta2.webp'
import ta3 from '../../assets/carousel/ta3.webp'
import ta4 from '../../assets/carousel/ta4.webp'
import ta5 from '../../assets/carousel/ta5.webp'
import mu1 from '../../assets/carousel/mu1.webp'
import mu2 from '../../assets/carousel/mu2.webp'
import toeic from '../../assets/carousel/toeic.webp'

import { useState } from 'react';
function ShowCase() {

  return (
    <div className="container content-space-t-4 content-space-b-3">
        <h2 className='text-center'>Showcase</h2>
        <br />
        <Carousel fade variant="dark">  {/* Too buggy to loop  */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={toeic}
              alt="toeic score"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mu1}
              alt="Lecture at Mahidol"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>Lecturer at MU</h5>
              <p style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>Teaching basic Python on Django Course</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mu2}
              alt="Lecture at Mahidol"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ta5}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>TA on Django Course</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ta1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>TA on Django Course</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ta2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>TA on Django Course</h5>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ta3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>TA on Django Course</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ta4}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>TA on Django Course</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={aruba1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={aruba2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>Basic Network Training by Aruba</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={aruba3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>Basic Network Training by Aruba</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={aruba4}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>Basic Network Training by Aruba</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bank1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>TA on Django REST at GSB</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bank2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>TA on Django REST at GSB</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='video-container'>
              <iframe className="responsive-iframe" src="https://www.youtube.com/embed/-EsQLGhgBaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Carousel.Caption>
              <h5 style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>My video editing work</h5>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
    </div>
  );
}

export default ShowCase;


