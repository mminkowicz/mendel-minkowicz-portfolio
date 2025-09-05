import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          About Me
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            I'm a Solutions Architect and Technology Consultant specializing in building, customizing, and optimizing 
            CRM and business systems for small to mid-sized organizations. With hands-on experience in Salesforce, 
            HubSpot, and other platforms, I design and launch fully custom end-to-end systems.
          </p>
          
          <p className="text-gray-700 mb-6">
            I combine technical expertise in Salesforce development, automation, and data architecture with a practical 
            consulting approach that empowers businesses to streamline workflows, improve data quality, and enhance 
            user adoption. My philosophy is simple: take the technology off my clients' plate so they can focus on their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-black">Flatiron School</p>
                <p className="text-gray-600">Software Engineer (Expected June 2025)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li className="text-gray-700">• Salesforce Administrator</li>
              <li className="text-gray-700">• Salesforce Certified Associate</li>
              <li className="text-gray-700">• HubSpot Sales Software</li>
              <li className="text-gray-700">• Systems Integration</li>
              <li className="text-gray-700">• Process Automation & Workflow Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
