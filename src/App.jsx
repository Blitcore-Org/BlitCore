import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import CSD from './pages/CSD';
import WebDev from './pages/WebDev';
import ProductDev from './pages/ProductDev';
import QA from './pages/QA';
import Consult from './pages/Consultation';
import Contact from './pages/Contact';
import SoftwareDevPage from './pages/sub_pages/SoftwareDevPage'

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
        <Route path="/about" element={<About />} />
        <Route exact path="customsoftwaredev" element={<CSD />} />
        <Route exact path="webdev" element={<WebDev />} />
        <Route exact path="productdev" element={<ProductDev />} />
        <Route exact path="qa" element={<QA />} />
        <Route exact path="softwaredev" element={<SoftwareDevPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="book" element={<Consult/>} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
