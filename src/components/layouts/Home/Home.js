import React from 'react';
import About from '../../section/About';
import Blog from '../../section/Blog/Blog';
import Contact from '../../section/Contact';
import Header from '../../section/Header';
import Works from '../../section/Works';
import ParticlesBackground from '../Particles';

const Home = () => {
  return (
    <div>
      <Header />
      <ParticlesBackground />
      <About />
      <Works />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
