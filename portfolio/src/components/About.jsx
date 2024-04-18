import React, { useState } from 'react';

function About() {
  
  return (
    <>
      <div className="about-section">
        <h1>About</h1>
        <h3>I'm always learning something new</h3>
        <h2>Astronomy Nerd. Video Game Lover. Amateur Digital Artist. Iced Matcha Latte Enthusiast. INFP.</h2>
        <h2>As a developer skilled in both technical expertise and creative abilities, I am on a mission to design user-friendly websites that are both distinctive and intuitive for all users.</h2>
        <h2>When I'm not playing Valorant competitively or spending time with my cat Benny, you will find me at my desk beginning a new project. </h2>
        {/* <p>Image generated by NASA's APOD API.</p> */}
      </div>
      <div className="tech-stack-section">
        <h3>Some Things I'm Good At</h3>
      </div>
    </>
  );
}

export default About;
