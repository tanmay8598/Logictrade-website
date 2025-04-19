"use client";
import React, { useState, useEffect } from "react";
import Loader from "./../../components/Loader/Loader";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-start justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full max-w-4xl mx-auto"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="w-full p-6 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white underline decoration-amber-400 mb-6">
              <span className="text-yellow-400">
                Investor Charter in respect of <br />
                Research Analyst (RA)
              </span>
            </h2>

            <div className="text-left space-y-8 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  A. Vision and Mission Statements for Investors
                </h3>
                <h4 className="font-semibold text-md text-white my-2">
                  Vision
                </h4>
                <ul className="list-disc pl-5 space-y-2 mb-2">
                  <li>Invest in knowledge & safety</li>
                </ul>
                <h4 className="font-semibold text-white my-2">Mission</h4>
                <p className="">
                  Every investor should be able to invest in the right
                  investment products based on their needs, manage and monitor
                  them to meet their goals, access reports and enjoy financial
                  wellness.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  B. Details of business transacted by the Research Analyst to
                  the investors.
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    To publish a research report based on the research
                    activities of the RA.
                  </li>
                  <li>
                    To provide an independent unbiased view on securities.
                  </li>
                  <li>
                    To offer unbiased recommendations, disclosing the financial
                    interests in recommended securities.
                  </li>
                  <li>
                    To provide research recommendations, based on analysis of
                    publicly available information and known observations.
                  </li>
                  <li>Conduct audits annually.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  C. Details of services provided to investors (No Indicative
                  Timelines)
                </h3>
                <h4 className="font-semibold text-white mb-2">
                  Onboarding of Clients
                </h4>
                <h4 className="font-semibold text-white mb-2">
                  Disclosure to Clients
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    To distribute research reports and recommendations to the
                    clients without discrimination.
                  </li>
                  <li>
                    To maintain confidentiality w.r.t publication of the
                    research report until made available in the public domain.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  D. Details of grievance redressal mechanism and how to access
                  it
                </h3>
                <p className="mb-4">
                  In case of any grievance/complaint, an investor should
                  approach the concerned research analyst and ensure the
                  grievance is resolved within 30 days.
                </p>
                <p className="mb-4">
                  If the investor's complaint is not redressed satisfactorily,
                  one may lodge a complaint with SEBI on SEBI's SCORES portal, a
                  centralized web-based complaint redressal system. SEBI takes
                  up the complaints registered via SCORES with the concerned
                  intermediary for timely redressal. SCORES facilitates tracking
                  the status of the complaint.
                </p>
                <p>
                  Regarding physical complaints, investors may send their
                  complaints to the Office of Investor Assistance and Education,
                  Securities and Exchange Board of India, SEBI Bhavan. Plot No.
                  C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai –
                  400 051.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  E. Expectations from the investors (Responsibilities of
                  investors)
                </h3>
                <h4 className="font-semibold text-amber-400 mb-2">Do's</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Always deal with SEBI-registered Research Analysts.</li>
                  <li>
                    Ensure that the Research Analyst has a valid registration
                    certificate.
                  </li>
                  <li>Check for the SEBI registration number.</li>
                  <li>
                    Please refer to the list of all SEBI registered Research
                    Analysts which is available on the SEBI website at the
                    following link:
                    <a
                      href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline ml-1"
                    >
                      SEBI Registered RAs
                    </a>
                  </li>
                  <li>
                    Always pay attention towards disclosures made in the
                    research reports before investing.
                  </li>
                  <li>
                    Pay your Research Analyst through banking channels only and
                    maintain duly signed receipts mentioning the details of your
                    payments.
                  </li>
                  <li>
                    Before buying securities or applying for a public offer,
                    check for the research recommendation provided by your
                    research Analyst.
                  </li>
                  <li>
                    Ask all relevant questions and clear your doubts with your
                    Research Analyst before acting on the recommendation.
                  </li>
                  <li>
                    Inform SEBI about Research Analyst offering assured or
                    guaranteed returns.
                  </li>
                </ul>

                <h4 className="font-semibold text-amber-400 mb-2">Don'ts</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Do not provide funds for investment to the Research Analyst.
                  </li>
                  <li>
                    Don't fall prey to luring advertisements or market rumours.
                  </li>
                  <li>
                    Do not get attracted to limited-period discounts or other
                    incentives, gifts, etc. offered by the Research Analyst.
                  </li>
                  <li>
                    Do not share login credentials and passwords of your trading
                    and demat accounts with the Research Analyst.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-12 mb-12"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-3xl transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-3xl transition-colors duration-300"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-3xl transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-3xl transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-3xl transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-3xl transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Page;
