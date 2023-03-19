import Carousel from 'react-bootstrap/Carousel';
import work1 from '../assets/work1.png'
import show2 from '../assets/show2.png'
import work3 from '../assets/work3.png'
import show1 from '../assets/show1.png'
import picture1 from '../assets/a1.png'
import picture2 from '../assets/a2.jpg'
import picture3 from '../assets/a3.png'
import picture4 from '../assets/a4.jpg'
import picture9 from '../assets/a9.jpg'
import picture10 from '../assets/a10.jpg'
import picture11 from '../assets/a11.jpg'
import picture12 from '../assets/a12.jpg'
import picture13 from '../assets/a13.jpg'
import picture14 from '../assets/a14.jpg'
import picture15 from '../assets/a15.jpg'
import picture16 from '../assets/a15.5.jpg'
import picture17 from '../assets/a16.jpg'
import picture18 from '../assets/a17.jpg'
import { useState } from 'react';
function CarouselFade() {
  const [picSelect, setPicSelect] = useState(0)

  const Cert = () => {
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={show1}
            alt="Second slide"
          />

        </Carousel.Item>

  }

  return (
    <div className="container content-space-t-4 content-space-b-3">
        <h2 className='text-center'>Showcase</h2>
        <br />
        <Carousel fade variant="dark">  {/* Too buggy to loop  */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={show1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Lecturer at MU</h3>
              <p>Teaching basic Python on Django Course</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>TA on Django Course</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture4}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Internship at Stackpython</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture9}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>TA on Django Heroku Deploy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture10}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>TA on Django Heroku Deploy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture11}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>TA on Django Heroku Deploy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture12}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>TA on Django Heroku Deploy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={show2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture13}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Basic Network Training by Aruba</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture14}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Basic Network Training by Aruba</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture15}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Basic Network Training by Aruba</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture16}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>TA on Django REST/React at GSB</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture17}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={picture18}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <div className='video-container'>
              <iframe height="1280" width="720" className="responsive-iframe" src="https://www.youtube.com/embed/-EsQLGhgBaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Carousel.Caption>
              <h3>My intro video editing</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
    </div>
  );
}

export default CarouselFade;