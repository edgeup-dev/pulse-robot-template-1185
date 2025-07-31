import React, { useRef } from "react";

const VisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-50" id="vision" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">VISION</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            We're Here to Build the Future of Artificial Intelligence
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            ZaryahX Chain is laying the foundation for an AI-native world — a decentralized network 
            powered by intelligent systems and built for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg text-gray-700 mb-6">
              Our vision is to enable transparent, privacy-first AI that rewards participation and 
              removes centralized control.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              This is the Vibe Chain: adaptable, inclusive, and designed to grow with its users.
            </p>
            <ul className="space-y-4">
              {[
                "No single point of failure",
                "No data centralization", 
                "No gatekeepers",
                "Open, accessible, and aligned with users"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" 
              alt="AI Infrastructure" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;