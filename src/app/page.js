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

export default function Home() {
  return (
    <div>
      <TradingTicker />
      <Hero />
      <MobileHero />
      <TraderNeeds />
      <WhyChoose />
      <Dominate />
      <FrequentlyAsked />
      <WhatUserSay />
      <OurMediaPresence />
      <TrustedBrokers />
    </div>
  );
}
