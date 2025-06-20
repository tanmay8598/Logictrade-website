"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Loader from "./../../components/Loader/Loader";
import { motion } from "framer-motion";
import apiClient from "./../../api/client";
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
  const [siteImage, setSiteImage] = useState([]);

  const getImages = async () => {
    const response = await apiClient.get("/siteimage/get-image");

    if (response.ok) {
      setSiteImage(response.data.siteImage);
    }
  };

  useEffect(() => {
    getImages();
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

  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const monthYear = `${month}, ${year}`;

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Complaint Disposal Trends | LogicTrade</title>
        <meta
          name="description"
          content="Check the latest monthly and annual complaint disposal trends on LogicTrade. Stay informed with data-driven updates."
        />
        <meta
          name="keywords"
          content="complaint board, complaint trends, LogicTrade, monthly complaint data, annual disposal data"
        />
        <meta
          property="og:title"
          content="Complaint Disposal Trends | LogicTrade"
        />
        <meta
          property="og:description"
          content="Explore the latest trends in complaint disposal. Monthly and annual insights updated for transparency."
        />
        <meta
          property="og:image"
          content={siteImage?.monthEndingImage || "/1.png"}
        />
        <meta
          property="og:url"
          content="https://www.logictrade.co.in/complaints"
        />
      </Head>

      <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
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
              <h3 className="text-2xl sm:text-3xl font-semibold underline text-amber-300 mb-4">
                Data For The Month Ending: {monthYear}
              </h3>
              <img
                src={siteImage?.monthEndingImage || "/1.png"}
                alt="Monthly Disposal Trend"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-10">
              <h3 className="text-2xl my-10 sm:text-3xl font-semibold underline text-amber-300">
                Trend of Monthly Disposal of Complaints:
              </h3>
              <img
                src={siteImage?.monthlyDisposableComplaintsImage || "/1.png"}
                alt="Monthly Disposal Trend"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-10">
              <h3 className="text-2xl sm:text-3xl font-semibold underline text-amber-300 mb-4">
                Trend of Annual Disposal of Complaints:
              </h3>
              <img
                src={siteImage?.annualDisposableComplaintsImage || "/3.png"}
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
              aria-label="YouTube"
              className="text-gray-400 hover:text-yellow-400 text-4xl"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="text-gray-400 hover:text-yellow-400 text-4xl"
            >
              <FaTelegram />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-400 text-4xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-yellow-400 text-4xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-yellow-400 text-4xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-yellow-400 text-4xl"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ComplaintBoard;
