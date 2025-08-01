import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Lock, DollarSign, Clock, Shield, Zap } from "lucide-react";

const StakingSection = () => {
  const stakingFeatures = [
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Secure Staking",
      description: "Advanced cryptographic security ensures your staked assets are protected with military-grade encryption."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "High Yield Returns",
      description: "Earn competitive APY rates with our optimized staking algorithms and reward distribution system."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Duration",
      description: "Choose from multiple staking periods to match your investment strategy and liquidity needs."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Instant Rewards",
      description: "Real-time reward calculation and distribution with transparent tracking of your earnings."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Insurance Coverage",
      description: "Your staked assets are protected by comprehensive insurance against smart contract risks."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Auto-Compounding",
      description: "Maximize your returns with automatic reinvestment of rewards for exponential growth."
    }
  ];

  return (
    <section id="staking" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            Staking Platform
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Stake & Earn
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your digital assets while earning competitive rewards through our advanced staking infrastructure built for the future of decentralized finance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stakingFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">12.5%</div>
            <div className="text-muted-foreground">Average APY</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">$2.4B+</div>
            <div className="text-muted-foreground">Total Value Locked</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">150K+</div>
            <div className="text-muted-foreground">Active Stakers</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Staking Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-primary/20 hover:bg-primary/10"
            >
              View Staking Pools
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No minimum amount required • Unstake anytime • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default StakingSection;