import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeaturesBg from "../images/50.png";
import FeaturesElement from "../images/image123.jpg";
import management from "../images/CSD/management.png";
import progress from "../images/CSD/progress.png";
import flexible from "../images/CSD/flexible.png";
import csd from "../images/CSD/csdi.png";
import csdtop from "../images/CSD/csd12.png";

function CSDView() {
  return (
    <section className="relative bg-blitblue-100">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-blitblue-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section One */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mt-12 text-blitblue-400">Custom Software Development</h1>
          </div>

          <div>
            <p className="text-xl mt-6 text-blittext-100 text-center">
              Changing Dreams Into Reality
            </p>
          </div>

          <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h4 mt-6 mb-4 text-blittext-100">
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
                    className="w-full p-0"
                    src={csdtop}
                    // width="300"
                    // height="44"
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
                    <h1 className="font-bold text-2xl text-blitblue-400">Every Business Needs a Custom Software</h1>
                  </div>
                  <br></br>
                  <div className="relative inline-flex flex-col text-left">
                    <p className="text-blittext-100 leading-relaxed">
                    Achieve a competitive edge for your unique and complex business needs with BlitCore. Harness our
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
        <div className="mt-10">
          <p className="text-xl mt-20 text-blittext-100 text-center">
            World Class Team In Creating Customized Software
          </p>
        </div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4 text-blitblue-400">
            Explore Our Working Process
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
                  <h1 className="font-bold text-2xl text-blitblue-400">What We Offer</h1>
                </div>
                <p className="text-blittext-100 mt-5 leading-relaxed">
                  Every corporate organization requires multi-level enterprise
                  web solutions to fulfill business needs. Company is well
                  versed with developing enterprise web portals, eCommerce
                  solutions, B2B and B2C applications, ERP and CRM software
                  apps, Reporting, Billing and Secure Financial Transaction
                  Processing Systems, etc. Our developers have been involved
                  with latest web technologies which help organizations to
                  optimize operational costs and improve delivery.
                </p>

                <p className="text-blittext-100 mt-5 leading-relaxed">
                  We are specialized in creating different levels of web
                  solutions for the fulfillment of various needs. Personalized
                  enterprise web portals are developed along with different
                  e-commerce solutions, CRM and ERP software apps, B2B and B2C
                  applications, reporting, and much more.
                </p>

                <p className="text-blittext-100 mt-5 leading-relaxed">
                  The development of various web solutions and our enterprise IT
                  is based on the latest web technologies. Not only are they
                  secure but also strong and resourceful. Consequently, the
                  total operational cost is reduced and operational efficiency
                  is enhanced.
                </p>
                <ul className="text-blittext-100 mt-5 leading-relaxed">
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
                    src={csd}
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
          <h1 className="h4 mt-6 mb-4 text-blittext-100">
          Why choose Custom Software Development with us?
          </h1>
        </div>

        <div className="max-w-sm mx-auto grid gap-6  lg:grid-cols-3 items-start lg:max-w-none flex" >
          <div className="max-w-sm bg-blitblue-400 rounded-lg  border-gray-200 shadow-md">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-blittext-100 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
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
                className="hidden z-10 w-44 text-base list-none bg-blitblue-400 rounded divide-y divide-gray-100 shadow"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-auto h-auto  shadow-lg"
                src={progress}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-blittext-100">
                Progressive Roadmap
              </h5>
              <p className="text-sm text-blittext-100 text-center">
                We explore the client's business and portfolio deeply and
                recommenda strategic digital transformation plan considering
                multiple aspects in mind.
              </p>
            </div>
          </div>


          <div className="max-w-sm bg-blitblue-400 rounded-lg  border-gray-200 shadow-md ">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-blittext-100 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
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
                className="hidden z-10 w-44 text-base list-none bg-blitblue-400 rounded divide-y divide-gray-100 shadow"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100"
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
                src={management}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-blittext-100">
              Software Project Management
              </h5>
              <p className="text-sm text-blittext-100 text-center">
                Our holistic project management approach offers timely response
                to proposals and
                fulfilling end-user expectations.
              </p>
            </div>
          </div>


          <div className="max-w-sm bg-blitblue-400 rounded-lg  border-gray-200 shadow-md  ">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-blittext-100 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
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
                className="hidden z-10 w-44 text-base list-none bg-blitblue-400 rounded divide-y divide-gray-100 shadow"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100"
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
                src={flexible}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-blittext-100">
              Flexible Engagement Model
              </h5>
              <p className="text-sm text-blittext-100 text-center">
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
