

import React from 'react';

import Header from '../partials/Header';
import ContactView from '../partials/ContactView';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';

function Contact() {
  return (
    <div>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

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