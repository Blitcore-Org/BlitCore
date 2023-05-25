import React from 'react';

import Header from '../partials/Header';
import Portfolio from '../partials/Portfolio';
import Footer from '../partials/Footer';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';

function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-t from-blitblue-100 via-blitblue-200 to-transparent">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Portfolio />
        <Stack/>
        <Newsletter/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default PortfolioPage;