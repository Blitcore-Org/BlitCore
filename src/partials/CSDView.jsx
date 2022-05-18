import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeaturesBg from "../images/50.png";
import FeaturesElement from "../images/image123.jpg";
import management from "../images/management.png";
import progress from "../images/progress.png";
import flexible from "../images/flexible.png";

function CSDView() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section One */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mt-12">Custom Software Development</h1>
          </div>

          <div>
            <p className="text-xl mt-6 text-gray-600 text-center">
              Changing Dreams Into Reality
            </p>
          </div>

          <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h4 mt-6 mb-4">
              Beauty of Custom Software Development
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
                    src={FeaturesElement}
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
                    <h1 className="font-bold text-2xl">Every Business Needs a Custom Software</h1>
                  </div>
                  <br></br>
                  <div className="relative inline-flex flex-col text-left">
                    <p className="text-gray-600 leading-relaxed">
                    Achieve a competitive edge for your unique and complex business needs with SourceFull. Harness our
                    capability to develop agile and reliable custom software applications & solutions that expedite the digital
                    transformation journey of businesses with technology innovation,scalability,and agility.
                                                                                               
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
        <div>
          <p className="text-xl mt-20 text-gray-600 text-center">
            World Class Team In Creating Customized Software
          </p>
        </div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4">
            Beauty of Custom Software Development
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
                  Every corporate organization requires multi-level enterprise
                  web solutions to fulfill business needs. Company is well
                  versed with developing enterprise web portals, eCommerce
                  solutions, B2B and B2C applications, ERP and CRM software
                  apps, Reporting, Billing and Secure Financial Transaction
                  Processing Systems, etc. Our developers have been involved
                  with latest web technologies which help organizations to
                  optimize operational costs and improve delivery.
                </p>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  We are specialized in creating different levels of web
                  solutions for the fulfillment of various needs. Personalized
                  enterprise web portals are developed along with different
                  e-commerce solutions, CRM and ERP software apps, B2B and B2C
                  applications, reporting, and much more.
                </p>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  The development of various web solutions and our enterprise IT
                  is based on the latest web technologies. Not only are they
                  secure but also strong and resourceful. Consequently, the
                  total operational cost is reduced and operational efficiency
                  is enhanced.
                </p>
                <ul className="text-gray-600 mt-5 leading-relaxed">
                  <li>CRM Software Development</li>
                  <li>Custom ERP Software Development</li>
                  <li>Business System Integration</li>
                  <li>Enterprise Mobility Solutions</li>
                  <li>Full-Cycle IT Consultation</li>
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
                    src={FeaturesElement}
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

        {/* Section Three */}
        <div className="mt-20 "></div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4">
          Why choose Custom Software Development with us?
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 space-x-4 align-items-center" >
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              <div
                id="dropdown"
                class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul class="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={progress}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
                Progressive Roadmap
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
                We explore the client's business and portfolio deeply and
                recommenda strategic digital transformation plan considering
                multiple aspects in mind.
              </p>
            </div>
          </div>


          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              <div
                id="dropdown"
                class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul class="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={management}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Software Project Management
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
              Our holistic project management approach offers timely response
                to proposals,on-time schedules, meeting project deadlines,and
                fulfilling end-user expectations.
              </p>
            </div>
          </div>


          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div class="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
              <div
                id="dropdown"
                class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul class="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={flexible}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Flexible Engagement Model
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
              Withaunique amalgamation of skilled developers and cutting-edge
                technologies,we enable transparency and scalability at all
                engagement levels.
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
