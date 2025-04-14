"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I access Trade Logic on my phone or tablet?",
    answer:
      "Absolutely! Trade Logic is mobile-optimized and works perfectly across all devices.",
  },
  {
    question: "Does Trade Logic provide learning materials for new traders?",
    answer:
      "Yes, we offer step-by-step guides, market insights, and video tutorials tailored for beginners.",
  },
  {
    question: "What exactly is Trade Logic?",
    answer:
      "Trade Logic is an intelligent trading platform designed to identify and evaluate market opportunities with precision.",
  },
  {
    question: "Is Trade Logic suitable for all skill levels?",
    answer:
      "Whether you're just starting or are a seasoned trader, Trade Logic adapts to your experience level.",
  },
  {
    question: "What makes Trade Logic unique compared to other platforms?",
    answer:
      "Trade Logic combines real-time analytics, AI-powered signals, and an intuitive interface for smarter trading decisions.",
  },
  {
    question: "Are there hidden charges or subscription tiers?",
    answer:
      "Trade Logic offers a free starter plan with optional premium upgrades for advanced tools.",
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
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 md:p-6 text-white font-semibold text-lg focus:outline-none text-left gap-2"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1">
                {index + 1}. {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp size={20} className="flex-shrink-0" />
              ) : (
                <ChevronDown size={20} className="flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-800 text-gray-300 border-[0.3px] rounded-sm border-gray-600 transition-all duration-300 text-left">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
