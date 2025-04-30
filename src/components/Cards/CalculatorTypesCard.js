import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const CalculatorTypesCard = ({ title, description, icon }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link href={`/calculator/${slug}`}>
      <div className="bg-gray-900  text-white p-6 rounded-xl shadow-lg flex flex-col items-start min-h-[150px]">
        <div className="flex items-start flex-col space-x-3">
          <span className="text-2xl text-yellow-500">{icon}</span>
          <h3 className="text-lg text-left font-semibold">{title}</h3>
        </div>
        <p className="text-sm   lg:h-[40px]  text-left text-gray-400 mt-2 pb-2 ">
          {description}
        </p>
        <div className="flex flex-row justify-between items-center  w-full border-t border-gray-50">
          <button className="text-yellow-500 mt-4 font-bold cursor-pointer">
            Calculate{" "}
          </button>
          <IoIosArrowForward className="text-yellow-500  mt-4 items-end" />
        </div>
      </div>
    </Link>
  );
};

export default CalculatorTypesCard;
