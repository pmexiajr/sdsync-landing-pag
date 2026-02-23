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
        
        <div className="space-y-4">
          <p className="font-poppins text-[18px] font-normal leading-[28px] text-[#75767C]">
            A SDSync é uma plataforma de monitoramento contínuo que coleta e processa dados operacionais de inversores, sensores ambientais e demais ativos da usina.
          </p>

          <p className="font-poppins text-[18px] font-normal leading-[28px] text-[#75767C]">
            Por meio de algoritmos de inteligência artificial, o sistema identifica padrões de comportamento, detecta desvios antes que impactem a geração e sugere ações corretivas com base em parâmetros técnicos definidos.
          </p>

          <p className="font-poppins text-[18px] font-normal leading-[28px] text-[#75767C]">
            Todas as informações são organizadas em dashboards analíticos e intuitivos, facilitando a tomada de decisões estratégicas, a manutenção preventiva e a otimização da performance energética.
          </p>
        </div>

        <div className="mt-6 border-l-4 border-[#09BC8A] pl-4">
          <p className="font-poppins text-[22px] font-semibold leading-[34px] text-[#153243]">
            &quot;Tecnologia avançada para máxima eficiência energética&quot;
          </p>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-[#DCE5F4]">
          <p className="font-poppins text-[20px] font-medium leading-[32px] text-[#4494D5]">
           Monitore, detecte falhas e otimize sua usina com total controle. 
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-2xl order-1 lg:order-2 group">
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 z-10">
          <Image
            src="/NivelUsina.png"
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