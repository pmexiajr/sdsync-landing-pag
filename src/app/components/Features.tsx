'use client';

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

export default function Features() {
  const [show, setShow] = useState<boolean[]>(new Array(6).fill(false));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const features: FeatureCardProps[] = [
    {
      title: "Monitoramento em Tempo Real",
      description: "Dashboards dinâmicos de todos os dispositivos industriais",
      image: "/solarsas.jpg",
      expandedDescription: "Visualização completa do status operacional com atualizações a cada 500ms, detecção imediata de anomalias e performance de inversores",
      tags: [
        { name: "Dashboards", colorHex: "#09BC8A" },
        { name: "Tempo Real", colorHex: "#4494D5" }
      ]
    },
    {
      title: "Gestão de Falhas Automática",
      description: "Detecção e diagnóstico de erros instantâneo",
      image: "/solarsas.jpg",
      expandedDescription: "Sistema inteligente que categoriza falhas por criticidade e sugere ações corretivas diretamente na interface",
      tags: [
        { name: "Alertas", colorHex: "#E01A4F" },
        { name: "Diagnóstico", colorHex: "#153243" }
      ]
    },
    {
      title: "Relatórios Diários via WhatsApp",
      description: "Envio automático de performance diária",
      image: "/solarsas.jpg",
      expandedDescription: "Serviço opcional que envia diariamente pelo WhatsApp:\n- Energia total gerada\n- Rendimento financeiro\n- Efficiency Ratio\n- Alertas críticos",
      tags: [
        { name: "WhatsApp", colorHex: "#25D366" },
        { name: "Relatórios", colorHex: "#09BC8A" },
        { name: "Customizável", colorHex: "#4494D5" }
      ]
    },
    {
      title: "Análise de Performance",
      description: "Histórico comparativo e tendências",
      image: "/solarsas.jpg",
      expandedDescription: "Painéis comparativos com dados históricos de até 5 anos, projeções de rendimento e análise de perdas",
      tags: [
        { name: "Histórico", colorHex: "#101B23" },
        { name: "Comparativo", colorHex: "#E01A4F" }
      ]
    },
    {
      title: "Integração Industrial",
      description: "Conectividade com dispositivos de fábrica",
      image: "/solarsas.jpg",
      expandedDescription: "Suporte a protocolos industriais (Modbus, OPC UA) para integração direta com inversores, CLPs e sensores",
      tags: [
        { name: "Modbus", colorHex: "#153243" },
        { name: "OPC UA", colorHex: "#09BC8A" }
      ]
    },
    {
      title: "Segurança de Dados",
      description: "Proteção de informações críticas",
      image: "/solarsas.jpg",
      expandedDescription: "Criptografia end-to-end e controle de acesso hierárquico para diferentes níveis de usuários",
      tags: [
        { name: "Criptografia", colorHex: "#153243" },
        { name: "RBAC", colorHex: "#09BC8A" }
      ]
    },
  ];

  return (
    <div className="pt-12 pb-24 px-6 bg-[#DCE5F4]">
      {/* Título com gradiente laranja */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#101B23] mb-4">
          Explore as Funcionalidades do
          <span className="block mt-2 bg-gradient-to-r from-[#FF4000] to-[#E01A4F] text-transparent bg-clip-text">
            SDSync
          </span>
        </h2>
        <p className="text-xl text-[#75767C] max-w-3xl mx-auto">
          Sistema SCADA Web completo para gestão industrial inteligente e monitoramento em tempo real
        </p>
      </div>

      {/* Correção do zoom */}
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

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative transform transition-all duration-500 hover:-translate-y-1"
            >
              <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col overflow-hidden border-2 border-transparent hover:border-[#FF4000]/10 transition-all duration-300">
                
                {/* Container da imagem corrigido */}
                <div 
                  className="relative h-56 overflow-hidden rounded-t-2xl cursor-zoom-in"
                  onClick={() => handleImageClick(feature.image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153243]/20 to-transparent transition-opacity duration-300 group-hover:from-[#153243]/40" />
                  <Image
                    src={feature.image}
                    alt="Imagem do Card"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 text-white space-y-1">
                    <h3 className="text-xl font-bold transition-opacity duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-500">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                      Click para zoom
                    </span>
                  </div>
                </div>


                {/* Conteúdo inferior mantido conforme original */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <button
                      onClick={() => {
                        const newShow = [...show];
                        newShow[index] = !newShow[index];
                        setShow(newShow);
                      }}
                      className="w-full flex items-center justify-between group"
                    >
                      <span className="text-[#09BC8A] font-semibold hover:text-[#0D9272] transition-colors flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-[#09BC8A] rounded-full transition-all duration-300 group-hover:w-4"></span>
                        {show[index] ? 'Recolher detalhes' : 'Expandir recursos'}
                      </span>
                      <div className={`transform transition-transform duration-300 ${show[index] ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-[#4494D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${show[index] ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className="pt-4 border-t border-[#DCE5F4]">
                      <p className="text-[#101B23] leading-relaxed whitespace-pre-line">
                        {feature.expandedDescription}
                      </p>
                      {/* Tags mantidas na posição original */}
                      {feature.tags && feature.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {feature.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full text-sm transform transition-transform hover:scale-105"
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
  );
}