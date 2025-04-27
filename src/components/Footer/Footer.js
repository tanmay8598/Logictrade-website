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
              src="/newlogo.png"
              alt="TradeLogic Logo"
              width={200}
              height={60}
              className="object-contain rounded-sm"
            />
            {/* <span className="text-2xl font-bold">
              <span className="text-amber-400">L</span>
              <span className="text-white">ogic</span>
              <span className="text-amber-400">T</span>
              <span className="text-white">rade</span>
            </span> */}
          </div>
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" /> Jaipur, Rajasthan, 302020
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +91 7611888219
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope />
            logictrade.co.in@gmail.com
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <div className="flex flex-col">
            <Link
              href="/about-us"
              className="text-white  pb-2 hover:text-yellow-500 transition"
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              className=" py-2 text-white hover:text-yellow-500 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/grievance-redressal"
              className=" py-2 text-white hover:text-yellow-500 transition"
            >
              Grievance Redressal
            </Link>
            <Link
              href="/refund-policy"
              className=" py-2 text-white hover:text-yellow-500 transition"
            >
              Refund Policy
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Terms Of Use</h3>
          <div className="flex flex-col">
            <Link
              href="/discloser"
              className="text-white  py-2 hover:text-yellow-500 transition"
            >
              Discloser
            </Link>
            <Link
              href="/disclaimer"
              className="text-white  py-2 hover:text-yellow-500 transition"
            >
              Disclaimer
            </Link>
            <Link
              href="/terms-conditions"
              className="text-white  pb-2 hover:text-yellow-500 transition"
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
          <h3 className="text-lg font-semibold">
            Grow With Our Trading Community
          </h3>
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
          {/* <p className="text-gray-400 text-xs">
            Logic Trade now integrates TradingView's advanced charting
            technology
          </p> */}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 pb-6 space-y-4">
        <h2 className="text-lg font-bold">About Logic Trade</h2>
        <p className="text-gray-400">
          We're committed to India's financial growth journey, with confidence
          that our markets will be among the world's most significant wealth
          creators. The stock market remains the most powerful vehicle for
          disciplined investors and traders to build long-term prosperity.
        </p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-300 mb-2">
            Our ecosystem provides six specialized tools designed for modern
            market participants:
          </h3>
          <ul className="space-y-3 text-gray-400 list-disc pl-5">
            <li>
              <span className="font-medium">Options Analyzer:</span> Identify
              institutional activity patterns within specific market hours to
              align with smart money flow.
            </li>
          </ul>
        </div>

        <p className="text-gray-400">
          Logic Trade's rapid adoption stems from our community of serious
          traders who recognize our platform's cutting-edge capabilities. We
          continuously develop proprietary tools that transform complex market
          data into actionable insights, helping traders navigate equities and
          derivatives with professional precision.
        </p>

        <div className="mt-4 p-4 bg-gray-900 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="font-semibold">Important:</span> We maintain a
            strict no-tip policy and don't provide stock recommendations. No
            individual or entity is authorized to offer such services
            representing Logic Trade. Please report any such claims immediately
            to support@logictrade.com.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="border-t border-gray-700 pt-6 pb-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Logic Trade. All Rights Reserved</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <span className="text-red-500">❤️</span> in 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
