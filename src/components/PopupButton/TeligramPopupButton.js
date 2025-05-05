"use client";
import React, { useState, useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const TelegramPopupButton = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 15000);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-float">
      <a
        href="https://t.me/logictrade"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-black to-gray-900 text-amber-400 px-4 py-2 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-gray-900 hover:to-black transition duration-300 border border-amber-400/30"
      >
        <FaTelegramPlane className="text-lg text-amber-400" />
        <span className="font-medium">Join our Telegram</span>
      </a>
    </div>
  );
};

export default TelegramPopupButton;
