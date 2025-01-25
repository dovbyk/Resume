import React, { useState } from 'react';
import { Github, ExternalLink, Play, X } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>('');

  const projects: Project[] = [
    {
      title: 'BroBot',
      description: 'A Deep Learning Model which takes user handwriting as sample and converts any input digital text into a realistic handwriting ',
      image: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['CNN', 'OpenCV', 'PIL'],
      githubUrl: 'https://github.com/dovbyk/BroBot',
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
                  {project.demoVideo && (
                    <button
                      onClick={() => openVideoModal(project.demoVideo!)}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Play size={20} className="mr-1" />
                      Watch Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
            <video
              src={currentVideo}
              controls
              className="w-full rounded-lg"
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;



