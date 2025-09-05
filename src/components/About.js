import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-responsive font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-responsive text-gray-700 leading-relaxed">
                I'm a Solutions Architect and Technology Consultant specializing in building, customizing, and optimizing 
                CRM and business systems for small to mid-sized organizations. With hands-on experience in Salesforce, 
                HubSpot, and other platforms, I design and launch fully custom end-to-end systems.
              </p>
              
              <p className="text-responsive text-gray-700 leading-relaxed">
                I combine technical expertise in Salesforce development, automation, and data architecture with a practical 
                consulting approach that empowers businesses to streamline workflows, improve data quality, and enhance 
                user adoption. My philosophy is simple: take the technology off my clients' plate so they can focus on their business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">CRM System Implementation & Customization</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Salesforce Development & Administration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Business Process Automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Data Architecture & Integration</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold text-gray-900">Flatiron School</p>
                  <p className="text-gray-600">Software Engineer (Expected June 2025)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  Salesforce Administrator
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  Salesforce Certified Associate
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  HubSpot Sales Software
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  Systems Integration
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  Process Automation & Workflow Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
