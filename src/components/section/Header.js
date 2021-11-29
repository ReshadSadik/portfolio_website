import React from 'react';
import HeaderButton from '../layouts/HeaderButton';
import { header } from '../../profile';
import '../../styles/no-touch.min.css';

const Header = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = (e) => {
    document.documentElement.classList.toggle('dark-mode');
    document.getElementById('not-dark').classList.toggle('inverse-dark');
    document.getElementById('not-dark2').classList.toggle('inverse-dark');
    var x = document.getElementsByClassName('img-pro');
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle('inverse-dark');
    }

    if (document.documentElement.classList.contains('dark-mode'))
      localStorage.setItem('mode', 'Dark');
    else localStorage.setItem('mode', 'Light');
  };

  return (
    <div>
      <div className="Header">
        <h1 className="">{`A Front End WebDeveloper`}</h1>
        <p className="line-1 anim-typewriter">and this is my portfolio... </p>
        <label className="switch">
          <input
            id="mode-switch"
            onClick={(e) => toggleDarkMode(e)}
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
        <HeaderButton />
      </div>
      <button
        id="not-dark"
        onClick={scrollTo}
        title="Contact Me"
        className="gtp"
      >
        Contact Me
      </button>
      <a
        className="cv-btn"
        href="https://drive.google.com/u/0/uc?id=1S9imuw2mSuLkaJYG3c__OBejefmcVeid&export=download"
        download
      >
        <button className="cv">Download CV</button>
      </a>
      {/* <button className="cv" > <a href="" download>Download CV</a> </button> */}
    </div>
  );
};

export default Header;