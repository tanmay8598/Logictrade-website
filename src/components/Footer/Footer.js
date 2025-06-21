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
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center"
                // onClick={closeMobileMenu}
              >
                <div className="mr-3">
                  <Image
                    src="/newOnelogo.png"
                    alt="TradeLogic Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-sm"
                  />
                </div>
                <span className="text-xl lg:text-3xl font-bold lg:font-extrabold">
                  <span className="text-amber-400">L</span>
                  <span className="text-white">ogic</span>
                  <span className="text-amber-400">T</span>
                  <span className="text-white">rade</span>
                </span>
              </Link>
            </div>
          </div>
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" /> Mansarovar Jaipur, Rajasthan,
            302020
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelope />
            logictrade.co.in@gmail.com
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Company</h3>
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
              href="/disclaimer-disclosure"
              className="text-white pb-4 hover:text-yellow-500 transition"
            >
              Disclaimer & Disclosure
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

          <div className="flex flex-col items-start  gap-2 flex-wrap">
            <div className="flex flex-row gap-5">
              <a
                href="https://www.instagram.com/logictradeofficial/"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a
                href="https://t.me/logictradeOfficial"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <FaTelegramPlane className="text-white text-xl" />
              </a>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=your_app_id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row lg:flex-col items-center gap-2"
            >
              <Image
                src="/googleplay.png"
                alt="Get it on Play Store"
                width={150}
                height={45}
                className="h-20 w-auto"
              />
              <Image
                src="/apppstore.png"
                alt="Get it on Play Store"
                width={150}
                height={30}
                className="h-20 lg:-mt-5 w-auto "
              />
            </a>
          </div>
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
            Our ecosystem provides professional and expreinced research analyst
            calls
          </h3>
        </div>

        <p className="text-gray-400">
          Logic Trade's rapid adoption stems from our community of serious
          traders who recognize our platform's cutting-edge capabilities. We
          continusoly giving good research trade calls.
        </p>
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
