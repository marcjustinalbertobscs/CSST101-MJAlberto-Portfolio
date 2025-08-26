import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'ecommerce-thumbnail.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      image: 'task-thumbnail.jpg',
      tags: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with beautiful UI',
      image: 'weather-thumbnail.jpg',
      tags: ['React', 'API', 'CSS'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift flex flex-col">
              <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-xl">
                <img
                  src={require(`../assets/${project.image}`)}
                  alt={project.title}
                  className="object-cover w-full h-full filter grayscale"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-primary font-semibold hover:text-secondary mt-auto">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;