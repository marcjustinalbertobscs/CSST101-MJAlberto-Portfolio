import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <img
                  src={require('../assets/profile.png')}
                  alt="Profile"
                  className="w-72 h-72 object-cover rounded-full ring-4 ring-blue-500"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">I build digital experiences</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 2 years of experience in web development, I specialize in creating 
              responsive, accessible, and performant websites and applications. I'm passionate 
              about clean code and user-centered design.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or sharing knowledge through technical writing.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '2+ Years' },
                { label: 'Projects', value: '50+' },
                { label: 'Clients', value: '20+' },
                { label: 'Certifications', value: '12' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;