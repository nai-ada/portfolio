import { React } from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../index';

function About() {
  
  return (
    <>
      <div className="about-section" id="about">
          <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.7}}>

            <h1>As A Dev...</h1>
            <h3>I'm always learning something new.</h3>
            <h2>Astronomy Nerd. Video Game Lover. Amateur Digital Artist. Lover of all things pink. Iced Matcha Latte Enthusiast. INFP.</h2>
            <h2>As a developer skilled in both technical expertise and creative abilities, I am on a mission to design user-friendly websites that are both distinctive and intuitive for all users.</h2>
            <h2>When I'm not playing Valorant competitively or spending time with my cat Benny, you will find me at my desk beginning another exciting project. </h2>

          </motion.div>
      </div>
      
    </>
    
  );
}

export default About;