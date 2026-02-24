'use client'

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#153243] py-12 px-6 shadow-lg overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#DCE5F4]/30 pb-10">
        {/* Navegação */}
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

        {/* Sobre nós */}
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

        {/* Contato */}
        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Contato</h5>
          <address className="not-italic text-[#DCE5F4]/90">
            <p className="mb-2">+11 99574-8431</p>
            <p className="mb-2">comercial@sdsync.com.br</p>
            <p className="mb-2">Av. Humanita 452 - Sala 301</p>
            <p className="mb-2">Zona 04 - Maringá - PR</p>
            <p>CEP 87.140-200</p>
          </address>
        </div>

        {/* Fale conosco via WhatsApp */}
        <div>
          <h5 className="text-lg font-bold text-[#DCE5F4] mb-4">Fale Conosco</h5>
          <p className="text-[#DCE5F4]/90 mb-4">Fale diretamente com nossa equipe pelo WhatsApp.</p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=5511995748431"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#09BC8A] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#07A076] transition-all group"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.68 4.14 1.94 5.82L2 22l4.28-1.94C7.86 21.32 9.88 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.86 0-3.6-.56-5.06-1.52l-.36-.22-2.55 1.16 1.16-2.55-.22-.36C3.56 15.6 3 13.86 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9zm5-6.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-1.85-.92-3.06-1.93-3.85-3.29-.29-.5.29-.46.83-1.53.1-.17.05-.32-.03-.47-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.37.71.28 1.26.45 1.69.58.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.3z"/>
            </svg>
            <span>Enviar mensagem</span>
          </motion.a>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="container mx-auto mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#DCE5F4]/80 text-center md:text-right">
          &copy; {new Date().getFullYear()} SDSync. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}