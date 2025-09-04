import React, { useState, useEffect } from "react";
import { Recycle, MapPin, BarChart3, Leaf } from "lucide-react";

function Home() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: <Recycle size={32} color="green" />, value: "85%", label: "Waste Diverted" },
    { icon: <MapPin size={32} color="blue" />, value: "150+", label: "Smart Bins" },
    { icon: <BarChart3 size={32} color="purple" />, value: "40%", label: "Efficiency Boost" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <Leaf size={40} color="green" />
        <h1>Smart Waste Management</h1>
        <p>
          Transforming waste collection with{" "}
          <span className="highlight">real-time tracking</span>,{" "}
          <span className="highlight">optimized routes</span>, and{" "}
          <span className="highlight">sustainable practices</span>.
        </p>
        <div className="buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Watch Demo</button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`stat-card ${index === currentStat ? "active" : ""}`}
          >
            {stat.icon}
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <MapPin size={28} />
          <h3>Bin Tracking</h3>
          <p>Monitor fill levels and locations of all smart bins.</p>
        </div>
        <div className="feature-card">
          <BarChart3 size={28} />
          <h3>Smart Analytics</h3>
          <p>Get insights on waste patterns and collection efficiency.</p>
        </div>
        <div className="feature-card">
          <Recycle size={28} />
          <h3>Optimized Collection</h3>
          <p>AI-powered route optimization saves time and fuel.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Smart Waste Management | Cleaner, Greener Future 🌱</p>
      </footer>
    </div>
  );
}

export default Home;
