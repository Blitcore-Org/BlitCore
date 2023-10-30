import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import {
  BsWhatsapp,
  BsFillHousesFill,
  BsScissors,
  BsPersonVideo,
} from "react-icons/bs";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint if needed

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ name, label, icon, backgroundImage }) => (
  <div className="car-card">
    <div
      className="cover-image flex h-full w-full"
      style={{ backgroundImage }}
    ></div>
    <div className="icon-container mt-5 md:mt-8 flex flex-row">
      <div className="icon my-1 h-8 w-8 md:h-14 md:w-14 text-sm md:text-lg">
        {icon}
      </div>
      <div className="info-containter md:my-2">
        <h2 className="text-md font-bold md:text-lg">{name}</h2>
        <p className="text-sm md:text-md">{label}</p>
      </div>
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          {isMobile ? <HiChevronUp /> : <HiChevronLeft />}
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="car-card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 2,
            "--vertical-direction": isMobile ? "1" : "0",
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          {isMobile ? <HiChevronDown /> : <HiChevronRight />}
        </button>
      )}
    </div>
  );
};

function Portfolio() {
  // Options data state.
  const [options] = useState([
    {
      name: "Whatsapp Automation",
      label: "Application Design",
      icon: <BsWhatsapp />,
      backgroundImage:
        "url('https://github.com/Blitcore-Org/BlitCore/blob/master/src/images/Portfolio/WhatsappAutoDesign/cover.png?raw=true')",
    },

    {
      name: "Marrakesh Rentals",
      label: "Website Design",
      icon: <BsFillHousesFill />,
      backgroundImage: "url('https://github.com/Blitcore-Org/BlitCore/blob/8e1fe0c7f03fd740e95118d52c1a36d20c0dad70/src/images/Portfolio/RiadMDesign/cover.png?raw=true')",
    },

    {
      name: "Personal Website",
      label: "Web Development",
      icon: <BsPersonVideo />,
      backgroundImage:
        "url('https://github.com/Blitcore-Org/BlitCore/blob/8e1fe0c7f03fd740e95118d52c1a36d20c0dad70/src/images/Portfolio/PersonalWebDesign/cover.png?raw=true')",
    },

    {
      name: "Arthur Razor",
      label: "Website Design",
      icon: <BsScissors />,
      backgroundImage:
        "url('https://github.com/Blitcore-Org/BlitCore/blob/8e1fe0c7f03fd740e95118d52c1a36d20c0dad70/src/images/Portfolio/ArthurRazorDesign/cover.png?raw=true')",
    },
  ]);

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-Axl lg:text-5xl font-bold mt-12 text-blitblue-400 pb-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blitblue-500 to-blitblue-400">
                Portfolio
              </span>
            </h1>
            <div className="justify-center mt-10 flex">
              <Carousel>
                {options.map((option, i) => (
                  <Card
                    key={i}
                    name={option.name}
                    label={option.label}
                    icon={option.icon}
                    backgroundImage={option.backgroundImage}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
