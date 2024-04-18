import React, { useState } from 'react';
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

    const languages = ['HTML', 'CSS', 'SASS', 'PHP', 'React.js', 'JavaScript', 'Liquid'];
    const developmentTools = ['MySQL', 'FTP', 'NPM', 'Rest API', 'WordPress', 'Shopify', 'Headless CMS', 'Styled Components', 'In-line CSS', 'Framer Motion', 'WooCommerce'];
    const designTools = ['Figma', 'Adobe XD', 'Procreate', 'Photoshop', 'Illustrator', 'Canva'];
    const videoGames = ['Valorant', 'Genshin Impact', 'Honkai: Star Rail', 'Project Sekai', 'Osu!', 'Stardew Valley', 'ACNH', 'Minecraft', 'Call of Duty'];
    const hobbies = ['Baking', 'VolleyBall', 'Swimming', 'Dancing', 'Making Spotify Playlists', 'Scrolling on Pinterest', 'Collecting Cute Items', 'Digital Art'];

    const renderListItems = (items) => {
        return items.map((item, index) => (
            <span key={index} className='skill-items'>
                {item}
                {index !== items.length - 1 ? ' ' : ''}
            </span>
        ));
    };

    return (
        <div className='tabs-wrapper'>
            <div className='column-tabs'>
                <ul className='ul-tabs'>
                    <li onClick={()=>updateToggle(1)}><img src={languageIcon} alt="Icon to represent languages" className="lang-icon" width="40px"/></li>
                    <li onClick={()=>updateToggle(2)}><img src={codingIcon} alt="Icon to represent development tools" className="coding-icon" width="40px"/></li>
                    <li onClick={()=>updateToggle(3)}><img src={designIcon} alt="Icon to represent design tools" className="design-icon" width="40px"/></li>
                    <li onClick={()=>updateToggle(4)}><img src={gameIcon} alt="Icon to represent languages" className="game-icon" width="40px"/></li>
                    <li onClick={()=>updateToggle(5)}><img src={starIcon} alt="Icon to represent hobbies" className="star-icon" width="40px"/></li>
                </ul>

                <div className={toggle === 1 ? "show-content" : "tabs-content"}>
                    <h2>Languages</h2>
                    <p className='list-render'>{renderListItems(languages)}</p>
                </div>

                <div className={toggle === 2 ? "show-content" : "tabs-content"}>
                    <h2>Development Tools</h2>
                    <p className='list-render'>{renderListItems(developmentTools)}</p>
                </div>

                <div className={toggle === 3 ? "show-content" : "tabs-content"}>
                    <h2>Design Tools</h2>
                    <p className='list-render'>{renderListItems(designTools)}</p>
                </div>
                <div className={toggle === 4 ? "show-content" : "tabs-content"}>
                    <h2>Video Games</h2>
                    <p className='list-render'>{renderListItems(videoGames)}</p>
                </div>
                <div className={toggle === 5 ? "show-content" : "tabs-content"}>
                    <h2>Hobbies</h2>
                    <p className='list-render'>{renderListItems(hobbies)}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutTabs;


