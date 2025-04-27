"use client";
import React, { useState, useEffect } from "react";
import TraderNeeds from "./../components/TraderNeeds/TraderNeeds";
import TradingTicker from "./../components/Ticker/TradingTicker";
import WhyChoose from "./../components/WhyChoose/WhyChoose";
import Hero from "./../components/Hero/Hero";
import FrequentlyAsked from "@/components/FrequentlyAsked/FrequentlyAsked";
import WhatUserSay from "@/components/WhatUserSays/WhatUserSay";
import OurMediaPresence from "@/components/OurMediaPresence/OurMediaPresence";
import TrustedBrokers from "@/components/TrustedBroker/TrustedBroker";
import Dominate from "@/components/Dominate/Dominate";
import MobileHero from "./../components/Hero/MobileHero";
import Loader from "./../components/Loader/Loader";

export default function Home() {
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
  return (
    <div>
      {/* <TradingTicker /> */}
      <Hero />
      <MobileHero />
      <TraderNeeds />
      <WhyChoose />
      {/* <Dominate /> */}
      <FrequentlyAsked />
      <WhatUserSay />
      {/* <OurMediaPresence /> */}
      {/* <TrustedBrokers /> */}
    </div>
  );
}
