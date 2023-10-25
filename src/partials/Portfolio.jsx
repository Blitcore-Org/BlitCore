import React, { useState } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { FaWalking, FaBiking, FaCar, FaPlane } from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ name, label, icon, backgroundImage }) => (
  <div className="car-card">
    <div className="cover-image flex h-full w-full" style={{ backgroundImage }}></div>
    <div className="icon-container mt-8 flex flex-row">
      <div className="icon h-14 w-14">
        {icon}
      </div>
      <div className="info-containter">
        <h2>{name}</h2>
        <p>{label}</p>
      </div>
    </div>
  </div>
);


const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><HiChevronLeft /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='car-card-container' style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 2,
          'pointerEvents': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}> 
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><HiChevronRight /></button>}
    </div>
  );
};

function Portfolio() {

  // Options data state.
const [options] = useState([
  {
    name: "Option 1",
    label: "Label 1",
    icon: <BsWhatsapp />,
    backgroundImage:
      "url('src/images/Portfolio/WhatsappAutoDesign/cover.png')",
  },

  {
    name: "Option 2",
    label: "Label 2",
    icon: <BsWhatsapp />,
    backgroundImage: "url('src/images/Portfolio/RiadMDesign/cover.png')",
  },

  {
    name: "Option 3",
    label: "Label 3",
    icon: <BsWhatsapp />,
    backgroundImage:
      "url('src/images/Portfolio/PersonalWebDesign/cover.png')",
  },

  {
    name: "Option 4",
    label: "Label 4",
    icon: <BsWhatsapp />,
    backgroundImage:
      "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
  },
  {
    name: "Option 5",
    label: "Label 5",
    icon: <BsWhatsapp />,
    backgroundImage:
      "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
  },
  {
    name: "Option 6",
    label: "Label 6",
    icon: <BsWhatsapp />,
    backgroundImage:
      "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
  },
  {
    name: "Option 7",
    label: "Label 7",
    icon: <BsWhatsapp />,
    backgroundImage:
      "url('src/images/Portfolio/ArthurRazorDesign/cover.png')",
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
            <div className="justify-center mt-10 flex flex-col md:flex-row">
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

