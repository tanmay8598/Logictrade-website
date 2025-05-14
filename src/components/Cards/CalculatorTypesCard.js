import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const CalculatorTypesCard = ({ title, description, icon }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/calculator/${slug}`}>
      <div
        className="bg-gradient-to-br from-black to-gray-900 text-white p-4 rounded-2xl shadow-xl w-full max-w-xs h-[260px] flex flex-col justify-between transition hover:shadow-2xl  border-gray-800"
        style={{ borderWidth: "0.5px" }}
      >
        {/* Icon */}
        <div className="flex flex-col items-start gap-4">
          <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-center w-12 h-12 text-yellow-400 text-xl">
            {icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg text-left font-semibold text-white">
              {title}
            </h3>
            <p className="text-sm text-left text-gray-400 mt-1">
              {description}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 flex justify-between items-center">
          <span className="text-yellow-400 font-semibold text-base">
            Calculate
          </span>
          <IoIosArrowForward className="text-yellow-400 text-lg" />
        </div>
      </div>
    </Link>
  );
};

export default CalculatorTypesCard;
