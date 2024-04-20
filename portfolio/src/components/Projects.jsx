import React from 'react';
import galaxyImage from '/images/gg.png';
import clipprImage from '/images/clippr.png';
import frothImage from '/images/froth.png';



// Define an array of project objects with names and image URLs
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
  return (
    <>
      <div className="projects-section">
      <div className="projects-description">
        <h1>Works</h1>
        <h3>On Gaining Experience</h3>
        <p>
          Working alongside others on web development projects has been an enriching experience,
          fostering collaboration and innovation. Through these collaborative efforts, I not only
          gained valuable insights into different approaches and techniques but also discovered a
          profound passion for JavaScript and React.js.
        </p>
      </div>

        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <h3 className="projects-title">{project.name}</h3>
            <h2 className="projects-sub">{project.sub}</h2>
            <div class="linkWrap">

          {/* code via Nguyen Anh Tuan on codepen.io  */}
          <a href="#" class="link style-2">
            <span class="mask">
              <div class="link-container">
                <span class="link-title1 title">Project Details</span>
                <span class="link-title2 title">Project Details</span>
              </div>
            </span>
            <div class="link-icon">
              <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
              <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </div>
          </a>
        </div>

            <img src={project.imageUrl} alt={project.name} className="project-image" width="300px"/>
            
            
        </div>
        ))}
      </div>

    </>
  );
}

export default Projects;

