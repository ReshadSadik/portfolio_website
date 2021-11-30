import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { animation } from './profile';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/layouts/Home/Home';
import ProjectDetails from './components/layouts/ProjectDetails/ProjectDetails';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/project/:id"
            element={<ProjectDetails></ProjectDetails>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
