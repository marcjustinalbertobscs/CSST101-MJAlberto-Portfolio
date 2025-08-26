import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 85, color: 'bg-blue-500' },
    { name: 'Python', level: 90, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'Flutter', level: 75, color: 'bg-cyan-500' },
    { name: 'SQL', level: 80, color: 'bg-green-600' },
    { name: 'CSS/Tailwind', level: 70, color: 'bg-cyan-400' }
  ];

  const tools = [
    'Github', 'VS Code', 'PyCharm', 'Firebase', 'MySQL', 'Android Studios',
    'Figma', 'Photoshop', 'Illustrator', 'Blender', 'Power BI', 'Excel'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover-lift">
                  <div className="text-gray-700 font-medium">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;