"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "./../../../components/Loader/Loader";

const CalculatorPage = () => {
  const router = useRouter();
  const [calculatorType, setCalculatorType] = useState("Gratuity");
  const [calculatorIcon, setCalculatorIcon] = useState("⭐");
  const [monthlySalary, setMonthlySalary] = useState(60000);
  const [yearsOfService, setYearsOfService] = useState(20);
  const [gratuityAmount, setGratuityAmount] = useState(0);

  const calculatorTypes = [
    {
      id: 1,
      name: "Fixed Deposit",
      description: "Quickly discover your Fixed deposit maturity returns.",
      icon: "💰",
    },
    {
      id: 2,
      name: "SIP",
      description: "Calculate the returns on your mutual fund investments.",
      icon: "☕",
    },
    {
      id: 3,
      name: "Mutual Fund",
      description:
        "Discover your savings goal or the total you can grow with your SIP.",
      icon: "💵",
    },
    {
      id: 4,
      name: "Recurring Deposit",
      description: "Easily view your Recurring Deposit (RD) returns.",
      icon: "🔥",
    },
    {
      id: 5,
      name: "Inflation",
      description: "Calculate inflation adjusted prices.",
      icon: "📈",
    },
    {
      id: 6,
      name: "Gratuity",
      description: "Calculate your retirement gratuity amount.",
      icon: "⭐",
    },
    {
      id: 7,
      name: "GST",
      description: "Easily calculate your GST payable amount.",
      icon: "📊",
    },
  ];

  useEffect(() => {
    calculateGratuity();
  }, [monthlySalary, yearsOfService]);

  const calculateGratuity = () => {
    // Gratuity formula: (Last drawn salary * 15/26) * Number of years of service
    const calculatedGratuity = monthlySalary * (15 / 26) * yearsOfService;
    setGratuityAmount(Math.round(calculatedGratuity));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCalculatorChange = (type) => {
    setCalculatorType(type.name);
    setCalculatorIcon(type.icon);
    const slug = type.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/calculator/${encodeURIComponent(slug)}`);
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row my-18 mb-4 space-x-2 text-gray-400">
          <Link className="hover:text-white" href={`/`}>
            Home
          </Link>
          <span>{">"}</span>
          <Link className="hover:text-white" href={`/calculator`}>
            Calculators
          </Link>
          <span>{">"}</span>
          <p className="text-white cursor-pointer">{calculatorType}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 lg:w-1/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
            <ul className="space-y-2">
              {calculatorTypes.map((type) => (
                <li key={type.id}>
                  <button
                    onClick={() => handleCalculatorChange(type)}
                    className={`w-full cursor-pointer text-left text-sm px-4 py-2 rounded-md transition-colors font-bold ${
                      calculatorType === type.name
                        ? "text-white bg-gray-800"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-xl mr-2">{type.icon}</span>
                    {type.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h1 className="text-lg lg:text-3xl font-bold text-white mb-8">
              <span className="text-xs lg:text-xl bg-gray-900 border border-gray-700 p-2 rounded-sm">
                {calculatorIcon}
              </span>{" "}
              {calculatorType} Calculator
            </h1>

            <div className="w-full flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/4 bg-gray-900 rounded-lg shadow p-6 border border-gray-700 h-fit">
                <div className="space-y-10">
                  <div>
                    <div className="flex flex-row justify-between items-center">
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Monthly Salary (Basic + DA)
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={formatCurrency(monthlySalary)}
                          onChange={(e) => {
                            const rawValue = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            if (rawValue === "" || !isNaN(rawValue)) {
                              const numValue =
                                rawValue === "" ? 0 : parseInt(rawValue, 10);
                              if (numValue >= 0 && numValue <= 1000000) {
                                setMonthlySalary(numValue);
                              }
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-28 text-right rounded border border-gray-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="1000"
                      value={monthlySalary}
                      onChange={(e) =>
                        setMonthlySalary(parseInt(e.target.value))
                      }
                      className="w-full h-2 appearance-none cursor-pointer mt-2 rounded-lg custom-range"
                      style={{
                        background: `linear-gradient(to right, #facc15 ${
                          (monthlySalary / 1000000) * 100
                        }%, #d1d5db ${(monthlySalary / 1000000) * 100}%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center">
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Years of Service
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={yearsOfService}
                          onChange={(e) => {
                            const digitsOnly = e.target.value.replace(
                              /\D/g,
                              ""
                            );
                            let numValue =
                              digitsOnly === "" ? 1 : parseInt(digitsOnly, 10);
                            numValue = Math.max(0, Math.min(50, numValue));
                            setYearsOfService(numValue);
                          }}
                          onBlur={() => {
                            if (yearsOfService < 0) setYearsOfService(0);
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-16 text-right rounded border border-gray-600 focus:outline-none"
                        />
                        <span className="text-white">Y</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="1"
                      value={yearsOfService}
                      onChange={(e) =>
                        setYearsOfService(parseInt(e.target.value))
                      }
                      className="w-full h-2 appearance-none cursor-pointer mt-2 rounded-lg custom-range"
                      style={{
                        background: `linear-gradient(to right, #facc15 ${
                          (yearsOfService / 50) * 100
                        }%, #d1d5db ${(yearsOfService / 50) * 100}%)`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
                <div className="p-4 rounded-lg ">
                  <div className="text-sm lg:font-bold  text-gray-300">
                    Gratuity Maturity Value
                  </div>
                  <div className="text-lg lg:text-2xl font-extrabold text-yellow-400">
                    {formatCurrency(gratuityAmount)}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className=" p-4 rounded-lg ">
                    <div className="text-sm text-gray-300">Monthly Salary</div>
                    <div className="text-sm lg:text-lg font-bold text-white">
                      {formatCurrency(monthlySalary)}
                    </div>
                  </div>
                  <div className=" p-4  border-l-1 border-white">
                    <div className="text-sm text-gray-300">
                      Years of Service
                    </div>
                    <div className="text-sm lg:text-lg font-bold text-white">
                      {yearsOfService} Years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-2 w-[50%]  mx-auto ml-66 p-6 ">
          <h2 className="text-xl font-semibold mb-4 text-white">
            How Gratuity Calculator Works
          </h2>
          <p className="text-gray-500">
            A Gratuity Calculator helps employees estimate the gratuity amount
            they are entitled to receive based on their salary and years of
            service. It simplifies manual calculations and provides instant,
            error-free results.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Gratuity Calculation Formula with Example
          </h3>
          <p className="text-gray-500 mt-2">
            <strong>Service Tenure Rounding Rule:</strong> The employee's period
            of service is rounded based on completed months:
          </p>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>15 years and 8 months → Rounded up to 16 years</li>
            <li>15 years and 4 months → Remains 15 years</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Types of Employers Under the Gratuity Act, 1972
          </h3>
          <p className="text-gray-500 mt-2">
            <strong>Type 1: Covered Under Act (10+ employees)</strong>
          </p>
          <p className="text-gray-500 mt-1">
            Formula: (15 × Last Drawn Salary × Years of Service) ÷ 26
          </p>
          <p className="text-gray-500 mt-1">
            Example: ₹1,00,000 salary × 7 years = ₹4,03,846
          </p>

          <p className="text-gray-500 mt-2">
            <strong>Type 2: Not Covered Under Act</strong>
          </p>
          <p className="text-gray-500 mt-1">
            Formula: (15 × Last Drawn Salary × Years of Service) ÷ 30
          </p>
          <p className="text-gray-500 mt-1">
            Example: ₹1,00,000 salary × 7 years = ₹3,50,000
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How Can a Gratuity Calculator Help You?
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>Instant Gratuity Estimation based on salary & tenure</li>
            <li>Saves time with automated calculations</li>
            <li>Helps in financial and tax planning</li>
            <li>User-friendly and free online tool</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Gratuity Taxation Rules in India
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Government Employees:</strong> Full tax exemption
            </li>
            <li>
              <strong>Non-Government (Covered):</strong> Exempt up to ₹20L or
              (Salary × Years × 15/26)
            </li>
            <li>
              <strong>Non-Government (Not Covered):</strong> Exempt up to ₹20L
              or (½ month's salary × Years)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
