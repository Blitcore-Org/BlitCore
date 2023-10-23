import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Ensure you've installed jQuery in your project

function Portfolio() {
  // Create a reference for each option
  const optionRefs = Array(4)
    .fill()
    .map(() => useRef());
  const numOfOptions = 4; // Adjust this if the number of options changes

  // State to keep track of the active option
  const [activeIndex, setActiveIndex] = React.useState(0);

  // On component mount, add event listeners
  useEffect(() => {
    optionRefs.forEach((ref, idx) => {
      $(ref.current).click(function () {
        $(".option").removeClass("active");
        $(this).addClass("active");
        setActiveIndex(idx);
      });
    });
  }, []);

  const handleArrowClick = (direction) => {
    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = numOfOptions - 1;
    if (newIndex >= numOfOptions) newIndex = 0;
    $(".option").removeClass("active");
    $(optionRefs[newIndex].current).addClass("active");
    setActiveIndex(newIndex);
  };

  return (
    <section className="relative">
      <div
        className="absolute inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-Axl lg:text-5xl font-bold mt-12 text-blitblue-400 pb-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">
                Portfolio
              </span>
            </h1>

            <div className="options mt-10 flex flex-col md:flex-row">
              {/* Repeat this structure for each option, updating the styles and content as needed */}
              {[
                {
                  name: "Option 1",
                  label: "Label 1",
                  icon: "fas fa-walking",
                  backgroundImage:
                    "url('src/images/Portfolio/WhatsappAutoDesign/cover.png'",
                },
                {
                  name: "Option 2",
                  label: "Label 2",
                  icon: "fas fa-biking",
                  backgroundImage:
                    "url('src/images/Portfolio/RiadMDesign/cover.png')",
                },
                {
                  name: "Option 3",
                  label: "Label 3",
                  icon: "fas fa-car",
                  backgroundImage:
                    "url('src/images/Portfolio/PersonalWebDesign/cover.png')",
                },
                {
                  name: "Option 4",
                  label: "Label 4",
                  icon: "fas fa-plane",
                  backgroundImage:
                    "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
                },
              ].map((option, i) => (
                <div
                  className={`option ${i === 0 ? "active" : ""}`}
                  ref={optionRefs[i]}
                  key={i}
                  // style={{ backgroundImage: option.backgroundImage }}
                >
                  <div
                    className="cover-image mx-4 mt-4 "
                    style={{ backgroundImage: option.backgroundImage }}
                    alt="cover"
                  ></div>
                  {/* <div className="shadow"></div> */}
                  <div className="label flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="icon">
                        <i className={option.icon}></i>
                      </div>
                      <div className="info">
                        <div className="main">{option.name}</div>
                        <div className="sub">{option.label}</div>
                      </div>
                    </div>
                    <button className="view-button w-16 rounded-full bg-blitblue-500 mr-20">View</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="arrow-buttons">
              <span
                className="arrow-button"
                onClick={() => handleArrowClick(-1)}
              >
                &lt;
              </span>
              <ul className="dots">
                {Array(numOfOptions)
                  .fill()
                  .map((_, i) => (
                    <li
                      className={`dot ${i === activeIndex ? "active" : ""}`}
                      onClick={() => {
                        $(".option").removeClass("active");
                        $(optionRefs[i].current).addClass("active");
                        setActiveIndex(i);
                      }}
                      key={i}
                    ></li>
                  ))}
              </ul>
              <span
                className="arrow-button"
                onClick={() => handleArrowClick(1)}
              >
                &gt;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
