import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black py-10 px-6">
      {/* Conteúdo Principal */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* Navegação */}
        <div>
          <h5 className="text-lg font-bold text-white mb-4">Navegação</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Preço
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Sobre
              </a>
            </li>
          </ul>
        </div>

        {/* Sobre nós */}
        <div>
          <h5 className="text-lg font-bold text-white mb-4">Sobre nós</h5>
          <p className="text-gray-400">
            Estamos sempre prontos para atender às suas necessidades. Entre em
            contato conosco para saber mais sobre nossos serviços.
          </p>
        </div>

        {/* Seção de Email */}
        <div className="flex flex-col items-start md:items-end">
          <h5 className="text-lg font-bold text-white mb-4">Fale Conosco</h5>
          <p className="text-gray-400 mb-4">Inscreva-se para novidades:</p>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="container mx-auto mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-center sm:text-left">
          &copy; 2025 SDSync. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
