import React from 'react';
import Header from '../partials/Header';

const Consult = () => {
  return (
      <div  className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <div className="mt-10" style={{ height: "800px" }}>

      <iframe
        src="https://calendly.com/tamerjar/free-consultaion"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
    </div>
  );
};

export default Consult;