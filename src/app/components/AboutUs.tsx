'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#09BC8A] mb-6 tracking-tight">
            Sobre o SDSync
          </h1>
          <p className="text-3xl text-[#101B23] font-medium max-w-3xl mx-auto leading-snug">
            Transformando dados energéticos em decisões estratégicas para<br className="hidden md:block" /> maximizar investimentos em energia solar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#101B23] space-y-8"
            >
              <p className="text-xl font-bold leading-relaxed tracking-wide">
                Somos uma startup localizada em Maringá–PR, com o objetivo de fornecer dados precisos e confiáveis
                <br className="hidden md:block" />
                para decisões estratégicas na geração de energia solar.
              </p>


              <div className="bg-[#09BC8A]/10 p-8 rounded-2xl border-l-[6px] border-[#09BC8A]">
                <p className="text-xl font-semibold text-[#101B23] leading-normal">
                  Fundamentais para o desempenho máximo dos ativos e otimização da rentabilidade na geração energética.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-[#101B23] tracking-tight">
                Como Surgimos
              </h2>
              <p className="text-xl text-[#101B23]/90 leading-relaxed tracking-wide">
                A SDSync nasceu da experiência da Mextech Tecnologia Industrial, empresa com forte atuação em automação para o setor energético. Em campo, identificamos um desafio recorrente: a dificuldade de monitorar e comprovar o desempenho real das usinas solares de Geração Distribuída (GD) com ferramentas acessíveis e eficientes.
              </p>

              <div className="bg-[#101B23] text-white p-8 rounded-2xl shadow-xl">
                <p className="text-xl font-medium leading-relaxed">
                  Criamos a SDSync como resposta: uma plataforma SaaS que simplifica operações, impulsiona performance e resolve desafios reais de usinas de pequeno e médio porte.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[800px] rounded-[2rem] overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/Solar.jpg"
                alt="Usina solar monitorada pela SDSync"
                fill
                className="object-cover"
                quality={100}
              />

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/paineis.jpg")',
                  mixBlendMode: 'multiply'
                }}
              />


              <div className="absolute inset-0 bg-gradient-to-t from-[#101B23]/60 to-transparent" />
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="text-center space-y-6 p-10 text-white">
                <div className="inline-block bg-[#09BC8A] text-white px-8 py-3 rounded-full text-base font-medium shadow-lg mb-8">
                  Inovação que Impulsiona
                </div>
                <h3 className="text-4xl font-bold leading-tight max-w-[500px] mx-auto">
                  Da engenharia industrial à liderança em energia solar inteligente
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
        <motion.div
          className="grid grid-cols-2 gap-[12px] mt-[4px] w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="bg-[#101B23]/1 p-8 rounded-2xl border-l-[6px] border-[#101B23]">
            <p className="text-xl font-semibold text-[#101B23] leading-normal">
              Nosso compromisso é transformar dados em decisões assertivas, ampliando a rentabilidade e o controle das usinas. Mais do que uma plataforma, somos um ecossistema de inovação, onde tecnologia e propósito se encontram para gerar impacto real.
            </p>
          </div>
          <div className="bg-[#2B6CB0]/10 p-8 rounded-2xl border-l-[6px] border-[#2B6CB0]">
            <p className="text-xl font-semibold text-[#101B23] leading-normal">
              Informações acessíveis impulsionam a performance e fortalecem a tomada de decisão.
              Sua usina solar em máxima performance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}