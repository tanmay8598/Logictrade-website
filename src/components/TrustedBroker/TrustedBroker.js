"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brokers = [
  { name: "Dhan", src: "/logoBroker.png" },
  { name: "Angel One", src: "/angel_one.png" },
  { name: "TradeSmart", src: "/logoBroker.png" },
  { name: "Fyers", src: "/angel_one.png" },
];

export default function TrustedBrokers() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly bg-black text-white p-10 md:p-20">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-2xl md:text-5xl font-bold leading-tight">
          We work with India’s most trusted brokers
        </h2>
      </div>

      <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] flex items-center justify-center">
        <motion.div
          className="absolute w-full h-full rounded-full "
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {brokers.map((broker, index) => {
            const angle = (index / brokers.length) * (2 * Math.PI);
            const x = Math.cos(angle) * 100;
            const y = Math.sin(angle) * 100;

            return (
              <motion.div
                key={broker.name}
                className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
                style={{
                  top: `calc(50% + ${y}px - 1rem)`,
                  left: `calc(50% + ${x}px - 1rem)`,
                }}
              >
                <Image
                  src={broker.src}
                  alt={broker.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
