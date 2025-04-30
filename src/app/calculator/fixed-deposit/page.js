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
  const [calculatorType, setCalculatorType] = useState("Fixed Deposit");
  const [calculatorIcon, setCalculatorIcon] = useState("💰");
  const [investmentAmount, setInvestmentAmount] = useState(300000);
  const [rateOfInterest, setRateOfInterest] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(5);
  const [totalValue, setTotalValue] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
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

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    calculateReturns();
  }, [investmentAmount, rateOfInterest, timePeriod, calculatorType]);

  const calculateReturns = () => {
    const n = 4;
    const maturityAmount =
      investmentAmount *
      Math.pow(1 + rateOfInterest / (n * 100), n * timePeriod);

    setTotalValue(Math.round(maturityAmount));
    setTotalReturn(Math.round(maturityAmount - investmentAmount));

    generateChartData();
  };

  const generateChartData = () => {
    const n = 4;
    const quarters = Array.from({ length: timePeriod * 4 + 1 }, (_, i) => i);
    const values = quarters.map((quarter) => {
      return (
        investmentAmount * Math.pow(1 + rateOfInterest / (n * 100), quarter)
      );
    });

    setChartData({
      labels: quarters.map((q) => {
        if (q % 4 === 0) return `${q / 4} Y`;
        return "";
      }),
      datasets: [
        {
          label: "FD Growth",
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

  // if (loading) {
  //   return <Loader />;
  // }

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
                        Total Investment
                      </label>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">₹</span>
                        <input
                          type="text"
                          value={investmentAmount.toLocaleString("en-IN")}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            if (value === "") {
                              setInvestmentAmount(0);
                            } else {
                              const numValue = parseInt(value, 10);
                              if (!isNaN(numValue)) {
                                setInvestmentAmount(
                                  Math.min(10000000, Math.max(5000, numValue))
                                );
                              }
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-32 text-right rounded border border-gray-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="10000000"
                      step="1000"
                      value={investmentAmount}
                      onChange={(e) =>
                        setInvestmentAmount(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Rate of Interest (p.a)
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={rateOfInterest}
                          onChange={(e) => {
                            const value = e.target.value.replace(
                              /[^0-9.]/g,
                              ""
                            );
                            if (value === "") {
                              setRateOfInterest(1);
                            } else {
                              const numValue = parseFloat(value);
                              if (!isNaN(numValue)) {
                                setRateOfInterest(
                                  Math.min(15, Math.max(1, numValue))
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
                      max="15"
                      step="0.1"
                      value={rateOfInterest}
                      onChange={(e) =>
                        setRateOfInterest(parseFloat(e.target.value))
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Time Period (years)
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
                                  Math.min(25, Math.max(1, numValue))
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
                      max="25"
                      step="1"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
                <div className="bg-purple-900 p-4 rounded-lg border border-purple-700">
                  <div className="text-sm text-gray-300">Maturity Value</div>
                  <div className="text-lg lg:text-2xl font-bold text-white">
                    {formatCurrency(totalValue)}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-blue-900 p-4 rounded-lg border border-blue-700">
                    <div className="text-sm text-gray-300">Invested Amount</div>
                    <div className="text-sm lg:text-xl font-bold text-white">
                      {formatCurrency(investmentAmount)}
                    </div>
                  </div>
                  <div className="bg-green-900 p-4 rounded-lg border border-green-700">
                    <div className="text-sm text-gray-300">Est. Returns</div>
                    <div className="text-sm lg:text-xl font-bold text-white">
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

        <div className="mt-8 lg:mt-2 w-full lg:w-[50%] mx-auto lg:ml-66 p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            What is an FD (Fixed Deposit) Calculator?
          </h2>
          <p className="text-gray-500">
            A Fixed Deposit (FD) calculator is a free online tool that helps you
            calculate fixed deposit interest and maturity amount with ease. By
            entering your investment amount, FD interest rate and tenure, you
            can get an instant estimate of your returns on fixed deposits. This
            eliminates the need for manual calculations, making investment
            planning faster and more accurate.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Why use an FD Calculator?
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Instant FD Interest Calculation:</strong> Get accurate
              results in seconds without manual effort.
            </li>
            <li>
              <strong>Compare Fixed Deposit Rates:</strong> Check and compare FD
              returns across different banks and tenures.
            </li>
            <li>
              <strong>Plan Your Investments:</strong> Choose the best fixed
              deposit plan based on your financial goals.
            </li>
            <li>
              <strong>Risk-Free Investment Growth:</strong> FDs are a safe
              investment option with guaranteed returns.
            </li>
          </ul>

          <p className="text-gray-500 mt-2">
            Using an online FD calculator helps you make informed decisions,
            ensuring you maximize your returns while securing your savings. Try
            the best FD calculator today to plan your fixed deposit investments
            efficiently!
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How to use LogicTrade's FD Calculator?
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Principal Amount:</strong> Enter the amount you want to
              invest in the FD.
            </li>
            <li>
              <strong>Interest Rate:</strong> Enter the annual interest rate
              offered by the bank or financial institution.
            </li>
            <li>
              <strong>Tenure:</strong> Enter the duration of your FD investment.
            </li>
          </ul>
          <p className="text-gray-500 mt-2">
            Once you enter these values, Liquide’s FD calculator will instantly
            display the maturity amount and total interest earned. This helps
            you compare FD interest rates across banks and NBFCs, ensuring you
            choose the best fixed deposit scheme for maximum returns.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            FD Maturity Formula
          </h3>
          <p className="text-gray-500 mt-2">
            The maturity amount of your FD is calculated using this formula:
            <br />
            <strong>M = P + (P × r × t / 100)</strong>
          </p>
          <p className="text-gray-500 mt-1">
            Where:
            <br /> P = Principal amount deposited
            <br /> r = Annual interest rate
            <br /> t = Tenure in years
          </p>

          <p className="text-gray-500 mt-2">
            <strong>Example:</strong> If you deposit ₹1,00,000 for 5 years at
            10% interest:
            <br />M = ₹1,00,000 + (1,00,000 × 10 × 5 / 100) = ₹1,50,000
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Benefits of Using a FD Calculator
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Accurate Results:</strong> Get precise calculations
              without errors.
            </li>
            <li>
              <strong>Free & Easy to Use:</strong> Available on any device with
              internet access.
            </li>
            <li>
              <strong>Time-Saving:</strong> Quickly compare FD maturity amounts
              from different banks.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Why Use Liquide’s FD Calculator
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Simple & Easy to Use:</strong> No need to manually apply
              complex FD interest calculation formulas.
            </li>
            <li>
              <strong>Instant & Time-Saving:</strong> Get your FD maturity
              amount in seconds without any hassle.
            </li>
            <li>
              <strong>100% Free & Accurate:</strong> Our fixed deposit
              calculator is completely free and ensures error-free results,
              helping you plan your finances better.
            </li>
            <li>
              <strong>Better Financial Planning:</strong> With precise
              calculations, you can compare FD interest rates and choose the
              best option for your investment goals.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Limitations of an FD Calculator
          </h3>
          <p className="text-gray-500 mt-2">
            While an FD interest calculator provides quick estimates, it does
            not account for tax deductions on FD interest. Always check the
            applicable TDS (Tax Deducted at Source) on FD when planning your
            investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
