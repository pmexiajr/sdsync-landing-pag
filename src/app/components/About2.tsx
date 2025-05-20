import React from 'react';

const Sobre = () => {
  return (
    <div className="flex flex-row items-center justify-start py-24 px-12 max-w-7xl mx-auto">
      {/* Imagens */}
      <div className="relative flex flex-col space-y-4 items-start w-full">
        {/* Imagem grande */}
        <img
          src="/automacao.jpg"
          alt="Imagem de Automação"
          className="w-full h-[40vh] rounded-2xl shadow-md"
        />
        <div className="flex space-x-4 w-full">
          <img
            src="/automacao.jpg"
            alt="Imagem de Automação"
            className="w-[60%] h-auto rounded-2xl shadow-lg"
          />
          <img
            src="/automacao.jpg"
            alt="Imagem de Automação"
            className="w-[38%] h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="max-w-lg text-right flex flex-col w-full ml-[60px]">
        <h1 className="font-poppins font-medium text-[36px] leading-[54px] text-[#101B23]">
          Apresentação dos Dados
        </h1>
        <p className="font-poppins text-[18px] font-normal leading-[27px] text-[#75767C] mt-[4px] mb-[18px]">
          Dashboards customizados ajudam a otimizar o ROI com visão global dos ativos. Alertas em tempo real para performance e desconexões permitem ações rápidas e imediatas, como notificações via WhatsApp.
        </p>
        <p className="font-poppins text-[20px] font-medium leading-[32px] text-[#E01A4F] mt-8 border-b-2 border-[#E01A4F] pb-2 inline-block">
          Acompanhamento em tempo real para máxima eficiência.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
