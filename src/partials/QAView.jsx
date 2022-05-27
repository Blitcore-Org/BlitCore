import React, { useState, useRef, useEffect } from "react";

import FeaturesElement from "../images/image123.jpg";


import quality from "../images/QA/quality.png";
import time from "../images/QA/fast.png";
import cost from "../images/QA/cost.png";
import qa from "../images/QA/qatesting.jpg"
import qatop from "../images/QA/qatop.png"

function CSDView() {
  return (
    <section className="relative">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section One */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mt-12">Quality Assurance and Testing</h1>
          </div>

          <div>
            <p className="text-xl mt-6 text-gray-600 text-center">
              Changing Dreams Into Reality
            </p>
          </div>

          <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h4 mt-6 mb-4">
            </h1>
          </div>

          {/* Section content */}

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}

              <div className="mb-8 md:mb-0">
                <div>
                  <img
                    className=" w-full"
                    src={qatop}
                    width="300"
                    height="44"
                    alt="Element"
                  />
                </div>

                <div></div>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}

                <div className="relative inline-flex flex-col">
                  <div className="font-bold leading-snug tracking-tight text-left mb-1">
                    <h1 className="font-bold text-2xl">Turn Your Dream to Reality</h1>
                  </div>
                  <br></br>
                  <div className="relative inline-flex flex-col text-left">
                    <p className="text-gray-600 leading-relaxed">

                    Experience Next-Gen software testing and Quality Assurance services with BlitCore. We guarantee
                    significant boost in deploying codes, improved Software development life cycle and cost-effectiveness at an
                    unparalleled speed and quality.
                                                                                               
                    </p>

                    <p className="text-gray-600 leading-relaxed mt-5">
                    Quality Assurance to ensure high quality and reliability
                      of software products using multitude of software
                      testing methods from unit testing to overall regression
                      testing that maximize performance,enhance scalability
                      and maintain top-notch quality of products.
                    </p>
                  </div>
                  <br></br>

                  <div className="relative inline-flex flex-col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End of Section One */}

        {/* Section Two */}
        <div className="mt-20">
          <p className="text-xl mt-20 text-gray-600 text-center">
            World Class Team In Testing Software 
          </p>
        </div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4">
            The Perks of QA Testing
          </h1>
        </div>

        <div className="md:grid md:grid-cols-12 md:gap-6">
          {/* Content */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            {/* Tabs buttons */}

            <div className="mb-8 md:mb-0">
              <div>
                <div className="font-bold leading-snug tracking-tight text-left mb-1">
                  <h1 className="font-bold text-2xl">What We Offer</h1>
                </div>
                <p className="text-gray-600 mt-5 leading-relaxed">
                Empower your business for Next-Gen applications by implementing the best software testing methodologies and tools.Our innovative
                and forward-thinking approach eliminates errors,reduces overall cycle time and minimizes bugs.Keeping clients'customized
                requirements at the center,we offeracomprehensive set of manual and automated testing services adhering to standard quality
                assurance for best practices and processes.Our dedicated team of resourceful QA engineers perform high-quality QA testing to provide
                reliable,scalable and robust software solutions.
                </p>

                <p className="text-gray-600 mt-5 leading-relaxed">
                Our dedicated team of resourceful QA engineers perform high-quality QA testing to provide
                reliable,scalable and robust software solutions.
                </p>

                <ul className="text-gray-600 mt-5 leading-relaxed list-disc">
                  <li>Functional Testing</li>
                  <li>Perforamnce Testing</li>
                  <li>Security Testing</li>
                  <li>Usability Testing</li>
                  <li>Compatibility & Mobile App Testing</li>
                </ul>
              </div>

              <div></div>
            </div>
          </div>

          {/* Tabs items */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
            <div className="relative flex flex-col text-center lg:text-right">
              {/* Item 1 */}

              <div className="relative inline-flex flex-col">
                <br></br>
                <div className="relative inline-flex flex-col text-left">
                  <img
                    className=" w-full"
                    src={qa}
                    width="300"
                    height="44"
                    alt="Element"
                  />
                </div>
                <br></br>

                <div className="relative inline-flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>

        {/* End of Section Two */}

        <div className="relative max-w-screen-xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                Our QA Automation Process
            </h3>
            <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            Our Automation Testing experts strategizearoadmap for your organizational needs and recommend
            technology solutions to cut cost, accelerate time to market and dramatically improve end-product
              quality. Our diversified experience in using multiple test automation tools that can assist your
                        businesses in choosing the most apt tools as per the needs and budget.
            </p>
            <div className="mt-8">
                <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        Our Testing Process
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200">
                    </div>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Evaluate automation
                        needs and expandability 
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Define the automation
                        scope and level to
                            employ
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Tools selection and
                        Automation architecture
                            design
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Automated test script
                        and test data creation
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Appropriate Test
                        environment setup and
                        configuration
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Executing test
                        automation script and
                        data validation
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Automated performance
                        test for scalable backend
                        </p>
                    </li>
                </ul>
            </div>

        </div>
        <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
                <span>
                    Flexible
                </span>
            </div>
            <p className="mt-4 text-sm leading-5">
                <span className="block font-medium text-gray-500 dark:text-gray-400">
                    Business Models
                </span>
            </p>
            <div className="mt-6">
                <div className="rounded-md shadow">
                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Request a Free Consultaion Now!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

        {/* Section Three */}
        <div className="mt-20 "></div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4">
          Why choose Quality Assurance and Testing with Us?
          </h1>
        </div>


        <div className="max-w-sm mx-auto grid gap-6  lg:grid-cols-3 items-start lg:max-w-none flex" >
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-auto h-auto shadow-lg"
                src={time}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Accelerated Deliverables
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center p-2">
              Achieve accelerated application delivery cycles
              without compromising code quality with the help
              of quicker testing and wider coverage provided
              by test automation. We provide the fastest and most
              reliable QA deliveries.
              </p>
            </div>
          </div>


          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-auto h-auto shadow-lg"
                src={cost}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Cost Effectiveness
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center p-2">
              Identification of errors at the right time can save
              man hours, reduce cost and fix problems faster.
              With test automation, you can perform different
              test scenarios multiple times until the results are
                                satisfactory.
              </p>
            </div>
          </div>


          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-auto h-auto shadow-lg"
                src={quality}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Enhanced Quality
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center p-2">
              Reduce manual workforce that performs
              repetitive testing and prone to errors. Employ
              humans in more strategic tasks and adopt test
              automation asasure-shot solution to excel in
              mundane tasks with 100% consistent and
              accurate results.
              </p>
            </div>
          </div>
        </div>

        {/* End of Section Three */}

        {/* Section Four */}

        




      </div>
    </section>
  );
}

export default CSDView;
