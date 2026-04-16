import { Fraunces, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import EasterEgg from "@/components/EasterEgg";
import Cursor from "@/components/Cursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Yohana — Portfolio",
  description: "Intelligent Computing Engineer. Leadership, initiative, purpose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
          <Cursor />
          <EasterEgg />
          <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}