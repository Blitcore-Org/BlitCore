import React from 'react';

import Header from '../partials/Header';
import AboutUs from '../partials/AboutUs';
import Footer from '../partials/Footer';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-blitblue-100 ">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <AboutUs />
        <Stack/>
        <Newsletter/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;