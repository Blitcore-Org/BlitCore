import React, { useState, useRef, useEffect } from "react";

import FeaturesElement from "../images/image123.jpg";


import faster from "../images/faster.png";
import db from "../images/db.png";
import goals from "../images/goals.png";

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
            <h1 className="h2 mt-12">Product Development</h1>
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
                    <h1 className="font-bold text-2xl">Turn Your Dream to Reality</h1>
                  </div>
                  <br></br>
                  <div className="relative inline-flex flex-col text-left">
                    <p className="text-gray-600 leading-relaxed">

                  Give your business visionalife, turn it intoareality. SourceFull offers an intuitive and design-led software
                  product development services to accelerate software product innovation, deliverasuperior customer
                    experience and give competitive edge to your software products.
                                                                                               
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
                To convert your vision into reality, we assist you from software product ideation to design, development, release, and maintenance.
                Every successful product is unique in its market and with its uniqueness, it brings risk and uncertainties during the software product
                development process. 
                </p>

                <p className="text-gray-600 mt-5 leading-relaxed">
                We asaleading software product development company conceptualize and strategize the entire roadmap to
                reduce the risk, keep time and development cost under control and provide high-quality stable product. With highly collaborative
                approach, we understand the scope, business scenarios and potential user types to create a product with good UX, cloud, data and
                security as their prime focus.
                </p>

                <ul className="text-gray-600 mt-5 leading-relaxed list-disc">
                  <li>Prototyping and MVP Development</li>
                  <li>UI/UX Design Service</li>
                  <li>Product Testing</li>
                  <li>Product Architecture Design Service</li>
                  <li>Product Development</li>
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
          Why choose Product Development with us?
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
                src={goals}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Business Goals & Insights
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
              We dive deeper into short-term
              and long-term vision of the project
              and after getting acquainted with
              client's goals, we leverage our
              domain knowledge to drafta
              customized software solution.
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
                src={db}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Database Decision Making
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
              We haveaknack of business
              knowledge and can convert your
              business objectives into reality with
              our tech-enabled and data-driven
              customized solutions.
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
                src={faster}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
              Faster Onboarding
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
              We hold an upper hand in
              diversified projects of any
              technology or industry or size of the
              project and make solutions
              imperceptible in regards to time,
              culture and location.
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
