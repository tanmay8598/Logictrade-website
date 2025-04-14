import React from "react";

const features = [
  {
    title: "Trade Tracker",
    description:
      "Log your trades, analyze performance, and refine your strategy.",
    icon: "📖",
  },
  {
    title: "Trend Radar",
    description: "Discover high-momentum stocks in real-time.",
    icon: "❤️",
  },
  {
    title: "Smart Money Flow",
    description: "Track institutional (FII/DII) activity and positioning.",
    icon: "📊",
  },
  {
    title: "Stock Scanner",
    description: "Create and track personalized stock lists.",
    icon: "📋",
  },
  {
    title: "Event Tracker",
    description: "Anticipate market moves with key date alerts.",
    icon: "📅",
  },
  {
    title: "Risk Toolkit",
    description: "Optimize trades with position-sizing calculators.",
    icon: "🧮",
  },
  {
    title: "Learning Hub",
    description: "Master trading with step-by-step guides.",
    icon: "🎥",
  },
  {
    title: "Trading Simulator",
    description: "Practice strategies in risk-free scenarios.",
    icon: "🎮",
  },
  {
    title: "Market Drivers",
    description: "Identify stocks impacting major indices.",
    icon: "📈",
  },
];

const WhyChoose = () => {
  const mobileFeatures = features.filter(
    (feature) => feature.title !== "Market Drivers"
  );
  return (
    <div className="bg-black text-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Traders Trust Trade Logic</h2>
      </div>

      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {mobileFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 
                         hover:shadow-lg hover:shadow-blue-500/50 border border-gray-700"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="text-md font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-xs mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 flex items-start transition-all duration-300 
                         hover:shadow-lg hover:shadow-blue-500/50 border border-gray-700"
            >
              <div className="text-4xl mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
