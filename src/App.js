import './App.css';
import { motion } from "framer-motion"
import IntroduceCard from './components/IntroduceCard';
import Navigationbar from './components/Navigationbar';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import AboutMe from './components/AboutMe';
import CarouselFade from './components/CarouselFade';
import ProgressStep from './components/ProgressStep';
import Work from './components/Work';
function App() {
  return (
    <div>
      <Navigationbar />
      <br />
      <IntroduceCard />
      <br/ >
      <hr className="mt-1 mb-1"/>
      <br />
      <AboutMe />
      <br />
      <hr className="mt-1 mb-1"/>
      <br />
      <Work />
      
      <br />
      <hr className="mt-1 mb-1"/>
      <br />
      <ProgressStep />
      <br />
      <hr className="mt-1 mb-1"/>
      <br />
      <CarouselFade />
      <br />
      <hr className="mt-1 mb-1"/>
      <br />

    </div>
  );
}

export default App;
