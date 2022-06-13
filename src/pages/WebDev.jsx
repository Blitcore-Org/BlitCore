import React from 'react';

import Header from '../partials/Header';
import WebDevView from '../partials/WebDevView';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';
import Us from '../partials/Us';

function WebDev() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-blitblue-100">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <WebDevView />

        <Stack/>
        <Testimonials/>
        <Newsletter/>


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default WebDev;