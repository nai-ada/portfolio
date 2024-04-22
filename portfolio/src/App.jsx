import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutTabs from './components/AboutTabs';

function App() {


  return (

    <Router>
      <div data-theme="light"> 
    
      <div className="header-content">
        <Nav />
        <Home />
      </div>
      
        <About />
        <AboutTabs />
        <Projects />
        <Contact />
        <Footer />

        {/* <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/projects" element={<Projects />} />

          <Route exact path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
