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
  const [calculatorType, setCalculatorType] = useState("Fixed Deposit");
  const [calculatorIcon, setCalculatorIcon] = useState("💰");
  const [investmentAmount, setInvestmentAmount] = useState(300000);
  const [rateOfInterest, setRateOfInterest] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(5);
  const [totalValue, setTotalValue] = useState(414126);
  const [totalReturn, setTotalReturn] = useState(114126);
  const [chartData, setChartData] = useState({});

  console.log(calculatorType);

  console.log(totalValue, totalReturn);

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
    calculateReturns();
  }, [investmentAmount, rateOfInterest, timePeriod, calculatorType]);

  const calculateReturns = () => {
    const months = timePeriod * 12;
    const monthlyRate = rateOfInterest / 12 / 100;

    if (calculatorType === "sip") {
      const futureValue =
        investmentAmount *
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate));
      setTotalValue(Math.round(futureValue));
      setTotalReturn(Math.round(futureValue - investmentAmount * months));
    } else {
      const futureValue =
        investmentAmount * Math.pow(1 + rateOfInterest / 100, timePeriod);
      setTotalValue(Math.round(futureValue));
      setTotalReturn(Math.round(futureValue - investmentAmount));
    }

    generateChartData();
  };

  const generateChartData = () => {
    const years = Array.from({ length: timePeriod + 1 }, (_, i) => i);
    const values = years.map((year) => {
      if (calculatorType === "sip") {
        const months = year * 12;
        const monthlyRate = rateOfInterest / 12 / 100;
        return (
          investmentAmount *
          (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
            (1 + monthlyRate))
        );
      } else {
        return investmentAmount * Math.pow(1 + rateOfInterest / 100, year);
      }
    });

    setChartData({
      labels: years.map((y) => `${y} Y`),
      datasets: [
        {
          label: "Investment Growth",
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
      <div className="max-w-7xl mx-auto ">
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
          <div className="w-full md:w-1/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
            <ul className="space-y-2">
              {calculatorTypes.map((type) => (
                <li key={type.id}>
                  <button
                    onClick={() => handleCalculatorChange(type)}
                    className={`w-full text-left text-sm md:text px-4 py-2 rounded-md transition-colors font-bold ${
                      calculatorType === type.name
                        ? " text-white"
                        : " text-gray-500 hover:text-gray-700"
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

          <div className="w-full ">
            <h1 className="text-lg lg:text-3xl font-bold text-white mb-8">
              <span className="text-xs lg:text-xl  bg-gray-900 border border-gray-700 p-2 rounded-sm">
                {calculatorIcon}
              </span>{" "}
              {calculatorType} Calculator
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-6 ">
              <div className="w-full md:w-2/4 bg-gray-900 rounded-lg shadow p-6 border border-gray-700 h-fit">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Total Investment
                    </label>
                    <div className="flex items-center">
                      <span className="mr-2 text-white">₹</span>
                      <input
                        type="range"
                        min="5000"
                        max="10000000"
                        step="10000"
                        value={investmentAmount}
                        onChange={(e) =>
                          setInvestmentAmount(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-lg font-semibold text-white">
                        {formatCurrency(investmentAmount)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Rate of Interest (p.a)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="15"
                        step="0.1"
                        value={rateOfInterest}
                        onChange={(e) =>
                          setRateOfInterest(parseFloat(e.target.value))
                        }
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-2 w-12 text-white">
                        {rateOfInterest}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Time Period (years)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="25"
                        step="1"
                        value={timePeriod}
                        onChange={(e) =>
                          setTimePeriod(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-2 w-8 text-white">{timePeriod}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
                <div className="bg-purple-900 p-4 rounded-lg border border-purple-700">
                  <div className="text-sm text-gray-300">Total Value</div>
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(totalValue)}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-blue-900 p-4 rounded-lg border border-blue-700">
                    <div className="text-sm text-gray-300">Invested Amount</div>
                    <div className="text-xl font-bold text-white">
                      {formatCurrency(
                        calculatorType === "sip"
                          ? investmentAmount * timePeriod * 12
                          : investmentAmount
                      )}
                    </div>
                  </div>
                  <div className="bg-green-900 p-4 rounded-lg border border-green-700">
                    <div className="text-sm text-gray-300">Est. Returns</div>
                    <div className="text-xl font-bold text-white">
                      {formatCurrency(totalReturn)}
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

        <div className="mt-8 bg-gray-900 rounded-lg shadow p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-white">
            What is a Fixed Deposit Calculator?
          </h2>
          <p className="text-gray-300">
            A Fixed Deposit (FD) calculator is an online tool that helps
            investors estimate the future value of their lump sum investments or
            SIP investments based on expected returns.
          </p>
          <p className="text-gray-300 mt-2">
            A mutual fund is a professionally managed investment fund that pools
            money from many investors to purchase securities. Mutual funds are a
            popular choice for investors because they offer professional
            management, diversification, and liquidity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
