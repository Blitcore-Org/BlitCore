import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import logo from "../images/bc_logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState('');

  const onUpdateActiveLink = (value) => 
  {
    setActiveLink(value);
  }

  return (
    <div>
      <nav className="bg-gradient-to-b from-blitblue-100 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-8 w-8" src={logo} alt="Workflow" />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-14 mx-auto">
                  <NavLink
                    to="/"
                    className={activeLink === 'home' ? 'active navbar_links' : 'navbar_links hover:text-white'} onClick={() => onUpdateActiveLink('home')}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={activeLink === 'about' ? 'active navbar_links' : 'navbar_links hover:text-white'} onClick={() => onUpdateActiveLink('about')}
                  >
                    About Us
                  </NavLink>

                  {/* PORTFOLIO IN PROGRESS */}
                  <NavLink
                    to="/portfolio"
                    className={activeLink === 'portfolio' ? 'active navbar_links' : 'navbar_links hover:text-white'} onClick={() => onUpdateActiveLink('portfolio')}
                  >
                    Portfolio
                  </NavLink> 

                  <NavLink
                    to="/contact"
                    className={activeLink === 'contact' ? 'active navbar_links' : 'navbar_links hover:text-white'} onClick={() => onUpdateActiveLink('contact')}
                  >
                    Contact Us
                  </NavLink>
                  
                  <Link
                    to="/book"
                    className="text-blitblue-100 bg-blitblue-400 block px-3 py-2 rounded-md text-base font-medium flex hover:text-blitblue-100 hover:bg-blitblue-500"
                  >
                    <span>Free Consultaion</span>
                    <svg
                      className="w-3 h-3 fill-current text-blitblue-100 flex-shrink-0 ml-2 -mr-1 mt-1.5"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Link>

                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blitblue-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blitblue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0D182E"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0D182E"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="text-center justify-center pt-8 pb-3 space-y-6 sm:px-3">
                <Link
                  to="/"
                  className="text-white mx-auto w-1/2 hover:bg-blitblue-500 hover:text-black block px-3 py-2 rounded-full text-lg font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-white mx-auto w-1/2 hover:bg-blitblue-500 hover:text-black block px-3 py-2 rounded-full text-lg font-medium"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className="text-white mx-auto w-1/2 hover:bg-blitblue-500 hover:text-black block px-3 py-2 rounded-full text-lg font-medium"
                >
                  Contact Us
                </Link>
                
                {/* PORTFOLIO IN PROGRESS */}
                <Link
                  to="/portfolio"
                  className="text-white mx-auto w-1/2 hover:bg-blitblue-500 hover:text-black block px-3 py-2 rounded-full text-lg font-medium"
                >
                  Portfolio
                </Link>

                <Link
                  to="/book"
                  className="text-white justify-center bg-blitblue-400 hover:text-white block px-3 py-2 rounded-md w-64 text-lg font-medium flex mr-auto ml-auto"
                >
                  <span>Free Consultaion</span>
                  <svg
                    className="w-4 h-4 fill-current text-white flex-shrink-0 ml-2 -mr-1 mt-3"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
