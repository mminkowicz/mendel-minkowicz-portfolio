import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-responsive">
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Mendel Minkowicz</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Technology Consultant & Solutions Architect specializing in CRM systems, 
                Salesforce development, and business process optimization.
              </p>
              <div className="flex gap-4">
                <a 
                  href="mailto:mminkowicz@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a 
                  href="tel:+16786128355" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Phone"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Salesforce Implementation</li>
                <li>CRM Optimization</li>
                <li>Business Process Automation</li>
                <li>Data Architecture</li>
                <li>User Training</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Mendel Minkowicz. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Based in Daytona Beach, FL
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


