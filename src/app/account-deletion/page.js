"use client";
import React, { useState, useEffect } from "react";
import Loader from "./../../components/Loader/Loader";
import { motion } from "framer-motion";

function AccountDeletion() {
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
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className=" bg-gradient-to-br from-black mt-8 to-gray-900 py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full max-w-4xl"
      >
        <motion.div
          variants={item}
          className="bg-white/5 p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white underline decoration-amber-400">
              <span className="text-yellow-400">
                User Account Deletion Steps
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Follow the steps below to delete your account.
            </p>
          </div>

          <div className="space-y-4 text-gray-300 text-base md:text-lg">
            <p>1. Open the application.</p>
            <p>
              2. Go to settings by clicking the profile icon on the homepage.
            </p>
            <p>
              3. Open "Edit Profile", scroll down and click "Remove/Delete
              Account".
            </p>
            <p>
              4. Click "Proceed" & your account will be removed successfully.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-gray-400 italic">
              *Note: All data regarding user details will be permanently deleted
              when the user chooses to delete their account.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AccountDeletion;
