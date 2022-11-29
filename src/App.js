import Intro from './components/intro/Intro';
import './index.css'
import About from './components/intro/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Intro />
      <About />
      <Projects/>
    </div>
  );
}

export default App;
