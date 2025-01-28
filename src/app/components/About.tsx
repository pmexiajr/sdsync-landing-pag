import React from 'react';

const Sobre = () => {
  return (
    <div className="flex flex-row items-center justify-start py-24 px-12 max-w-7xl mx-auto">
      {/* Texto */}
      <div className="max-w-lg text-left flex flex-col w-full">
        <h1 className="font-poppins font-medium text-[36px] leading-[54px] text-gray-900">
          O que é o SdSync?
        </h1>
        <p className="font-poppins text-[18px] font-normal leading-[27px] text-[#75767C] mt-[4px] mb-[18px]">
          O SmartDataSync – SDSync é um sistema inovador para maximizar o desempenho de usinas solares, permitindo o acompanhamento de ativos em tempo real e identificando desvios de desempenho.
        </p>
        <p className="font-poppins text-[20px] font-medium leading-[32px] text-blue-600 mt-8 border-b-2 pb-2 inline-block">
          Acompanhamento em tempo real para máxima eficiência.
        </p>
      </div>

      {/* Imagens */}
      <div className="relative flex flex-col space-y-6">
        <img
          src="/automacao.jpg"
          alt="Imagem de Automação"
          className="w-[700px] h-auto rounded-2xl shadow-md"
        />
        <img
          src="/automacao.jpg"
          alt="Imagem de Automação"
          className="w-[600px] h-auto absolute right-[-30px] top-[-60px] shadow-lg rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Sobre;
