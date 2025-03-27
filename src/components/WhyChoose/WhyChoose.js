import React from "react";

const features = [
  {
    title: "Trading Journal",
    description: "Record trades, improve & became profitable.",
    icon: "📖",
  },
  {
    title: "Market Pulse",
    description: "Find hot stocks in Live Market",
    icon: "❤️",
  },
  {
    title: "FII-DII Data",
    description: "Insights into FIIs and DIIs positioning.",
    icon: "📊",
  },
  {
    title: "Watchlist",
    description: "Monitor stocks with custom watchlist.",
    icon: "📋",
  },
  {
    title: "Calendar",
    description: "Use calendar to spot market volatility.",
    icon: "📅",
  },
  {
    title: "Calculator",
    description: "Manage risk & position with our custom calculators.",
    icon: "🧮",
  },
  {
    title: "Trade Tutor",
    description: "A complete guide & tutorial of all TradeFinder features.",
    icon: "🎥",
  },
  {
    title: "Games",
    description: "Real-world trading simulation toolkit.",
    icon: "🎮",
  },
  {
    title: "Index Mover",
    description: "See which stocks move the index.",
    icon: "📈",
  },
];

const WhyChoose = () => {
  const mobileFeatures = features.filter(
    (feature) => feature.title !== "Watchlist"
  );
  return (
    <div className="bg-black text-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Choose TradeFinder?</h2>
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
