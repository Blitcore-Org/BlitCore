function AboutUs() {

  return (
    <section className="relative">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-blitblue-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
            <h1 className="text-Axl lg:text-5xl font-bold mt-12 text-blitblue-400 pb-10"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">About Us</span></h1>
          </div>

          <div className="max-w-3xl mx-auto h-full all text-center pb-12 md:pb-16">
              <div id="stack1" class="card-container relative h-80 w-full start">
                <div id="card1" class="card h-72 items-center p-6 bg-gradient-to-tl from-blitblue-100 via-blitblue-100 to-blitblue-300 rounded-large drop-shadow-2xl card1">
                  <h1 className="text-lg font-extrabold text-blitblue-500">Who we are</h1>

                  <p className="text-white">
                  We're a group of tech enthusiasts, design fanatics, and problem solvers who just happen to love making beautiful software. We believe that technology should enhance the human experience, not take over it.
                  </p>
                </div>

                <div id="card2" class="card h-72 items-center p-6 bg-gradient-to-tl from-blitblue-100 via-blitblue-100 to-blitblue-300 rounded-large drop-shadow-2xl card2">
                  <h1 className="text-lg font-extrabold text-blitblue-500">What we do</h1>

                  <p className="text-white">
                  We turn ideas into stunning software that is not only functional but also aesthetically pleasing. We're a full-service software development company, meaning we can handle all your needs from concept to launch.
                  </p>
                </div>

                <div id="card3" class="card h-72 items-center p-6 bg-gradient-to-tl from-blitblue-100 via-blitblue-100 to-blitblue-300 rounded-large drop-shadow-2xl card3">
                  <h1 className="text-lg font-extrabold text-blitblue-500">Why we differ</h1>

                  <p className="text-white">
                  Just like a custom designer outfit, your software should fit you like a glove. We believe in creating software solutions that are as unique as you. Our team ensures that the solution we deliver is tailored just for you. The end result? A solution that not only solves the problem, but looks good doing it.
                  </p>
                </div>
              </div>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl mt-64 md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-36"
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
                      More than 4 Countries served worldwide
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
