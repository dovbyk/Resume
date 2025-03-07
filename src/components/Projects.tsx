import React, { useState } from 'react';
import { Github, ExternalLink, Play, X } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>('');

  const projects: Project[] = [
    {
      title: 'DeepScript',
      description: 'A Deep Learning Model which takes user handwriting as sample and converts any digital text into a realistic handwriting ',
      image: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Transformer', 'OpenCV', 'PIL'],
      githubUrl: 'https://github.com/dovbyk/DeepScript',
    },
    {
      title: 'KIIT-Compatibility',
      description: 'A web application which allows KIITians to check compatibility with their mates and if the score meets the threshold, they can request for phone number of that person.',
      image: 'https://e7.pngegg.com/pngimages/9/267/png-clipart-senior-management-business-project-management-project-manager-team-members-text-service.png',
      technologies: ['ReactJS', 'ExpressJS', 'MongoDB', 'Firebase Authentication'],
      githubUrl: 'https://github.com/dovbyk/KIIT-Compatibility',
    },
    {
      title: 'SaveThePac',
      description: 'A GUI based game which contains Pacman as the character whose aim is to collect fruits and dodge any incoming obstacles',
      image: 'https://png.pngtree.com/background/20230716/original/pngtree-realistic-discord-icon-logo-in-3d-rendering-picture-image_4237831.jpg',
      technologies: ['Java'],
      githubUrl: 'https://github.com/dovbyk/PacMan',
      demoVideo: '/demo.mp4'
    }
  ];

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Centering the third project */}
        <div className="flex justify-center mt-8">
          <div
            key={projects[2].title}
            className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 w-full max-w-lg"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{projects[2].title}</h3>
              <p className="text-gray-400 mb-4">{projects[2].description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[2].technologies.map((tech) => (
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
                  href={projects[2].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End of centering the third project */}
      </div>
    </section>
  );
};

export default Projects;
