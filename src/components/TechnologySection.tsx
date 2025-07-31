import React, { useRef } from "react";

const TechnologySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-white" id="technology" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span>Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ZaryahX – The Future of Ethical & Decentralized Finance
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            AI-Powered, & Tokenized Financial Ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Digital Products & Services</h3>
            <p className="text-gray-700 mb-8">
              ZaryahX is reshaping the financial landscape by integrating AI, blockchain, and asset tokenization into a seamless, Ethical-compliant system.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-pulse-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">Crypto Exchange & Asset Tokenization</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Secure and transparent exchange for asset-backed cryptocurrencies</li>
                  <li>• Trade stocks, bonds, commodities, currency, real estate</li>
                  <li>• Powered by Dinarz (DNZ), our silver-backed crypto token</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-pulse-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">Neo Crypto & Asset Bank</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Digital asset bank merging traditional and crypto finance</li>
                  <li>• Encash crypto to fiat & vice versa via debit card</li>
                  <li>• One account for global transactions, removing cross-border limitations</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-pulse-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">TijarX – The Metaverse for Wealth Building</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Real-time trading game simulating wealth-building strategies</li>
                  <li>• Educates users about finance, trading, and ethical investments</li>
                  <li>• Integrated with Dinarz (DNZ) for real-world rewards</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" 
              alt="3D rendering futuristic technologies" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <div className="space-y-4">
              <div className="border-l-4 border-pulse-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">Raya – AI Ethical Fintech Assistant</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• AI-backed, Ethically-compliant trading algorithm</li>
                  <li>• Automates investment strategies and risk management</li>
                  <li>• Ensures ethical and transparent trading</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-pulse-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">ZPay – Tap & Pay Globally</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Seamless crypto-fiat payment solution</li>
                  <li>• Tap your number and pay anywhere</li>
                  <li>• Powered by blockchain for fast, secure transactions</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-pulse-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">Real-World Asset (RWA) Tokenization</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Bringing real-world assets onto the blockchain</li>
                  <li>• Tokenizing stocks, real estate, commodities</li>
                  <li>• Reducing friction in asset ownership through DeFi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;