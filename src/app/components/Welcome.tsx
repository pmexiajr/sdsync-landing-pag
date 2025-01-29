"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function WelcomePage() {
  const [showContent, setShowContent] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Função para rolar a página até o fundo
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-cover bg-center flex items-center justify-center text-white">
      <section
        className="w-full h-full flex justify-center items-center bg-center relative"
        style={{
          backgroundImage: `url(/automacao.jpg)`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "130vh",
        }}
      >
        <div
          className={`absolute inset-0 bg-white z-10 transition-opacity duration-1000 ${
            showContent ? "opacity-10" : "opacity-80"
          }`}
        ></div>

        <div className="absolute w-[80%] py-20 flex justify-center items-center z-20">
          <Image
            src="/SLogo.png"
            width={1000}
            height={1000}
            alt="SDSyncLogo"
            className={`w-full transition-opacity duration-1000 ${
              showContent ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div
          className={`relative z-20 w-full flex justify-between items-center px-20 transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-md space-y-6">
            <h1
              className="text-6xl font-bold mb-4"
              style={{
                color: "rgb(255, 255, 255)",
                textShadow: "4px 4px 12px rgba(0, 0, 0, 0.62)",
              }}
            >
              Bem-vindo à nossa plataforma!
            </h1>
            <p
              className="text-lg mb-6"
              style={{
                color: "rgb(255, 255, 255)",
                textShadow: "2px 2px 2px rgb(0, 20, 51)",
              }}
            >
              Estamos animados para tê-lo conosco. Nossa plataforma foi projetada
              para oferecer a melhor experiência possível. Envie seu e-mail para
              receber atualizações e novidades diretamente na sua caixa de entrada.
            </p>

            <div className="flex justify-start">
              <button
                onClick={handleScrollToBottom}
                className="text-white bg-blue-600 py-3 px-6 rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
              >
                Fale Conosco
              </button>
            </div>

            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

            <div className="text-center mt-8">
              <a
                href="http://app.sdsync.com.br"
                className="text-2xl border-2 text-white flex justify-center border-white rounded-md p-2 text-center hover:bg-white hover:text-[#146082] transition cursor-pointer"
              >
                APP SDSYNC
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
