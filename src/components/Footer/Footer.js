import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0d0c0c] text-white font-sans text-sm border-t border-gray-500">
      <div className="container mx-auto px-6 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/round.png"
              alt="TradeLogic Logo"
              width={60}
              height={60}
            />
            <span className="text-2xl font-bold">
              <span className="text-yellow-500">T</span>
              <span className="text-white">rade</span>
              <span className="text-yellow-500">L</span>
              <span className="text-white">ogic</span>
            </span>
          </div>
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" /> Lucknow UP, India 229001
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +91 9090909090
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> upTradeLogic909090@gmail.com
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <div className="flex flex-col">
            <Link
              href="/about-us"
              className="text-white hover:text-yellow-500 transition"
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              className=" py-2 text-white hover:text-yellow-500 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Terms Of Use</h3>
          <div className="flex flex-col">
            <Link
              href="/terms-conditions"
              className="text-white hover:text-yellow-500 transition"
            >
              Terms & conditions
            </Link>

            <Link
              href="/privacy-policy"
              className=" py-2 text-white hover:text-yellow-500 transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Join the community</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FaTelegramPlane className="text-white text-xl" />
            </a>
          </div>
          <p className="text-gray-400 text-xs">
            TradeLogic has partnered with TradingView for a Charting solution
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 pb-6 space-y-4">
        <h2 className="text-lg font-bold">About TradeLogic</h2>
        <p className="text-gray-400">
          We are forever bullish on India and are much confident that India will
          become $20 trillion Economy in next 20 years. We believe that stock
          market offers the best wealth creation platform for all of India's
          traders and investors.
        </p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-300 mb-2">
            We are doing so by giving you access to not just one but 6 products
            within the TradeLogic ecosystem:
          </h3>
          <ul className="space-y-3 text-gray-400 list-disc pl-5">
            <li>
              <span className="font-medium">Option Clock:</span> It lets you
              select a particular time frame within the market day and reveals
              the exact moves made by major players in the options market.
            </li>
          </ul>
        </div>

        <p className="text-gray-400">
          TradeLogic is growing rapidly because of the love we receive from
          SuperTraders and Investors who acknowledge that the platform is
          innovating for them, building super useful features that help them to
          trade accurately in stock market to trading F&O like a pro and much
          more.
        </p>

        <div className="mt-4 p-4 bg-gray-900 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="font-semibold">Note:</span> As a policy we do not
            give stock tips or recommendations and have not authorized anyone to
            give this on behalf of us. If you know anyone claiming to be a part
            of TradeLogic or our associate companies or partners and offering
            such services, please report us on supt.TradeLogic@gmail.com
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="border-t border-gray-700 pt-6 pb-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TradeLogic. All Rights Reserved</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <span className="text-red-500">❤️</span> in 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
