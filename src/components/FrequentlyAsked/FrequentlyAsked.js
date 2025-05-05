"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is included in the Premium Channel?",
    answer: [
      "Daily trading tips and setups (Stocks, Nifty, Banknifty, Options)",
      "Intraday and swing trading strategies",
      "Exclusive access to premium analysis and reports",
    ],
  },
  {
    question: "How do I join the Premium Channel?",
    answer:
      "Click the payment link provided. After successful payment, you’ll be added to the private Telegram group within 24 hours.",
  },
  {
    question: "What are the subscription charges?",
    answer:
      "subscription charges are vary time to time. if you want to see download our app now.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, Bank Transfer, Paytm, Google Pay, PhonePe, etc (on request).",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Since this is a digital service, no refunds are provided after joining. Please join only if you are sure.",
  },
  {
    question: "Will I get guaranteed profits?",
    answer:
      "No. We share analysis and ideas based on market research, but the stock market carries risk. You must do your own risk management before trading.",
  },
  {
    question: "Can I share the premium content with others?",
    answer:
      "Strictly prohibited. Sharing or forwarding paid content will result in immediate removal without any refund.",
  },
  {
    question: "How can I contact support if I face any issue?",
    answer: " kindly mail us at logictrade.co.in@gmail.com",
  },
  {
    question: "Are there any free trials?",
    answer: "stay tuned to the free channel in an app for announcememnts .",
  },
  {
    question: "Is this SEBI registered?",
    answer: "Yes i am sebi reg. research analys",
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
        FAQ - Premium Telegram Channel
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden mb-4"
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
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc list-inside space-y-2">
                    {faq.answer.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
