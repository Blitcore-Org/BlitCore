import React, { useEffect, useRef } from "react";
import $ from 'jquery'; // Ensure you've installed jQuery in your project

function Portfolio() {
  
  // Create a reference for each option
  const optionRefs = Array(6).fill().map(() => useRef());

  // On component mount, add event listeners
  useEffect(() => {
    optionRefs.forEach((ref) => {
      $(ref.current).click(function() {
        $(".option").removeClass("active");
        $(this).addClass("active");
      });
    });
  }, []);

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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">Portfolio</span>
            </h1>
            {/* Add your HTML code here */}
            <div className="options">
              {/* Repeat this structure for each option, updating the styles and content as needed */}
              {Array(6).fill().map((_, i) => (
                <div 
                  className={`option ${i === 0 ? 'active' : ''}`}
                  style={{
                    '--optionBackground': `url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)`
                  }}
                  ref={optionRefs[i]}
                  key={i}
                >
                  <div className="shadow"></div>
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
            <a href="http://victorofvalencia-blog.tumblr.com" target="_blank" rel="noreferrer" className="credit">Photos from Victor of Valencia on tumblr</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
