import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Optamyze",
      position: "Technology Consultant",
      duration: "Jan 2023 – Present",
      description: "Planned, built, and launched fully custom Salesforce systems from the ground up, including recruiting platforms and tailored CRM solutions.",
      achievements: [
        "Built complete Salesforce systems from the ground up",
        "Designed and customized Salesforce environments with apps, objects, fields, flows, and validation rules",
        "Implemented secure and scalable data structures with object relationships",
        "Configured user roles, profiles, and permissions for robust access control",
        "Developed dashboards and reports for actionable insights",
        "Delivered training and ongoing support to end-users",
        "Automated complex business processes with workflows and approvals"
      ]
    },
    {
      company: "GForce Technology Consulting",
      position: "Sr Application Consultant",
      duration: "Oct 2022 – Present",
      description: "Focused on Salesforce customization and integration to optimize business processes and enhance system functionality.",
      achievements: [
        "Designed and implemented tailored Salesforce solutions",
        "Created custom objects, fields, workflows, validation rules, and automated processes",
        "Developed custom Visualforce pages and Apex classes/triggers",
        "Executed seamless integration of external applications with Salesforce",
        "Managed deployment of new features and enhancements"
      ]
    },
    {
      company: "Rubicon",
      position: "Salesforce Administrator",
      duration: "Jan 2022 – Sep 2022",
      description: "Oversaw Salesforce configuration and user support to optimize business processes and data management.",
      achievements: [
        "Customized Salesforce functionalities including custom objects, fields, workflows, and validation rules",
        "Provided technical assistance and training sessions for users",
        "Managed user account creation, profile settings, and permission assignments",
        "Controlled data security and ensured compliance with best practices",
        "Executed data integrity checks and led data cleanup initiatives",
        "Developed and sustained reports and dashboards for data-driven decision-making"
      ]
    },
    {
      company: "Plasma Funding, LLC",
      position: "Principal / Sales Agent",
      duration: "Jan 2019 – Jan 2021",
      description: "Focused on delivering tailored financial solutions to small businesses, addressing their specific needs and challenges.",
      achievements: [
        "Founded a company to deliver prompt financial solutions to small businesses",
        "Identified prospective customers and successfully negotiated contracts",
        "Ensured high-quality customer service through effective communication",
        "Developed innovative problem-solving approaches for client challenges"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-responsive font-bold text-gray-900 mb-16 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 card-hover">
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                      {experience.position}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {experience.duration}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-700">
                    {experience.company}
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
