import { FiCheck, FiZap, FiStar, FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

const plans = [
  {
    tier: 'Lite',
    price: '100',
    color: '#09BC8A',
    features: [
      'Notificações diárias via WhatsApp com indicadores essenciais',
      'Relatório mensal de desempenho',
      'Acompanhamento de energia gerada e potência ativa',
      'Sem necessidade de infraestrutura local',
      'Ideal para visibilidade básica e alertas rápidos'
    ],
    icon: FiZap,
    cta: 'Começar Agora'
  },
  {
    tier: 'Premium',
    price: '400',
    color: '#E01A4F',
    features: [
      'Inclui todos os recursos do Lite +',
      'Dashboard com acesso completo aos dados históricos',
      'KPIs detalhados (PR, Irradiação, Disponibilidade, Fator de Capacidade)',
      'Análise comparativa entre inversores e strings',
      'Alertas inteligentes (ex: perda de geração, falha recorrente, PR abaixo da meta)'
    ],
    icon: FiStar,
    cta: 'Assinar Premium',
    popular: true
  },
  {
    tier: 'Custom',
    price: '200 - 2000+',
    color: '#FF4000',
    features: [
      'Soluções sob medida para grandes usinas ou portfólios',
      'Relatórios e análises personalizadas por projeto',
      'Suporte estratégico com equipe dedicada',
      'Numero de Dispositivos e plantas customizável',
      'Armazenamento de dados e backup customizados',
      'SLA personalizado e consultoria contínua'
    ],
    icon: FiSettings,
    cta: 'Falar com Especialista'
  }
];


type Plan = {
  tier: string;
  price: string;
  color: string;
  features: string[];
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  cta: string;
  popular?: boolean;
};

const PlanCard = ({ plan }: { plan: Plan }) => (
  <motion.div 
    className="relative p-8 rounded-2xl border border-[rgba(42,54,65,0.3)] backdrop-blur-lg bg-[rgba(16,27,35,0.6)] shadow-xl"
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {plan.popular && (
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(224,26,79,0.9)] text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
        style={{ boxShadow: `0 4px 20px -5px ${plan.color}80` }}
      >
        Mais Popular
      </div>
    )}
    
      <div className="flex flex-col items-center text-center mb-8">
        <plan.icon 
          className="text-4xl mb-4 drop-shadow-md" 
          style={{ color: plan.color }}
        />
        <h3 className="text-2xl font-bold text-[rgba(220,229,244,0.9)] mb-2">{plan.tier}</h3>
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-[rgba(117,118,124,0.8)]">A partir de</span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold drop-shadow-md" style={{ color: plan.color }}>
              R${plan.price}
            </span>
            <span className="text-sm text-[rgba(117,118,124,0.8)]">/mês</span>
          </div>
        </div>
      </div>


    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3 text-[rgba(220,229,244,0.9)]">
          <FiCheck className="text-[#09BC8A] shrink-0 drop-shadow-md" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <motion.button
      className="w-full py-3 rounded-lg font-semibold transition-all border border-[rgba(255,255,255,0.1)]"
      style={{
        backgroundColor: `${plan.color}CC`,
        color: '#FFFFFF' // Texto em branco
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 8px 24px -6px ${plan.color}80`
      }}
    >
      {plan.cta}
    </motion.button>
  </motion.div>
);

export default function PricingSection() {
  return (
    <section className="min-h-screen py-24 bg-[#153243]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#DCE5F4] mb-4">
            Solução Completa para Gestão Energética
          </h2>
          <p className="text-[#8A9BA8] max-w-2xl mx-auto">
            Escolha o plano ideal para otimizar o desempenho do seu parque solar com nossa plataforma inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-center text-[#8A9BA8] text-sm">
          <p>Valores dos planos aumentão conforme a Faixa de Potência(kw) monitorada • Todos os planos incluem Suporte técnico especializado</p>
        </div>
      </div>
    </section>
  );
}