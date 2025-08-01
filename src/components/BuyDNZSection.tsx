import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, DollarSign, ArrowUpRight, Coins, ShoppingCart, CreditCard } from "lucide-react";

const BuyDNZSection = () => {
  // Price data showing progression from $0.004 to $0.05
  const priceData = [
    { date: "Jan 2024", price: 0.004, volume: 1200000 },
    { date: "Feb 2024", price: 0.008, volume: 1800000 },
    { date: "Mar 2024", price: 0.012, volume: 2400000 },
    { date: "Apr 2024", price: 0.018, volume: 3200000 },
    { date: "May 2024", price: 0.025, volume: 4100000 },
    { date: "Jun 2024", price: 0.032, volume: 5200000 },
    { date: "Jul 2024", price: 0.041, volume: 6800000 },
    { date: "Aug 2024", price: 0.050, volume: 8500000 }
  ];

  const buyingOptions = [
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Credit/Debit Card",
      description: "Instant purchase with Visa, Mastercard, or American Express",
      fee: "2.5% fee"
    },
    {
      icon: <Coins className="h-6 w-6 text-primary" />,
      title: "Crypto Exchange",
      description: "Trade BTC, ETH, USDT for DNZ on major exchanges",
      fee: "0.1% fee"
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "Direct Purchase",
      description: "Buy directly from our platform with bank transfer",
      fee: "No fees"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-sm text-primary font-semibold">
            Price: ${payload[0].value.toFixed(3)}
          </p>
          <p className="text-xs text-muted-foreground">
            Volume: {(payload[0].payload.volume / 1000000).toFixed(1)}M
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="buy-dnz" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Coins className="h-4 w-4" />
            Buy DNZ Token
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Buy Dinarz (DNZ)
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the revolution and invest in the future of digital currency. DNZ has shown exceptional growth and continues to reach new milestones.
          </p>
        </div>

        {/* Current Price and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Current Price</span>
              </div>
              <div className="text-2xl font-bold text-primary">$0.050</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">24h Change</span>
              </div>
              <div className="text-2xl font-bold text-green-500">+12.5%</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ArrowUpRight className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Growth</span>
              </div>
              <div className="text-2xl font-bold text-green-500">+1,150%</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Market Cap</span>
              </div>
              <div className="text-2xl font-bold text-primary">$850M</div>
            </CardContent>
          </Card>
        </div>

        {/* Price Chart */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              DNZ Price History
            </CardTitle>
            <CardDescription>
              Dinarz token price progression from $0.004 to $0.050 - showing consistent growth and market confidence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData}>
                  <defs>
                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `$${value.toFixed(3)}`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    fill="url(#priceGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Buying Options */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Buy DNZ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingOptions.map((option, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {option.icon}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {option.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {option.fee}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Buy DNZ?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of investors who have already secured their position in the future of digital currency. Start with as little as $10.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Buy DNZ Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-primary/20 hover:bg-primary/10"
            >
              View on Exchange
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>✓ Secure & Regulated</div>
            <div>✓ 24/7 Customer Support</div>
            <div>✓ Instant Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyDNZSection;