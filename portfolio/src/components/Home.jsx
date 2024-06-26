import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../index';

function Home() {
  // useEffect(() => {
  //   const timeElement = document.getElementById("clock");

  //   function updateTime() {
  //     const now = new Date();
  //     let hours = now.getHours();
  //     const minutes = now.getMinutes();
  //     const seconds = now.getSeconds();
  //     const ampm = hours >= 12 ? 'pm.' : 'am.';

  //     hours = hours % 12 || 12; 

  //     const clockStr = `${hours.toString()}:${minutes
  //       .toString()
  //       .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

  //     if (timeElement) {
  //       timeElement.innerText = clockStr;
  //     }
  //   }

  //   updateTime();
  //   const intervalId = setInterval(updateTime, 1000);

  //   return () => clearInterval(intervalId); 
  // }, []);

  return (
    <>
      {/* Gradiant blurs for landing page */}
      <section id="up" className="animated-shape up"></section>
      <section id="down" className="animated-shape down"></section>
      <section id="left" className="animated-shape left"></section>
      <section id="right" className="animated-shape right"></section>
      
      <div className="home-section">
        <div className="home-titles">
          <motion.h1 className="intro"
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}>
              Nadia
          </motion.h1>

          <motion.h1 className="main-title"
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}>
              Vespalec.
          </motion.h1>

          <h2>Front-End Developer & Designer.</h2>
        </div>
        <div id="clock"></div>
      </div>
    </>
  );
}

export default Home;
