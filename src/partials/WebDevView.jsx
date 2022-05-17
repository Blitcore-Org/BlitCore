import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeaturesBg from "../images/50.png";
import FeaturesElement from "../images/image123.jpg";
import tool from "../images/tool.png";
import demand from "../images/demands.png";
import delivey from "../images/delivery.png";
import flexible from "../images/flexible.png";

function WebDevView() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section One */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
            <h1 className="h2 mt-12">Web Development</h1>
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
                    <h1 className="font-bold text-2xl">Great Apps Always Gets Noticed</h1>
                  </div>
                  <br></br>
                  <div className="relative inline-flex flex-col text-left">
                    <p className="text-gray-600 leading-relaxed">
                      Design and deploy web applications to bring impactful
                      changes within your web development projects. We assist
                      clients from analyzing disruptive web development
                      challenges to create an intuitve UI/UX, fully functional
                      and powerful web based solution.

                    </p>
                    <p className="text-gray-600 mt-5 leading-relaxed">
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
                  <h1 className="font-bold text-2xl">What we Offer</h1>
                </div>
                <p className="text-gray-600 mt-5 leading-relaxed">
                  We specialize in turning your unique business ideas into
                  cutting-edge next-generation web applications. SourceFull meets
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


                <ul className="text-gray-600 mt-5 leading-relaxed list-disc ">
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
           Why choose web development with us?
          </h1>
        </div>

        <div className="grid lg:grid-cols-3">
          <div class="border-4 border-indigo-00 border-t-indigo-500 rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={delivey}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Consistent Delivery</div>
              <p class="text-gray-700 text-base">
              We combine our efforts with an
              agile and iterative approach to
              ensure timely deliveries despite
              tight deadlines, rework, and
              reschedules.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">

            </div>
          </div>

          <div class="border-4 border-indigo-00 border-t-indigo-500 rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={demand}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">On-Scale Demand</div>
              <p class="text-gray-700 text-base">
              We employ web developers into
              different projects and assignments
              as per the need. Let your unique
              business demand meet our multi-
              skilled specialists!
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">

            </div>
          </div>

          <div class="border-4 border-indigo-00 border-t-indigo-500 rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={flexible}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Flexible Engagement Model</div>
              <p class="text-gray-700 text-base">
              We provide flexible engagement
              models using our skills for all types
              of web app development projects
              assuring on-time delivery and
              agility.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">

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
