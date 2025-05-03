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
  const router = useRouter();
  const [calculatorType, setCalculatorType] = useState("Recurring Deposit");
  const [calculatorIcon, setCalculatorIcon] = useState("🔥");
  const [monthlyDeposit, setMonthlyDeposit] = useState(50000);
  const [rateOfInterest, setRateOfInterest] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(5);
  const [totalValue, setTotalValue] = useState(354954);
  const [totalReturn, setTotalReturn] = useState(54954);
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
    calculateReturns();
  }, [monthlyDeposit, rateOfInterest, timePeriod, calculatorType]);

  const calculateReturns = () => {
    const months = timePeriod * 12;
    const monthlyRate = rateOfInterest / 12 / 100;
    const futureValue =
      monthlyDeposit *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    setTotalValue(Math.round(futureValue));
    setTotalReturn(Math.round(futureValue - monthlyDeposit * months));

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
      const months = year * 12;
      const monthlyRate = rateOfInterest / 12 / 100;
      return (
        monthlyDeposit *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate)
      );
    });

    setChartData({
      labels: years.map((y) => `${y} Y`),
      datasets: [
        {
          label: "RD Growth",
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
                        Monthly Investment
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={formatCurrency(monthlyDeposit)}
                          onChange={(e) => {
                            const rawValue = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            if (rawValue === "" || !isNaN(rawValue)) {
                              const numValue =
                                rawValue === "" ? 0 : parseInt(rawValue, 10);
                              if (numValue >= 100 && numValue <= 1000000) {
                                setMonthlyDeposit(numValue);
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
                      max="1000000"
                      step="1000"
                      value={monthlyDeposit}
                      onChange={(e) =>
                        setMonthlyDeposit(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer mt-2"
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
                              } else if (numValue > 15) {
                                setRateOfInterest(15);
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
                      max="15"
                      step="0.5"
                      value={rateOfInterest}
                      onChange={(e) =>
                        setRateOfInterest(parseFloat(e.target.value))
                      }
                      className="w-full h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer mt-2"
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
                            numValue = Math.max(1, Math.min(10, numValue));
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
                      max="10"
                      step="1"
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer mt-2"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
                <div className=" p-4 rounded-lg ">
                  <div className="text-sm text-gray-300 font-bold">
                    Maturity Value
                  </div>
                  <div className="text-lg lg:text-2xl font-extrabold text-blue-400">
                    {formatCurrency(totalValue)}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className=" p-4 rounded-lg ">
                    <div className="text-sm text-gray-300">
                      Total Investment
                    </div>
                    <div className="text-sm lg:text-lg font-bold text-white">
                      {formatCurrency(monthlyDeposit * timePeriod * 12)}
                    </div>
                  </div>
                  <div className=" p-4 border-l border-white">
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
            What is an RD (Recurring Deposit)?
          </h2>
          <p className="text-gray-500">
            A Recurring Deposit (RD) is a fixed-income investment option offered
            by banks and financial institutions. It allows individuals to
            deposit a fixed amount monthly for a predetermined period while
            earning stable returns at a fixed interest rate.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Key features of an RD account:
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>Fixed monthly deposits for a chosen tenure.</li>
            <li>Guaranteed returns with a fixed interest rate.</li>
            <li>
              Interest is compounded quarterly or annually to maximize earnings.
            </li>
            <li>Ideal for conservative investors and disciplined savers.</li>
            <li>
              At the end of the RD tenure, the total invested amount +
              accumulated interest is paid to the depositor, ensuring steady
              financial growth.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            How Can an RD Calculator Help You?
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Instant Maturity Calculation:</strong> Get accurate
              results in seconds.
            </li>
            <li>
              <strong>Investment & Interest Breakdown:</strong> View total
              invested amount vs total interest earned.
            </li>
            <li>
              <strong>Senior Citizen Benefit:</strong> Calculate higher RD
              returns for senior citizens, as they often receive higher RD
              interest rates.
            </li>
            <li>
              <strong>Compare RD Options:</strong> Analyze different banks’ RD
              interest rates and tenures to choose the best investment.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            RD Calculation Formula (with Example)
          </h3>
          <p className="text-gray-500 mt-2">
            There are two methods to calculate RD maturity:
          </p>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>Simple Interest Method</li>
            <li>Compound Interest Method (most commonly used by banks)</li>
          </ul>

          <p className="text-gray-500 mt-2">
            <strong>RD Maturity Calculation Formula:</strong> M = P*(1+R/N)
            <sup>Nt</sup>
          </p>
          <p className="text-gray-500 mt-1">
            Where -
            <br /> M = Maturity Amount
            <br /> P = Monthly Investment Amount
            <br /> R = Annual Interest Rate (as a decimal)
            <br /> t = Investment Tenure (in years)
            <br /> N = Compounding Frequency (usually 4 for quarterly
            compounding)
          </p>
          <p className="text-gray-500 mt-2">
            This is the standard formula used in the calculation of the RD
            maturity amount, regardless of the sum invested or tenure. All you
            need to do is put in the variables.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Example Calculation
          </h3>
          <p className="text-gray-500 mt-2">
            Assume you deposit Rs 5,000 per month in an RD account for 1 year at
            an 8% annual interest rate.
          </p>
          <p className="text-gray-500 mt-2">
            The final maturity amount on this particular deposit is calculated
            with the following formula:
          </p>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>A = P*(1+R/N)^(Nt) = 5000*(1+0.0825/4)^(4×12/12) = 5425.44</li>
            <li>= 5000*(1+0.0825/4)^(4×11/12) = 5388.64</li>
            <li>= 5000*(1+0.0825/4)^(4×1/12) = 5034.14</li>
          </ul>
          <p className="text-gray-500 mt-2">
            By taking the sum of the series, the total maturity value = Rs
            62,730.85
          </p>
          <p className="text-gray-500 mt-2">
            Solving this equation manually is no mean task. An RD calculator, on
            the other hand, will provide you with the exact number in a few
            seconds.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Advantages of Using Liquide’s Online RD Calculator
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Time-Saving:</strong> Eliminates manual calculations and
              gives instant results.
            </li>
            <li>
              <strong>100% Accurate:</strong> Ensures error-free and precise
              maturity calculations.
            </li>
            <li>
              <strong>Free & Unlimited Use:</strong> Compare multiple RD plans
              without any cost.
            </li>
            <li>
              <strong>Compare Investment Options:</strong> Evaluate various
              deposit schemes before making an informed decision.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Plan Your RD Investments Today!
          </h3>
          <p className="text-gray-500 mt-2">
            Use the LogicTrade RD Calculator to find the best Recurring Deposit
            plan for your financial goals. Whether you're saving for a future
            purchase, retirement, or emergency fund, RDs provide safe and
            guaranteed returns.
          </p>
          <p className="text-gray-500 mt-2 font-medium">
            Start planning now with LogicTrade's RD Calculator and make smart
            investment decisions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
