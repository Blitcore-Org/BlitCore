import React from 'react';

import Header from '../partials/Header';
import AboutUs from '../partials/AboutUs';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';
import Us from '../partials/Us';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <AboutUs />
        <Us/>
        <Stack/>

        <Testimonials/>
        <Newsletter/>



      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;