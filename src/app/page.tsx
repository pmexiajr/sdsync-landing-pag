'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/SDSync - Logo.png";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Welcome from "./components/Welcome";
import About from "./components/About";
import About2 from "./components/About2";
import Solution from "./components/Solution";
import PricePlans from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";

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

      <section id="intro" className="py-16 bg-[#DCE5F4]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold leading-[52px] text-[#101B23] mb-8">
            <a
              href="http://app.sdsync.com.br"
              className="text-[#E01A4F] hover:text-[#FF4000] transition-colors duration-300"
            >
              SmartDataSync – SDSync 
            </a>
            <span className="block mt-4">é uma plataforma de monitoramento de desempenho para parques solares</span>
          </h1>
          
          <h2 className="mt-6 text-xl text-[#75767C] font-medium leading-6 max-w-4xl mx-auto tracking-wide">
            Monitoramento em tempo real dos principais ativos das usinas solares com análise preditiva, 
            detecção de falhas e otimização contínua do ROI através de inteligência de dados avançada.
          </h2>

          <div className="mt-8 border-b-2 border-[#09BC8A] w-24 mx-auto"></div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>
      <section id="solution">
        <Solution />
      </section>
          
    <section id="about2">
      <About2 />
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
