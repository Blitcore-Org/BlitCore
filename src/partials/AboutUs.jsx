import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

function AboutUs() {
  return (
    <section className="relative">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0  bg-blitblue-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
            <h1 className="text-Axl lg:text-5xl font-bold mt-12 text-blitblue-400 pb-10">About Us</h1>
          </div>

          <div className="max-w-3xl mx-auto h-96 all text-center pb-12 md:pb-16">
              <div id="stack1" class="card-container px-auto left-[15%] sm:left-32 md:left-32 lg:left-32 h-96 relative w-96 start">
                <div id="card1" class="card relative flex flex-col items-center p-6 bg-blitblue-500 rounded-large shadow-xl border-2 border-blitblue-400 card1">
                  <h1 className="text-lg font-extrabold text-blitblue-100">Who we are</h1>

                  <p className="text-white">
                  We are a Consummate Custom Software Development company delivering
              splendid business IT Solutions and related services to customers
              across the globe..Our proficiency in understanding
              business challenges and professional competence allows us to
              createabetter experience for our customers.
                  </p>
                </div>

                <div id="card2" class="card relative flex flex-col items-center p-6 bg-blitblue-500 rounded-large shadow-xl border-2 border-blitblue-400 card2">
                  <h1 className="text-lg font-extrabold text-blitblue-100">What we do</h1>

                  <p className="text-white">
                  We specialize in Software development for small and large businesses.
                  We have successfully served for more than 50+
                  success stories ranging from Enterprise level to Start-ups,who
                  have grown alongside the success of the company.
                  </p>
                </div>

                <div id="card3" class="card relative flex flex-col items-center p-6 bg-blitblue-500 rounded-large shadow-xl border-2 border-blitblue-400 card3">
                  <h1 className="text-lg font-extrabold text-blitblue-100">Why we differ</h1>

                  <p className="text-white">
                  At present we are a Robust Team having diverse skills with more.
                  than 10+ years of Technology experience engaging with customers at
                  Deeper level to provide cutting edge solutions and innovations.
                  </p>
                </div>
              </div>
          </div>





          {/* Section One */}
          {/* <div className="relative inline-flex flex-col text-center ">
          <h1 className="h2 mt-12 text-blitblue-400">Who We Are</h1>
            <p className="text-blittext-100 leading-relaxed">
              We are a Consummate Custom Software Development company delivering
              splendid business IT Solutions and related services to customers
              across the globe. Our development services are led by our
              dedicated and passionate team to provide best industry practices
              combined with technology expertise and business domain knowledge
              to drive digital transformation.Our proficiency in understanding
              business challenges and professional competence allows us to
              createabetter experience for our customers.
            </p>

            <h1 className="h2 mt-12 text-blitblue-400">What We Do</h1>
            <p className="text-blittext-100 leading-relaxed mt-5">
              We have emerged and marked our presence in different continents by
              providing Bespoke software development services to all major
              Industry Domains. We have successfully served for more than 1800
              success stories ranging from Enterprise level to Start-ups,who
              have grown alongside the success of the company.
            </p>

            <h1 className="h2 mt-12 text-blitblue-400">What Makes Us Different</h1>
            <p className="text-blittext-100 leading-relaxed mt-5">
              At present we areaRobust Team having diverse skills with more.
              than 18+ years of Technology experience engaging with customers at
              Deeper level to provide cutting edge solutions and innovations.
            </p>
          </div> */}


          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl mt-32 md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-24"
              data-aos="fade-right"
            ></div>
          </div>

        </div>


        <div className="relative max-w-screen-xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pricing-box max-w-lg mx-auto rounded-2xl shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div className="bg-blitblue-200 px-6 py-8 lg:flex-shrink-1 lg:p-12">
              <h3 className="text-2xl leading-8 font-extrabold text-blitblue-500 sm:text-3xl sm:leading-9">
                Our Achievements
              </h3>
              <p className="mt-6 text-base leading-6 text-blittext-100">
                Our company works with a team of high ranking developers, we are
                proud to have worked and offered our services with both
                corporate and commercial companies worldwide.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <h4 className="flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-blitblue-500">
                    Know a little more about us
                  </h4>
                  <div className="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        fill="#0CB9FB"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-blittext-100">
                      We were founded in 2022.
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        fill="#0CB9FB"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-blittext-100">
                      Over 1000+ completed projects
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        fill="#0CB9FB"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-blittext-100">
                      97 Percent Customer Retention Rate
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        fill="#0CB9FB"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-blittext-100">
                      More than 35 Countries served worldwide
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-12 md:gap-6">
          {/* Content */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            {/* Tabs buttons */}

            <div className="mb-8 md:mb-0">
              <div></div>
            </div>
          </div>

          {/* Tabs items */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
            <div className="relative flex flex-col text-center lg:text-right">
              {/* Item 1 */}

              <div className="relative inline-flex flex-col">
                <br></br>

                <br></br>

                <div className="relative inline-flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
