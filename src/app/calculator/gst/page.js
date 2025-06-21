"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "./../../../components/Loader/Loader";

const CalculatorPage = () => {
  const router = useRouter();
  const [calculatorType, setCalculatorType] = useState("GST");
  const [calculatorIcon, setCalculatorIcon] = useState("📊");
  const [totalAmount, setTotalAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);
  const [calculationType, setCalculationType] = useState("Excluding");
  const [gstAmount, setGstAmount] = useState(0);
  const [resultAmount, setResultAmount] = useState(0);

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
    calculateGST();
  }, [totalAmount, taxSlab, calculationType]);

  const calculateGST = () => {
    if (calculationType === "Including") {
      // When amount includes GST
      const gst = (totalAmount * taxSlab) / (100 + taxSlab);
      const preGstAmount = totalAmount - gst;
      setGstAmount(Math.round(gst));
      setResultAmount(Math.round(preGstAmount));
    } else {
      // When amount excludes GST
      const gst = (totalAmount * taxSlab) / 100;
      setGstAmount(Math.round(gst));
      setResultAmount(Math.round(totalAmount + gst));
    }
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
                  <div className="flex space-x-2 mb-6 flex-row justify-between">
                    <button
                      onClick={() => setCalculationType("Excluding")}
                      className={`px-4 py-2 rounded-md font-medium w-[50%] cursor-pointer ${
                        calculationType === "Excluding"
                          ? "bg-gray-700 text-white"
                          : "text-white"
                      }`}
                    >
                      Excluding GST
                    </button>
                    <button
                      onClick={() => setCalculationType("Including")}
                      className={`px-4 py-2 rounded-md font-medium w-[50%] cursor-pointer ${
                        calculationType === "Including"
                          ? "bg-gray-700 text-white"
                          : "text-white"
                      }`}
                    >
                      Including GST
                    </button>
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center">
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Total Amount
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={formatCurrency(totalAmount)}
                          onChange={(e) => {
                            const rawValue = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            if (rawValue === "" || !isNaN(rawValue)) {
                              const numValue =
                                rawValue === "" ? 0 : parseInt(rawValue, 10);
                              if (numValue >= 0 && numValue <= 10000000) {
                                setTotalAmount(numValue);
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
                      max="10000000"
                      step="1000"
                      value={totalAmount}
                      onChange={(e) => setTotalAmount(parseInt(e.target.value))}
                      className="w-full h-2 appearance-none cursor-pointer mt-2 rounded-lg custom-range"
                      style={{
                        background: `linear-gradient(to right, #facc15 ${
                          (totalAmount / 10000000) * 100
                        }%, #d1d5db ${(totalAmount / 10000000) * 100}%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex flex-row justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Tax Slab
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={taxSlab === 0 ? "" : taxSlab}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, "");

                            if (value === "") {
                              setTaxSlab(0);
                              return;
                            }

                            const numValue = parseInt(value, 10);

                            if (!isNaN(numValue)) {
                              setTaxSlab(numValue > 28 ? 28 : numValue);
                            }
                          }}
                          onBlur={() => {
                            if (taxSlab < 5) {
                              setTaxSlab(5);
                            }
                          }}
                          className="bg-gray-800 text-white px-2 py-1 w-16 text-right rounded border border-gray-600 focus:outline-none"
                        />

                        <span className="text-white">%</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="28"
                      step="1"
                      value={taxSlab}
                      onChange={(e) => setTaxSlab(parseInt(e.target.value))}
                      className="w-full h-2 appearance-none cursor-pointer mt-2 rounded-lg custom-range"
                      style={{
                        background: `linear-gradient(to right, #facc15 ${
                          ((taxSlab - 5) / (28 - 5)) * 100
                        }%, #d1d5db ${((taxSlab - 5) / (28 - 5)) * 100}%)`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/4 bg-gray-900 rounded-lg shadow p-4 border border-gray-700 h-fit">
                <div className="p-4 rounded-lg  ">
                  <div className="text-md font-semibold text-gray-300">
                    {/* Total GST */}
                    {calculationType === "Including"
                      ? "Future Cost"
                      : "Total GST"}
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-yellow-400">
                    {formatCurrency(gstAmount)}
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-4">
                  <div className=" p-4 rounded-lg  ">
                    <div className="text-sm text-gray-300">
                      {calculationType === "Including"
                        ? "Pre-GST Amount"
                        : "Total Amount"}
                    </div>
                    <div className="text-sm lg:text-lg font-bold text-white">
                      {calculationType === "Including"
                        ? formatCurrency(resultAmount)
                        : formatCurrency(totalAmount)}
                    </div>
                  </div>
                  <div className=" p-4  border-l-1 border-white ">
                    <div className="text-sm text-gray-300">
                      {calculationType === "Including"
                        ? "Total Amount"
                        : "Post-GST Amount"}
                    </div>
                    <div className="text-sm lg:text-lg font-bold  text-white">
                      {calculationType === "Including"
                        ? formatCurrency(totalAmount)
                        : formatCurrency(resultAmount)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-2 w-full lg:w-[50%]  mx-auto lg:ml-66 p-6 ">
          <h2 className="text-xl font-semibold mb-4 text-white">
            How GST Calculator Works
          </h2>
          <p className="text-gray-500">
            Goods and Services Tax (GST) is an indirect tax levied on the supply
            of goods and services in India. Introduced on July 1, 2017, GST
            replaced multiple taxes such as VAT, Excise Duty, and Service Tax.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Types of GST in India:
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>CGST:</strong> Levied by Central Government on intra-state
              transactions
            </li>
            <li>
              <strong>SGST:</strong> Collected by State Governments for
              intra-state transactions
            </li>
            <li>
              <strong>IGST:</strong> Applied to inter-state transactions
              (Central Government)
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            GST Calculation Formulas
          </h3>
          <p className="text-gray-500 mt-2">
            <strong>Adding GST to Base Price:</strong>
          </p>
          <p className="text-gray-500 mt-1">
            GST Amount = Original Price × GST%
            <br />
            Final Price = Original Price + GST Amount
            <br />
            Example: ₹1,000 × 18% = ₹180 → ₹1,180 total
          </p>

          <p className="text-gray-500 mt-2">
            <strong>Removing GST from Final Price:</strong>
          </p>
          <p className="text-gray-500 mt-1">
            Original Price = (Final Price × 100) ÷ (100 + GST%)
            <br />
            Example: ₹1,180 × (100/118) = ₹1,000 original
          </p>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Common GST Slabs in India
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>5% - Essential items like food grains, medicines</li>
            <li>12% - Processed foods, computers, mobile phones</li>
            <li>18% - Most goods and services</li>
            <li>28% - Luxury items, automobiles, tobacco</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Benefits of Using GST Calculator
          </h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
            <li>
              <strong>Quick & Accurate:</strong> Avoid manual tax calculations
              and get instant results
            </li>
            <li>
              <strong>Tax Transparency:</strong> Know the exact tax amount
              applied
            </li>
            <li>
              <strong>GST Compliance:</strong> Ensure correct calculations for
              invoices and filings
            </li>
            <li>
              <strong>Business Efficiency:</strong> Easily calculate GST for
              pricing and taxation
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-white">
            Calculate GST Online Now!
          </h3>
          <p className="text-gray-500 mt-2">
            Use Liquide's GST Calculator to accurately compute GST amounts for
            your business transactions, purchases, and invoices. Whether you're
            a business owner, retailer, or consumer, understanding GST
            calculations helps you make informed financial decisions.
          </p>
          <p className="text-gray-500 mt-2 font-medium">
            Try LogicTrade's GST Calculator now and ensure accurate taxation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
