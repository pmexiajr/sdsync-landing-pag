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

const features = [
  {
    title: "Análise Ambiental",
    description: "Monitoramento de irradiação solar e temperatura com previsão meteorológica integrada",
    icon: SunIcon,
    color: "#09BC8A",
  },
  {
    title: "Indicadores Chave",
    description: "Potência ativa, yield energético e comparação metas vs. realidade",
    icon: ChartBarIcon,
    color: "#449405",
  },
  {
    title: "Gestão de Alarmes",
    description: "Detecção de falhas em tempo real com alertas via WhatsApp",
    icon: BellAlertIcon,
    color: "#E01A4F",
  },
  {
    title: "Monitoramento Integrado",
    description: "Supervisão de inversores, rastreadores e equipamentos de proteção",
    icon: CpuChipIcon,
    color: "#101B23",
  },
  {
    title: "Relatórios Automáticos",
    description: "Envio diário de performance direto no seu WhatsApp",
    icon: ChatBubbleBottomCenterTextIcon,
    color: "#FF4000",
  },
  {
    title: "Plataforma SaaS",
    description: "Solução na nuvem acessível de qualquer dispositivo",
    icon: CloudIcon,
    color: "#153243",
  },
];

export default function Solution() {
  return (
    <div className="py-20" style={{ backgroundColor: '#153243' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Seção Revolucione */}
        <div className="text-center mb-20 space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-[#DCE5F4]">
              Revolucione sua Gestão de Energia Solar
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-[#9FB3C8] leading-relaxed">
              A SDSync é a plataforma completa para monitoramento inteligente de usinas solares, 
              combinando análise preditiva, alertas em tempo real e integração total com equipamentos
            </p>
          </div>

          {/* Cards de Destaque com Novo Background */}
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
        <div className="mb-14 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              <span style={{ color: '#DCE5F4' }}>Solução Completa em </span>
              <span style={{ color: '#FF4000' }}>SDSync</span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-lg leading-relaxed" style={{ color: '#9FB3C8' }}>
              Plataforma SaaS para monitoramento inteligente de usinas solares com<br />
              alertas automáticos e integração total de equipamentos
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex h-32 flex-row items-center rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className="flex aspect-square h-[80%] items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="h-8 w-8 text-white transition-all duration-300 group-hover:scale-125" aria-hidden="true" />
              </div>

              <div className="ml-5 flex flex-1 flex-col justify-center">
                <h3 
                  className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-indigo-600" 
                  style={{ color: '#153243' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-sm leading-snug transition-colors duration-300 group-hover:text-gray-800" 
                  style={{ color: '#486581' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
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
      </div>
    </div>
  );
}