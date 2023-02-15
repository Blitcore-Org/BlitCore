import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Services from '../partials/Services';
import HowItWorks from '../partials/HowItWorks';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import FAQ from '../partials/FAQ';
import Team from '../partials/Team';
import WhyBlit from '../partials/WhyBlit';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-t from-blitblue-100 via-blitblue-200 to-transparent">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Services />
        <HowItWorks />
        <WhyBlit/>
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