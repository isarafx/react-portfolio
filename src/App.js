import './App.css';
import IntroduceCard from './components/index/IntroduceCard';
import Navigationbar from './components/Navigationbar';
import Mystack from './components/index/MyStack';
import ShowCase from './components/index/ShowCase';
import Footer from './components/Footer';
import Work from './components/index/Work';
import Timeline from './components/index/Timeline';
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
        <Timeline />
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
      <Fade>
        <Mystack />
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
      <Fade>
        <Work />
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
      <Fade>
        <ShowCase /> 
      </Fade>
      <br /> <hr className="mt-1 mb-1"/> <br />
      <Footer />
    </div>
  );
}

export default App;
