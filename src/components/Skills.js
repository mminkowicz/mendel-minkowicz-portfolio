import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "CRM Systems & Administration",
      items: ["Salesforce", "HubSpot", "Custom Objects", "Workflow Automation", "Reports & Dashboards", "User Training", "Data Management"]
    },
    {
      category: "Systems Integration & Development",
      items: ["Visualforce", "Apex", "API Integrations", "Custom Development", "Data Migration", "Process Automation", "Workflow Optimization"]
    },
    {
      category: "Business & Strategy",
      items: ["Strategic Planning", "Client Relationship Management", "Sales & Business Development", "Problem Solving", "Communication", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-black mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    • {item}
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

export default Skills;


