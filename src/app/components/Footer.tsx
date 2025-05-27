'use client'

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FiCheckCircle, FiXCircle, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      return;
    }
    setIsModalOpen(true);
    setErrorMessage("");
  };

  const handleSendEmail = async () => {
    if (!message.trim()) {
      setErrorMessage("Por favor, insira uma mensagem.");
      return;
    }

    setIsSending(true);
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_38lfzb8",
        "template_ms3823c",
        {
          to_email: "paulino.mexiajr@mextech.com.br",
          from_email: email,
          from_name: email.split('@')[0] || "Usuário",
          message: message,
          reply_to: email
        },
        "Ik63F9w4Ivfj49xlh"
      );

      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
        setEmail("");
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setErrorMessage("Serviço de e-mail temporariamente indisponível. Por favor, tente novamente mais tarde.");
    } finally {
      setIsSending(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
    if (!isSuccess) setMessage("");
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-[#9FB3C8]" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full pl-10 pr-4 py-3 border border-[#DCE5F4]/50 rounded-lg focus:ring-2 focus:ring-[#FF4000] focus:outline-none bg-[#101B23] text-[#DCE5F4] placeholder-[#9FB3C8]/50"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-[#FF4000] to-[#E01A4F] text-[#DCE5F4] rounded-lg hover:opacity-90 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
            >
              <FiMail /> Enviar
            </motion.button>
          </form>
          {errorMessage && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#FF6B6B] mt-2 text-sm flex items-center gap-1"
            >
              <FiXCircle /> {errorMessage}
            </motion.p>
          )}
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#DCE5F4]/80 text-center md:text-right">
          &copy; {new Date().getFullYear()} SDSync. Todos os direitos reservados.
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#101B23]/90 z-50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#153243] p-6 rounded-lg shadow-xl border border-[#2A3641] w-full max-w-md mx-4"
          >
            {isSuccess ? (
              <div className="text-center py-8">
                <FiCheckCircle className="text-[#09BC8A] text-5xl mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2 text-[#DCE5F4]">Mensagem enviada!</h2>
                <p className="text-[#9FB3C8]">Obrigado pelo seu contato. Retornaremos em breve.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4 text-[#DCE5F4]">Sua mensagem</h2>
                <p className="text-[#9FB3C8] mb-4">Deixe sua mensagem para nossa equipe:</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-[#2A3641] rounded-lg text-[#DCE5F4] bg-[#101B23] focus:ring-2 focus:ring-[#FF4000] focus:outline-none placeholder-[#9FB3C8]/50"
                  rows={5}
                  placeholder="Escreva aqui sua mensagem..."
                  required
                ></textarea>
                
                {errorMessage && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[#FF6B6B] mt-2 text-sm flex items-center gap-1"
                  >
                    <FiXCircle /> {errorMessage}
                  </motion.p>
                )}

                <div className="flex justify-end mt-6 gap-3">
                  <motion.button
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-[#2A3641] text-[#DCE5F4] rounded-lg hover:bg-[#3A4A58] transition-colors font-medium"
                  >
                    Cancelar
                  </motion.button>
                  <motion.button
                    onClick={handleSendEmail}
                    disabled={isSending}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#09BC8A] to-[#07A076] text-[#153243] rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-70 flex items-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </footer>
  );
}