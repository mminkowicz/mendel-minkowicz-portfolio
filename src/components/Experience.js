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
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black">
                  {experience.position}
                </h3>
                <p className="text-gray-600 font-medium">
                  {experience.company} • {experience.duration}
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">
                {experience.description}
              </p>
              
              <ul className="space-y-1">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-gray-600">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
