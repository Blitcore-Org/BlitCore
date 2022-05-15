import React from 'react';

import Header from '../partials/Header';
import ProductDevView from '../partials/ProductDevView';
import Footer from '../partials/Footer';

function ProductDev() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <ProductDevView />


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default ProductDev;