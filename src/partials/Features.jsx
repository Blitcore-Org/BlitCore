import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import { Link } from 'react-router-dom';

import FeaturesBg from '../images/50.png';
import FeaturesElement from '../images/50.png';;
import csd1 from '../images/CSD/csd.png'
import qatesting from '../images/QA/qatesting.jpg';
import webdev from '../images/Web/webdiagram.png';
import productdev from '../images/Product/productdev.png'

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
            <p className="text-base text-white">We offer a wide variety of solutions for our clients worldwide. Below you could find the list of solutions we offer for your business</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 " data-aos="fade-right">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
                <h3 className="bg-clip-text text-transparent bg-blitblue-400 h3 mb-3 lg:text-left md:text-left">Powerful suite of tools</h3>
                <p className="text-base text-white lg:text-left md:text-left">We develop custom software development and use the latest technolgies in the market</p>
              </div>

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-base p-5 rounded-large border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <Link to="customsoftwaredev" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blue-600">Custom Software Development</Link>
                    <div className="text-white">We translate unique client requirements into custom software soultions with premium quality and advanced technologies</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-base p-5 rounded-large border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <Link to="webdev" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blue-600">Web Development</Link>
                    <div className="text-white">We revolutionize your business ideas using web development services for innovative and next gen  web applications</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center p-5  rounded-large border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <Link to="productdev" className="text-lg font-bold leading-snug tracking-tight mb-1 hover:text-blitblue-600">UI/UX Design</Link>
                    <div className="text-white">We comprehend clients business ideas and develop innovative software soultions with next the latest technologies</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>

                <a
                  className={`flex items-center p-5  rounded-large border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-blitblue-400 shadow-md border-blitblue-100 hover:shadow-lg' : 'bg-blitblue-300 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <Link to="qa" className="text-lg font-bold leading-snug tracking-tight mb-1">Testing and Quality Assurance</Link>
                    <div className="text-white">We maintain quality assurance by rectifying errors and debugging applications for a high performing application</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
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
                  <img src={csd1} class="max-w-full h-auto rounded-full transform animate-float "/>
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
                        <Link to="customsoftwaredev" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
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
                  <img src={webdev}  class="max-w-full h-auto rounded-full transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">Web Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    <p>We bring revolution to reality. Transforming your custom business ideas into an innovative next-gen web app is our forte. With proven
                    results and promising qualitative deliverables across multiple tech markets.</p>
                    <br/>
                    <p>BlitCore endures their client demands at scale and offers
                    high-quality customized business solutions. Upkeeping with changing client's expectations, our team of qualified web app developers
                    delivers impressive and secure web experience. </p>
                    <br/>
                    <p>Our deep domain expertise combined with technology innovation help clients build
                    disruptive user-friendly web applications with superior customer experience and higher business agility.</p>
                    </div>
                    <br></br>

                    <div className="text-center">
                        <Link to="webdev" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
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
                  <img src={productdev}  class="max-w-full h-auto rounded-full transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">Product Development</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                   <p> To convert your vision into reality, we assist you from software product ideation to design, development, release, and maintenance.
                    Every successful product is unique in its market and with its uniqueness, it brings risk and uncertainties during the software product
                    development process.</p>
                    <br/>
                    <p>
                    We asaleading software product development company conceptualize and strategize the entire roadmap to
                    reduce the risk, keep time and development cost under control and provide high-quality stable product. </p>
                    <br/>
                    <p>With highly collaborative
                    approach, we understand the scope, business scenarios and potential user types to createaproduct with good UX, cloud, data and
                    security as their prime focus.</p>
                    </div>
                    <br></br>

                    <div className="text-center">
                        <Link to="productdev" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
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
                  <img src={qatesting}  class="max-w-full h-auto rounded-full transform animate-float "/>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1 mt-10">
                      <h1 className="text-white font-bold text-2xl">Quality Assurance</h1>
                    </div>
                    <div className="text-white relative inline-flex flex-col text-left">
                    <p>Empower your business for Next-Gen applications by implementing the best software testing methodologies and tools. Our innovative
                    and forward-thinking approach eliminates errors, reduces overall cycle time and minimizes bugs. Keeping clients' customized
                    requirements at the center</p>
                    <br/>
                    <p>We offeracomprehensive set of manual and automated testing services adhering to standard quality
                    assurance for best practices and processes. .</p>
                    <br/>
                    <p>Our dedicated team of resourceful QA engineers perform high-quality QA testing to provide
                    reliable, scalable and robust software solutions</p>
                    </div>
                    <br></br>

                    <div className="text-center">
                        <Link to="qa" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Read More </Link>
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
