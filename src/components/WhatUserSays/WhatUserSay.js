"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Sameer Raza",
    image: "/round.png",
    text: "Option buying really made easy with TradeFinder. TradeFinder hai isliye trading me stress nahi hai. Abb focus kaha karna hai pata hai.",
  },
  {
    name: "Nehal",
    image: "/round.png",
    text: "TradeFinder is a magical tool! I mean option clock is the best segment for an option trader, thanks for making such advanced tools for traders.",
  },
  {
    name: "Vikram Dhule",
    image: "/round.png",
    text: "By far the best tool to pick right trades in live market. Now I can do job and trading side by side. Thanks TradeFinder team!",
  },
  {
    name: "Ankit V",
    image: "/round.png",
    text: "Now no confusion, only proper momentum trades in Nifty and Banknifty. Superb tool. Thanks!",
  },
  {
    name: "Pooja T",
    image: "/round.png",
    text: "I am a swing trader. Swing spectrum in TradeFinder really helped me to pick the correct trades.",
  },
  {
    name: "Bhushan",
    image: "/round.png",
    text: "I am a scalper and used to fear trading in options due to my bad experience, but now I am confident.",
  },
];

const half = Math.ceil(testimonials.length / 2);
const firstRow = testimonials.slice(0, half);
const secondRow = testimonials.slice(half);

export default function WhatUserSay() {
  return (
    <section className="w-full py-12 bg-black text-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Users Say
      </h2>

      <div className="relative w-full overflow-hidden space-y-8 px-4">
        <div className="flex space-x-6 animate-scroll">
          {firstRow.concat(firstRow).map((testimonial, index) => (
            <div
              key={`row1-${index}`}
              className="min-w-[320px] w-[320px] h-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-amber-400 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-amber-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-amber-400">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base break-words whitespace-normal flex-grow">
                {testimonial.text}
              </p>

              <div className="mt-4 text-amber-400 text-right text-xs">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex space-x-6 animate-scroll"
          style={{ animationDelay: "5s" }}
        >
          {secondRow.concat(secondRow).map((testimonial, index) => (
            <div
              key={`row2-${index}`}
              className="min-w-[320px] w-[320px] h-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-amber-400 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-amber-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-amber-400">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base break-words whitespace-normal flex-grow">
                {testimonial.text}
              </p>
              <div className="mt-4 text-amber-400 text-right text-xs">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
