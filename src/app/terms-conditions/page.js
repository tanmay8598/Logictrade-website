"use client";
import React, { useState, useEffect } from "react";
import Loader from "./../../components/Loader/Loader";
import Link from "next/link";

function TermsConditions() {
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

  return (
    <div className="flex justify-center my-20 items-center min-h-screen bg-black px-4 md:px-10 lg:px-20">
      <div className="max-w-screen w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-6">
          Terms & Conditions
        </h1>

        <div className="bg-[#171616] text-white p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Trade Logic</h2>

          <h3 className="text-lg font-semibold mb-2">
            Revolutionizing Trading with Smart Insights
          </h3>
          <p className="text-gray-300 mb-4">
            At Trade Logic, we believe in empowering traders with cutting-edge
            technology and real-time data-driven insights. Our mission is to
            make trading smarter, easier, and more accessible for everyone, from
            beginners to experienced investors. With AI-powered analytics and
            deep market insights, we help you make informed decisions with
            confidence.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            Smarter Decisions, Better Trades
          </h3>
          <p className="text-gray-300 mb-4">
            Trading is not just about numbers; it's about strategy, timing, and
            logic. Our platform is built to provide real-time alerts, advanced
            charting tools, and AI-driven recommendations that give you the edge
            in the fast-moving market. Stay ahead with Trade Logic and turn
            insights into profitable trades.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            Why Choose Trade Logic?
          </h3>
          <p className="text-gray-300 mb-4">
            We understand that every trader is unique, which is why our platform
            is designed to adapt to your style. Whether you're a day trader,
            swing trader, or long-term investor, our tools help you navigate the
            markets with precision. Trade Logic provides AI-powered market
            analysis, customizable dashboards, and real-time risk assessment to
            ensure smarter trades.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            Get Started with Trade Logic
          </h3>
          <p className="text-gray-300 mb-6">
            Join thousands of traders who are already leveraging Trade Logic to
            maximize their profits and minimize risks. Download our app today
            and take your trading game to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
