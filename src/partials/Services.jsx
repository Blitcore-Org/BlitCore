import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import { Link } from 'react-router-dom';

import csd from '../images/Diagrams/customSoftwareDiagram.svg'
import seodiag from '../images/Diagrams/seoDiagram.svg';
import webdev from '../images/Diagrams/webDevDiagram.svg';
import uidiag from '../images/Diagrams/uiDiagram.svg';

import csdIcon from '../images/Services_Icons/csdIcon.svg';
import seoIcon from '../images/Services_Icons/seoIcon.svg';
import webdevIcon from '../images/Services_Icons/webdevIcon.svg';
import uiIcon from '../images/Services_Icons/uiIcon.svg';


function Services() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative mt-44">

      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-24 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter lg:text-4xl mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-blitblue-400">Explore Our Services</span></h1>
            <p className="text-base text-white">We offer a wide variety of solutions for our clients worldwide. Below you could find the list of solutions we offer for you</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div
                  className={`h-46 flex items-center text-base p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 1 ? 'bg-blitblue-400 shadow-md border-blitblue-100' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <Link to="customsoftwaredev" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">Custom Software Development</Link>
                    <div className="text-white">Design and build custom software solutions that meet your unique needs and provide a seamless user experience</div>
                  </div>
                    <img src={csdIcon} className="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </div>
                <div
                  className={`h-46 min-h-64 flex items-center text-base p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 2 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <Link to="webdev" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">Web Development</Link>
                    <div className="text-white">Establish a strong online presence with visually appealing and user-friendly websites.</div>
                  </div>
                  <img src={webdevIcon}  className="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </div>
                <div
                  className={`h-46 flex items-center p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 3 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <Link to="#" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">UI/UX Design</Link>
                    <div className="text-white">Create an amazing user experience with visually appealing and user-friendly interfaces.</div>
                  </div>
                  <img src={uiIcon} className="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </div>

                <div
                  className={`h-46 flex items-center text-base p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 4 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <Link to="#" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">Search Engine Optimization</Link>
                    <div className="text-white">Improve your website's visibility and ranking on search engines with our expert optimization services."</div>
                  </div>
                  <img src={seoIcon} className="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <img src={csd} className="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-lg">Custom Software Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    We design and build custom software solutions that meet your unique business needs and provide a seamless user experience. 
                    Our team has extensive experience in developing software tailored to your requirements, and we focus heavily on design and user experience.
                    </div>

                    <br></br>

                    <div className="text-center">
                        <Link to="customsoftwaredev" className="text-white hover:bg-blitblue-500 hover:text-blitblue-100 bg-blitblue-400 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
                    </div>

                    <div className="relative inline-flex flex-col">
                  </div>
                  </div>

                  

                  
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <img src={webdev}  className="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">Web Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    <p>We help establish your online presence with visually appealing and user-friendly websites. 
                    Our team focuses on both functionality and design to create websites that engage and delight your users. 
                    Whether you need a simple brochure-style website or a complex web application, we bring your vision to life.</p>
                    <br/>
                    </div>
                    <br></br>

                    <div className="text-center">
                        <Link to="webdev" className="text-white hover:bg-blitblue-500 hover:text-blitblue-100 bg-blitblue-400 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
                    </div>
                    <div className="relative inline-flex flex-col">
                  </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <img src={uidiag} className="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">UI/UX Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                      <p> We prioritize user engagement by creating visually appealing and user-friendly interfaces with a streamlined development process. 
                      Our designers use user research and analytics to inform their designs and ensure easy user engagement. 
                      Our goal is to provide an amazing user experience.</p>
                    <br/>
                    </div>
                    <br></br>

                    <div className="relative inline-flex flex-col">
                  </div>
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                  <img src={seodiag} className="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">Search Engine Optimization</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    <p>Our team of experts optimizes your website for search engines using the latest best practices and algorithms. 
                    We offer free consultation to help boost your website's SEO and drive traffic. Our goal is to increase your online visibility and help you achieve your business objectives.</p>
                    </div>
                    <br></br>

                    <div className="relative inline-flex flex-col">
                  </div>
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Services;
