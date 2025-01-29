'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/SDSync - Logo.png";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Welcome from "./components/Welcome";
import About from "./components/About";
import About2 from "./components/About2";
import PricePlans from "./components/Pricing";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-gray-100">
      <div
        className={`transition-all duration-700 ease-out ${
          showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Welcome />
      </div>

      <section id="intro" className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-semibold leading-[46px]">
          <a
            href="http://app.sdsync.com.br"
            className="text-blue-600 hover:underline"
          >
            SmartDataSync – SDSync 
          </a>{" "}
          é uma plataforma de monitoramento de desempenho para parques solares, com foco em maximizar o retorno do investimento.
        </h1>
        <h2 className="mt-12 text-lg text-[#899AAB] font-normal leading-relaxed max-w-6xl mx-auto">
          O SDSync monitora em tempo real os principais ativos das usinas solares e fornece dados para otimizar o desempenho, detectando falhas e desvios nos parâmetros esperados.
        </h2>
      </div>
    </section>

      <About />
      
      <About2 />
      <section className="features-section py-6 text-center bg-white-100">
        <h2 className="text-4xl font-bold text-black mb-4">Explore as Funcionalidades do SDSync</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Descubra como o nosso sistema SCADA Web pode transformar seus processos industriais e oferecer uma gestão eficiente, segura e em tempo real.
        </p>
        <hr className="border-gray-300 my-2" />
      </section>

      <Features />

      {/* <PricePlans /> */}

      <Footer />
    </main>
  );
}
