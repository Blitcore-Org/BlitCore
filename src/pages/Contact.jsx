

import React from 'react';

import Header from '../partials/Header';
import ContactView from '../partials/ContactView';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';

function Contact() {
  return (
    <div  className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow mt-20">

        {/*  Page sections */}
        <ContactView />
        <Stack/>
        <Testimonials/>
        <Newsletter/>



      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;