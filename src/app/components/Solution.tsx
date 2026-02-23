import { ShieldCheckIcon, CloudIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import Image from "next/image";

interface FeatureTag {
  name: string;
  colorHex: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  expandedDescription: string;
  tags?: FeatureTag[];
}

export default function Solution() {
  const [show, setShow] = useState<boolean[]>(new Array(6).fill(false));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const features: FeatureCardProps[] = [
    {
      title: "Inteligência Operacional para Inversores",
      description: "Visibilidade total da geração e performance elétrica",
      image: "/NivelInvesor.jpg",
      expandedDescription: "Dashboard analítico com:\n- Monitoramento instantâneo de potência ativa (kW)\n- Controle de tensão e corrente por fase\n- Análise detalhada de strings fotovoltaicas\n- Histórico de geração e receita energética\n- Alertas e status operacional em tempo real",
      tags: [
        { name: "Performance", colorHex: "#22C55E" },
        { name: "Energia Solar", colorHex: "#F6AE2D" }
      ]
    },
    {
      title: "Central de Operações Energéticas",
      description: "Controle total do portfólio de usinas em tempo real",
      image: "/NivelUsinas.jpg",
      expandedDescription: "Dashboard executivo com:\n- Monitoramento consolidado de todas as usinas\n- Indicadores globais de status e conectividade\n- Gestão centralizada de alarmes\n- Visualização geográfica das plantas\n- Comparativo de geração e rendimento total\n- Suporte à tomada de decisão estratégica",
      tags: [
        { name: "Analise", colorHex: "#0EA5E9" },
        { name: "Supervisão", colorHex: "#F97316" }
      ]
    },
    {
      title: "Monitoramento Meteorológico Integrado",
      description: "Análise das condições climáticas da usina",
      image: "/NivelUsinasWeather.jpg",
      expandedDescription: "Painel climático integrado com:\n- Temperatura ambiente e sensação térmica\n- Umidade relativa do ar\n- Velocidade e direção do vento\n- Cobertura de nuvens e visibilidade\n- Pressão atmosférica\n- Localização geográfica integrada ao mapa\n- Correlação entre condições climáticas e geração de energia",
      tags: [
        { name: "Clima", colorHex: "#0EA5E9" },
        { name: "Análise Ambiental", colorHex: "#22C55E" }
      ]
    },
    {
      title: "Histórico de Geração e Performance",
      description: "Dados armazenados com visualização personalizável por período",
      image: "/Dashboard.png",
      expandedDescription: "Painel analítico com:\n- Históricos completos dos dispositvos\n- Comparação consolidada entre equipamentos\n- Visualização acumulada e individual por usina\n- Seleção personalizada de período (dia, mês, trimestre, ano)\n- Análise detalhada por data com valores totais e segmentados\n- Base sólida para estudos de desempenho e tomada de decisão",
      tags: [
        { name: "Histórico", colorHex: "#6366F1" },
        { name: "Dados Estratégicos", colorHex: "#F59E0B" }
      ]
    }
  ];

  return (
    <div className="py-20 bg-[#153243]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20 space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-[#DCE5F4]">Explore as soluções do <span className="block mt-2 bg-gradient-to-r from-[#FF4000] to-[#E01A4F] text-transparent bg-clip-text">
                SDSync
              </span></h1>
            <p className="mx-auto max-w-3xl text-xl text-[#9FB3C8] leading-relaxed">
              A SDSync é uma plataforma SaaS de monitoramento inteligente para usinas solares de Geração Distribuída, oferecendo visibilidade contínua e controle estratégico da operação. 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center p-6 bg-[#DCE5F4]/10 rounded-2xl shadow-lg transition-all">
              <ShieldCheckIcon className="h-12 w-12 mx-auto text-[#4494D5]" />
              <h3 className="text-2xl font-semibold text-[#DCE5F4] mt-4">Segurança Total</h3>
              <p className="text-[#9FB3C8] mt-2">Monitoramento 24/7 com alertas automáticos de falhas operacionais</p>
            </div>
            
            <div className="text-center p-6 bg-[#DCE5F4]/10 rounded-2xl shadow-lg transition-all">
              <FaWhatsapp className="h-12 w-12 mx-auto text-[#25D366]" />
              <h3 className="text-2xl font-semibold text-[#DCE5F4] mt-4">WhatsApp</h3>
              <p className="text-[#9FB3C8] mt-2">Receba atualizações e alertas automáticos de geração e desempenho diretamente no seu celular</p>
            </div>

            <div className="text-center p-6 bg-[#DCE5F4]/10 rounded-2xl shadow-lg transition-all">
              <CloudIcon className="h-12 w-12 mx-auto text-[#E01A4F]" />
              <h3 className="text-2xl font-semibold text-[#DCE5F4] mt-4">Na Nuvem</h3>
              <p className="text-[#9FB3C8] mt-2">Acesso remoto seguro à plataforma de qualquer dispositivo</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium italic text-[#9FB3C8]">
            &quot;Relatórios diários automáticos — 
            <span className="block mt-1 text-base">simples, rápidos e eficientes&quot;</span>
          </p>
        </div>

        <div className="pt-36 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#DCE5F4] mb-4">
              Funcionalidades do
              <span className="block mt-2 bg-gradient-to-r from-[#FF4000] to-[#E01A4F] text-transparent bg-clip-text">
                SDSync
              </span>
            </h2>
                        <p className="mx-auto max-w-3xl text-xl text-[#9FB3C8] leading-relaxed">
               Tecnologia inteligente que vai além do monitoramento, entregando tudo o que sua usina solar precisa para atingir seu máximo potencial. 
            </p>
          </div>

          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full h-[80vh] animate-zoomIn">
                <Image
                  src={selectedImage}
                  alt="Zoom da imagem"
                  fill
                  className="object-contain rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group relative transform transition-all duration-500 hover:-translate-y-1">
                  <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col overflow-hidden border-1 border-transparent hover:border-[#FF4000]/10 transition-all">
                    <div 
                      className="relative h-56 overflow-hidden rounded-t-2xl cursor-zoom-in"
                      onClick={() => handleImageClick(feature.image)}
                    >
                      <Image
                        src={feature.image}
                        alt="Imagem do Card"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                      
                      <div className="absolute bottom-4 left-4 text-white space-y-1">
                        <h3 className="text-xl font-bold [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]">
                          {feature.title}
                        </h3>
                        <p className="text-m opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-500 [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <button
                        onClick={() => {
                          const newShow = [...show];
                          newShow[index] = !newShow[index];
                          setShow(newShow);
                        }}
                        className="w-full flex items-center justify-between group"
                      >
                        <span className="text-[#4494D5] font-semibold flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-[#4494D5] rounded-full transition-all group-hover:w-4"></span>
                          {show[index] ? 'Recolher detalhes' : 'Saiba mais'}
                        </span>
                        <div className={`transition-transform ${show[index] ? 'rotate-180' : ''}`}>
                          <svg className="w-6 h-6 text-[#4494D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all ${show[index] ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                        <div className="pt-4 border-t border-[#DCE5F4]">
                          <p className="text-[#101B23] leading-relaxed whitespace-pre-line">
                            {feature.expandedDescription}
                          </p>
                          {feature.tags && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {feature.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 rounded-full text-sm"
                                  style={{
                                    backgroundColor: `${tag.colorHex}1a`,
                                    color: tag.colorHex
                                  }}
                                >
                                  {tag.name}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}