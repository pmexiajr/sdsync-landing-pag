import React from "react";

export default function WelcomePage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(/paineis.jpg)`,
        height: "130vh",
        backgroundPosition: "center center",
      }}
    >
      <section className="w-full flex justify-between items-center px-20">
        <div className="max-w-md">
          <h1
            className="text-6xl font-bold mb-4"
            style={{
              color: "rgb(255, 255, 255)",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.62)",
            }}
          >
            Bem-vindo à nossa plataforma!
          </h1>
          <p
            className="text-lg mb-6"
            style={{
              color: "rgb(255, 255, 255)",
              textShadow: "2px 2px 6px rgb(0, 20, 51)",
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
      </section>
    </main>
  );
}
