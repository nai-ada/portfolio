import React from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../index';

function Home() {

  return (
    <>
    <section id="up" className="animated-shape up"></section>
    <section id="down" className="animated-shape down"></section>
    <section id="left" className="animated-shape left"></section>
    <section id="right" className="animated-shape right"></section>
    <section id="up-2" className="animated-shape up-2"></section>
    <section id="down-2" className="animated-shape down-2"></section>
    <section id="left-2" className="animated-shape left-2"></section>
    <section id="right-2" className="animated-shape right-2 "></section>
    

      <div className="home-section">
        <div className="home-titles">
        <motion.h1 className="intro"
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >Nadia</motion.h1>
        <motion.h1 className="main-title"
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        >Vespalec.</motion.h1>
        <h2>Front-End Developer & Designer.</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
