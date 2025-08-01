import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MiningFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const MiningFeature = ({ icon, title, description, index }: MiningFeatureProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const MiningSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="mining" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>⛏️ Mining</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Revolutionary Mining Infrastructure
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Contribute to the network and earn rewards through our innovative decentralized mining system that powers the ZaryahX ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <MiningFeature
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z"/>
                <path d="M9 13h6"/>
                <path d="M9 17h3"/>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
              </svg>
            }
            title="CPU-First Mining"
            description="Mine efficiently with standard CPUs. Our DFDM architecture eliminates the need for expensive GPU farms, making mining accessible to everyone."
            index={0}
          />
          <MiningFeature
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <circle cx="12" cy="12" r="8"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
            }
            title="Distributed Rewards"
            description="Earn ZRX tokens by contributing computational power, validating AI models, and participating in the decentralized network consensus."
            index={1}
          />
          <MiningFeature
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <circle cx="12" cy="8" r="3"/>
              </svg>
            }
            title="Quantum-Secure Mining"
            description="Your mining contributions are protected by quantum encryption, ensuring security and integrity of the entire network."
            index={2}
          />
          <MiningFeature
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M3 3v18h18"/>
                <path d="M7 16l4-4 4 4 6-6"/>
                <circle cx="7" cy="16" r="2"/>
                <circle cx="11" cy="12" r="2"/>
                <circle cx="15" cy="16" r="2"/>
                <circle cx="21" cy="10" r="2"/>
              </svg>
            }
            title="Smart Resource Optimization"
            description="Our AI automatically optimizes your mining performance, adjusting workloads based on available resources and network demands."
            index={3}
          />
          <MiningFeature
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            }
            title="Federated Learning Pool"
            description="Join collaborative training sessions where your device contributes to model improvement while maintaining complete data privacy."
            index={4}
          />
          <MiningFeature
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.06 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1.06H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.06-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.06 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1.06H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1.06z"/>
              </svg>
            }
            title="Real-Time Mining Analytics"
            description="Monitor your mining performance, earnings, and network contribution through our comprehensive dashboard with real-time metrics."
            index={5}
          />
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="glass-card max-w-2xl mx-auto p-6 sm:p-8 opacity-0 fade-in-element">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
              Start Mining Today
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of miners already contributing to the ZaryahX network. No special hardware required - just install our software and start earning.
            </p>
            <a 
              href="#get-access" 
              className="inline-flex items-center justify-center group text-center"
              style={{
                backgroundColor: '#FE5C02',
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: '20px',
                padding: '12px 24px',
                border: '1px solid white',
                transition: 'all 0.3s ease'
              }}
            >
              Get Mining Access
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiningSection;