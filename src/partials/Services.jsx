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
          <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div class="bg-blitblue-400 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-blittext-100">
                Encrypted Data
                </h3>
                <p class="mb-6 text-blittext-100">
                Our advanced information protocals comply with various international security standards
                </p>
              </div>
              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
                class="w-2/3 ml-auto -mb-12"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div class="bg-blitblue-400 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-blittext-100">
                24/7 Support
                </h3>
                <p class="mb-6 text-blittext-100">
                We are open 24/7 so is our support team. No matter what time you or your customers call us, we will pick up the call within 3 rings.
                </p>
              </div>
              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                class="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div class="bg-blitblue-400 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-blittext-100">
                Efficient Project Management
                </h3>
                <p class="mb-6 text-blittext-100">
                We endeavour in project risk
                minimization and take full
                responsibility for scope, schedule,
                budget and timeliness in regard to
                your web development project.
                </p>
              </div>
              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg"
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
