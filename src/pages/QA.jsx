import React from 'react';

import Header from '../partials/Header';
import QAView from '../partials/QAView';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';
import QAProcess from '../partials/QAprocess';

function QA() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <QAView />
        <Stack/>
        <Testimonials/>
        <Newsletter/>



      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default QA;