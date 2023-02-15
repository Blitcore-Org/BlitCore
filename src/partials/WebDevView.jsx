import { Link } from "react-router-dom";

import webdev from '../images/Diagrams/webDevDiagram.svg';
import uidiag from '../images/Diagrams/uiDiagram.svg';
import support from "../images/Diagrams/support_diagram.svg";


function WebDevView() {
  return (
    <section class="relative w-full pt-7 pb-7 md:pt-20 md:pb-24">

      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl lg:text-4xl font-bold mt-12 text-blitblue-400"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">Web Development</span></h1>
      </div>

      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 mb-24">
        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img src={uidiag} alt="Web Development" />
        </div>
        <div class="flex flex-wrap  box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-blittext-100 0 lg:text-3xl md:text-2xl">
            Overview 
          </h2>
          <p class=" text-1 pt-4 pb-8 m-0 leading-7 text-blitblue-500 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text">
            Design is like a perfectly crafted recipe. Just like how every ingredient has its own unique flavor, every element in your website plays a crucial role in its overall taste.     
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
                We don't just slap some code together and call it a website. We take the time to craft a unique user experience that will have your users fully engaged.      
            </li>     
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-400 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Our web development team is like a group of master chefs, combining their expertise to create the perfect recipe for your online presence.      
            </li>    
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blitblue-500 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              We know that web development is more than just writing code - it's about understanding your brand, your customers, and your goals. We'll work with you every step of the way to create a site that's tailored just for you.          
            </li>     
          </ul>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-blittext-100 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-400 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Your website is like your wardrobe - it needs to fit you perfectly and make you look good. We'll make sure your site not only looks great, but functions flawlessly as well.          
            </li>
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
        <div class="box-border relative w-full order-last md:order-first px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img src={support} alt="Support" />
        </div>
        <div class="flex flex-wrap  box-border md:order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none mt-20">
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

export default WebDevView;
