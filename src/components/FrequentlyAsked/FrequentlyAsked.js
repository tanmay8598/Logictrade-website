"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is TradeFinder available on mobile devices?",
    answer:
      "Yes, TradeFinder is fully responsive and works seamlessly on mobile devices.",
  },
  {
    question: "Does TradeFinder offer educational resources for beginners?",
    answer:
      "Yes, we provide tutorials, articles, and videos to help beginners.",
  },
  {
    question: "What is TradeFinder?",
    answer:
      "TradeFinder is a platform that helps users find and analyze trade opportunities.",
  },
  {
    question: "Who can use TradeFinder?",
    answer:
      "Anyone interested in trading, from beginners to experienced traders.",
  },
  {
    question:
      "How does TradeFinder differentiate itself from other trading platforms?",
    answer:
      "TradeFinder offers AI-driven insights, real-time data, and a user-friendly experience.",
  },
  {
    question: "Are there any additional costs or fees for using TradeFinder?",
    answer:
      "TradeFinder has a free version with premium plans for advanced features.",
  },
];

export default function FrequentlyAsked() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-900 rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-white font-semibold text-lg focus:outline-none text-left"
              onClick={() => toggleFAQ(index)}
            >
              {index + 1}. {faq.question}
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-800 text-gray-300 transition-all duration-300 text-left">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
