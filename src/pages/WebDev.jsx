import React from 'react';

import Header from '../partials/Header';
import WebDevView from '../partials/WebDevView';
import Footer from '../partials/Footer';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';

function WebDev() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <WebDevView />

        <Stack/>
        <Newsletter/>


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default WebDev;