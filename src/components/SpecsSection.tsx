
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Specs</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Powering the Future — At Scale
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pulse-500 mb-2">100B</div>
              <div className="text-gray-600">AI Parameters Trained</div>
              <div className="text-sm text-gray-500 mt-1">Powered by Proof-of-AI (PoAI) infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pulse-500 mb-2">100%</div>
              <div className="text-gray-600">Quantum Encrypted & Federated</div>
              <div className="text-sm text-gray-500 mt-1">Built with DFDM architecture for full decentralization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pulse-500 mb-2">95%+</div>
              <div className="text-gray-600">Device Compatibility</div>
              <div className="text-sm text-gray-500 mt-1">Optimized for CPUs, GPUs, ASICs & edge devices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pulse-500 mb-2">∞</div>
              <div className="text-gray-600">Scalable autonomous Agents</div>
              <div className="text-sm text-gray-500 mt-1">Ecosystem-ready for AI-native deployment and growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
