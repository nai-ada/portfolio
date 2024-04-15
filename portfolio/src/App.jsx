import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import CursorPointer from './components/Cursor';

function App() {
  
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    // const [size, setSize] = useState(32);

    useEffect(() => {
      const handleMouseMovement = (e) => {
        // console.log(e.clientX, e.clientY);
        setX(e.clientX);
        setY(e.clientY);
      }

      document.addEventListener('mousemove', handleMouseMovement);
      return () => {
        document.removeEventListener('mousemove', handleMouseMovement);
      }
    }, [x, y]);

  return (

    <Router>
      <div>
      <div className="header-content">
        <Nav />
        <Home />
      </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
        {/* <CursorPointer
        x={x}
        y={y}
        /> */}

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
