import React from 'react';
import codingImage from '/images/blue-blob.png';

function Projects() {
 const projlist = ['Clippr', 'Galaxy Grid', 'Froth', 'Country Website', 'Personal Portfolio'];

 return (
    <>
      <div className="projects-section">
        <h1>Works</h1>
        {projlist.map((project, index) => (
          <h2 key={index} className="projects-title">{project}</h2>
        ))}
      </div>
      <div className="projects-description">
        <h3>On Gaining Experience</h3>
        <p>Working alongside others on web development projects has been an enriching experience, fostering collaboration and innovation. Through these collaborative efforts, I not only gained valuable insights into different approaches and techniques but also discovered a profound passion for JavaScript and React.js. </p>
        {/* <img src={codingImage} alt="placeholder coding image" className="placeholder-coding-image" /> */}
      </div>
    </>
 );
}

export default Projects;

