import React, { useState, useRef, useEffect } from "react";

import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const SERVICE_ID = "service_cx4sjvu";
const TEMPLATE_ID = "template_0x7p9pi";
const USER_ID = "W_2SHf331gtm6yJqv";

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

function ContactView() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
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
     
    <section className="relative mt-20">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h2 mt-20">Contact Us</h1>
      </div>
      <Form onSubmit={handleOnSubmit}>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="user_name"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                required="required"
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                required="required"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="user_email"
                id="email"
                type="email"
                required="required"
              />
              <p class="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                name="user_message"
                id="message"
                required="required"
              ></textarea>
              {/* <p class="text-gray-600 text-xs italic">
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
              </p> */}
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <Button type="submit" color="green">
                Submit
              </Button>
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </div>
      </Form>
    </section>
  );
}

export default ContactView;
