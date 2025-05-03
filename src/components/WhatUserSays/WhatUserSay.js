"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Mehta",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Logic Trade simplified options trading for me. Their real-time signals help me enter trades with confidence. Stress-free trading finally exists!",
    role: "Options Trader, Mumbai",
  },
  {
    name: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "The AI-powered scanner is game-changing! I've doubled my win rate in just 3 months using their momentum indicators.",
    role: "Swing Trader, Delhi",
  },
  {
    name: "Vikram Joshi",
    image:
      "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "As a working professional, Logic Trade's alerts let me trade without screen time. Perfect balance between my job and trading income.",
    role: "Part-time Trader, Bangalore",
  },
  {
    name: "Ananya Patel",
    image:
      "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Finally a platform that explains complex strategies simply. Their educational content helped me transition from stocks to options safely.",
    role: "Beginner Trader, Pune",
  },
  {
    name: "Arjun Reddy",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "The institutional flow data gives me an edge I never had before. Spotting big money moves has transformed my trading results.",
    role: "Futures Trader, Hyderabad",
  },
  {
    name: "Neha Gupta",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "From losing money to consistent profits - Logic Trade's risk management tools made all the difference in my trading journey.",
    role: "Day Trader, Chennai",
  },
];

const half = Math.ceil(testimonials.length / 2);
const firstRow = testimonials.slice(0, half);
const secondRow = testimonials.slice(half);

export default function WhatUserSay() {
  return (
    <section className="w-full py-12 bg-black text-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Subscribers
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
