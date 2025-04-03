"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

function TraderNeeds() {
  const features = [
    {
      id: 1,
      title: "Option Apex",
      points: [
        "Real-time options chain analysis",
        "Advanced risk management tools",
        "Customizable trading workflows",
        "Integrated news and sentiment analysis",
      ],
      image: "/apex.png",
    },
    {
      id: 2,
      title: "Chart Master",
      points: [
        "100+ technical indicators",
        "Multiple chart types and timeframes",
        "Custom drawing tools",
        "Backtesting capabilities",
      ],
      image: "/clock.png",
    },
    {
      id: 3,
      title: "Trade Alerts",
      points: [
        "Custom alert conditions",
        "Push notifications",
        "Email/SMS alerts",
        "AI-powered signal detection",
      ],
      image: "/insider.png",
    },
    {
      id: 4,
      title: "Portfolio Tracker",
      points: [
        "Real-time performance tracking",
        "Risk exposure analysis",
        "Tax optimization tools",
        "Multi-exchange integration",
      ],
      image: "/swing.png",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white sm:text-4xl mb-12">
          Everything A Trader Needs
        </h2>

        <div className="space-y-16" ref={ref}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className={`flex flex-col items-center gap-8 lg:flex-row ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-between"
              }`}
            >
              <div
                className={`w-full lg:w-1/2 h-96 lg:h-[500px] flex justify-center ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden max-w-md">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 flex flex-col items-center  ${
                  index % 2 !== 0 ? "lg:pl-20" : "lg:pr-44"
                } ${index % 2 !== 0 ? "lg:items-center" : "lg:items-end"}`}
              >
                <div className="max-w-md text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                    {feature.title}
                  </h3>
                  <ul className="space-y-4">
                    {feature.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * pointIndex, duration: 0.5 }}
                      >
                        <div className="bg-yellow-400 rounded-full p-1 mr-3 flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-white text-md md:text-lg">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TraderNeeds;
