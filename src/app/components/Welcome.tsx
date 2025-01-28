import React, { useEffect, useState } from "react";
import Image from "next/image"; // Importando o componente Image do Next.js

export default function WelcomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Atraso de 3 segundos para iniciar a transição
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timeout caso o componente seja desmontado antes
  }, []);

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
        {/* Camada de opacidade */}
        <div
          className={`absolute inset-0 bg-white z-10 transition-opacity duration-1000 ${
            showContent ? "opacity-10" : "opacity-80"
          }`}
        ></div>

        {/* Imagem SDSync no centro */}
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

        {/* Conteúdo sobre a camada */}
        <div
          className={`relative z-20 w-full flex justify-between items-center px-20 transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-md">
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

            <form className="flex gap-4 mb-6">
              <input
                type="email"
                placeholder="Insira seu e-mail"
                className="w-full p-3 rounded-lg text-black"
              />
              <button className="bg-[#F4A261] px-6 py-3 rounded-lg text-white font-bold hover:bg-[#E76F51] transition">
                Enviar
              </button>
            </form>

            {/* Botão APP SDSYNC abaixo do formulário */}
            <div>
              <a href="http://app.sdsync.com.br" className="font-bold">
                <h1 className="text-2xl border-2 text-white border-white rounded-md p-2 text-center hover:bg-white hover:text-[#146082] transition">
                  APP SDSYNC
                </h1>
              </a>
            </div>
          </div>

          {/* Seção Direita permanece vazia */}
          <div></div>
        </div>
      </section>
    </main>
  );
}
