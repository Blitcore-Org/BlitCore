import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import FAQ from '../partials/FAQ';
import Services from '../partials/Services';
import Team from '../partials/Team';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-blitblue-100">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Services/>
        <Team/>
        <FAQ/>

        <Newsletter/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;