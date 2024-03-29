import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';
import './css/style2.css';


import AOS from 'aos';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/PortfolioPage';
import CSD from './pages/CSD';
import WebDev from './pages/WebDev';
import Consult from './pages/Consultation';
import Contact from './pages/Contact';
import SoftwareDevPage from './pages/sub_pages/SoftwareDevPage';
import Term from './pages/Term';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="customsoftwaredev" element={<CSD />} />
        <Route exact path="webdev" element={<WebDev />} />
        <Route exact path="softwaredev" element={<SoftwareDevPage />} />
        <Route exact path="/book" element={<Consult/>} />
        <Route exact path="/terms" element={<Term />} />
      </Routes>
    </>
  );
}

export default App;
