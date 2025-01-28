import { FaCheckCircle, FaArrowAltCircleRight, FaStar, FaTimes } from 'react-icons/fa';

export default function PricePlans() {
  return (
    <section className="py-16 bg-[rgba(143, 143, 143,0.8)]">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-black mb-32">Encontre o Plano Ideal para Você e Comece Agora</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Card Básico */}
          <div className="bg-gradient-to-b from-[#a0d0d9] to-[#146082] text-white p-8 rounded-t-xl shadow-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-[#146082] -mt-16 flex justify-center items-center">
              <FaCheckCircle className="text-[#146082] text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Plano Básico</h3>
            <div className="text-3xl font-semibold text-[#f4fffc] mb-4">R$ 20,00</div>
            <hr className="border-gray-300 mb-4" style={{ width: '80%', marginLeft: '10%' }} />
            <ol className="text-left text-sm text-white mb-6">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#146082] mr-2" />
                Monitoramento avançado de processos
              </li>
              <li className="flex items-center mb-2">
                <FaTimes className="text-gray-400 mr-2" />
                Acesso completo a relatórios e dados históricos
              </li>
              <li className="flex items-center mb-2">
                <FaTimes className="text-gray-400 mr-2" />
                Suporte 24/7 com atendimento prioritário
              </li>
              <li className="flex items-center mb-2">
                <FaTimes className="text-gray-400 mr-2" />
                Automação avançada de processos
              </li>
              <li className="flex items-center mb-2">
                <FaTimes className="text-gray-400 mr-2" />
                Integração com sistemas externos
              </li>
            </ol>
            <button className="bg-[#146082] hover:bg-[#0e4f61] text-white py-2 px-6 rounded-lg">Assinar</button>
          </div>

          {/* Card Avançado */}
          <div className="bg-gradient-to-b from-[#146082] to-[#0e4f61] text-white p-8 rounded-t-xl shadow-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-[#146082] -mt-16 flex justify-center items-center">
              <FaArrowAltCircleRight className="text-[#146082] text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Plano Avançado</h3>
            <div className="text-3xl font-semibold text-[#f4fffc] mb-4">R$ 50,00</div>
            <hr className="border-gray-300 mb-4" style={{ width: '80%', marginLeft: '10%' }} />
            <ol className="text-left text-sm text-white mb-6">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#146082] mr-2" />
                Monitoramento avançado de processos
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#146082] mr-2" />
                Acesso completo a relatórios e dados históricos
              </li>
              <li className="flex items-center mb-2">
                <FaTimes className="text-gray-400 mr-2" />
                Suporte 24/7 com atendimento prioritário
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#146082] mr-2" />
                Automação avançada de processos
              </li>
              <li className="flex items-center mb-2">
                <FaTimes className="text-gray-400 mr-2" />
                Integração com sistemas externos
              </li>
            </ol>
            <button className="bg-[#146082] hover:bg-[#0e4f61] text-white py-2 px-6 rounded-lg">Assinar</button>
          </div>

          {/* Card Premium */}
          <div className="bg-gradient-to-b from-[#bd7a42] to-[#9c5a30] text-white p-8 rounded-t-xl shadow-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-[#bd7a42] -mt-16 flex justify-center items-center">
              <FaStar className="text-[#bd7a42] text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Plano Premium</h3>
            <div className="text-3xl font-semibold text-[#f4fffc] mb-4">R$ 100,00</div>
            <hr className="border-gray-300 mb-4" style={{ width: '80%', marginLeft: '10%' }} />
            <ol className="text-left text-sm text-white mb-6">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#bd7a42] mr-2" />
                Monitoramento avançado de processos
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#bd7a42] mr-2" />
                Acesso completo a relatórios e dados históricos
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#bd7a42] mr-2" />
                Suporte 24/7 com atendimento prioritário
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#bd7a42] mr-2" />
                Automação avançada de processos
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#bd7a42] mr-2" />
                Integração com sistemas externos
              </li>
            </ol>
            <button className="bg-[#bd7a42] hover:bg-[#9c5a30] text-white py-2 px-6 rounded-lg">Assinar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
