'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBarChart2, FiTarget } from 'react-icons/fi';

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#09BC8A] mb-6 tracking-tight">
            Sobre o SDSync
          </h1>
          <p className="text-3xl text-[#101B23] font-medium max-w-3xl mx-auto leading-snug">
            Transformando dados energéticos em decisões estratégicas para maximizar a performance e a rentabilidade de usinas solares
          </p>
        </motion.div>

        {/* Grid com texto e imagem */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#101B23] space-y-8"
            >
              <p className="text-xl font-bold leading-relaxed tracking-wide">
                A SDSync é uma plataforma desenvolvida pela Mextech Tecnologia Industrial
                <br className="hidden md:block" />
                empresa com mais de 10 anos de atuação no setor de automação e soluções para o mercado energético.
              </p>

              {/* Card de citação existente (modelo) */}
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
                Com experiência prática em campo e forte presença em projetos industriais, a Mextech identificou um desafio recorrente no setor solar: a dificuldade de monitorar, comprovar desempenho e extrair inteligência operacional das usinas de Geração Distribuída de forma estruturada e confiável.
              </p>

              <div className="bg-[#101B23] text-white p-8 rounded-2xl shadow-xl">
                <p className="text-xl font-medium leading-relaxed">
                  A SDSync nasce dessa expertise técnica e da vivência real no setor, unindo tecnologia, inteligência de dados e conhecimento operacional para oferecer monitoramento contínuo e gestão estratégica da performance energética.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[800px] rounded-[2rem] overflow-hidden group"
          >
            <div className="absolute inset-0">
              <Image
                src="/aboutus.png"
                alt="Usina solar monitorada pela SDSync"
                fill
                className="object-cover"
                quality={100}
              />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/paineis.jpg")',
                  mixBlendMode: 'multiply',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B23]/60 to-transparent" />
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="text-center space-y-6 p-10 text-white">
                <div
                  className="
                    inline-block bg-[#09BC8A] text-white px-8 py-3 rounded-full 
                    text-base font-medium shadow-lg mb-8
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-500 ease-out
                    transform translate-y-4 group-hover:translate-y-0
                  "
                >
                  Inovação que Impulsiona
                </div>

                <h3
                  className="
                    text-4xl font-bold leading-tight max-w-[500px] mx-auto
                    opacity-10 group-hover:opacity-100
                    transition-all duration-700 ease-out
                    transform translate-y-8 group-hover:translate-y-0
                  "
                >
                  Da engenharia industrial à liderança em energia solar inteligente
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BLOCO DE DESTAQUE - Mextech */}
        <div className="p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Texto com borda */}
            <div className="border-l-[6px] border-[#09BC8A] pl-6">
              <p className="text-lg md:text-xl text-[#101B23] leading-relaxed text-center md:text-left">
                <span className="font-bold">
                  Produto desenvolvido pela Mextech Tecnologia Industrial
                </span>
                <br />
                <span className="text-[#101B23]/90">
                  Mais de uma década de experiência em automação e soluções para o setor energético.
                </span>
              </p>
            </div>

            {/* Logo */}
            <a
              href="https://www.mextech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl hover:shadow-lg transition-shadow"
            >
              <Image
                src="/logo4.png"
                alt="Mextech Tecnologia Industrial"
                width={300}
                height={120}
                className="object-contain w-auto h-24 md:h-32"
              />
            </a>

          </div>
        </div>

        <div className="space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#101B23] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nosso Propósito
            <span className="block h-1 w-20 bg-[#E01A4F] mt-4 rounded-full"></span>
          </motion.h2>

          <motion.p
            className="text-xl text-[#101B23] max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transformar dados operacionais em decisões estratégicas que ampliam a rentabilidade e o controle das usinas solares.
          </motion.p>

          <motion.p
            className="text-lg text-[#101B23]/80 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Baseamos nossa atuação em dois pilares fundamentais
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl border-l-4 border-[#E01A4F] shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#E01A4F]/10 p-3 rounded-full">
                  <FiTarget className="text-[#E01A4F] text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#101B23] mb-2">Eficiência Energética</h3>
                  <p className="text-lg text-[#101B23] leading-relaxed">
                    Maximizar a geração de energia e minimizar perdas operacionais por meio de monitoramento contínuo e análise inteligente.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl border-l-4 border-[#2B6CB0] shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#2B6CB0]/10 p-3 rounded-full">
                  <FiBarChart2 className="text-[#2B6CB0] text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#101B23] mb-2">Tomada de Decisão Baseada em Dados</h3>
                  <p className="text-lg text-[#101B23] leading-relaxed">
                    Fornecer informações precisas, confiáveis e acionáveis que apoiem decisões estratégicas, operacionais e financeiras com segurança.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}