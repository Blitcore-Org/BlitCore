import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blitcoreDiagram from '../images/Diagrams/blitcore_diagram.svg';
import blitcoreMobile from '../images/Diagrams/blitcore_mobile.svg';


function HeroHome() {


  return (
    <section className="z-10 relative h-[480px] sm:h-auto md:h-auto lg:h-auto">

      <div className="flex items-center justify-center sm:relative" aria-hidden="true">
        <img className="blitDiag invisible sm:visible absolute top-12 w-max" src={blitcoreDiagram} /> 
        <img className="blitDiag visible sm:invisible md:invisible lg:invisible absolute top-2 w-max" src={blitcoreMobile} /> 
      </div>

      <div className="z-10 max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Hero content */}
        <div className="z-10 heroContent pt-32 pb-12 md:pt-40 md:pb-20">
          
          {/* Section header */}
          <div className="heroContent text-center pb-12 md:pb-16">
            <h1 className="heroContent text-Bxl lg:text-5xl font-extrabold leading-tighter tracking-tighter lg:text-5xl mb-4 text-center" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">BlitCore</span></h1>
            <div className="heroContent max-w-3xl mx-auto">
              <p className="heroContent text-base text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">We design, build and Scale Software</p>
              <div className="heroContent max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link className="rounded-full btn text-white font-bold bg-blitblue-400 hover:bg-blitblue-500 hover:text-blitblue-100 w-full sm:w-auto sm:ml-4" to="contact">Lets Begin</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    
  );
}

export default HeroHome;