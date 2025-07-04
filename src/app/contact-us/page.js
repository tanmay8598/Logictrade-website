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

function ContactPage() {
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
        <title>Contact – Logic Trade</title>
        <meta
          name="description"
          content="Get in touch with Logic Trade. Contact details for Shubham Goyal – Research Analyst & Compliance Officer. Support, compliance emails, working hours, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Logic Trade, Contact, Research Analyst, Compliance Officer, SEBI, Logic Trade Support"
        />
        <link rel="canonical" href="https://www.logictrade.co.in/contact" />
      </Head>
      <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full max-w-2xl mx-auto"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="w-full p-6 sm:p-8 lg:p-10 text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white underline decoration-amber-400 mb-8 sm:mb-10">
                <span className="text-yellow-400">Contact Details :-</span>
              </h2>

              <div className="space-y-8 text-gray-300 text-lg sm:text-xl mx-auto">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Name:
                    </h3>
                    <p className="ml-4 uppercase font-bold text-xl sm:text-2xl text-amber-300">
                      Shubham Goyal
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Role:
                    </h3>
                    <p className="ml-4">Research Analyst & Principal Officer</p>
                    <p className="ml-6 sm:ml-8 text-sm sm:text-base">
                      SEBI Registration No: INH000000000018
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Support Mail:
                    </h3>
                    <p className="ml-4 text-amber-300">
                      logictrade.co.in@gmail.com
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Compliance Mail:
                    </h3>
                    <p className="ml-4 text-amber-300">
                      logictrade.co.in@gmail.com
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Logic Trade Services WhatsApp/Call:
                    </h3>
                    <p className="ml-4 text-amber-300">+91 6350655660</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Working Hours:
                    </h3>
                    <div className="ml-4 space-y-1">
                      <p>Monday-Friday (09:00AM to 05:00 PM)</p>
                      <p>Saturday (10:00 AM to 02:00 PM)</p>
                      <p>Sunday/Public Holidays: OFF</p>
                    </div>
                  </div>
                </div>
              </div>
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

export default ContactPage;
