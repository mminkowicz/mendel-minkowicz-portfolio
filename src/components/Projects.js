import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "KCA Firm - Complete Salesforce Implementation",
      client: "KCA Firm",
      duration: "2023 - Present",
      description: "Built and tailored the entire Salesforce organization from the ground up for a legal services firm.",
      achievements: [
        "Built entire Salesforce organization from scratch",
        "Implemented custom apps, objects, fields, and flows",
        "Developed data architecture and optimization",
        "Configured security profiles and compliance",
        "Led user training programs",
        "Improved data integrity by 95%"
      ],
      type: "Salesforce Implementation"
    },
    {
      title: "Agudath Israel - Salesforce Optimization",
      client: "Agudath Israel of America",
      duration: "2022 - 2023",
      description: "Delivered comprehensive Salesforce training and optimization services for a non-profit organization.",
      achievements: [
        "Delivered comprehensive Salesforce training programs",
        "Developed custom reports and dashboards",
        "Led data cleansing and deduplication efforts",
        "Implemented best practices for non-profit operations"
      ],
      type: "CRM Optimization"
    },
    {
      title: "Lubavitch International - CRM Transformation",
      client: "Lubavitch International",
      duration: "2022 - 2023",
      description: "Implemented and configured Salesforce to meet business requirements for a global religious organization.",
      achievements: [
        "Implemented Salesforce configuration",
        "Customized objects, fields, and page layouts",
        "Managed user profiles, roles, and permission sets",
        "Developed workflows and approval processes"
      ],
      type: "CRM Transformation"
    },
    {
      title: "Ecom Diversify - HubSpot Optimization",
      client: "Ecom Diversify",
      duration: "2022 - 2023",
      description: "Optimized HubSpot workflows, automation, and integrations for an e-commerce business.",
      achievements: [
        "Optimized HubSpot workflows and automation",
        "Led data cleanup efforts",
        "Managed projects using ClickUp",
        "Improved operational efficiency by 40%"
      ],
      type: "HubSpot Optimization"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-responsive font-bold text-gray-900 mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 card-hover">
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                        {project.type}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">
                    {project.client}
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help transform your business processes and optimize your CRM systems.
              </p>
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Start Your Project</span>
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

export default Projects;
