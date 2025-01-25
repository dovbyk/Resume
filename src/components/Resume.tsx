import React, { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';

const Resume = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [imageWidth, setImageWidth] = useState<string | number>("auto");

  useEffect(() => {
    const img = new Image();
    img.src = "/Resume.jpg";
    img.onload = () => {
      setImageWidth(img.width);
    };
  }, []);

  const openModal = (type: string) => {
    if (type === "resume") setIsResumeModalOpen(true);
    if (type === "certificate") setIsCertificateModalOpen(true);
  };

  const closeModal = () => {
    setIsResumeModalOpen(false);
    setIsCertificateModalOpen(false);
  };

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Resume</h2>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-white">Achievements</h3>
              <button
                onClick={() => openModal("resume")}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Eye size={20} className="mr-2" />
                View Resume
              </button>
            </div>

            <div className="space-y-8">
              <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500">
                <h4 className="font-semibold text-lg text-white">InterSchool Hackathon</h4>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    A Competitive Programming Hackathon Conducted by ICDCIT
                  </li>
                  <li className="flex items-center before:content-['•'] before:mr-2 before:text-purple-500">
                    Secured overall 9th rank
                  </li>
                </ul>
                {/* Certificate Button */}
                <button
                  onClick={() => openModal("certificate")}
                  className="mt-4 flex items-center px-3 py-1 text-sm bg-transparent border border-white text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                  Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
{isResumeModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
    <div
      className="relative bg-gray-900 rounded-lg"
      style={{
        width: typeof imageWidth === "number" ? `${imageWidth}px` : imageWidth,
        maxHeight: "100vh", // Adjust max height as needed
        overflowY: "auto", // Enable vertical scrolling
      }}
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <X size={24} />
      </button>
      <img
        src="/Resume.jpg"
        className="w-full h-auto rounded-lg"
        alt="Resume Image"
        style={{ display: "block", maxHeight: "none" }}
      />
    </div>
  </div>
)}


      {/* Certificate Modal */}
      {isCertificateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div
            className="relative bg-gray-900 rounded-lg"
            style={{
              maxWidth: "70vw", // Limit width to fit within the viewport
              maxHeight: "100vh", // Limit height to fit within the viewport
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src="/Certificate.png"
              className="w-full h-auto rounded-lg"
              alt="Certificate Image"
              style={{ display: "block" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
