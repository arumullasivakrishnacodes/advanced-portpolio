import './App.css';
import '../src/Assets/CSS/variables.css';
import '../src/Assets/CSS/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {Routes, Route} from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Experience from './Components/Experience/Experience.jsx';
import Notfound from './Components/Notfound/Notfound.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Certification from './Components/Certifications/Certifications.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Education from './Components/Education/Education.jsx';

function App() {
  return (
    <div className="App container portpolio-main-container">
      <div className='col-12 mb-2 d-flex justify-content-end align-items-center'><div className='column-bg-nav'><Navigation /></div></div>
      <div className='row main-container-row'>
        <div className='col-4 d-none d-lg-block'><div className='column-bg about-section-column'><About /></div></div>
        <div className='col-lg-8 col-12'>
        <div className='column-bg'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/certifications" element={<Certification />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="*" element={<Notfound />}/>
        </Routes>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
