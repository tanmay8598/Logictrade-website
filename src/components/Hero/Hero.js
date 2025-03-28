"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const texts = ["No.1", "Only"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block">
      <div className="bg-black text-white pt-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-evenly">
        <div className="text-center mt-2 md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold flex items-center flex-wrap">
            India's{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-amber-400 inline-block px-2"
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>{" "}
            Trade Finder
          </h1>
          <ul className="mt-6 space-y-2 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">🏅</span> Find Best Trades In
              Live Market
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-400">🎯</span> Accurately Enter & Exit
              Trade
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">✔️</span> Use Small Capital
              Efficiently
            </li>
          </ul>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button
              className="relative bg-amber-300 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 
                    shadow-[0_0_15px_2px_rgba(251,191,36,0.7)] hover:shadow-[0_0_20px_4px_rgba(251,191,36,0.8)] 
                    transition-all duration-300 transform hover:scale-105"
            >
              Login Now
              <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-400 transition-all"></span>
            </button>

            <button
              className="bg-transparent text-white font-bold px-6 py-3 rounded-lg flex items-center 
                    border-2 border-gray-300 hover:border-amber-400 hover:text-amber-400
                    transition-all duration-300 transform hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative mt-12 md:mt-0 flex justify-center items-end h-[280px]">
            <motion.div
              animate={{
                rotate: [-3, -10, -3],
                originY: 0,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut",
              }}
              className="w-40 md:w-56 lg:w-64 relative z-10"
            >
              <Image
                src="/left_image.png"
                alt="App UI"
                width={300}
                height={600}
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              animate={{
                rotate: [3, 10, 3],
                originY: 0,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut",
              }}
              className="w-40 md:w-56 lg:w-64 -ml-10 md:-ml-20"
            >
              <Image
                src="/right_image.png"
                alt="App UI"
                width={300}
                height={600}
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
          </div>

          <div className="base_image mt-5">
            <Image
              src="/baseImage.png"
              alt="baseImage"
              width={200}
              height={500}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
