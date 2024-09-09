import React from 'react';
import './HorizontalMenu.css';
import { Link,NavLink  } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

const HorizontalMenu = () => {
  return (
    <nav className="horizontal-menu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

  );
};

export default HorizontalMenu;