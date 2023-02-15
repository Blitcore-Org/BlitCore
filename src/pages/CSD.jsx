import React from 'react';

import Header from '../partials/Header';
import CSDView from '../partials/CSDView';
import Footer from '../partials/Footer';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';

function CSD() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <CSDView />
        <Stack/>
        <Newsletter/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default CSD;