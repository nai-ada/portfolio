import React, { useState, useEffect } from 'react';
import galaxyImage from '/images/gg.png';
import clipprImage from '/images/clippr.png';
import frothImage from '/images/froth.png';

const projects = [
  {
    name: 'Froth Matcha.',
    imageUrl: frothImage,
    sub: 'WordPress | PHP',
    id: '1'
  },
  {
    name: 'Galaxy Grid.',
    imageUrl: galaxyImage,
    sub: 'JavaScript | CSS',
    id: '2'
  },
  {
    name: 'Clippr DB.',
    imageUrl: clipprImage,
    sub: 'React.js | SASS',
    id: '3'
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
      <div className="projects-description">
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
        
       
       
      </div>
      <div className={getProjectClass()}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3 className="projects-title">{project.name}</h3>
            <h2 className="projects-sub">{project.sub}</h2>
            <img src={project.imageUrl} alt={project.name} className="project-image" />

        {/* button code from Katherine Kato on codepen.io */}
            <div id="container">
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                  </button>
              </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
