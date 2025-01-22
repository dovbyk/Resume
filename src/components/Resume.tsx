import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Resume</h2>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
              <a
                href="/src/Resume.pdf"
                download
                className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Download size={20} className="mr-2" />
                Download PDF
              </a>
            </div>

            <div className="space-y-8">
              <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500">
                <h4 className="font-semibold text-lg text-white">Senior Software Engineer</h4>
                <p className="text-gray-400">Company Name • 2020-Present</p>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    Led development of key features for flagship product
                  </li>
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    Mentored junior developers and conducted code reviews
                  </li>
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    Implemented CI/CD pipelines reducing deployment time by 50%
                  </li>
                </ul>
              </div>

              <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500">
                <h4 className="font-semibold text-lg text-white">Software Developer</h4>
                <p className="text-gray-400">Previous Company • 2018-2020</p>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    Developed and maintained multiple web applications
                  </li>
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    Collaborated with design team to implement UI/UX improvements
                  </li>
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    Optimized database queries improving performance by 30%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;