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

            <div className="options flex flex-col md:flex-row">
              {/* Repeat this structure for each option, updating the styles and content as needed */}
              {Array(4)
                .fill()
                .map((_, i) => (
                  <div
                    className={`option ${i === 0 ? "active" : ""}`}
                    // style={{
                    //   "--optionBackground": `url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)`,
                    // }}
                    ref={optionRefs[i]}
                    key={i}
                  >
                    {/* <div className="shadow"></div> */}
                    <div className="label">
                      <div className="icon">
                        <i className="fas fa-walking"></i>
                      </div>
                      <div className="info">
                        <div className="main">Blonkisoaz</div>
                        <div className="sub">Omuke trughte a otufta</div>
                      </div>
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
