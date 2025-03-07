import React from 'react';

const About = () => {
  const skills = [
    'C,C++,Java',
    'Data Analysis with Python',
    'LINUX',
    'Shell Programming',
    'React JS(beginner)',
    'Node JS(beginner)',
    'SQL',
    'Git',
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed">
             I am currently a student at Kalinga Institute of Industrial Technology studying computer science. I love building impactful full-stack projects and am comfortable working with most modern web development frameworks and technologies. As a student, I'm always looking to learn new skills and add to my range as a programmer and a student.            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass-card text-gray-300 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Education</h3>
            <div className="glass-card p-6 hover:bg-gray-800/50 transition-colors duration-300">
              <h4 className="font-semibold text-white">BTech in Computer Science and Engineering</h4>
              <p className="text-gray-400">Kalinga Institute of Industrial Technology • 2022-2026</p>
              <p className="text-gray-400">CGPA • 9.02 </p>

            </div>
            <div className="glass-card p-6 hover:bg-gray-800/50 transition-colors duration-300">
              <h4 className="font-semibold text-white">10th and 12th</h4>
              <p className="text-gray-400">New Horizon E.B Higher Secondary School • 2020-2022</p>
              <p className="text-gray-400">CGPA • 3.9 & 3.02 </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
