import React from 'react';

import Header from '../partials/Header';
import ProductDevView from '../partials/ProductDevView';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';

function ProductDev() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <ProductDevView />
        <Stack/>
        <Testimonials/>
        <Newsletter/>


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default ProductDev;