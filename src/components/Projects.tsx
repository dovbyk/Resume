import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'BroBot',
      description: 'A Deep Learning Model which takes user handwriting as sample and converts any input digital text into a realistic handwriting ',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      technologies: ['CNN', 'OpenCV', 'PIL'],
      githubUrl: 'https://github.com/dovbyk/BroBot',
      liveUrl: 'https://project1.com'
    },
    {
      title: 'SaveThePac',
      description: 'A GUI based game which contains Pacman as the character whose aim is to collect fruits and dodge any incoming obstacles',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      technologies: ['Java'],
      githubUrl: 'https://github.com/dovbyk/PacMan',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-gray-300 bg-gray-800/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;