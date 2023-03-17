import Carousel from 'react-bootstrap/Carousel';
import work1 from '../assets/work1.png'
import show2 from '../assets/show2.png'
import work3 from '../assets/work3.png'
import show1 from '../assets/show1.png'
function CarouselFade() {
  return (
    <div className="container content-space-t-4 content-space-b-3">
      <h2 className='text-center'>Showcase</h2>
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={show1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={show2}
              alt="Second slide"
            />

          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselFade;