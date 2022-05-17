import React, { useState, useRef, useEffect } from "react";

import FeaturesElement from "../images/image123.jpg";


import quality from "../images/quality.png";
import time from "../images/time.png";
import cost from "../images/cost.png";

function QAProcess() {
  return (
    <section className="relative">


<div class="relative max-w-screen-xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">
    <div class="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div class="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                Our QA Automation Process
            </h3>
            <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            Our Automation Testing experts strategizearoadmap for your organizational needs and recommend
technology solutions to cut cost, accelerate time to market and dramatically improve end-product
  quality. Our diversified experience in using multiple test automation tools that can assist your
             businesses in choosing the most apt tools as per the needs and budget.
            </p>
            <div class="mt-8">
                <div class="flex items-center">
                    <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        What&#x27;s included
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200">
                    </div>
                </div>
                <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Evaluate automation
                        needs and expandability 
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Define the automation
                        scope and level to
                            employ
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Tools selection and
                        Automation architecture
                            design
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Automated test script
                        and test data creation
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Appropriate Test
                        environment setup and
                        configuration
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Executing test
                        automation script and
                        data validation
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        Automated performance
                        test for scalable backend
                        </p>
                    </li>
                </ul>
            </div>

        </div>
        <div class="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <div class="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
                <span>
                    Flexible
                </span>
            </div>
            <p class="mt-4 text-sm leading-5">
                <span class="block font-medium text-gray-500 dark:text-gray-400">
                    Business Models
                </span>
            </p>
            <div class="mt-6">
                <div class="rounded-md shadow">
                    <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Request a Free Consultaion Now!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

     
    </section>
  );
}

export default QAProcess;
