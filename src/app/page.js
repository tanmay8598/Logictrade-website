import TraderNeeds from "./../components/TraderNeeds/TraderNeeds";
import TradingTicker from "./../components/Ticker/TradingTicker";
import WhyChoose from "./../components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <div>
      <TradingTicker />
      <TraderNeeds />
      <WhyChoose />
    </div>
  );
}
