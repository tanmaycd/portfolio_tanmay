import Navbari from './components/navbar';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import  Contact from './components/contact';
import About from './components/about';
import './App.css'
function App() {
  return (
    <div className="App">
        < Navbari/>
        <Home />
        <About/>
        <Skills />
        {/* <Projects /> */}
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
