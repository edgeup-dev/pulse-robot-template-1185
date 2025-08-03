import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Lock, Coins, ArrowRight } from "lucide-react";

const UnifiedSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            ZaryahX Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in our revolutionary blockchain ecosystem through mining, staking, and investing in our native DNZ token.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mining Column */}
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-pulse-50 text-pulse-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z"/>
                  <path d="M9 13h6"/>
                  <path d="M9 17h3"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                </svg>
              </div>
              <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                ⛏️ Mining
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-muted-foreground leading-relaxed">
                Mine efficiently with standard CPUs using our DFDM architecture. Earn ZRX tokens by contributing computational power to our decentralized network.
              </CardDescription>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Mining Type:</span>
                  <span className="font-medium">CPU-First</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rewards:</span>
                  <span className="font-medium text-green-500">ZRX Tokens</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Security:</span>
                  <span className="font-medium">Quantum-Safe</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full group border-primary/20 hover:bg-primary/10"
              >
                Start Mining
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Staking Column */}
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                🏦 Staking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-muted-foreground leading-relaxed">
                Secure your digital assets while earning competitive rewards through our advanced staking infrastructure with flexible duration options.
              </CardDescription>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Average APY:</span>
                  <span className="font-medium text-green-500">12.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Locked:</span>
                  <span className="font-medium">$2.4B+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active Stakers:</span>
                  <span className="font-medium">150K+</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full group border-primary/20 hover:bg-primary/10"
              >
                Start Staking
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Buy DNZ Column */}
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Coins className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                💰 Buy DNZ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-muted-foreground leading-relaxed">
                Invest in the future of digital currency. DNZ has shown exceptional growth from $0.004 to $0.050 with multiple purchase options.
              </CardDescription>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current Price:</span>
                  <span className="font-medium text-primary">$0.050</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Growth:</span>
                  <span className="font-medium text-green-500">+1,150%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Cap:</span>
                  <span className="font-medium">$850M</span>
                </div>
              </div>
              <Button 
                className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Buy DNZ Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UnifiedSection;