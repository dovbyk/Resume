import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Aryan Sharma Gaire</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Aspiring Software Engineer
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/dovbyk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-gray-700/50 hover:scale-110 transition-all duration-300"
              >
                <Github size={24} className="text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-sharma-gaire-12250b309/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-gray-700/50 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} className="text-gray-300 hover:text-white" />
              </a>
              <a
                href="botx711@gmail.com"
                className="p-3 glass-card hover:bg-gray-700/50 hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} className="text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 glow-effect"></div>
              <img
                src="/img3.jpg"
                alt="Profile"
                className="relative w-64 h-64 object-cover mx-auto rounded-full border-4 border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
