import React, { useState } from 'react';
import Image from 'next/image';
import {
  BoltIcon,
  CloudIcon,
  UserGroupIcon,
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Advantages = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-6" style={{ backgroundColor: '#153243' }}>
      {/* Modal de Imagem Ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full h-[80vh]">
            <button className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50">
              <XMarkIcon className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Visualização ampliada"
              fill
              className="object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center justify-start py-12 px-6 lg:py-2 lg:px-12 max-w-7xl mx-auto gap-8">
        
        <div className="w-full lg:w-[55%] space-y-4">
          <div 
            className="group relative h-64 lg:h-[50vh] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-zoom-in"
            onClick={() => handleImageClick("/Solar.jpg")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute bottom-6 left-6 text-white z-20">
              <h3 className="text-2xl lg:text-3xl font-bold">Monitoramento Inteligente</h3>
              <p className="text-base lg:text-lg opacity-90 mt-2">Dados precisos e atualizações em tempo real</p>
            </div>
            <Image
              src="/Solar.jpg"
              alt="Usina solar monitorada"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div 
              className="group relative h-48 lg:h-[30vh] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-zoom-in"
              onClick={() => handleImageClick("/insights.png")}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="text-lg font-semibold">Componentes Modernos</h3>
                <p className="text-xs lg:text-sm opacity-90 mt-1">Visualização completa de todos os indicadores-chave</p>
              </div>
              <Image
                src="/insights.png"
                alt="Dashboard de monitoramento"
                fill
                className="object-cover"
              />
            </div>

            <div 
              className="group relative h-48 lg:h-[30vh] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-zoom-in"
              onClick={() => handleImageClick("/inversores.jpg")}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="text-lg font-semibold">Monitoramento de Inversores</h3>
                <p className="text-xs lg:text-sm opacity-90 mt-1">Compatível com principais marcas do mercado</p>
              </div>
              <Image
                src="/inversores.jpg"
                alt="Inversores solares"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] lg:ml-12 text-center lg:text-left">
          <h1 className="font-bold text-4xl lg:text-5xl text-[#DCE5F4] mb-8">
            Transforme sua Gestão de Energia Solar
          </h1>
          
          <div className="text-[#9FB3C8] space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <BoltIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Detecção de Falhas em Tempo Real</h3>
                  <p className="mt-1">Alertas instantâneos para correções imediatas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CloudIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Zero Infraestrutura</h3>
                  <p className="mt-1">Plataforma 100% SaaS - Sem instalação local</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <UserGroupIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Feito por Especialistas</h3>
                  <p className="mt-1">Desenvolvido por profissionais do setor solar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CpuChipIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Compatibilidade Total</h3>
                  <p className="mt-1">Integração com principais marcas de inversores</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ChartBarIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Performance Completa</h3>
                  <p className="mt-1">Dashboards com todos os indicadores-chave</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ChatBubbleBottomCenterTextIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Comunicação Direta</h3>
                  <p className="mt-1">Alertas e relatórios automáticos via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#DCE5F4] bg-opacity-10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#DCE5F4] mb-4">
                Quer ver sua usina operando com máxima eficiência?
              </h3>
              <p className="text-lg text-[#9FB3C8] mb-6">
                Fale com nosso time e descubra como ativar o monitoramento SDSync
              </p>
              <button className="bg-[#FF4000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E01A4F] transition-colors">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;