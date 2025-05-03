"use client";
import CalculatorTypesCard from "@/components/Cards/CalculatorTypesCard";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "./../../components/Loader/Loader";

const calculators = [
  {
    title: "Fixed deposit",
    description: "Quickly discover your Fixed deposit maturity returns.",
    icon: "💰",
  },
  {
    title: "SIP",
    description: "Calculate the returns on your mutual fund investments.",
    icon: "☕",
  },
  {
    title: "Mutual Fund",
    description:
      "Discover your savings goal or the total you can grow with your SIP.",
    icon: "💵",
  },
  {
    title: "Recurring Deposit",
    description: "Easily view your Recurring Deposit (RD) returns.",
    icon: "🔥",
  },
  {
    title: "Inflation",
    description: "Calculate inflation adjusted prices.",
    icon: "📈",
  },
  {
    title: "Gratuity",
    description: "Calculate your retirement gratuity amount.",
    icon: "⭐",
  },
  {
    title: "GST",
    description: "Easily calculate your GST payable amount.",
    icon: "📊",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const heading = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      delay: 0.1,
    },
  },
};

const CalculatorsGrid = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 py-2 gap-6 max-w-7xl mx-auto"
    >
      {calculators.map((calc, index) => (
        <motion.div key={index} variants={item}>
          <CalculatorTypesCard {...calc} />
        </motion.div>
      ))}
      <motion.div
        variants={item}
        className="bg-gray-800 text-gray-400 p-6 rounded-xl flex flex-col items-center justify-center"
      >
        <p className="text-sm">
          We're working on adding new tools to make your calculations even
          easier.
        </p>
        <h2 className="text-yellow-500 font-bold">coming soon....</h2>
      </motion.div>
    </motion.div>
  );
};

const Calculators = () => {
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
    <section className="bg-black text-white py-12 text-center mx-4 lg:mx-4">
      <motion.h2
        variants={heading}
        initial="hidden"
        animate="show"
        className="text-3xl lg:text-5xl font-bold lg:pt-12 max-w-sm lg:max-w-2xl mx-auto mt-6 mb-6 lg:mt-0"
      >
        Plan Your Financial Goals
      </motion.h2>

      <CalculatorsGrid />
    </section>
  );
};

export default Calculators;
