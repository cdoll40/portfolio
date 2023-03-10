/*
    Finish styling the projects
    Add getform.io to contact section
    Add correct social links and resume
    Correct the icons in experience
    Correct Projects section
    Add resume
    clean node_modules / dependencies
    clean packages
    change tab image and name
    Read me
    fill out lorem sections
*/
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
