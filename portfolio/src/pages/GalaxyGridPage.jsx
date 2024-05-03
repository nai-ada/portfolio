import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../index';
import figmaIcon from '/images/figma.png';
import jsIcon from '/images/javascript.png';
import htmlIcon from '/images/html.png';
import cssIcon from '/images/css.png';
import galaxyVid from '/media/galaxy-grid-gameplay.mp4';
import galaxyCode from '/images/galaxy-grid-code.png';


const GalaxyGridPage = () => {
  const [showTools, setShowTools] = useState(false);

  const tools = [
    { name: 'Figma', icon: figmaIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'HTML', icon: htmlIcon }
  ];

  return (
    <div className="galaxy-grid-page">
      <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="galaxy-description"
      >
        <h1>Galaxy Grid</h1>

        <h3>Project Overview</h3>
        <h2>
          Galaxy Grid is an exciting browser-based tic-tac-toe game built entirely with JavaScript. Set in a galactic theme, players engage in classic tic-tac-toe battles against a CPU opponent, navigating through a visually stunning grid.
        </h2>

        <h3>Project Takeaway</h3>
        <h2>
          Through the development process of Galaxy Grid, I gained invaluable insights into JavaScript, deepening my understanding of its core concepts and functionalities. From implementing game logic to handling user interactions, every aspect of the project served as a learning opportunity, honing my problem-solving skills and strengthening my grasp of JavaScript programming.
        </h2>

        <h3 onClick={() => setShowTools(!showTools)} style={{ cursor: 'pointer' }}>Tools Used</h3>
        {showTools && (
          <div className='tools-list-render'>
            {tools.map((tool, index) => (
              <div key={index}>
                <img src={tool.icon} alt={`Icon for ${tool.name}`} width="40px" />
              </div>
            ))}
          </div>
          
        )}
      </motion.div>
      <video muted autoPlay loop style={{ width: '40%' }}>
        <source src={galaxyVid} type="video/mp4"/>
      </video>
      <h3>Code</h3>
      <h2></h2>
      <img src={galaxyCode} alt={`Snippet of code for Galaxy Grid Game`} width="25%"/>
    </div>
  );
};

export default GalaxyGridPage;
