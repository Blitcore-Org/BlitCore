import { Link } from "react-router-dom";

import webdev from '../images/Diagrams/webDevDiagram.svg';
import support from "../images/Diagrams/support_diagram.svg";
import csddiag from "../images/Diagrams/customSoftwareDiagram.svg";

function CSDView() {
  return (
    <section class="relative w-full pt-7 pb-7 md:pt-20 md:pb-24">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl lg:text-4xl font-bold mt-12 text-blitblue-400"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">Custom Software Development</span></h1>
      </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 mb-24">
      <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img src={csddiag} alt="Custom Software Development" />
      </div>
        <div class="flex flex-wrap  box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-blittext-100 0 lg:text-3xl md:text-2xl">
            Overview 
          </h2>
          <p class=" text-1 pt-4 pb-8 m-0 leading-7 text-blitblue-500 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text">
          Our team of tech tailors will take your unique needs and goals and stitch together a software solution that fits like a glove. Expect nothing but a perfect fit and a look that will turn heads. Here are the four main features of our custom software development services:          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              A personalized approach: we get to know you and your business to create software that meets your specific needs            </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-400 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Expert tech tailors: our team of skilled developers will ensure that your software is tailored to fit your business requirements            </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Quality assurance: we don't compromise on quality - we thoroughly test and check our solutions to ensure they are up to scratch            </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-400 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
                Ongoing support: we're here for you even after delivery, providing ongoing support to ensure that your software keeps up with your evolving needs.           </li>
              </ul>

        
        </div>
      </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 mb-24">
        <div class="box-border relative w-full max-w-md order-last px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img src={webdev} alt="Web Development" />
        </div>
        <div class="flex flex-wrap  box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-blittext-100 0 lg:text-3xl md:text-2xl">
          Our process
          </h2>
          <p class=" text-1 pt-4 pb-8 m-0 leading-7 text-blitblue-500 border-0 border-gray-300 sm:pr-12 xl:pr-32">
          At BlitCore, we like to keep things organized and transparent. Here's a sneak peek into our process, with some not-so-secret sauce:          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Consultation: We'll sit down with you, break bread, and have a heart-to-heart about your business goals and vision. And don't worry, we won't charge you by the minute.              
              </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-400 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Planning: We'll take what we learned from our consultation and create a roadmap for your project. It's like a GPS, but without the annoying voice telling you to make a U-turn.              
              </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Development: Our team of coding wizards will work their magic to bring your project to life. We may or may not wear robes and pointy hats during this phase.              
              </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-400 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Launch: We'll ensure a smooth launch and make sure your software is ready to hit the ground running. Just don't forget to invite us to the party.              
              </li>
          </ul>


        </div>
      </div>

      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div class="box-border relative w-full max-w-md order-last md:order-first lg:order-first px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img src={support} alt="Contact us" class="w-full h-auto" />
        </div>
        <div class="flex flex-wrap  box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none mt-20">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-blittext-100 0 lg:text-3xl md:text-2xl">
            Get in Touch
          </h2>
          <p class=" text-1 pt-4 pb-8 m-0 leading-7 text-blitblue-500 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text">
          Ready to bring your custom software development project to life? Get in touch with us today!</p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Call-to-action for a free consultation and quote
              </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-400 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Overview of the information needed for an accurate quote
              </li>
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Contact information, including contact form, email, and phone number.
              </li> 
              <Link to="/contact">
                <button type="submit" class=" mt-4 rounded-full btn text-white bg-blitblue-400 hover:bg-blitblue-500 hover:text-blitblue-100 shadow mx-auto">Get in touch now!</button>
              </Link>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default CSDView;
