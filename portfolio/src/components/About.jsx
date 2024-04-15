import React from 'react';

// Reusable TechStackSection component
function TechStackSection({ title, items }) {
 return (
    <div>
      <h2>{title}</h2>
      <ul class="index-list">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ul>
    </div>
 );
}

function About() {
 const languages = ['HTML', 'CSS', 'SASS', 'PHP', 'React.js', 'JavaScript', 'Liquid'];
 const developmentTools = ['MySQL', 'FTP', 'NPM', 'Rest API', 'WordPress', 'Shopify', 'Headless CMS'];
 const designTools = ['Figma', 'XD', 'Procreate', 'Photoshop', 'Illustrator'];

 return (
    <>
      <div class="about-section">
        <h1>About</h1>
        <h2>Astronomy Nerd. Video Game Lover. Amateur Digital Artist. Iced Matcha Latte Enthusiast. INFP.</h2>
        <h2>As a developer skilled in both technical expertise and creative abilities, I am on a mission to design user-friendly websites that are both distinctive and intuitive for all users.</h2>
        {/* input NASA API */}
        <p>Image generated from NASA's EPIC API.</p>
      </div>
      <div class="tech-stack-section">
        <h1>Tech Stack</h1>
        <TechStackSection title="Languages" items={languages} />
        <TechStackSection title="Development Tools" items={developmentTools} />
        <TechStackSection title="Design Tools" items={designTools} />
      </div>
    </>
 );
}

export default About;
