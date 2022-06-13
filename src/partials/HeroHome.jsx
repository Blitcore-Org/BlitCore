import React, { useState } from 'react';
import Modal from '../utils/Modal';
import { Link } from 'react-router-dom';

import HeroImage from '../images/hero-image.png';
import image1 from '../images/illustration1.png'
import image2 from '../images/illustration2.png'

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-blitblue-100">

<div className="md:absolute right-20 transform top-10 pointer-events-none" aria-hidden="true">
<img src={image1} /> 
      </div>

      <div className="md:absolute left-20 transform -bottom-0 pointer-events-none" aria-hidden="true">
<img src={image2} /> 
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter lg:text-6xl mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-blitblue-200">BlitCore</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-blittext-100 mb-8" data-aos="zoom-y-out" data-aos-delay="150">We are an OutSourcing Company that Specialize in Building and Maintaing Solutions</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                {/* <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div> */}
                <div>
                  <Link className="btn text-white bg-blitblue-200 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" to="contact">Lets Begin</Link>
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