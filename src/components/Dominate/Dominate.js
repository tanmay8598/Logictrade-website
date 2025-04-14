"use client";
import { LuCircleCheckBig } from "react-icons/lu";

const Dominate = () => {
  return (
    <section className="bg-black text-white py-10 px-5 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-500">
        Trade Like a Champion
      </h2>

      <div className="mt-8 bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg w-full lg:w-2/3  mx-auto border border-yellow-500 relative">
        <div className="absolute top-[-10px] left-[-10px] bg-red-600 text-white px-2 py-1 text-sm font-bold rounded-md">
          EXCLUSIVE DEAL
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-3 w-full md:w-2/3">
            <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              🔒 Unlock Premium Access
            </button>
            <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              📄 Masterclass Videos
            </button>
            <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              📈 Advanced Trade Plans
            </button>
            <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              🚀 Next-Day Ready
            </button>
          </div>
          <div className="text-center md:w-1/3 mt-6 md:pl-6 md:mt-0">
            <h3 className="text-lg text-blue-400">PRO TRADER</h3>
            <p className="text-3xl font-bold">₹ 3,350</p>
            <p className="text-sm mt-1">
              Validity = 6 MONTHS{" "}
              <span className="text-blue-400">+ + 6 Months Bonus</span>
            </p>
            <button className="bg-blue-500 py-2 rounded-md text-white mt-4 w-full">
              Join Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-lg border-t border-gray-600 pt-4">
        <p className="font-semibold">
          Step-by-Step Guide & Tutorial Videos Included
        </p>
      </div>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-500 w-full md:w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {[
          "Trade Logger",
          "Trading Simulator",
          "Event Tracker",
          "Smart Money Signals",
          "Options Analyzer",
          "Institutional Flow",
          "Live Market Feed",
          "Risk Calculator",
          "Industry Dashboard",
          "Options Pro",
          "Volume Scanner",
          "Stock Watch",
          "Trend Radar",
          "Swing Analyzer",
          "Learning Center",
        ].map((item) => (
          <p key={item} className="flex items-center text-xs lg:text-lg">
            <LuCircleCheckBig className="mr-2 text-yellow-500" /> {item}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Dominate;
