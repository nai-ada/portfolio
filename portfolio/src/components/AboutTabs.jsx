import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../index';
import codingIcon from '/images/coding-icon.png';
import designIcon from '/images/design-icon.png';
import languageIcon from '/images/language-icon.png';
import gameIcon from '/images/videogame-icon.png';
import starIcon from '/images/star-icon.png';

function AboutTabs() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const languages = [
    'HTML',
    'CSS',
    'SASS',
    'PHP',
    'React.js',
    'JavaScript',
    'Liquid',
  ];
  const developmentTools = [
    'MySQL',
    'FTP',
    'NPM',
    'Rest API',
    'WordPress',
    'Shopify',
    'Headless CMS',
    'Styled Components',
    'In-line CSS',
    'Framer Motion',
    'WooCommerce',
  ];
  const designTools = [
    'Figma',
    'Adobe XD',
    'Procreate',
    'Photoshop',
    'Illustrator',
    'Canva',
  ];
  const videoGames = [
    'Valorant',
    'Genshin Impact',
    'Honkai: Star Rail',
    'Project Sekai',
    'Osu!',
    'Stardew Valley',
    'ACNH',
    'Minecraft',
    'Call of Duty',
  ];
  const hobbies = [
    'Baking',
    'VolleyBall',
    'Swimming',
    'Dancing',
    'Making Spotify Playlists',
    'Scrolling on Pinterest',
    'Collecting Cute Items',
    'Digital Art',
  ];

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <span key={index} className="skill-items">
        {item}
        {index !== items.length - 1 ? ' ' : ''}
      </span>
    ));
  };

  return (
    <div className="tabs-wrapper">
      <motion.h3
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
        What's my Tech Stack?
      </motion.h3>

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="column-tabs"
      >
        <ul className="ul-tabs">
          <li
            className={`${toggle == 1 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(1)}
          >
            <img
              src={languageIcon}
              alt="Icon to represent languages"
              className="lang-icon"
              width="40px"
            />
          </li>
          <li
            className={`${toggle == 2 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(2)}
          >
            <img
              src={codingIcon}
              alt="Icon to represent development tools"
              className="coding-icon"
              width="40px"
            />
          </li>
          <li
            className={`${toggle == 3 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(3)}
          >
            <img
              src={designIcon}
              alt="Icon to represent design tools"
              className="design-icon"
              width="40px"
            />
          </li>
          {/* <li
            className={`${toggle == 4 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(4)}
          >
            <img
              src={gameIcon}
              alt="Icon to represent games"
              className="game-icon"
              width="40px"
            />
          </li>
          <li
            className={`${toggle == 5 ? 'highlighted-tab' : ''}`}
            onClick={() => updateToggle(5)}
          >
            <img
              src={starIcon}
              alt="Icon to represent hobbies"
              className="star-icon"
              width="40px"
            />
          </li> */}
        </ul>

        <div className={`tabs-content ${toggle === 1 && 'show-content'} `}>
          <h2>Languages</h2>
          <p className="list-render">{renderListItems(languages)}</p>
        </div>

        <div className={`tabs-content ${toggle === 2 && 'show-content'} `}>
          <h2>Development Tools</h2>
          <p className="list-render">{renderListItems(developmentTools)}</p>
        </div>

        <div className={`tabs-content ${toggle === 3 && 'show-content'} `}>
          <h2>Design Tools</h2>
          <p className="list-render">{renderListItems(designTools)}</p>
        </div>
        {/* <div className={`tabs-content ${toggle === 4 && "show-content"} `}>

                    <h2>Video Games</h2>
                    <p className='list-render'>{renderListItems(videoGames)}</p>
                </div> */}
        {/* <div className={`tabs-content ${toggle === 5 && "show-content"} `}>

                    <h2>Hobbies</h2>
                    <p className='list-render'>{renderListItems(hobbies)}</p>
                </div> */}
      </motion.div>
    </div>
  );
}

export default AboutTabs;
