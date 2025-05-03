import React from "react";

const features = [
  {
    title: "Trade Tracker",
    description:
      "Stay updated with real-time trade calls and performance insights from your subscribed channels.",
    icon: "📖",
  },
  {
    title: "Trend Radar",
    description:
      "Spot trending stocks and breakout opportunities across sectors and timeframes.",
    icon: "❤️",
  },

  {
    title: "Event Tracker",
    description:
      "Get alerts on earnings, dividends, and macroeconomic events impacting the market.",
    icon: "📅",
  },

  {
    title: "Market Drivers",
    description:
      "Get curated insights into top movers and the reasons behind big market swings.",
    icon: "📈",
  },
  {
    title: "Exclusive Channels",
    description:
      "Subscribe to premium expert-led channels for real-time insights, calls, and market commentary.",
    icon: "🔒",
  },
  {
    title: "Free Channel Access",
    description:
      "Explore a free community channel with daily updates, tips, and beginner-friendly discussions.",
    icon: "🌐",
  },
  {
    title: "Announcements & Alerts",
    description:
      "Never miss an update — get instant notifications for important announcements from your channels.",
    icon: "📢",
  },
  {
    title: "News Feed",
    description:
      "Stay informed with real-time news curated for traders, including global and domestic headlines.",
    icon: "📰",
  },
  {
    title: "Subscription Dashboard",
    description:
      "Manage your subscriptions easily — view active plans, renewals, and explore premium options.",
    icon: "💳",
  },
];

const WhyChoose = () => {
  const mobileFeatures = features.filter(
    (feature) => feature.title !== "Market Drivers"
  );
  return (
    <div className="bg-black text-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Logic Trade</h2>
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
