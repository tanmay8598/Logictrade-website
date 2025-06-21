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
                  OUR VISION
                </h4>
                <p className="mb-4">
                  To protect the interests by enabling them to understand the
                  risks involved and invest in fair, transparent, secure market,
                  and to get services in a timely and efficient manner.
                </p>
                <h4 className="font-semibold text-white my-2">OUR MISSION</h4>
                <p>
                  Every investor should be able to invest in the right
                  investment products based on their needs, manage and monitor
                  them to meet their goals, access reports and enjoy financial
                  wellness.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  B. Details of business transacted by the Research Analyst with
                  respect to the investors
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    To publish research report based on the research activities
                    of the RA
                  </li>
                  <li>
                    To provide an independent unbiased view on securities.
                  </li>
                  <li>
                    To offer unbiased recommendation, disclosing the financial
                    interests in recommended securities.
                  </li>
                  <li>
                    To provide research recommendation, based on analysis of
                    publicly available information and known observations.
                  </li>
                  <li>To conduct audit annually</li>
                  <li>
                    To ensure that all advertisements are in adherence to the
                    provisions of the Advertisement Code for Research Analysts.
                  </li>
                  <li>
                    To maintain records of interactions, with all clients
                    including prospective clients (prior to onboarding), where
                    any conversation related to the research services has taken
                    place.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  C. Details of services provided to investors (No Indicative
                  Timelines)
                </h3>
                <h4 className="font-semibold text-white mb-2">
                  Onboarding of Clients:
                </h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Sharing of terms and conditions of research services</li>
                  <li>Completing KYC of fee-paying clients</li>
                </ul>

                <h4 className="font-semibold text-white mb-2">
                  Disclosure to Clients:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    To disclose, information that is material for the client to
                    make an informed decision, including details of its business
                    activity, disciplinary history, the terms and conditions of
                    research services, details of associates, risks and
                    conflicts of interest, if any
                  </li>
                  <li>
                    To disclose the extent of use of Artificial Intelligence
                    tools in providing research services
                  </li>
                  <li>
                    To disclose, while distributing a third party research
                    report, any material conflict of interest of such
                    third-party research provider or provide web address that
                    directs a recipient to the relevant disclosures
                  </li>
                  <li>
                    To disclose any conflict of interest of the activities of
                    providing research services with other activities of the
                    research analyst.
                  </li>
                  <li>
                    To distribute research reports and recommendations to the
                    clients without discrimination.
                  </li>
                  <li>
                    To maintain confidentiality w.r.t publication of the
                    research report until made available in the public domain.
                  </li>
                  <li>
                    To respect data privacy rights of clients and take measures
                    to protect unauthorized use of their confidential
                    information
                  </li>
                  <li>
                    To disclose the timelines for the services provided by the
                    research analyst to clients and ensure adherence to the said
                    timelines
                  </li>
                  <li>
                    To provide clear guidance and adequate caution notice to
                    clients when providing recommendations for dealing in
                    complex and high-risk financial products/services
                  </li>
                  <li>To treat all clients with honesty and integrity</li>
                  <li>
                    To ensure confidentiality of information shared by clients
                    unless such information is required to be provided in
                    furtherance of discharging legal obligations or a client has
                    provided specific consent to share such information.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  D. Details of grievance redressal mechanism and how to access
                  it
                </h3>
                <p className="mb-4">
                  Investor can lodge complaint/grievance against Research
                  Analyst in the following ways:
                </p>

                <h4 className="font-semibold text-white mb-2">
                  Mode of filing the complaint with research analyst:
                </h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    In case of any grievance / complaint, an investor may
                    approach the concerned Research Analyst who shall strive to
                    redress the grievance immediately, but not later than 21
                    days of the receipt of the grievance.
                  </li>
                  <li>
                    In case of any grievance/complaint, an investor should
                    approach the research analyst "LOGIC TRADE ENTERPRISES:
                    INH000018090" on support mail: logictrade.co.in@gmail.com
                    and ensure the grievance is resolved within 21 days.
                  </li>
                </ul>

                <h4 className="font-semibold text-white mb-2">
                  Mode of filing the complaint on SCORES or with Research
                  Analyst Administration and Supervisory Body (RAASB)
                </h4>
                <p className="mb-4">
                  SCORES 2.0 (a web based centralized grievance redressal system
                  of SEBI for facilitating effective grievance redressal in
                  time-bound manner){" "}
                  <a
                    href="https://scores.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:underline"
                  >
                    https://scores.sebi.gov.in
                  </a>
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    Two level review for complaint/grievance against Research
                    Analyst:
                  </li>
                  <li className="ml-8">
                    First review done by designated body (RAASB)
                  </li>
                  <li className="ml-8">Second review done by SEBI</li>
                  <li>Email to designated email ID of RAASB</li>
                  <li>
                    If the Investor is not satisfied with the resolution
                    provided by the Market Participants, then the Investor has
                    the option to file the complaint/ grievance on SMARTODR
                    platform for its resolution through online conciliation or
                    arbitration.
                  </li>
                </ul>

                <p>
                  With regard to physical complaints, investors may send their
                  complaints to:
                  <br />
                  Office of Investor Assistance and Education,
                  <br />
                  Securities and Exchange Board of India,
                  <br />
                  SEBI Bhavan, Plot No. C4-A, 'G' Block,
                  <br />
                  Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  E. Rights of investors:
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Right to Privacy and Confidentiality</li>
                  <li>Right to Transparent Practices</li>
                  <li>Right to fair and Equitable Treatment</li>
                  <li>Right to Adequate Information</li>
                  <li>
                    Right to Initial and Continuing Disclosure -Right to receive
                    information about all the statutory and regulatory
                    disclosures
                  </li>
                  <li>Right to Fair & True Advertisement</li>
                  <li>
                    Right to Awareness about Service Parameters and Turnaround
                    Times
                  </li>
                  <li>
                    Right to be informed of the timelines for each service
                  </li>
                  <li>
                    Right to be Heard and Satisfactory Grievance Redressal
                  </li>
                  <li>Right to have timely redressal</li>
                  <li>
                    Right to Exit from Financial product or service in
                    accordance with the terms and conditions agreed with the
                    research analyst
                  </li>
                  <li>
                    Right to receive clear guidance and caution notice when
                    dealing in Complex and High-Risk Financial Products and
                    Services
                  </li>
                  <li>
                    Additional Rights to vulnerable consumers – Right to get
                    access to services in a suitable manner even if differently
                    abled
                  </li>
                  <li>
                    Right to provide feedback on the financial products and
                    services used
                  </li>
                  <li>
                    Right against coercive, unfair, and one-sided clauses in
                    financial agreements
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  F. Expectations from the investors (Responsibilities of
                  investors)
                </h3>
                <h4 className="font-semibold text-amber-400 mb-2">Do's</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Always deal with SEBI registered Research Analyst.</li>
                  <li>
                    Ensure that the Research Analyst has a valid registration
                    certificate.
                  </li>
                  <li>
                    Check for SEBI registration number: Please refer to the list
                    of all SEBI registered Research Analyst which is available
                    on SEBI website in the following link:{" "}
                    <a
                      href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognised=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline"
                    >
                      https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognised=yes
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline"
                    >
                      https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
                    </a>
                  </li>
                  <li>
                    Always pay attention towards disclosures made in the
                    research reports before investing.
                  </li>
                  <li>
                    Pay your Research Analyst through banking channels only and
                    maintain duly signed receipts mentioning the details of your
                    payments. You may make payment of fees through Centralized
                    Fee Collection Mechanism (CeFCoM) of RAASB if research
                    analyst has opted for the mechanism. (Applicable for fee
                    paying clients only)
                  </li>
                  <li>
                    Before buying/ selling securities or applying in public
                    offer, check for the research recommendation provided by
                    your Research Analyst.
                  </li>
                  <li>
                    Ask all relevant questions and clear your doubts with your
                    Research Analyst before acting on recommendation.
                  </li>
                  <li>
                    Seek clarifications and guidance on research recommendations
                    from your Research Analyst, especially if it involves
                    complex and high risk financial products and services.
                  </li>
                  <li>
                    Always be aware that you have the right to stop availing the
                    service of a Research Analyst as per the terms of service
                    agreed between you and your Research Analyst.
                  </li>
                  <li>
                    Always be aware that you have the right to provide feedback
                    to your Research Analyst in respect of the services
                    received.
                  </li>
                  <li>
                    Always be aware that you will not be bound by any clause,
                    prescribed by the research analyst, which is contravening
                    any regulatory provisions.
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
                    Don't fall prey to luring advertisements or market rumors.
                  </li>
                  <li>
                    Do not get attracted to limited period discount or other
                    incentive, gifts, etc. offered by Research Analyst.
                  </li>
                  <li>
                    Do not share login credential and password of your trading,
                    demat or bank accounts with the Research Analyst.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-16 mb-16"
        >
          <a
            href="https://www.youtube.com/@Logictradeofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://t.me/logictradeOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/logictradeofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/logictradeofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/Logictradeswing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 text-4xl transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Page;
