// React dependencies.
import React, { useEffect, useState } from "react";

// Library to extract color from images.
import ColorThief from "colorthief";

// Portfolio Component
function Portfolio() {
  // Active option index state.
  const [activeIndex, setActiveIndex] = useState(0);

  // Options data state.
  const [options, setOptions] = useState([
    {
      name: "Option 1",
      label: "Label 1",
      icon: "fas fa-walking",
      backgroundImage:
        "url('src/images/Portfolio/WhatsappAutoDesign/cover.png')",
    },

    {
      name: "Option 2",
      label: "Label 2",
      icon: "fas fa-biking",
      backgroundImage: "url('src/images/Portfolio/RiadMDesign/cover.png')",
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
    {
      name: "Option 5",
      label: "Label 5",
      icon: "fas fa-plane",
      backgroundImage:
        "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
    },
    {
      name: "Option 6",
      label: "Label 6",
      icon: "fas fa-plane",
      backgroundImage:
        "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
    },
    {
      name: "Option 7",
      label: "Label 7",
      icon: "fas fa-plane",
      backgroundImage:
        "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
    },
  ]);

  // useEffect hook to run once component mounts.
  useEffect(() => {
    // Function to fetch dominant colors from images.
    // There was an async before the () => but it was not necessary.
    const fetchColors = () => {
      // Initialize the ColorThief instance.
      const colorThief = new ColorThief();

      // Map over each option to create a promise for image loading.
      const promises = options.map((option, i) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "Anonymous"; // Handle potential cross-origin image loading issues.

          // Extract the actual image URL from the backgroundImage string.
          img.src = option.backgroundImage
            .replace("url('", "")
            .replace("')", "");

          // Once the image loads, extract the dominant color and resolve the promise.
          img.onload = () => {
            const color = colorThief.getColor(img);
            option.dominantColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            resolve();
          };

          // If there's an error loading the image, reject the promise and log the error.
          img.onerror = (err) => {
            console.error("Error loading image:", err);
            reject(err);
          };
        });
      });

      // Use Promise.all to wait for all image loading promises to complete.
      Promise.all(promises)
        .then(() => {
          // Once all images have been processed, update the options state once.
          setOptions([...options]);
        })
        .catch((err) => {
          // Handle any errors that occurred during image processing.
          console.error("There was an error processing some images:", err);
        });
    };

    fetchColors();
  }, []);

  // Handler to set active option.
  const handleOptionClick = (index) => {
    setActiveIndex(index);
  };

  // Handler to set active option based on arrow clicks.
  const handleArrowClick = (direction) => {
    let newIndex = (activeIndex + direction) % options.length;
    if (newIndex < 0) newIndex = options.length - 1;
    setActiveIndex(newIndex);
  };

  const getVisibleOptions = (activeIndex, totalOptions) => {
    let start = 0;
    let end = 3;

    if (activeIndex > 0 && activeIndex < totalOptions - 2) {
      start = activeIndex - 1;
      end = activeIndex + 2;
    } else if (activeIndex >= totalOptions - 2) {
      start = totalOptions - 4;
      end = totalOptions - 1;
    }

    const hiddenBefore = start;
    const hiddenAfter = totalOptions - end - 1;

    return { start, end, hiddenBefore, hiddenAfter };
  };

  const { start, end, hiddenBefore, hiddenAfter } = getVisibleOptions(
    activeIndex,
    options.length
  );
  console.log("Hidden Before:", hiddenBefore, "Hidden After:", hiddenAfter);

  // Render the Portfolio component.
  return (
    <section className="relative">
      {/* <div
        className="absolute inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div> */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-Axl lg:text-5xl font-bold mt-12 text-blitblue-400 pb-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">
                Portfolio
              </span>
            </h1>
            <div className="options mt-10 flex flex-col md:flex-row">
              {hiddenBefore > 0 &&
                Array(hiddenBefore > 1 ? 2 : hiddenBefore)
                  .fill()
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className={`option-line ${
                        idx === 1 ? "first-line" : "second-line"
                      }`} // Reversed order
                      onClick={() => handleArrowClick(-1)}
                    ></div>
                  ))}

              {options.slice(start, end + 1).map((option, i) => (
                <Option
                  key={i}
                  option={option}
                  isActive={i + start === activeIndex}
                  isFirstOrLast={
                    i + start === 0 || i + start === options.length - 1
                  }
                  onClick={() => handleOptionClick(i + start)}
                />
              ))}

              {hiddenAfter > 0 &&
                Array(hiddenAfter > 1 ? 2 : hiddenAfter)
                  .fill()
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className={`option-line ${
                        idx === 0 ? "first-line" : "second-line"
                      }`}
                      onClick={() => handleArrowClick(1)}
                    ></div>
                  ))}
            </div>
            <div className="arrow-buttons">
              <button
                className="arrow-button"
                onClick={() => handleArrowClick(-1)}
              >
                &lt;
              </button>
              <ul className="dots">
                {options.map((_, i) => (
                  <li
                    className={`dot ${i === activeIndex ? "active" : ""}`}
                    onClick={() => handleOptionClick(i)}
                    key={i}
                  ></li>
                ))}
              </ul>
              <button
                className="arrow-button"
                onClick={() => handleArrowClick(1)}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Option({ option, isActive, onClick, isFirstOrLast }) {
  const defaultColor = "rgb(200, 200, 200)";
  const colorToUse = option.dominantColor || defaultColor;
  const gradientBackground = `linear-gradient(${colorToUse}, transparent)`;

  // If the option is the first or last, and it's not active, display it as a line.
  if (isFirstOrLast && !isActive) {
    return (
      <div className="option-line" onClick={onClick}>
      </div>
    );
  }

  return (
    <div className={`option ${isActive ? "active" : ""}`} onClick={onClick}>
      <div
        className="cover-image mx-4 mt-4"
        style={{
          backgroundImage: isActive
            ? option.backgroundImage
            : gradientBackground,
        }}
        alt="cover"
      ></div>
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
        <button className="view-button w-16 rounded-full bg-blitblue-500 mr-20">
          View
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
