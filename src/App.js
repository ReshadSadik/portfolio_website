import React, { useEffect } from 'react';
import Particles from './components/layouts/Particles';
import Header from './components/section/Header';
import About from './components/section/About';
import Works from './components/section/Works';
import Contact from './components/section/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animation } from './profile';
import Blog from './components/section/Blog/Blog';

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Works />
      <Blog></Blog>
      <Contact />
    </div>
  );
}

export default App;
