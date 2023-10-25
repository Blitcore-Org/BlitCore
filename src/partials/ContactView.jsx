import React from "react";

import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// require('dotenv').config()

// TODO : Remove constants and use env variables

const SERVICE_ID = "service_fob28c7";
const TEMPLATE_ID = "template_0x7p9pi";
const USER_ID = "W_2SHf331gtm6yJqv";



function ContactView() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully!',
          text: 'You will hear back from us in the next 1 hour! ',
          showConfirmButton: true,
          confirmButtonColor: '#348FF3',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (

    <section className="relative">

      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">Contact Us</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <form  onSubmit={handleOnSubmit}>
            <div className="contactBg relative max-w-6xl mx-auto px-4 sm:px-6 rounded-3xl px-8 pt-6 pb-8 mb-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="input text-white"
                    name="user_name"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    required="required"
                  />
                  <span class="bar"></span>
                  {/* <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="input text-white"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    required="required"
                  />
                  <span class="bar"></span>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-blittext-100 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    class="input text-white"
                    name="user_email"
                    id="email"
                    type="email"
                    required="required"
                  />
                  <span class="bar"></span>
                  <p className="text-blittext-100 text-xs mt-2 italic">
                    Some tips - as long as needed
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-blittext-100 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    class="message text-white w-full max-w-[90%] h-[50%] resize-none"
                    name="user_message"
                    id="message"
                    required="required"
                  ></textarea>
                  <span class="messageBar"></span>
                  {/* <p className="text-gray-600 text-xs italic">
                    Re-size can be disabled by set by resize-none / resize-y /
                    resize-x / resize
                  </p> */}
                </div>
              </div>

              <div className="md:flex md:items-center mb-5">
                <div  className="md:w-1/3">
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" required/>
                  <label for="default-checkbox" class="text-sm ml-3 font-medium text-white">I agree to the <a href="#" class="text-blitblue-500 hover:underline">terms and conditions</a></label>
                </div>
              </div>
              
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button className="bg-blitblue-400 hover:bg-blitblue-500 text-white hover:text-black font-bold py-2 px-4 rounded-full" type="submit">
                    Submit</button>
                </div>
                <div className="md:w-2/3"></div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactView;
