"use client";
import React, { useState, useEffect } from "react";
import Loader from "./../../components/Loader/Loader";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Page() {
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
    <div className="bg-gradient-to-br from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-start justify-center">
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
          <div className="w-full p-6 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white underline decoration-amber-400 mb-4">
              <span className="text-yellow-400">Services</span>
            </h2>

            <div className="text-left space-y-6  text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              <h3 className="text-xl text-center font-bold text-white underline  mb-4">
                Services Terms and Conditions:
              </h3>

              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  Our Fundamental Services provide long-term stocks/securities
                  recommendations based on valuations or potential
                  opportunities. While Stop-loss and Target levels may not be
                  provided, partial profits will be taken when necessary. It's
                  essential to note that stocks can still decline, especially
                  during challenging market conditions or adverse company
                  events, in which case guidance will be given for exiting or
                  holding those securities.
                </li>

                <li>
                  Our Trading or Technical Services provide short to mid-term
                  stocks/securities recommendations based on purely technical
                  view and with strict stop-loss and target order. To minimize
                  loss on securities it is strictly advised to follow stop-loss
                  and target orders. Sometimes in bad company or market events,
                  stop-loss orders can fail or jump, posing a risk of complete
                  capital loss, particularly in open futures and options
                  trading.
                </li>

                <li>
                  If you are keen on our various services, kindly send an email
                  to{" "}
                  <span className="underline text-amber-400">
                    logictrade.co.in@gmail.com
                  </span>{" "}
                  to subscribe. Multiple services will only be activated upon
                  email confirmation.
                </li>

                <li>
                  We do not have specific target-based research recommendations
                  for our services, such as a set number of calls per day or
                  week. Once our Research Analyst identifies securities that
                  meet the selection criteria, the information will be shared
                  with the team through various electronic or print channels. We
                  outline tentative research calls on a daily, monthly, and
                  yearly basis, which may vary depending on market conditions.
                </li>

                <li>
                  We do not provide any assurance of accuracy, specific/future
                  returns, or guarantees on stocks/securities. All returns are
                  subject to market fluctuations, and there is a high risk of
                  losing the entire capital, particularly in open futures and
                  options trading.{" "}
                  <span className="text-amber-300">
                    For detailed information on our services' performance and
                    accuracy, please refer to our performance table at
                  </span>{" "}
                  <a
                    href="https://logictrade.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline"
                  >
                    www.logictrade.co.in
                  </a>
                </li>

                <li className=" text-amber-300 font-semibold">
                  "Investment in securities market are subject to market risks.
                  Read all the related documents carefully before investing."
                </li>

                <li>
                  Market Risks refer to either partial or permanent loss on your
                  investments or portfolio in certain or adverse market
                  conditions or company events.
                </li>

                <li className=" text-amber-300 ">
                  Registration granted by SEBI and certification from NISM in no
                  way guarantees the performance of the intermediary or provides
                  any assurance of returns to investors.
                </li>

                <li>Past performance is not indicative of future results.</li>

                <li>
                  We are SEBI Registered "Research Analyst" not "Investment
                  Advisers"
                </li>

                <li>
                  Investors are advised to act according to their risk appetite,
                  we are not providing Investment Advisory Services.
                </li>
              </ol>

              <p className="font-semi text-yellow-400 mt-6">
                <span className=" text-amber-300 font-bold">NOTE:-</span>
                The fees paid towards any Services are non-refundable in any
                circumstances.
              </p>
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
  );
}

export default Page;
