import React from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";

const NavMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavList = styled.ul`
    padding: 0 0.8em;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavLink = styled(motion.li)`
    font-weight: 300;
    color: white;
    height: 60px;
    display: flex;
    letter-spacing: 0.3em;
    align-items: center;
    cursor: pointer;
    line-height: 5rem;
    margin-top: 60px;
    margin-left: 2.2rem;
    text-transform: uppercase;

    a {
        text-decoration: none;
        color: white;
        font-size: 40px;
        transition: all 200ms ease-in-out; 
    }

    &:hover {
        a {
          color: #e29edf;  
        }
    }
`;

const variants = {
    show: {
        transform: 'translateX(0)',
        opacity: 1
    },
    hide: {
        transform: 'translateX(5em)',
        opacity: 0
    }
}

function MenuNavigation({ isOpen }) {
    return (
      <NavMenuContainer>
        <NavList>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.3, duration: 0.2 },
              },
              hide: {
                ...variants.hide,  
                transition: { delay: 0.05, duration: 0.05 },
              },
            }}
          >
            <a href="#home">Home</a>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.4, duration: 0.2 },
              },
              hide: {
                ...variants.hide,  
                transition: { delay: 0.01, duration: 0.05 },
              },
            }}
          >
            <a href="#works">Works</a>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.5, duration: 0.2 },
              },
              hide: {
                ...variants.hide,  
                transition: { delay: 0.15, duration: 0.05 },
              },
            }}
          >
            <a href="#about">About</a>
          </NavLink>
          <NavLink
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.6, duration: 0.2 },
              },
              hide: {
                ...variants.hide,  
                transition: { delay: 0.2, duration: 0.05 },
              },
            }}
          >
            <a href="#contact">Contact</a>
          </NavLink>
        </NavList>
      </NavMenuContainer>
    );
  }
  

export default MenuNavigation;