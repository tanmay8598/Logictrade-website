"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import { useRouter } from "next/navigation";
import Loader from "./../../../components/Loader/Loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CalculatorPage = () => {
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [calculatorType, setCalculatorType] = useState("Mutual Fund Returns");
  const [calculatorIcon, setCalculatorIcon] = useState("💵");
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [rateOfInterest, setRateOfInterest] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [totalValue, setTotalValue] = useState(310584);
  const [totalReturn, setTotalReturn] = useState(210584);
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
    const futureValue =
      investmentAmount * Math.pow(1 + rateOfInterest / 100, timePeriod);
    setTotalValue(Math.round(futureValue));
    setTotalReturn(Math.round(futureValue - investmentAmount));

    generateChartData();
  };

  const generateChartData = () => {
    const maxYearsToShow = Math.min(8, timePeriod);
    const step = Math.ceil(timePeriod / maxYearsToShow);
    const years = Array.from(
      { length: Math.ceil(timePeriod / step) + 1 },
      (_, i) => i * step
    );

    if (years[years.length - 1] > timePeriod) {
      years[years.length - 1] = timePeriod;
    }

    const values = years.map((year) => {
      return investmentAmount * Math.pow(1 + rateOfInterest / 100, year);
    });

    setChartData({
      labels: years.map((y) => `${y} Y`),
      datasets: [
        {
          label: "Investment Growth",
          data: values,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
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
                    className={`w-full cursor-pointer text-left text-sm px-4 py-2 rounded-md transition-colors font-bold ${
                      calculatorType === type.name + " Returns"
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
                        Total Investment
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={formatCurrency(investmentAmount)}
                          onChange={(e) => {
                            const rawValue = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            if (rawValue === "" || !isNaN(rawValue)) {
                              const numValue =
                                rawValue === "" ? 0 : parseInt(rawValue, 10);
                              if (numValue >= 100 && numValue <= 1000000) {
                                setInvestmentAmount(numValue);
                              }
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-28 text-right rounded border border-gray-600 focus:outline-none"
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
                      className="w-full h-2 bg-green-500 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center">
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Rate of Interest (p.a)
                      </label>
                      <div className="flex flex-row items-center">
                        <input
                          type="text"
                          value={rateOfInterest}
                          onChange={(e) => {
                            const value = e.target.value.replace(
                              /[^0-9.]/g,
                              ""
                            );
                            const numValue = parseFloat(value);
                            if (!isNaN(numValue)) {
                              if (numValue < 1) {
                                setRateOfInterest(1);
                              } else if (numValue > 50) {
                                setRateOfInterest(50);
                              } else {
                                setRateOfInterest(numValue);
                              }
                            } else if (value === "") {
                              setRateOfInterest(1);
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-16 text-right rounded border border-gray-600 focus:outline-none"
                        />
                        <span className="text-white text-md ml-1">%</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="0.1"
                      value={rateOfInterest}
                      onChange={(e) =>
                        setRateOfInterest(parseFloat(e.target.value))
                      }
                      className="w-full h-2 bg-green-500 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                  </div>
                  <div>
                    <div className="flex flex-row justify-between items-center">
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Time Period
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={timePeriod}
                          onChange={(e) => {
                            const digitsOnly = e.target.value.replace(
                              /\D/g,
                              ""
                            );
                            let numValue =
                              digitsOnly === "" ? 1 : parseInt(digitsOnly, 10);
                            numValue = Math.max(1, Math.min(40, numValue));
                            setTimePeriod(numValue);
                          }}
                          onBlur={() => {
                            if (timePeriod < 1) setTimePeriod(1);
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-16 text-right rounded border border-gray-600 focus:outline-none"
                        />
                        <span className="text-white">Y</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(parseInt(e.target.value))}
                      className="w-full h-2 bg-green-500 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
                <div className="bg-purple-900 p-4 rounded-lg border border-purple-700">
                  <div className="text-sm text-gray-300">Total Value</div>
                  <div className="text-lg lg:text-xl font-bold text-white">
                    {formatCurrency(totalValue)}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-blue-900 p-4 rounded-lg border border-blue-700">
                    <div className="text-sm text-gray-300">Total Amount</div>
                    <div className="text-sm lg:text-lg font-bold text-white">
                      {formatCurrency(investmentAmount)}
                    </div>
                  </div>
                  <div className="bg-green-900 p-4 rounded-lg border border-green-700">
                    <div className="text-sm text-gray-300">Est. Returns</div>
                    <div className="text-sm lg:text-lg font-bold text-white">
                      {formatCurrency(totalReturn)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-64">
                  {chartData.labels && (
                    <Bar
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
                                const value = context.parsed.y;
                                if (value >= 10000000) {
                                  return `₹${(value / 10000000).toFixed(2)} cr`;
                                } else if (value >= 100000) {
                                  return `₹${(value / 100000).toFixed(1)} L`;
                                } else {
                                  return `₹${value.toLocaleString("en-IN")}`;
                                }
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
                                if (value >= 10000000) {
                                  return `₹${(value / 10000000).toFixed(1)} cr`;
                                } else if (value >= 100000) {
                                  return `₹${(value / 100000).toFixed(1)} L`;
                                } else if (value >= 1000) {
                                  return `₹${(value / 1000).toFixed(0)} K`;
                                }
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
            What is a Mutual Fund Calculator?
          </h2>
          <p className="text-gray-500">
            A Mutual Fund (MF) calculator is an online tool that helps investors
            estimate the future value of their lump sum investments or SIP
            investments based on expected returns.
          </p>
          <p className="text-gray-500 mt-2">
            A mutual fund is a professionally managed investment fund that pools
            money from multiple investors to invest in stocks, bonds, and other
            securities. Whether you invest a lump sum or choose a Systematic
            Investment Plan (SIP), understanding potential returns is crucial to
            making informed financial decisions.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How to Calculate Mutual Fund Returns?
          </h3>
          <p className="text-gray-500 mt-2">
            If you invest Rs 100 in a mutual fund with an expected return of 12%
            per annum for 5 years, your investment will grow to Rs 176.23. This
            growth follows the compound interest formula, where returns
            accumulate over time without withdrawals.
          </p>
          <p className="text-gray-500 mt-2">
            <strong>
              The formula used in our mutual fund investment calculator is:
            </strong>{" "}
            A = P(1+i)<sup>n</sup>
          </p>
          <p className="text-gray-500 mt-1">
            Where -
            <br /> A = Maturity amount
            <br /> P = Initial investment (Principal)
            <br /> i = Assumed annual rate of return (as a decimal)
            <br /> n = Number of years of investment
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Example Calculation
          </h3>
          <p className="text-gray-500 mt-2">
            If P = Rs 10,000, i = 12% (0.12), and n = 10 years,
          </p>
          <p className="text-gray-500 mt-2">
            A = 10,000 (1 + 0.12)<sup>10</sup> = Rs 31,058
          </p>
          <p className="text-gray-500 mt-2">
            Thus, your investment of Rs 10,000 will grow to Rs 31,058 in 10
            years with a 12% annual return.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How Can Liquide’s Mutual Fund Calculator Help You?
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Estimate Your Mutual Fund Returns:</strong> Quickly
              calculate the future value of your lump sum or SIP investment.
            </li>
            <li>
              <strong>Plan Your Investments:</strong> Determine the right
              investment amount to achieve your financial goals.
            </li>
            <li>
              <strong>Compare Different Mutual Funds:</strong> Evaluate
              potential returns from various mutual fund schemes in India.
            </li>
            <li>
              <strong>Understand Your Growth Potential:</strong> See how
              compounding works over different investment durations and return
              rates.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Advantages of Using an Online Mutual Fund Calculator
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Easy to Use:</strong> Simply enter your investment amount,
              tenure, and expected return rate, and get instant results.
            </li>
            <li>
              <strong>Saves Time:</strong> No need for manual calculations; get
              results within seconds.
            </li>
            <li>
              <strong>Compare SIP vs Lump Sum Investments:</strong> Assess the
              growth potential of SIP vs lump sum investments to make better
              decisions.
            </li>
            <li>
              <strong>Set Realistic Financial Goals:</strong> Plan your
              investment strategy based on expected returns and your risk
              appetite.
            </li>
            <li>
              <strong>Completely Free & Unlimited Use:</strong> Use the Liquide
              Mutual Fund Calculator any number of times, for free!
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Start Planning Your Mutual Fund Investments Today!
          </h3>
          <p className="text-gray-500 mt-2">
            Whether you're investing for wealth creation, retirement, or child’s
            education, understanding your mutual fund returns is key to making
            the right decisions.
          </p>
          <p className="text-gray-500 mt-2 font-medium">
            Use Liquide’s Mutual Fund Returns Calculator to estimate your
            returns instantly and make informed investment choices!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
