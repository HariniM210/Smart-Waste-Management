import React, { useState, useEffect } from 'react';
import { Recycle, MapPin, BarChart3, Leaf, ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Recycle, value: "85%", label: "Waste Diverted", color: "text-green-500" },
    { icon: MapPin, value: "150+", label: "Smart Bins", color: "text-blue-500" },
    { icon: Users, value: "50K+", label: "Users", color: "text-purple-500" },
    { icon: TrendingUp, value: "40%", label: "Efficiency Boost", color: "text-orange-500" }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-time Bin Tracking",
      description: "Monitor fill levels and locations of all waste bins in your area with live updates.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Get insights on waste patterns, collection efficiency, and environmental impact.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Recycle,
      title: "Optimized Collection",
      description: "AI-powered route optimization reduces fuel consumption and collection time.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-12">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-2 mb-8">
            <Leaf className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">Sustainable Future</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
            Smart Waste
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Management</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Revolutionary IoT-powered system that transforms waste collection through 
            <span className="text-green-400 font-semibold"> intelligent tracking</span>, 
            <span className="text-blue-400 font-semibold"> optimized routes</span>, and 
            <span className="text-purple-400 font-semibold"> sustainable practices</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;
            return (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                  isActive ? 'ring-2 ring-green-400/50 bg-white/10 scale-105' : ''
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className={`group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                <div className="mt-6 flex items-center text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg border border-green-500/20 rounded-3xl p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Making Cities Cleaner & Greener
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of cities worldwide in revolutionizing waste management through smart technology and sustainable practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2.5M</div>
              <div className="text-gray-400">Tons CO₂ Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400">Cities Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-400">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-110">
          <Recycle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Home;
