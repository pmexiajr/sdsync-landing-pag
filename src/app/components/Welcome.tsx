"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDownCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function WelcomePage() {
  const [showContent, setShowContent] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-cover bg-center flex items-center justify-center text-[#DCE5F4]">
      <section
        className="w-full h-full flex justify-center items-center bg-center relative"
        style={{
          backgroundImage: `url(/Solar.jpg)`,
          backgroundSize: "cover",
          height: "130vh",
        }}
      >
        <div
          className={`absolute inset-0 bg-[#101B23] z-10 transition-opacity duration-1000 ${
            showContent ? "opacity-70" : "opacity-90"
          }`}
        ></div>

        <div className="absolute w-[80%] py-20 flex justify-center items-center z-20">
          <Image
            src="/IconeSD.png"
            width={1000}
            height={1000}
            alt="SDSyncLogo"
            className={`w-full transition-opacity duration-1000 ${
              showContent ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </div>

        <div
          className={`relative z-20 w-full flex justify-between items-center px-4 md:px-20 transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#DCE5F4] to-[#FF4000]">
              Bem-vindo à SDSync!
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
                  Monitoramento de Usinas GD com Alertas Automatizados
                  Plataforma SaaS com alertas diários via WhatsApp, compatível com diversos inversores.<br></br>Detecte falhas, visualize performance e otimize seus resultados — tudo sem a necessidade de infraestrutura local.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={handleScrollToBottom}
                  className="flex items-center gap-2 bg-[#FF4000] text-[#DCE5F4] py-3 px-8 rounded-lg shadow-lg hover:bg-[#FF4000]/90 transition-all group"
                >
                  <span>Fale Conosco</span>
                  <ArrowDownCircleIcon className="w-5 h-5 group-hover:animate-bounce" />
                </button>

                <a
                  href="http://app.sdsync.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 bg-[#09BC8A] text-[#101B23] py-3 px-8 rounded-lg shadow-lg overflow-hidden group transition-all"
                >
                  <div className="absolute inset-0 bg-[#07A076] w-0 group-hover:w-full transition-all duration-300 ease-out origin-left"></div>
                  <span className="relative z-10">Acessar Plataforma</span>
                  <ArrowRightIcon className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2 group-hover:scale-110 duration-300" />
                </a>
              </div>
            </div>

            {errorMessage && (
              <p className="text-[#FF4000] mt-4 animate-pulse">{errorMessage}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}