"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/navigation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Loader from "./../../../components/Loader/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CalculatorPage = () => {
  const router = useRouter();
  const [calculatorType, setCalculatorType] = useState("Inflation");
  const [calculatorIcon, setCalculatorIcon] = useState("📈");
  const [currentCost, setCurrentCost] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6);
  const [timePeriod, setTimePeriod] = useState(5);
  const [futureCost, setFutureCost] = useState(0);
  const [costIncrease, setCostIncrease] = useState(0);
  const [chartData, setChartData] = useState({});

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
    calculateInflation();
  }, [currentCost, inflationRate, timePeriod, calculatorType]);

  const calculateInflation = () => {
    const calculatedFutureCost =
      currentCost * Math.pow(1 + inflationRate / 100, timePeriod);

    setFutureCost(Math.round(calculatedFutureCost));
    setCostIncrease(Math.round(calculatedFutureCost - currentCost));

    generateChartData();
  };

  const generateChartData = () => {
    const years = Array.from({ length: timePeriod + 1 }, (_, i) => i);
    const values = years.map((year) => {
      return currentCost * Math.pow(1 + inflationRate / 100, year);
    });

    setChartData({
      labels: years.map((y) => `${y} Y`),
      datasets: [
        {
          label: "Inflation Impact",
          data: values,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    });
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
                    className={`w-full cursor-pointer text-left text-sm md:text px-4 py-2 rounded-md transition-colors font-bold ${
                      calculatorType === type.name
                        ? " text-white bg-gray-800"
                        : " text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-xl text-yellow-500 hover:text-gray-700">
                      {type.icon}
                    </span>{" "}
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
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-row justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Current Cost
                      </label>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">₹</span>
                        <input
                          type="text"
                          value={currentCost.toLocaleString("en-IN")}
                          onChange={(e) => {
                            const rawValue = e.target.value.replace(/,/g, "");
                            const numericValue = parseInt(rawValue, 10);
                            if (!isNaN(numericValue)) {
                              setCurrentCost(
                                Math.min(10000000, Math.max(1000, numericValue))
                              );
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-32 text-right rounded border border-gray-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="10000000"
                      step="1000"
                      value={currentCost}
                      onChange={(e) => setCurrentCost(parseInt(e.target.value))}
                      className="w-full h-2 appearance-none cursor-pointer mt-2 rounded-lg custom-range"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          ((currentCost - 1000) / (10000000 - 1000)) * 100
                        }%, #d1d5db ${
                          ((currentCost - 1000) / (10000000 - 1000)) * 100
                        }%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Inflation Rate (p.a)
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={inflationRate}
                          onChange={(e) => {
                            const value = e.target.value.replace(
                              /[^0-9.]/g,
                              ""
                            );
                            if (value === "") {
                              setInflationRate(1);
                            } else {
                              const numValue = parseFloat(value);
                              if (!isNaN(numValue)) {
                                setInflationRate(
                                  Math.min(50, Math.max(1, numValue))
                                );
                              }
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-16 text-right rounded border border-gray-600 focus:outline-none"
                        />
                        <span className="text-white">%</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="0.1"
                      value={inflationRate}
                      onChange={(e) =>
                        setInflationRate(parseFloat(e.target.value))
                      }
                      className="w-full h-2 appearance-none cursor-pointer mt-2 rounded-lg custom-range"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          ((inflationRate - 1) / (50 - 1)) * 100
                        }%, #d1d5db ${
                          ((inflationRate - 1) / (50 - 1)) * 100
                        }%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Time Period
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={timePeriod}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            if (value === "") {
                              setTimePeriod(1);
                            } else {
                              const numValue = parseInt(value, 10);
                              if (!isNaN(numValue)) {
                                setTimePeriod(
                                  Math.min(30, Math.max(1, numValue))
                                );
                              }
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-16 text-right rounded border border-gray-600 focus:outline-none"
                        />
                        <span className="text-white">Y</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(parseInt(e.target.value))}
                      className="w-full h-2 appearance-none cursor-pointer mt-2 rounded-lg custom-range"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          ((timePeriod - 1) / (30 - 1)) * 100
                        }%, #d1d5db ${((timePeriod - 1) / (30 - 1)) * 100}%)`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
                <div className=" p-4 rounded-lg ">
                  <div className="text-sm font-bold text-gray-300">
                    Future Cost
                  </div>
                  <div className="text-lg lg:text-2xl font-bold text-blue-400">
                    {formatCurrency(futureCost)}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className=" p-4 rounded-lg  ">
                    <div className="text-sm text-gray-300">Current Cost</div>
                    <div className="text-sm lg:text-xl font-bold text-white">
                      {formatCurrency(currentCost)}
                    </div>
                  </div>
                  <div className=" p-4  border-l border-white">
                    <div className="text-sm text-gray-300">Cost Increase</div>
                    <div className="text-sm lg:text-xl font-bold text-white">
                      {formatCurrency(costIncrease)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-64">
                  {chartData.labels && (
                    <Line
                      data={chartData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                          tooltip: {
                            callbacks: {
                              label: (context) => {
                                return ` ₹${context.parsed.y.toLocaleString(
                                  "en-IN"
                                )}`;
                              },
                            },
                          },
                        },
                        scales: {
                          x: {
                            grid: {
                              color: "rgba(255, 255, 255, 0.1)",
                            },
                            ticks: {
                              color: "rgba(255, 255, 255, 0.7)",
                            },
                          },
                          y: {
                            grid: {
                              color: "rgba(255, 255, 255, 0.1)",
                            },
                            ticks: {
                              color: "rgba(255, 255, 255, 0.7)",
                              callback: (value) => {
                                if (value >= 10000000)
                                  return `₹${(value / 10000000).toFixed(1)}Cr`;
                                if (value >= 100000)
                                  return `₹${(value / 100000).toFixed(1)}L`;
                                if (value >= 1000)
                                  return `₹${(value / 1000).toFixed(0)}K`;
                                return `₹${value}`;
                              },
                            },
                          },
                        },
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-2 w-full lg:w-[50%] mx-auto lg:ml-66 p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            How Inflation Calculator Works
          </h2>
          <p className="text-gray-500">
            Inflation refers to the increase in the price levels of goods and
            services, leading to a decrease in the purchasing power of money. As
            inflation rises, the value of the rupee declines, meaning you can
            buy fewer goods and services for the same amount.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Primary Measures of Inflation in India:
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Consumer Price Index (CPI):</strong> Tracks price changes
              at the retail level
            </li>
            <li>
              <strong>Wholesale Price Index (WPI):</strong> Measures price
              fluctuations at the wholesale level
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How Inflation Impacts Your Savings
          </h3>
          <p className="text-gray-500 mt-2">
            Inflation reduces the real value of money, affecting your ability to
            meet future expenses:
          </p>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>Diminished purchasing power – Same money buys fewer goods</li>
            <li>
              Lower real returns on savings – Bank interest may not beat
              inflation
            </li>
            <li>
              Investment performance varies – Different assets react differently
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How to Overcome Inflation?
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Diversify Investments:</strong> Mix of equities, mutual
              funds, gold, and real estate
            </li>
            <li>
              <strong>Focus on High-Return Assets:</strong> Stocks and mutual
              funds historically outperform inflation
            </li>
            <li>
              <strong>Plan Long Term:</strong> Longer investments yield higher
              inflation-adjusted returns
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            What is an Inflation Calculator?
          </h3>
          <p className="text-gray-500 mt-2">
            An Inflation Calculator helps you understand the impact of inflation
            on money over time. It shows:
          </p>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>The future value of money adjusted for inflation</li>
            <li>Purchasing power of today's money in the future</li>
            <li>Inflation-adjusted returns on investments</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How is Inflation Calculated?
          </h3>
          <p className="text-gray-500 mt-2">
            Inflation is measured using the Consumer Price Index (CPI) which
            tracks price changes of a fixed basket of goods:
          </p>
          <p className="text-gray-500 mt-2">
            <strong>CPI Formula:</strong>
          </p>
          <p className="text-gray-500 mt-1">
            CPI = (Cost of Basket in Current Year / Cost of Basket in Base Year)
            × 100
          </p>
          <p className="text-gray-500 mt-2">
            <strong>Inflation Formula:</strong>
          </p>
          <p className="text-gray-500 mt-1">
            Inflation = ((CPI<sub>x+1</sub> - CPI<sub>x</sub>) / CPI<sub>x</sub>
            ) × 100
          </p>
          <p className="text-gray-500 mt-1 text-sm">
            Note: CPI<sub>x</sub> represents the initial Consumer Price Index
            value
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Benefits of Using Inflation Calculator
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Free & Easy:</strong> Unlimited calculations with no cost
            </li>
            <li>
              <strong>Accurate Forecasts:</strong> Precise future worth based on
              historical trends
            </li>
            <li>
              <strong>Time-Saving:</strong> Instant results without manual
              calculations
            </li>
            <li>
              <strong>Smart Planning:</strong> Compare investment strategies
              effectively
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Calculate the Real Value of Your Money Today!
          </h3>
          <p className="text-gray-500 mt-2">
            Use LogicTrade's Inflation Calculator to estimate the impact of
            inflation on your savings, investments, and future purchasing power.
            Whether you're planning for retirement, education, or long-term
            financial security, understanding inflation-adjusted returns is
            crucial.
          </p>
          <p className="text-gray-500 mt-2 font-medium">
            Start planning now with LogicTrade's Inflation Calculator!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
