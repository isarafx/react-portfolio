import Carousel from 'react-bootstrap/Carousel';
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
function CarouselFade() {
  return (
    <div className="container content-space-t-4 content-space-b-3">
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={work1}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='CarouselCaption'>
              <h3>Covfee Lover</h3>
              <p>PWA Web Application for slowbar coffee lover</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={work2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className='CarouselCaption'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={work3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className='CarouselCaption'>
              <h3>Third slide label</h3>
              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselFade;