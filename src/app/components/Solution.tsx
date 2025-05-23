import {
  SunIcon,
  ChartBarIcon,
  BellAlertIcon,
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
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
    "title": "Monitoramento em Tempo Real",
    "description": "Dashboards dinâmicos de todos os dispositivos industriais",
    "image": "/solarsas.jpg",
    "expandedDescription": "Visualização completa do status operacional com atualizações a cada 500ms, detecção imediata de anomalias e performance de inversores",
    "tags": [
      { "name": "Dashboards", "colorHex": "#0B6E4F" },  // Verde mais escuro (melhor contraste)
      { "name": "Tempo Real", "colorHex": "#2B6CB0" }    // Azul mais intenso
    ]
  },
  {
    "title": "Análise Ambiental e Previsão",
    "description": "Monitoramento de irradiação e clima integrado",
    "image": "/solarsas.jpg",
    "expandedDescription": "Sistema de análise ambiental com:\n- Medição de irradiação solar e temperatura\n- Previsão meteorológica integrada\n- Correlação em tempo real entre condições climáticas e geração de energia",
    "tags": [
      { "name": "Clima", "colorHex": "#2D7D9A" },       // Azul-esverdeado (associa a clima)
      { "name": "Energia", "colorHex": "#F6AE2D" }      // Amarelo-ouro (energia solar)
    ]
  },
  {
    "title": "Relatórios Diários via WhatsApp",
    "description": "Envio automático de performance diária",
    "image": "/solarsas.jpg",
    "expandedDescription": "Serviço opcional que envia diariamente pelo WhatsApp:\n- Energia total gerada\n- Rendimento financeiro\n- Efficiency Ratio\n- Alertas críticos",
    "tags": [
      { "name": "WhatsApp", "colorHex": "#25D366" },    // Mantido original
      { "name": "Relatórios", "colorHex": "#0B6E4F" },   // Verde escuro (consistência)
      { "name": "Customizável", "colorHex": "#4A6FA5" }  // Azul mais suave
    ]
  },
  {
    "title": "Indicadores de Desempenho",
    "description": "Métricas de potência e eficiência energética",
    "image": "/solarsas.jpg",
    "expandedDescription": "Painel de indicadores críticos:\n- Potência ativa instantânea\n- Rendimento (Yield: esperado vs. real)\n- Fator de capacidade e índice de desempenho\n- Metas de geração (projeção vs. entrega)",
    "tags": [
      { "name": "Potência", "colorHex": "#D84315" },     // Vermelho-terra (destaque)
      { "name": "Eficiência", "colorHex": "#2B6CB0" }    // Azul consistente
    ]
  },
  {
    "title": "Eventos e Alarmes",
    "description": "Detecção de falhas e notificações automáticas",
    "image": "/solarsas.jpg",
    "expandedDescription": "Monitoramento em tempo real com:\n- Detecção de falhas operacionais\n- Alertas via WhatsApp e histórico de alarmes\n- Classificação de anomalias por criticidade",
    "tags": [
      { "name": "Alertas", "colorHex": "#C62828" },      // Vermelho intenso (urgência)
      { "name": "Diagnóstico", "colorHex": "#31708E" }   // Cinza-azulado técnico
    ]
  },
  {
    "title": "Equipamentos Monitorados",
    "description": "Supervisão de dispositivos industriais",
    "image": "/solarsas.jpg",
    "expandedDescription": "Monitoramento integral de:\n- Inversores (status, strings, falhas)\n- Rastreadores solares (ângulo de tracking)\n- Transformadores e medidores de faturamento\n- Relés de proteção e eletrocentros",
    "tags": [
      { "name": "Inversores", "colorHex": "#7E5835" },    // Cinza técnico
      { "name": "Sensores", "colorHex": "#2D7D9A" }      // Azul-claro (consistência)
    ]
  }
]

  return (
    <div className="py-20" style={{ backgroundColor: '#153243' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Seção Revolucione */}
        <div className="text-center mb-20 space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-[#DCE5F4]">
              Explore as soluções do SDSync
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-[#9FB3C8] leading-relaxed">
                O SDSync é uma plataforma SaaS para monitoramento inteligente de usinas solares de Geração Distribuída, com alertas automáticos, integração com diversos equipamentos e foco total em performance e eficiência. 
            </p>
          </div>

          {/* Cards de Destaque */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center p-6 bg-[#DCE5F4] bg-opacity-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <ShieldCheckIcon className="h-12 w-12 mx-auto text-[#09BC8A]" />
              <h3 className="text-2xl font-semibold text-[#DCE5F4] mt-4">Segurança Total</h3>
              <p className="text-[#9FB3C8] mt-2">Monitoramento 24/7 de todos os equipamentos críticos</p>
            </div>
            
            <div className="text-center p-6 bg-[#DCE5F4] bg-opacity-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <ClockIcon className="h-12 w-12 mx-auto text-[#FF4000]" />
              <h3 className="text-2xl font-semibold text-[#DCE5F4] mt-4">Tempo Real</h3>
              <p className="text-[#9FB3C8] mt-2">Dados atualizados a cada 15 segundos</p>
            </div>

            <div className="text-center p-6 bg-[#DCE5F4] bg-opacity-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <CloudIcon className="h-12 w-12 mx-auto text-[#E01A4F]" />
              <h3 className="text-2xl font-semibold text-[#DCE5F4] mt-4">Na Nuvem</h3>
              <p className="text-[#9FB3C8] mt-2">Acesso remoto de qualquer dispositivo</p>
            </div>
          </div>
        </div>

                <div className="mt-12 text-center">
          <p className="text-lg font-medium italic" style={{ color: '#9FB3C8' }}>
            "Relatórios diários automáticos no 
            <span style={{ color: '#09BC8A' }}> WhatsApp</span> - 
            <span className="block mt-1 text-base" style={{ color: '#9FB3C8' }}>
              Simples, rápido e eficiente"
            </span>
          </p>
        </div>

        {/* Componente Features Integrado */}
        <div className="pt-36 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#DCE5F4] mb-4">
              Explore as Funcionalidades do
              <span className="block mt-2 bg-gradient-to-r from-[#FF4000] to-[#E01A4F] text-transparent bg-clip-text">
                SDSync
              </span>
            </h2>
            <p className="text-xl text-[#9FB3C8] max-w-3xl mx-auto">
              Sistema SCADA Web completo para gestão industrial inteligente e monitoramento em tempo real
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative transform transition-all duration-500 hover:-translate-y-1"
              >
                <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col overflow-hidden border-1 border-transparent hover:border-[#FF4000]/10 transition-all duration-300">
                  
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
                        <span className="text-[#4494D5] font-semibold hover:text-[#4494D5] transition-colors flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-[#4494D5] rounded-full transition-all duration-300 group-hover:w-4"></span>
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
    </div>
  );
}