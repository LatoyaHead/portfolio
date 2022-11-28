import Intro from './components/intro/Intro';
import './index.css'
import About from './components/intro/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Intro />
      <About />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
