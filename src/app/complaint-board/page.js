"use client";
import React, { useState, useEffect } from "react";
import Loader from "./../../components/Loader/Loader";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function ComplaintBoard() {
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
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full max-w-5xl mx-auto"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center w-full text-center"
        >
          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold underline text-amber-300  mb-4">
              Data For The Month Ending: March , 2025
            </h3>
            <img
              src="/1.png"
              alt="Monthly Disposal Trend"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl  my-10 sm:text-3xl font-semibold underline text-amber-300  ">
              Trend of Monthly Disposal of Complaints:
            </h3>
            <img
              src="/1.png"
              alt="Monthly Disposal Trend"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold underline text-amber-300  mb-4">
              Trend of Annual Disposal of Complaints:
            </h3>
            <img
              src="/3.png"
              alt="Annual Disposal Trend"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <p className="text-gray-300 text-base sm:text-lg mt-6">
            Visit:{" "}
            <a
              href="https://www.logictrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 underline"
            >
              www.logictrade.com
            </a>{" "}
            for more details about Risks, Disclosures and Disclaimers.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-16 mb-16"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ComplaintBoard;
