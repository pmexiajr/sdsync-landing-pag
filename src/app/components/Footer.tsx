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

    // Abre o modal para perguntar a mensagem
    setIsModalOpen(true);
  };

  const handleSendEmail = () => {
    if (!message.trim()) {
      setErrorMessage("Por favor, insira uma mensagem.");
      return;
    }

    // Parâmetros do template do EmailJS
    const templateParams = {
      to_email: "krosharesheniye@gmail.com",
      from_email: email,
      from_name: email, // Garante que o campo from_name seja o próprio e-mail
      message: message,
    };

    emailjs
      .send(
        "service_38lfzb8",
        "template_ms3823c",
        templateParams,
        "Ik63F9w4Ivfj49xlh"
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
    <footer className="bg-black py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        <div>
          <h5 className="text-lg font-bold text-white mb-4">Navegação</h5>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sobre</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Preço</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-bold text-white mb-4">Sobre nós</h5>
          <p className="text-gray-400">Estamos sempre prontos para atender às suas necessidades.</p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <h5 className="text-lg font-bold text-white mb-4">Fale Conosco</h5>
          <p className="text-gray-400 mb-4">Inscreva-se para novidades:</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu e-mail"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Enviar
            </button>
          </form>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>

      {/* Modal para inserir mensagem */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Digite sua mensagem (Informações de contato e afins)</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows={4}
              placeholder="Digite sua mensagem aqui..."
            ></textarea>
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500">
                Cancelar
              </button>
              <button onClick={handleSendEmail} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-center sm:text-left">
          &copy; 2025 SDSync. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
