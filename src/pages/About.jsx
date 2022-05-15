import React from 'react';

import Header from '../partials/Header';
import AboutUs from '../partials/AboutUs';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <AboutUs />


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;