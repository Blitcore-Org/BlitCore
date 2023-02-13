import support from "../images/Diagrams/support_diagram.svg";
import efficiency from "../images/Diagrams/efficiency_diagram.svg";


export default function Services() {
  return (
    <section className="relative">
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 mt-20">
      <div className="max-w-1xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="text-blitblue-400 h2 mt-6 mb-4">
            Why choose BlitCore?
          </h1>
        </div>
        <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-2">
            <div class="bg-blitblue-200 rounded-2xl drop-shadow-2xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-blitblue-500">
                Personalized Approach
                </h3>
                <p class="mb-6 text-white">
                Your requirements are one-of-a-kind, so why settle for generic software? 
                Our team will craft a solution tailored to your requirements, taking the time to truly understand your needs and vision.
                </p>
              </div>
              <img
                src={support}
                class="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div class="bg-blitblue-200 rounded-2xl drop-shadow-2xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-blitblue-500">
                Unique Focus on User-Centric Design
                </h3>
                <p class="mb-6 text-white">
                Good looks and brains. We're the total package in software development. 
                We take design seriously, like seriously seriously, because we believe it's just as important as functionality. 
                Would you really want to use a software that looks like it was made in 1995?
                </p>
              </div>
              <img
                src={efficiency}
                class="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
