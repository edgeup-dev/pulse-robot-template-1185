import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, DollarSign, ArrowUpRight, Coins } from "lucide-react";
const PriceChartSection = () => {
  // Price data showing progression from $0.004 to current $0.005
  const priceData = [{
    date: "Jan 2024",
    price: 0.004,
    volume: 1200000
  }, {
    date: "Feb 2024",
    price: 0.003,
    volume: 1800000
  }, {
    date: "Mar 2024",
    price: 0.0035,
    volume: 2400000
  }, {
    date: "Apr 2024",
    price: 0.0032,
    volume: 3200000
  }, {
    date: "May 2024",
    price: 0.0028,
    volume: 4100000
  }, {
    date: "Jun 2024",
    price: 0.0025,
    volume: 5200000
  }, {
    date: "Jul 2024",
    price: 0.0024,
    volume: 6800000
  }, {
    date: "Aug 2024",
    price: 0.0026,
    volume: 8500000
  }, {
    date: "Dec 2024",
    price: 0.005,
    volume: 9200000
  }];
  const CustomTooltip = ({
    active,
    payload,
    label
  }: any) => {
    if (active && payload && payload.length) {
      return <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-sm text-primary font-semibold">
            Price: ${payload[0].value.toFixed(3)}
          </p>
          <p className="text-xs text-muted-foreground">
            Volume: {(payload[0].payload.volume / 1000000).toFixed(1)}M
          </p>
        </div>;
    }
    return null;
  };
  return <section className="py-20 px-4 relative overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            Price Analytics
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            DNZ Performance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the exceptional growth of Dinarz token and market performance over time.
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
              <div className="text-2xl font-bold text-primary">$0.005</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Last Sale Price</span>
              </div>
              <div className="text-2xl font-bold text-green-500">$0.0026</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ArrowUpRight className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Growth</span>
              </div>
              <div className="text-2xl font-bold text-green-500">+92%</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Total Supply</span>
              </div>
              <div className="text-2xl font-bold text-primary">100M</div>
            </CardContent>
          </Card>
        </div>

        {/* Price Chart */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              DNZ Price History
            </CardTitle>
            <CardDescription>
              Dinarz token price progression showing recent growth from $0.0026 to current $0.005 - demonstrating market confidence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData}>
                  <defs>
                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={value => `$${value.toFixed(3)}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="price" stroke="hsl(var(--primary))" strokeWidth={3} fill="url(#priceGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default PriceChartSection;