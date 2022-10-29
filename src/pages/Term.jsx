import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Terms from '../partials/Terms';

function Term() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Terms />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Term;