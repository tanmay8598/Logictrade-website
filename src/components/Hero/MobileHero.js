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
      className="md:hidden mt-10"
    >
      <div className="bg-black text-white px-6 flex flex-col items-center justify-center md:flex-row ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="relative flex justify-center items-end h-[320px]">
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
              className="w-60 md:w-72 lg:w-96 relative z-10"
            >
              <Image
                src="/merawala4.png"
                alt="App UI"
                width={450}
                height={900}
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
              className="w-60 md:w-72 lg:w-96 -ml-12 md:-ml-24"
            >
              <Image
                src="/tata1.jpg"
                alt="App UI"
                width={450}
                height={900}
                className="w-full rounded-xl shadow-lg"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="base_image mt-5 flex justify-center"
          >
            <Image
              src="/baseImage.png"
              alt="baseImage"
              width={200}
              height={500}
              className="w-80 rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-2 md:text-left max-w-lg"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center flex-wrap text-xs-mobile">
            India's{" "}
            <span className="inline-flex min-w-[115px] justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="inline-block px-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Logic Trade
          </h1>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 space-y-2 text-md sm:text-md"
          >
            <motion.li
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/badge1.png"
                alt="Discover Icon"
                width={25}
                height={25}
              />{" "}
              Discover Top Trades in Real-Time
            </motion.li>
            <motion.li
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/target3d.png"
                alt="Discover Icon"
                width={25}
                height={25}
              />{" "}
              Precision Trade Entry & Exit
            </motion.li>
            <motion.li
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/tick1.png"
                alt="Discover Icon"
                width={25}
                height={25}
              />{" "}
              Get Trades with Logic Trade
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
              <span className="ml-3 text-sm font-semibold">
                Download Logic Trade App Now
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileHero;
