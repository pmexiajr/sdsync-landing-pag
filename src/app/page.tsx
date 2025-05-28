'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/SDSync - Logo.png";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Presentation from "./components/Presentation";
import Advantages from "./components/Advantages";
import Solution from "./components/Solution";
import PricePlans from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Explain from "./components/explain";


export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-[#DCE5F4]">
      <Header />

      <div
        className={`transition-all duration-700 ease-out ${
          showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <section id="intro">
          <Welcome />
        </section>
      </div>

      <section id="Explain">
        <Explain />
      </section>

      <section id="Presentation">
        <Presentation />
      </section>
      <section id="solution">
        <Solution />
      </section>
          
    <section id="Advantages">
      <Advantages />
    </section>

    <section id="PricePlans">
      <PricePlans />
    </section>


    <section id="AboutUs">
      <AboutUs />
    </section>
      <section id="Footer">
      <Footer />
    </section>
    </main>
  );
}
