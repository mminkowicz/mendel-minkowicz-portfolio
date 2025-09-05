import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "CRM Systems & Administration",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      items: ["Salesforce", "HubSpot", "Custom Objects", "Workflow Automation", "Reports & Dashboards", "User Training", "Data Management"]
    },
    {
      category: "Systems Integration & Development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: ["Visualforce", "Apex", "API Integrations", "Custom Development", "Data Migration", "Process Automation", "Workflow Optimization"]
    },
    {
      category: "Business & Strategy",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: ["Strategic Planning", "Client Relationship Management", "Sales & Business Development", "Problem Solving", "Communication", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-responsive font-bold text-gray-900 mb-16 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 lg:p-8 rounded-xl border border-gray-100 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how I can help streamline your processes, optimize your CRM, and drive digital transformation.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Start a Conversation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


