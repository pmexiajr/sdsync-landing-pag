import React from 'react';

const Sobre = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-start py-12 px-6 lg:py-24 lg:px-12 max-w-7xl mx-auto gap-8">
      
      {/* Seção de Imagens */}
      <div className="w-full lg:w-[55%] space-y-4">
        {/* Imagem principal */}
        <div className="group relative h-64 lg:h-[40vh] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 text-white z-20">
            <h3 className="text-xl lg:text-2xl font-bold">Monitoramento Remoto</h3>
            <p className="text-sm lg:text-base opacity-90 mt-1">Acesso multiplataforma de qualquer dispositivo</p>
          </div>
          <img
            src="/automacao.jpg"
            alt="Interface SCADA web"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagens secundárias */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="group relative lg:w-[60%] h-48 lg:h-[35vh] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 text-white z-20">
              <h3 className="text-lg font-semibold">Integração Total</h3>
              <p className="text-xs opacity-90 mt-1">Conectividade com diversos equipamentos</p>
            </div>
            <img
              src="/automacao.jpg"
              alt="Sistemas integrados"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="group relative lg:w-[38%] h-48 lg:h-[35vh] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 text-white z-20">
              <h3 className="text-lg font-semibold">Segurança de Dados</h3>
              <p className="text-xs opacity-90 mt-1">Criptografia de última geração</p>
            </div>
            <img
              src="/automacao.jpg"
              alt="Proteção de dados"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Seção de Texto */}
      <div className="w-full lg:w-[45%] lg:ml-12 text-center lg:text-left">
        <h1 className="font-poppins font-bold text-[32px] lg:text-[32px] leading-[44px] lg:leading-[56px] text-[#101B23] mb-6">
          Vantagens Exclusivas do<br />
          <span className="text-[#E01A4F]">Sistema SCADA Web</span>
        </h1>
        
        <div className="font-poppins text-base lg:text-[18px] text-[#75767C] space-y-6">
          <ul className="space-y-4 text-[#101B23] text-left">
            <li className="flex items-center">
              <span className="text-[#09BC8A] mr-2">▸</span>
              Acesso remoto 24/7 via navegador
            </li>
            <li className="flex items-center">
              <span className="text-[#09BC8A] mr-2">▸</span>
              Serviços de monitoramento e manutenção
            </li>
            <li className="flex items-center">
              <span className="text-[#09BC8A] mr-2">▸</span>
              Visualização de dados em tempo real
            </li>
            <li className="flex items-center">
              <span className="text-[#09BC8A] mr-2">▸</span>
              Histórico completo com armazenamento em nuvem
            </li>
            <li className="flex items-center">
              <span className="text-[#09BC8A] mr-2">▸</span>
              Customização total de dashboards
            </li>
          </ul>

          <div className="mt-6 border-l-4 border-[#09BC8A] pl-4">
            <p className="font-poppins text-[20px] font-semibold leading-[34px] text-[#153243]">
              "Controle industrial simplificado com tecnologia web moderna"
            </p>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-[#DCE5F4]">
            <p className="font-poppins text-[18px] font-medium leading-[32px] text-[#4494D5]">
              Redução de custos com manutenção preditiva
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;