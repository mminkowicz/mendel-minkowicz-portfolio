import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20 lg:pt-24">
      <div className="container-responsive text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-responsive font-bold text-gray-900 mb-6">
            Mendel Minkowicz
          </h1>
          
          <h2 className="subheading-responsive text-blue-600 mb-8 font-semibold">
            Technology Consultant & Solutions Architect
          </h2>
          
          <p className="text-responsive text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate tech professional driving digital transformation through CRM systems, Salesforce development, 
            and business process optimization. Based in Daytona Beach, FL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:mminkowicz@gmail.com" 
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">mminkowicz@gmail.com</span>
            </a>
            
            <a 
              href="tel:+16786128355" 
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">(678) 612-8355</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="#about" 
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
