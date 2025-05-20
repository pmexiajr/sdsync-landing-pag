"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validação de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      return;
    }

    setIsModalOpen(true);
  };

  const handleSendEmail = () => {
    if (!message.trim()) {
      setErrorMessage("Por favor, insira uma mensagem.");
      return;
    }

    // Parâmetros do template do EmailJS
    const templateParams = {
      to_email: "paulino.mexiajr@mextech.com.br",
      from_email: email,
      from_name: email,
      message: message,
    };

    emailjs
      .send(
        "service_0vo94vf",
        "template_a123q4e",
        templateParams,
        "QA2x3lV2DJbmq8PlX"
      )
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso:", response);
          alert("E-mail enviado com sucesso!");
          setEmail("");
          setMessage("");
          setErrorMessage("");
          setIsModalOpen(false);
        },
        (error) => {
          console.log("Erro ao enviar e-mail:", error);
          setErrorMessage("Erro ao enviar o e-mail. Tente novamente.");
        }
      );
  };

return (
    <footer className="bg-[#153243] py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#DCE5F4] pb-8"> {/* Borda branca */}
        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Navegação</h5>
          <ul className="flex flex-col gap-2">
            <li><a href="#intro" className="text-[#DCE5F4] hover:text-[#DCE5F4]/80">Home</a></li>
            <li><a href="#about" className="text-[#DCE5F4] hover:text-[#DCE5F4]/80">Sobre</a></li>
            <li><a href="#features" className="text-[#DCE5F4] hover:text-[#DCE5F4]/80">Features</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Sobre nós</h5>
          <p className="text-[#DCE5F4]">Estamos sempre prontos para atender às suas necessidades.</p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Fale Conosco</h5>
          <p className="text-[#DCE5F4] mb-4">Inscreva-se para novidades:</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu e-mail"
              className="w-full sm:w-auto px-4 py-2 border border-[#DCE5F4] rounded-lg focus:ring-2 focus:ring-[#FF4000] text-[#153243]"
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-[#FF4000] text-[#DCE5F4] rounded-lg hover:bg-[#FF4000]/90"> {/* Coquelicot */}
              Enviar
            </button>
          </form>
          {errorMessage && <p className="text-[#FF4000] mt-2">{errorMessage}</p>}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#101B23] bg-opacity-80">
          <div className="bg-[#DCE5F4] p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-[#101B23]">Digite sua mensagem</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-[#75767C] rounded-lg text-[#101B23]"
              rows={4}
              placeholder="Digite sua mensagem aqui..."
            ></textarea>
            <div className="flex justify-end mt-4 gap-2">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="px-4 py-2 bg-[#75767C] text-[#DCE5F4] rounded-lg hover:bg-[#5E6066]">
                Cancelar
              </button>
              <button 
                onClick={handleSendEmail} 
                className="px-4 py-2 bg-[#09BC8A] text-[#101B23] rounded-lg hover:bg-[#07A076]">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-[#DCE5F4] text-center sm:text-left">
          &copy; 2025 SDSync. Todos os direitos reservados.
        </p>
      </div>
    </footer>
);
}