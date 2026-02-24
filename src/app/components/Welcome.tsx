"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
              <h2>
                <span className="text-2xl md:text-2xl font-bold text-[#DCE5F4]">
                  Monitoramento inteligente para usinas solares GD 
                </span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
                Acompanhe a geração em tempo real, receba alertas automáticos no WhatsApp e identifique perdas de desempenho antes que virem prejuízo. 
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                {/* Botão Fale Conosco - agora verde com texto branco */}
                <a
                  href="https://api.whatsapp.com/send?phone=5511995748431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#09BC8A] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#07A076] transition-all group"
                >
                  <span>Fale Conosco</span>
                  <svg 
                    className="w-5 h-5 group-hover:animate-bounce" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.68 4.14 1.94 5.82L2 22l4.28-1.94C7.86 21.32 9.88 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.86 0-3.6-.56-5.06-1.52l-.36-.22-2.55 1.16 1.16-2.55-.22-.36C3.56 15.6 3 13.86 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9zm5-6.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-1.85-.92-3.06-1.93-3.85-3.29-.29-.5.29-.46.83-1.53.1-.17.05-.32-.03-.47-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.37.71.28 1.26.45 1.69.58.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.3z"/>
                  </svg>
                </a>

                {/* Botão Acessar Plataforma - agora laranja com texto branco */}
                <a
                  href="http://app.sdsync.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#FF4000] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#E03A00] transition-all group"
                >
                  <span>Acessar Plataforma</span>
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:scale-110 duration-300" />
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