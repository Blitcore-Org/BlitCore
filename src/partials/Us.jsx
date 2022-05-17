import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import FeaturesElement from "../images/image123.jpg";

import data from "../images/data.png";
import exp from "../images/exp.png";
import support from "../images/support.png";
import rate from "../images/rate.png";
import project from "../images/project.png";
import man from "../images/man.png";

function Us() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-20">
      <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h4 mt-6 mb-4">
           Why choose SourceFull?
          </h1>
        </div>

        <div className="grid lg:grid-cols-3">
          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={data}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Encrypted Data</div>
              <p class="text-gray-700 text-base">
              Our advanced information protocals comply with various international security standards
              </p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={exp}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Over 10+ Years of Experience</div>
              <p class="text-gray-700 text-base">
              With 10+ years of success and experience in the BPO industry, SourceFull is a well known name in the industry
              </p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={support}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">24/7 Support</div>
              <p class="text-gray-700 text-base">
              We are open 24/7 so is our support team. No matter what time you or your customers call us, we will pick up the call within 3 rings.
              </p>
            </div>
            
          </div>
        </div>
        
  {/* Col-2 */}

        <div className="grid lg:grid-cols-3 mt-20">
          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={rate}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">98 Client Retention Rate</div>
              <p class="text-gray-700 text-base">
              We have a 97.9% clients' repetition rate. In other words. 97.9% of our clients keep choosing Trinitar for their business needs.
              </p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={project}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">2300+ Projects Completed</div>
              <p class="text-gray-700 text-base">
              Our developers completed more than 9000+ projects with 100% project completion rate. We worked with 35+ industries
              </p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="mx-auto"
              src={man}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Efficient Project Management</div>
              <p class="text-gray-700 text-base">
              We endeavour in project risk
                minimization and take full
                responsibility for scope, schedule,
                budget and timeliness in regard to
                your web development project.
              </p>
            </div>
            
          </div>
        </div>

        </div>


    </section>

  );
}

export default Us;


