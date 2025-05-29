import React from 'react';
import Image from 'next/image';

const Presentation = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:py-24 lg:px-12 max-w-7xl mx-auto gap-8">
      {/* Texto */}
      <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl text-left flex flex-col w-full order-2 lg:order-1">
        <h1 className="font-poppins font-bold text-[40px] leading-[56px] text-[#101B23] mb-4">
         Insights Acionáveis para Tomadas de Decisão Estratégicas 
        </h1>
        
        <p className="font-poppins text-[18px] font-normal leading-[28px] text-[#75767C] mt-2 mb-6">
A SDSync é uma plataforma de monitoramento contínuo que coleta e processa dados operacionais de inversores, sensores ambientais e demais ativos da usina. Utilizando algoritmos de inteligência artificial, o sistema identifica padrões de comportamento, detecta desvios operacionais e sugere ações corretivas com base em parâmetros técnicos consolidados. Tudo isso é apresentado em dashboards analíticos, que facilitam decisões estratégicas, manutenção preventiva e otimização da performance energética.
        </p>

        <div className="mt-6 border-l-4 border-[#09BC8A] pl-4">
          <p className="font-poppins text-[22px] font-semibold leading-[34px] text-[#153243]">
            &quot;Eficiência energética maximizada através de tecnologia de ponta&quot;
          </p>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-[#DCE5F4]">
          <p className="font-poppins text-[20px] font-medium leading-[32px] text-[#4494D5]">
           Tenha controle total sobre o desempenho da sua usina.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-2xl order-1 lg:order-2 group">
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 z-10">
          <Image
            src="/sdsync.png"
            alt="Monitoramento de usina solar"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            quality={100}
          />
        </div>
        
        
        <div className="hidden lg:block absolute -right-10 -top-10 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FF4000]/20 hover:border-[#FF4000] z-20 transition-all duration-300">
          <Image
            src="/usina.jpg"
            alt="Detalhe do sistema de monitoramento"
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#101B23]/10 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Presentation;