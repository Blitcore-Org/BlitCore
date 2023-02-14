import React from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const SERVICE_ID = "service_cx4sjvu";
const TEMPLATE_ID = "template_t5lm7m8";
const USER_ID = "W_2SHf331gtm6yJqv";

function Newsletter() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Thank you for Subscribing!',
          text: 'You will now recieve our latest news and promotions!',
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
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative contactBg rounded-3xl py-10 px-8 md:py-16 md:px-12 overflow-hidden mt-24" data-aos="zoom-y-out">

            {/* Background illustration */}


              {/* CTA content */}
                <h3 className="h3 text-white mb-2 text-center text-blitblue-400">The Exclusive Club</h3>
                <p className="text-gray-300 text-lg mb-6 text-center">Join the exclusive club! Join our email list and be the first to know about our latest offerings.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto"  onSubmit={handleOnSubmit}>
                  <div className="flex flex-col mx-10 lg:flex-row xl:flex-row 2xl:flex-row justify-center sm:max-w-xs sm:mx-auto sm:max-w-md">
                    <div class="mx-auto">
                      <input required type="email" name="user_email" class="input text-white" placeholder="Your email…" aria-label="Your email…"/>
                      <span class="bar"></span>
                    </div>
                    <button type="submit" className="rounded-full btn max-w-[10rem] text-white bg-blitblue-400 hover:bg-blitblue-500 hover:text-blitblue-100 shadow mx-auto mt-4 lg:mt-0 xl:mt-0 2xl:mt-0" href="#0">Subscribe</button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3 text-center">Get your free consultaion now!</p>
                </form>
              </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
