'use client'

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

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
    <footer className="bg-[#153243] py-12 px-6 shadow-lg overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#DCE5F4]/30 pb-10">
        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Navegação</h5>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#solution" className="text-sm font-semibold leading-6 text-[#DCE5F4] hover:text-[#DCE5F4]/80 transition-colors">
                Solução
              </a>
            </li>
            <li>
              <a href="#Advantages" className="text-sm font-semibold leading-6 text-[#DCE5F4] hover:text-[#DCE5F4]/80 transition-colors">
                Vantagens
              </a>
            </li>
            <li>
              <a href="#PricePlans" className="text-sm font-semibold leading-6 text-[#DCE5F4] hover:text-[#DCE5F4]/80 transition-colors">
                Planos & Serviços
              </a>
            </li>
            <li>
              <a href="#AboutUs" className="text-sm font-semibold leading-6 text-[#DCE5F4] hover:text-[#DCE5F4]/80 transition-colors">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#Footer" className="text-sm font-semibold leading-6 text-[#DCE5F4] hover:text-[#DCE5F4]/80 transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Sobre nós</h5>
          <p className="text-[#DCE5F4]/90 mb-4">Estamos sempre prontos para atender às suas necessidades.</p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/sdsync/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DCE5F4] hover:text-[#0077B5] transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <span className="text-[#DCE5F4]/90">Siga-nos</span>
          </div>
        </div>

        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Contato</h5>
          <address className="not-italic text-[#DCE5F4]/90">
            <p className="mb-2">+44 9948-1127</p>
            <p className="mb-2">comercial@sdsync.com.br</p>
            <p className="mb-2">Av. Humanita 452 - Sala 301</p>
            <p className="mb-2">Zona 04 - Maringá - PR</p>
            <p>CEP 87.140-200</p>
          </address>
        </div>

        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Envie uma mensagem</h5>
          <form onSubmit={handleSubmit} className="flex flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="flex-grow px-4 py-2 border border-[#DCE5F4]/50 rounded-lg focus:ring-2 focus:ring-[#FF4000] text-[#153243]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#FF4000] text-[#DCE5F4] rounded-lg hover:bg-[#FF4000]/90 transition-colors whitespace-nowrap"
            >
              Enviar
            </button>
          </form>
          {errorMessage && <p className="text-[#FF4000] mt-2 text-sm">{errorMessage}</p>}
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#DCE5F4]/80 text-center md:text-right">
          &copy; {new Date().getFullYear()} SDSync. Todos os direitos reservados.
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#101B23]/90 z-50">
          <div className="bg-[#DCE5F4] p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4 text-[#101B23]">Sua mensagem</h2>
            <p className="text-[#101B23]/80 mb-2">Deixe sua mensagem para nossa equipe:</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-[#75767C] rounded-lg text-[#101B23] focus:ring-2 focus:ring-[#FF4000]"
              rows={5}
              placeholder="Escreva aqui sua mensagem..."
              required
            ></textarea>
            <div className="flex justify-end mt-4 gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#75767C] text-[#DCE5F4] rounded-lg hover:bg-[#5E6066] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSendEmail}
                className="px-4 py-2 bg-[#09BC8A] text-[#101B23] rounded-lg hover:bg-[#07A076] transition-colors"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}