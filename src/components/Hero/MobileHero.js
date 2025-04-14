"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MdInstallMobile } from "react-icons/md";

const MobileHero = () => {
  const texts = ["Leading", "No.1"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:hidden"
    >
      <div className="bg-black text-white px-6 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="relative flex justify-center items-end h-[250px]">
            <motion.div
              animate={{
                rotate: [-5, -10, -5],
                originY: 0,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
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
                priority
              />
            </motion.div>

            <motion.div
              animate={{
                rotate: [5, 10, 5],
                originY: 0,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
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
                priority
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="base_image mt-5"
          >
            <Image
              src="/baseImage.png"
              alt="baseImage"
              width={200}
              height={500}
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-2 md:text-left max-w-lg"
        >
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold flex items-center justify-center flex-wrap">
            India's{" "}
            <span className="inline-flex min-w-[110px] justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-amber-400 inline-block px-2"
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Trade Logic
          </h1>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 space-y-2 text-lg"
          >
            <motion.li
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-yellow-400">🏅</span> Discover Top Trades in
              Real-Time
            </motion.li>
            <motion.li
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <span className="text-red-400">🎯</span> Precision Trade Entry &
              Exit
            </motion.li>
            <motion.li
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-3"
            >
              <span className="text-blue-400">✔️</span> Maximize Small Capital
              Gains
            </motion.li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-8 flex justify-center md:justify-start "
          >
            <Link
              href="/"
              className="flex items-center px-6 py-2 border-2 border-yellow-400 text-white rounded-full transition font-medium"
            >
              <div className="bg-yellow-500 p-2 rounded-full flex items-center justify-center">
                <MdInstallMobile className="text-white text-xl" />
              </div>
              <span className="ml-3 text-lg font-semibold">
                Download App Now
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileHero;
