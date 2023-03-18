import './App.css';
import { motion } from "framer-motion"
import IntroduceCard from './components/IntroduceCard';
import Navigationbar from './components/Navigationbar';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import AboutMe from './components/AboutMe';
import CarouselFade from './components/CarouselFade';
import ProgressStep from './components/ProgressStep';
import Footer from './components/Footer';
import Work from './components/Work';
import Internship from './components/Internship';
import Fade from 'react-reveal/Fade'
function App() {
  return (
    <div>
        <Navigationbar />
      <br />
      <Fade>
        <IntroduceCard />
      </Fade>
      <br/ >
      <br />
      <Fade>
        <Internship />
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
      <Fade>
        <AboutMe />
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
      <Fade>
        <Work />
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
      <Fade>
        <CarouselFade /> {/* Internship */}
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
        <Footer />

    </div>
  );
}

export default App;
