"use client";
import React, { useState, useEffect } from "react";
import Loader from "./../../components/Loader/Loader";
import Link from "next/link";
import { motion } from "framer-motion";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={item} className="text-center mb-16">
          <h1 className="text-3xl min-h-xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
            About Us
          </h1>
          <p className="text-md md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing Trading with Smart Insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={item} className="flex justify-center">
            <div className="relative w-full h-80 lg:h-full rounded-xl overflow-hidden border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/10">
              <img
                src="/left_image.png  "
                alt="Trade Logic Platform"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={item}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="text-yellow-400">Smart</span> Trading Solutions
              </h2>
              <p className="text-gray-300">
                At Trade Logic, we're transforming the trading landscape with
                our AI-driven platform that provides real-time market analysis,
                predictive analytics, and personalized trading strategies.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-6">
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    1
                  </span>
                  Advanced Analytics
                </h3>
                <p className="text-gray-300">
                  Our proprietary algorithms analyze market trends across
                  multiple timeframes to identify high-probability trading
                  opportunities.
                </p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    2
                  </span>
                  Real-time Alerts
                </h3>
                <p className="text-gray-300">
                  Get instant notifications for price movements, volume spikes,
                  and technical pattern breakouts tailored to your watchlist.
                </p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    3
                  </span>
                  Risk Management
                </h3>
                <p className="text-gray-300">
                  Our dynamic risk assessment tools help you maintain optimal
                  position sizing and stop-loss strategies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div variants={item} className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
          >
            Download App
          </Link>
          <p className="text-gray-400 mt-4">
            Join 50,000+ traders who trust Trade Logic
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "50K+", label: "Active Traders" },
            { value: "24/7", label: "Market Coverage" },
            { value: "95%", label: "Accuracy Rate" },
            { value: "0.5s", label: "Execution Speed" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center"
            >
              <p className="text-3xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
