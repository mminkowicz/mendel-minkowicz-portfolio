import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Mendel Minkowicz
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          Technology Consultant & Solutions Architect
        </h2>
        
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Passionate tech professional driving digital transformation through CRM systems, Salesforce development, 
          and business process optimization. Based in Daytona Beach, FL.
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            <a href="mailto:mminkowicz@gmail.com" className="underline hover:text-black">
              mminkowicz@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            <a href="tel:+16786128355" className="underline hover:text-black">
              (678) 612-8355
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
