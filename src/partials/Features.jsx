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


function Features() {

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
    <section className="relative">

      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-blitblue-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter lg:text-4xl mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-blitblue-400">Explore Our Services</span></h1>
            <p className="text-base text-white">We offer a wide variety of solutions for our clients worldwide. Below you could find the list of solutions we offer for you</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
                <h3 className="bg-clip-text text-transparent bg-blitblue-400 h3 mb-3 lg:text-left md:text-left">Powerful suite of tools</h3>
                <p className="text-base text-white lg:text-left md:text-left">We develop custom software development and use the latest technolgies in the market</p>
              </div> */}

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-base p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 1 ? 'bg-blitblue-400 shadow-md border-blitblue-100' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <Link to="#" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">Custom Software Development</Link>
                    <div className="text-white">We translate unique client requirements into custom software soultions with premium quality and advanced technologies</div>
                  </div>
                    <img src={csdIcon}  class="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </a>
                <a
                  className={`flex items-center text-base p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 2 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <Link to="#" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">Web Development</Link>
                    <div className="text-white">We revolutionize your business ideas using web development services for innovative and next gen  web applications</div>
                  </div>
                  <img src={webdevIcon}  class="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </a>
                <a
                  className={`flex items-center p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 3 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <Link to="#" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">UI/UX Design</Link>
                    <div className="text-white">We comprehend clients business ideas and develop innovative software soultions with next the latest technologies</div>
                  </div>
                  <img src={uiIcon}  class="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </a>

                <a
                  className={`flex items-center text-base p-5 hover:text-blitblue-100 rounded-large border transition duration-300 ease-in-out mb-10 ${tab !== 4 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <Link to="#" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-500">Search Engine Optimization</Link>
                    <div className="text-white">We maintain quality assurance by rectifying errors and debugging applications for a high performing application</div>
                  </div>
                  <img src={seoIcon}  class="flex justify-center w-8 h-8 items-center rounded-full flex-shrink-0 ml-3"/>
                </a>
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
                  <img src={csd} class="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-lg">Custom Software Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    The custom software development process encompasses designing, developing, 
                    deploying, and maintaining custom software solutions and services. 
                    As a leading custom software development company, our domain experts explicate 
                    the client's views and accordingly draft astrategic approach to optimize each process 
                    of the Software development life cycle. 
                    </div>

                    <br></br>

                    <div className="text-center">
                        <Link to="customsoftwaredev" class="text-blitblue-100 hover:text-blitblue-100 bg-gradient-to-r from-blitblue-500 to-blitblue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
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
                  <img src={webdev}  class="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">Web Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    <p>We bring revolution to reality. Transforming your custom business ideas into an innovative next-gen web app is our forte. With proven
                    results and promising qualitative deliverables across multiple tech markets.</p>
                    <br/>
                    </div>
                    <br></br>

                    <div className="text-center">
                      <Link to="customsoftwaredev" class="text-blitblue-100 hover:text-blitblue-100 bg-gradient-to-r from-blitblue-500 to-blitblue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
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
                  <img src={uidiag}  class="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">UI/UX Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                   <p> To convert your vision into reality, we assist you from software product ideation to design, development, release, and maintenance.
                    Every successful product is unique in its market and with its uniqueness, it brings risk and uncertainties during the software product
                    development process.</p>
                    <br/>
                    </div>
                    <br></br>

                    <div className="text-center">
                      <Link to="customsoftwaredev" class="text-blitblue-100 hover:text-blitblue-100 bg-gradient-to-r from-blitblue-500 to-blitblue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
                    </div>
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
                  <img src={seodiag}  class="max-w-full h-auto transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">Search Engine Optimization</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    <p>Our cutting-edge, targeted solutions help you attract the right customers, convert leads and grow your business.</p>
                    <br/>
                    <p>We offer the full range of SEO services and have a proven track record of success with local, national and enterprise SEO campaigns.</p>
                    </div>
                    <br></br>

                    <div className="text-center">
                      <Link to="customsoftwaredev" class="text-blitblue-100 hover:text-blitblue-100 bg-gradient-to-r from-blitblue-500 to-blitblue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
                    </div> 
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

export default Features;
