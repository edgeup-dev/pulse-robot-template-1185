import React, { useRef } from "react";

const WhyZaryahXSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-50" id="why-zaryahx" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">WHY ZARYAHX</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            A New Era of Infrastructure, Built by Intelligence
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Legacy systems are slow, centralized, and fragile. ZaryahX replaces them with a privacy-first, 
            decentralized network — governed by logic, not gatekeepers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-pulse-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-pulse-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path>
                <path d="M12 8a4 4 0 1 0 4 4"></path>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Open & Accessible</h4>
            <p className="text-gray-600">
              Infrastructure reimagined for AI: open, encrypted, and designed to grow smarter with use.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-pulse-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-pulse-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Privacy-First</h4>
            <p className="text-gray-600">
              Your data stays on your device. No sharing, no tracking, just secure performance.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-pulse-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-pulse-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.06 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1.06H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.06-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.06 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1.06H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1.06z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Earn-as-you-Use</h4>
            <p className="text-gray-600">
              Contribute compute, train models, or just participate — and get rewarded as part of the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZaryahXSection;