import React from 'react';

import Header from '../partials/Header';
import ContactView from '../partials/ContactView';
import Footer from '../partials/Footer';
import Newsletter from '../partials/Newsletter';

function Contact() {
  return (
    <div  className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-t from-blitblue-100 via-blitblue-200 to-transparent">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow mt-20">

        {/*  Page sections */}
        <ContactView />
        <Newsletter/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;