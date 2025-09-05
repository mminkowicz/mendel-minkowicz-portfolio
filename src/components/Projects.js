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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {project.client} • {project.duration}
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              
              <div>
                <h4 className="text-sm font-semibold text-black mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-gray-600 text-sm">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
