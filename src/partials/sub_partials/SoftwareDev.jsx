import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';


import FeaturesElement from '../../images/50.png';;

function SoftwareDev() {

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

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Software Development</h1>
            <p className="text-xl text-gray-600">We offer a wide variety of solutions for our clients worldwide. Below you could find the list of solutions we offer for your business</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">We develop custom software development and use the latest technolgies in the market</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Custom Software Development</div>
                    <div className="text-gray-600">We translate unique client requirements into custom software soultions with premium quality and advanced technologies</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Web Development</div>
                    <div className="text-gray-600">We revolutionize your business ideas using web development services for innovative and next gen  web applications</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Product Development</div>
                    <div className="text-gray-600">We comprehend clients business ideas and develop innovative software soultions with scalable product architecture</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>

                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Testing and Quality Assurance</div>
                    <div className="text-gray-600">We maintain quality assurance by rectifying errors and debugging applications for a high performing application</div>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1">
                      <h1 className="font-bold text-2xl">Custom Software Development</h1>
                    </div>
                    <br></br>
                    <div className="relative inline-flex flex-col text-left">
                    The custom software development process encompasses designing, developing, 
                    deploying, and maintaining custom software solutions and services. 
                    Asaleading custom software development company, our domain experts explicate 
                    the client's views and accordingly draft astrategic approach to optimize each process 
                    of the Software development life cycle. Our dynamic team of skilled software developers, 
                    architects and project managers coupled with industry-driven experience providesasolid 
                    foundation to develop agile custom software solutions with consistently high-quality results, 
                    dedicated QA practices that match specific business needs, budget, and time.
                    </div>

                    <br></br>

                    <div className="relative inline-flex flex-col text-left">
                    <ul class="list-disc relative">
                      <li className=" relative w-full left-10 text-blue-600 ">Software Development</li>
                      <li className=" relative w-full left-10 text-blue-600">Application Migration and Re-engineering</li>
                      <li className=" relative w-full left-10 text-blue-600">Software Application Development</li>
                      <li className=" relative w-full left-10 text-blue-600">SASS Applications</li>
                      <li className=" relative w-full left-10 text-blue-600">Application Integration</li>
                    </ul>
                    </div>

                    <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none absolute w-full right-10 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1">
                      <h1 className="font-bold text-2xl">Web Development</h1>
                    </div>
                    <br></br>
                    <div className="relative inline-flex flex-col text-left">
                    We bring revolution to reality. Transforming your custom business ideas into an innovative next-gen web app is our forte. With proven
                    results and promising qualitative deliverables across multiple tech markets, TatvaSoft endures their client demands at scale and offers
                    high-quality customized business solutions. Upkeeping with changing client's expectations, our team of qualified web app developers
                    delivers impressive and secure web experience. Our deep domain expertise combined with technology innovation help clients build
                    disruptive user-friendly web applications with superior customer experience and higher business agility.
                    </div>
                    <br></br>

                    <div className="relative inline-flex flex-col text-left">
                    <ul class="list-disc relative">
                      <li className=" relative w-full left-10 text-blue-600 ">Front-End Web Development</li>
                      <li className=" relative w-full left-10 text-blue-600">Back-End Web Development</li>
                      <li className=" relative w-full left-10 text-blue-600">Progressive Web Applications</li>
                      <li className=" relative w-full left-10 text-blue-600">SASS Applications</li>
                      <li className=" relative w-full left-10 text-blue-600">Custom Web Application Services</li>
                    </ul>
                    </div>
                    <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none absolute w-full right-10 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1">
                      <h1 className="font-bold text-2xl">Product Development</h1>
                    </div>
                    <br></br>
                    <div className="relative inline-flex flex-col text-left">
                    To convert your vision into reality, we assist you from software product ideation to design, development, release, and maintenance.
                    Every successful product is unique in its market and with its uniqueness, it brings risk and uncertainties during the software product
                    development process. We asaleading software product development company conceptualize and strategize the entire roadmap to
                    reduce the risk, keep time and development cost under control and provide high-quality stable product. With highly collaborative
                    approach, we understand the scope, business scenarios and potential user types to createaproduct with good UX, cloud, data and
                    security as their prime focus.
                    </div>
                    <br></br>

                    <div className="relative inline-flex flex-col text-left">
                    <ul class="list-disc relative">
                      <li className=" relative w-full left-10 text-blue-600 ">MVP and Prototyping</li>
                      <li className=" relative w-full left-10 text-blue-600">Product Architecture</li>
                      <li className=" relative w-full left-10 text-blue-600">Product Development and Deployment</li>
                      <li className=" relative w-full left-10 text-blue-600">Product Testing</li>
                      <li className=" relative w-full left-10 text-blue-600">UX/UI Services</li>
                    </ul>
                    </div>
                    <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none absolute w-full right-10 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="font-bold leading-snug tracking-tight text-left mb-1">
                      <h1 className="font-bold text-2xl">Quality Assurance</h1>
                    </div>
                    <br></br>
                    <div className="relative inline-flex flex-col text-left">
                    Empower your business for Next-Gen applications by implementing the best software testing methodologies and tools. Our innovative
                    and forward-thinking approach eliminates errors, reduces overall cycle time and minimizes bugs. Keeping clients' customized
                    requirements at the center, we offeracomprehensive set of manual and automated testing services adhering to standard quality
                    assurance for best practices and processes. Our dedicated team of resourceful QA engineers perform high-quality QA testing to provide
                    reliable, scalable and robust software solutions.
                    </div>
                    <br></br>

                  <div className="relative inline-flex flex-col text-left">
                  <ul class="list-disc relative">
                    <li className=" relative w-full left-10 text-blue-600 ">Performance Testing</li>
                    <li className=" relative w-full left-10 text-blue-600">Security Testing</li>
                    <li className=" relative w-full left-10 text-blue-600">Compatibilty Testing</li>
                    <li className=" relative w-full left-10 text-blue-600">Mobile App Testing</li>
                    <li className=" relative w-full left-10 text-blue-600">Functional Testing</li>
                  </ul>
                  </div>
                    <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none absolute w-full right-10 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
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

export default SoftwareDev;
