import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeaturesBg from "../images/50.png";
import FeaturesElement from "../images/image123.jpg";
import tool from "../images/tool.png";
import demand from "../images/Web/demand.png";
import delivey from "../images/Web/delivery.png";
import flexible from "../images/Web/flexible.png";
import webdev from "../images/Web/webdev.jpg"
import webdevtop from "../images/Web/webdevtop.png";

function WebDevView() {
  return (
    <section className="relative">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-blitblue-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section One */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
            <h1 className="h2 mt-12 text-blitblue-400">Web Development</h1>
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
                    className=" w-full"
                    src={webdevtop}
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
                    <h1 className="font-bold text-2xl text-blitblue-400">Great Apps Always Gets Noticed</h1>
                  </div>
                  <br></br>
                  <div className="relative inline-flex flex-col text-left">
                    <p className="text-blittext-100 leading-relaxed">
                      Design and deploy web applications to bring impactful
                      changes within your web development projects. We assist
                      clients from analyzing disruptive web development
                      challenges to create an intuitve UI/UX, fully functional
                      and powerful web based solution.

                    </p>
                    <p className="text-blittext-100 mt-5 leading-relaxed">
                    Our web development service ensures that the Content Management System enables every website. In addition, web development develops progressive web applications, e-commerce portals, custom business applications and SAAS applications.  
                    The web development service offers a helping hand for some of the most popular and well-recognized brands along with the digital landscape.
                    The web solutions developed here have prominent features that have effective functioning.
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
          <p className="text-xl mt-20 text-blittext-100 text-center">
            World Class Team In Creating Custom Web Designs
          </p>
        </div>

        <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4 text-blittext-100 ">
            Beauty of Creating Web Development 
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
                  <h1 className="font-bold text-2xl text-blitblue-400">What we Offer</h1>
                </div>
                <p className="text-blittext-100 mt-5 leading-relaxed">
                  We specialize in turning your unique business ideas into
                  cutting-edge next-generation web applications. BlitCore meets
                  client objectives at scale and provides high-quality web
                  development tailored business solutions, with proven successes
                  and promising qualitative deliverables across numerous tech
                  markets. Our team of qualified web app developers keeps up
                  with evolving client demands. provides a visually stunning and
                  secure web experience. Clients benefit from our extensive
                  domain experience mixed with technological innovation. Web
                  apps that are disruptive, user-friendly, and provide a better
                  consumer experience and greater corporate agility.
                </p>


                <ul className="text-blittext-100 mt-5 leading-relaxed list-disc ">
                  <li>Front-End Development</li>
                  <li>Back-End Development</li>
                  <li>Progressive Web Applications</li>
                  <li>SASS Applications</li>
                  <li>Custom Web Application Services</li>
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
                    src={webdev}
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
          <h1 className="h4 mt-6 mb-4 text-blitblue-400">
           Why choose web development with us?
          </h1>
        </div>

        <div className="max-w-sm mx-auto grid gap-6  lg:grid-cols-3 items-start lg:max-w-none flex" >
          <div className="max-w-sm bg-blitblue-400 rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-blittext-100 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
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
                className="hidden z-10 w-44 text-base list-none bg-blitblue-400 rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
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
                src={flexible}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-blittext-100 dark:text-white">
              Flexible Engagement Model
              </h5>
              <p className="text-sm text-blittext-100 dark:text-gray-400 text-center">
              We provide flexible engagement
              models using our skills for all types
              of web app development projects
              assuring on-time delivery and
              agility.
              </p>
            </div>
          </div>


          <div className="max-w-sm bg-blitblue-400 rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-blittext-100 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
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
                className="hidden z-10 w-44 text-base list-none bg-blitblue-400 rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
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
                src={demand}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-blittext-100 dark:text-white">
              On-Scale Demand
              </h5>
              <p className="text-sm text-blittext-100 dark:text-gray-400 text-center">
              We employ web developers into
              different projects and assignments
              as per the need. Let your unique
              business demand meet our multi-
              skilled specialists!
              </p>
            </div>
          </div>


          <div className="max-w-sm bg-blitblue-400 rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden sm:inline-block text-blittext-100 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
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
                className="hidden z-10 w-44 text-base list-none bg-blitblue-400 rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul className="py-1" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-blittext-100 dark:text-gray-200 dark:hover:text-white"
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
                src={delivey}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-l font-medium text-blittext-100 dark:text-white">
              Consistent Delivery
              </h5>
              <p className="text-sm text-blittext-100 dark:text-gray-400 text-center">
              We combine our efforts with an
              agile and iterative approach to
              ensure timely deliveries despite
              tight deadlines, rework, and
              reschedules.
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

export default WebDevView;
