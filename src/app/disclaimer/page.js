"use client";
import React from "react";

function Disclaimer() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen py-16 px-6 sm:px-12 md:px-20 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-10 text-left">
          Disclaimer
        </h1>

        <div className="space-y-6 text-left text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-amber-300">MARKET RISKS WARNING:</strong>{" "}
            “Investment in securities market are subject to market risks. Read
            all the related documents carefully before investing.”
          </p>

          <p>
            <strong className="text-yellow-300">LOSS POSSIBILITY:</strong>{" "}
            Market risks may result in partial or permanent loss of investments
            under certain market conditions.
          </p>

          <p>
            <strong className="text-yellow-300">ILLUSTRATIVE PURPOSES:</strong>{" "}
            Securities mentioned are for illustration only and are not
            recommendations.
          </p>

          <p>
            <strong className="text-yellow-300">SEBI REGISTRATION:</strong>{" "}
            Registration granted by SEBI and certification from NISM do not
            guarantee the performance of the intermediary nor assure returns to
            investors.
          </p>

          <p>
            <strong className="text-yellow-300">PAST PERFORMANCE:</strong> Past
            performance is not indicative of future results.
          </p>

          <p>
            <strong className="text-yellow-300">EDUCATIONAL PURPOSES:</strong>{" "}
            The information on social media is for educational purposes, not
            investment advice. Investors should consult their advisor before
            making decisions.
          </p>

          <p>
            <strong className="text-yellow-300">
              SEBI SPECIFIED MECHANISM:
            </strong>{" "}
            All fee payments for research services must be made through online
            mode and in “LOGIC TRADE ENTERPRISES” Bank account. Payments made
            outside this mechanism are not considered as payment for services
            under SEBI regulations. No grievances in this regard will be
            entertained by SEBI or its recognized regulatory bodies.
          </p>

          <p>
            <strong className="text-yellow-300">NO WARRANTIES:</strong> The
            Research Analyst does not guarantee the accuracy, results, or
            reliability of content on its website, including merchantability,
            suitability, and non-infringement.
          </p>

          <p>
            <strong className="text-yellow-300">EXERCISE CAUTION:</strong> We
            provide research analysis and specific securities recommendations
            but do not offer portfolio management services, personal account
            handling, profit sharing, or risk-profiling-based investment
            advisory services.
          </p>

          <p>
            Report any unethical practices to our support/compliance team or
            SEBI.
            <br />
            Email:{" "}
            <a
              href="mailto:logictrade.co.in@gmail.com"
              className="text-blue-300 underline"
            >
              logictrade.co.in@gmail.com
            </a>
            <br />
            SEBI Toll-Free Numbers:{" "}
            <span className="text-gray-300">1800 22 7575</span> or{" "}
            <span className="text-gray-300">1800 266 7575</span>
          </p>

          <p>
            <strong className="text-yellow-300">Important Notice:</strong>{" "}
            <br />
            If you are dissatisfied with our services, kindly raise your initial
            complaint to{" "}
            <a
              href="mailto:logictrade.co.in@gmail.com"
              className="text-blue-300 underline"
            >
              logictrade.co.in@gmail.com
            </a>{" "}
            or contact: <span className="text-gray-300">+91 7611888219</span>
          </p>

          <p>
            If the issue remains unresolved after 7 days or if you are still not
            satisfied with our response, you have the option to escalate your
            concern to SEBI through the following channels:
            <br />
            SEBI SCORES Link:{" "}
            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              https://scores.sebi.gov.in/
            </a>
            <br />
            SEBI ODR Link:{" "}
            <a
              href="https://smartodr.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              https://smartodr.in/
            </a>
            <br />
            Toll-Free Numbers:{" "}
            <span className="text-gray-300">1800 11 2222 22</span> or{" "}
            <span className="text-gray-300">1800 000 0000</span>
            <br />
            SEBI Office Contacts:{" "}
            <a
              href="https://www.sebi.gov.in/contact-us.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              https://www.sebi.gov.in/contact-us.html
            </a>
          </p>

          <p className="italic text-sm text-red-400">
            Don’t Copy Paste This – Disclaimer Meaning: A disclaimer looks to
            avoid particular liability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
