"use client";
import React, { useEffect, useState } from "react";

const TradingTicker = () => {
  const [tickerData, setTickerData] = useState([
    { symbol: "NIFTY", price: "22,530.35", change: "+1.25%", isUp: true },
    { symbol: "SENSEX", price: "74,005.94", change: "+0.89%", isUp: true },
    { symbol: "NASDAQ", price: "16,340.87", change: "-0.32%", isUp: false },
    { symbol: "DOW", price: "38,798.99", change: "+0.12%", isUp: true },
    { symbol: "S&P 500", price: "5,227.75", change: "-0.11%", isUp: false },
    { symbol: "GOLD", price: "2,345.60", change: "+0.45%", isUp: true },
    { symbol: "SILVER", price: "27.89", change: "+0.78%", isUp: true },
    { symbol: "OIL", price: "78.45", change: "-1.23%", isUp: false },
    { symbol: "BTC", price: "67,890.12", change: "+3.45%", isUp: true },
    { symbol: "ETH", price: "3,450.67", change: "+2.89%", isUp: true },
  ]);

  const tickerRef = React.useRef(null);

  useEffect(() => {
    if (tickerRef.current) {
      const ticker = tickerRef.current;
      ticker.innerHTML = "";

      const tickerContent = tickerData
        .map(
          (item, index) =>
            `<div key=${index} class="inline-flex items-center mx-6">
              <span class="text-white font-medium">${item.symbol}</span>
              <span class="text-white mx-2">|</span>
              <span class="text-white font-semibold">${item.price}</span>
              <span class="ml-2 ${
                item.isUp ? "text-green-400" : "text-red-400"
              }">
                ${item.change}
              </span>
            </div>`
        )
        .join("");

      ticker.innerHTML = tickerContent + tickerContent;
      ticker.style.animation = `scroll ${
        tickerData.length * 3
      }s linear infinite`;
    }
  }, [tickerData]);

  return (
    <div className="hidden md:block w-full bg-black border border-amber-50 py-3 overflow-hidden mt-24">
      <div
        className="flex whitespace-nowrap"
        ref={tickerRef}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      ></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default TradingTicker;
