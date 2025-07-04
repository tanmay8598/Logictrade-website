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
import Head from "next/head";

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
    <>
      <Head>
        <title>About Us - Logic Trade</title>
        <meta
          name="description"
          content="Learn about Logic Trade, our mission to provide quality financial services, and our commitment to trust and transparency."
        />
        <meta
          name="keywords"
          content="financial services, research analyst, quality results, trust, transparency, Logic Trade"
        />
        <meta name="author" content="Logic Trade Research Analyst" />
        <meta
          property="og:title"
          content="About Us - Logic Trade Research Analyst"
        />
        <meta
          property="og:description"
          content="Providing quality financial services and exceptional customer service with trust and transparency."
        />
        <meta property="og:type" content="website" />ß
      </Head>

      <div className=" bg-gradient-to-br from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-start justify-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full max-w-4xl mx-auto"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="w-full p-6  text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white underline decoration-amber-400  mb-2">
                <span className="text-yellow-400">Protecting yourself</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Logic Trade Research Analyst is tremendously proud of the impact
                that we have made in helping our clients by providing quality
                Financial services and exceptional service.
              </p>
            </div>

            <div className="w-full   text-center">
              <h2 className="text-md md:text-lg font-bold text-white mb-2 decoration-amber-400 underline">
                <span className="text-yellow-400">Quality Results</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Our aim is to build our clients&apos; assets through Truth,
                Trust, and Transparency by offering quality research services
                and exceptional customer service.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-16 mb-16"
          >
            <a
              href="https://www.youtube.com/@Logictradeofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://t.me/logictradeOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.instagram.com/logictradeofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/logictradeofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Logictradeswing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default About;
