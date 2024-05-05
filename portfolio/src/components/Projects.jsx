import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../index';
import { Link } from 'react-router-dom';
import galaxyImage from '/images/gg.png';
import clipprImage from '/images/clippr-coming-soon.png';
import frothImage from '/images/froth-coming-soon.png';

const projects = [
  {
    name: 'Froth Matcha.',
    imageUrl: frothImage,
    sub: 'WordPress | PHP',
    id: '1',
    // link: '/froth'
    
  },
  {
    name: 'Galaxy Grid.',
    imageUrl: galaxyImage,
    sub: 'JavaScript | CSS',
    id: '2',
    link: '/galaxy-grid'
  },
  {
    name: 'Clippr DB.',
    imageUrl: clipprImage,
    sub: 'React.js | SASS',
    id: '3',
    // link: '/clippr'
  }
];

function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getProjectClass = () => {
    if (screenWidth >= 1300) {
      return 'project-container-grid';
    } else {
      return 'project-container';
    }
  };

  return (
    
    <div className="projects-section" id="works">
      <motion.div 
      
      variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.7}}
      
      className="projects-description">
        <h1>Works</h1>
        <h3>On Gaining Experience</h3>
        <h2>
          Working alongside others on web development projects has been an enriching experience,
          fostering collaboration and innovation. Through these collaborative efforts, I not only
          gained valuable insights into different approaches and techniques but also discovered a
          profound passion for JavaScript and React.js.
        </h2>

        <h2>
          React's component-based architecture and declarative approach make building user interfaces
          intuitive and enjoyable. The ability to efficiently manage state and create reusable components 
          in React has significantly improved my productivity as a developer. Exploring React's ecosystem 
          of libraries and tools has been both challenging and rewarding, providing endless opportunities 
          to create dynamic and responsive web applications. Overall, React 
          has made web development not only efficient but also fun and engaging.
        </h2>
      </motion.div>

      <div className={getProjectClass()}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}>
            <h3 className="projects-title">{project.name}</h3>
            <h2 className="projects-sub">{project.sub}</h2>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
            

        {/* button code from Katherine Kato on codepen.io */}
            <div id="container">
              <Link to={project.link}>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                  </button>
              </Link>
              </div>
           </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


