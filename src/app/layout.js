import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ClientOnly from "./../components/ClientsOnly/ClientsOnly";
import TelegramPopupButton from "./../components/PopupButton/TeligramPopupButton";
import LoaderWrapper from "@/components/LoaderWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

//  SEO metadata
export const metadata = {
  title: "Logic Trade - Smart Trading Solutions",
  description:
    "Logic Trade offers intelligent trading tools, market insights, and AI-powered strategies to enhance your financial decisions.",
  keywords: [
    "Logic Trade",
    "Trading",
    "AI Trading",
    "Financial Tools",
    "Market Insights",
  ],
  authors: [{ name: "Logic Trade Team", url: "https://logictrade.co.in" }],
  creator: "Logic Trade",
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`bg-black ${poppins.variable}`}>
        <ClientOnly>
          <>
            {children}
            <TelegramPopupButton />
          </>
        </ClientOnly>
      </body>
    </html>
  );
}
