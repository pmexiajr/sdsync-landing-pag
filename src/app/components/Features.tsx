'use client';

import React, { useState } from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  expandedDescription: string;
}

export default function Features() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [show, setShow] = useState<boolean[]>(new Array(6).fill(false));

  const handleToggleAll = () => {
    setShowAll(!showAll);
    setShow(new Array(6).fill(!showAll));
  };

  const features: FeatureCardProps[] = [
    {
      title: "Monitoramento de processos em tempo real",
      description:
        "Com um sistema SCADA Web, é possível monitorar todos os dados de processos em tempo real.",
      image: "/automacao.jpg",
      expandedDescription:
        "O sistema SCADA permite o monitoramento de processos industriais e infraestrutura crítica em tempo real. Isso inclui visualização de dados em gráficos e relatórios.",
    },
    {
      title: "Controle remoto de equipamentos",
      description:
        "Permite o controle remoto de máquinas e dispositivos, aumentando a eficiência e segurança.",
      image: "/automacao.jpg",
      expandedDescription:
        "Com controle remoto, operadores podem gerenciar equipamentos de forma centralizada, minimizando custos operacionais e aumentando a precisão nas operações.",
    },
    {
      title: "Automação e alarmes",
      description:
        "Automatize processos e receba alertas em caso de falhas ou eventos críticos.",
      image: "/automacao.jpg",
      expandedDescription:
        "O sistema SCADA permite configurar alarmes que alertam os operadores em tempo real sobre eventos fora do padrão, otimizando a resposta e manutenção.",
    },
    {
      title: "Análise de dados históricos",
      description:
        "O sistema coleta e armazena dados para análises e geração de relatórios.",
      image: "/automacao.jpg",
      expandedDescription:
        "Com o armazenamento de dados históricos, os usuários podem analisar tendências de performance e planejar manutenção preditiva com base nos dados coletados.",
    },
    {
      title: "Integração com outros sistemas",
      description:
        "O SCADA Web se integra com outros sistemas de TI e automação.",
      image: "/automacao.jpg",
      expandedDescription:
        "A integração com outros sistemas permite a centralização de informações e facilita o controle de diversos processos em um único painel.",
    },
    {
      title: "Segurança e controle de acesso",
      description:
        "Acesso protegido por autenticação, garantindo segurança no manuseio de dados.",
      image: "/automacao.jpg",
      expandedDescription:
        "O sistema SCADA Web oferece segurança com controle de acesso e criptografia, permitindo que apenas usuários autorizados acessem informações sensíveis.",
    },
  ];

  return (
    <div className="pt-2 pb-16 px-6">
      <div className="text-center mb-6">
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="w-full lg:max-w-sm mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={feature.image}
                alt="Imagem do Card"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    const newShow = [...show];
                    newShow[index] = !newShow[index];
                    setShow(newShow);
                  }}
                  className="relative py-2 px-6 rounded-lg border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-orange-100 focus:outline-none transition-colors duration-300"
                >
                  Detalhes
                  <span className="absolute inset-0 bg-orange-500 rounded-lg opacity-20 transition-all duration-300"></span>
                </button>

                {/* <button
                  onClick={() => {
                    const newShow = [...show];
                    newShow[index] = !newShow[index];
                    setShow(newShow);
                  }}
                  className="transition-transform duration-300 transform p-3 bg-transparent border-2 border-gray-600 rounded-full hover:bg-gray-200 hover:border-orange-500 focus:outline-none"
                >
                  <i
                    className={`fas fa-chevron-down text-gray-600 transition-transform duration-300 ${show[index] ? 'rotate-180' : ''}`}
                  ></i>
                </button> */}
                
              </div>
              <div className={`px-6 py-4 transition-all duration-500 ease-in-out overflow-hidden ${show[index] ? 'max-h-screen' : 'max-h-0'}`}>
                {show[index] && (
                  <>
                    <hr className="border-gray-300 my-4" />
                    <p className="text-gray-600">{feature.expandedDescription}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
