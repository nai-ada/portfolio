import React from 'react';
import codingImage from '/images/blue-blob.png';

function Projects() {
 const projlist = ['Clippr', 'Galaxy Grid', 'Froth', 'Country Website', 'Personal Portfolio'];

 return (
    <>
      <div class="projects-section">
        <h1>Projects</h1>
        {projlist.map((project, index) => (
          <h2 key={index} class="projects-title">{project}</h2>
        ))}
      </div>
      <div class="projects-description">
        <h2>Gaining Experience</h2>
        <p>Working alongside others on web development projects has been an enriching experience, fostering collaboration and innovation. Through these collaborative efforts, I not only gained valuable insights into different approaches and techniques but also discovered a profound passion for JavaScript and React.js. </p>
        <img src={codingImage} alt="placeholder coding image" className="placeholder-coding-image" />
      </div>
    </>
 );
}

export default Projects;

