import { Link } from "react-router-dom";
export default function Join() {
    return (
      <section className="relative">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-blittext-100">Ready to dive in?</span>
            <span className="block text-blitblue-400">Book Your Free Consultation Now!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blitblue-400 hover:bg-indigo-700"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }