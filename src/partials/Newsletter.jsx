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
          <div className="relative bg-blitblue-100 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden mt-24" data-aos="zoom-y-out">

            {/* Background illustration */}


              {/* CTA content */}
                <h3 className="h3 text-white mb-2 text-center text-blitblue-400">The Exclusive Club</h3>
                <p className="text-gray-300 text-lg mb-6 text-center">Join the exclusive club! Join our email list and be the first to know about our latest offerings.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto"  onSubmit={handleOnSubmit}>
                  <div className="flex flex-row mx-10 sm:flex-row justify-center sm:max-w-xs sm:mx-auto sm:max-w-md">
                    <input required type="email" name="user_email" className="placeholder:text-gray-500 w-300 rounded-lg form-input appearance-none bg-blitblue-200 border-none focus:border-gray-600 px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-blittext-100" placeholder="Your email…" aria-label="Your email…" />
                    <button type="submit" className="rounded-full btn text-white bg-blitblue-400 hover:bg-blitblue-500 hover:text-blitblue-100 shadow" href="#0">Subscribe</button>
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
