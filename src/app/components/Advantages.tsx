import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { FiCheckCircle } from 'react-icons/fi';
import {
  BoltIcon,
  CloudIcon,
  UserGroupIcon,
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
  CalendarIcon,
  PhoneIcon,
  UserIcon,
  EnvelopeIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline";

const Advantages = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_38lfzb8',
        'template_oqhy2cq',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          date: formData.date,
          message: formData.message
        },
        'Ik63F9w4Ivfj49xlh'
      );

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        date: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setErrorMessage('Erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-6" style={{ backgroundColor: '#153243' }}>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full h-[80vh]">
            <button className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50">
              <XMarkIcon className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Visualização ampliada"
              fill
              className="object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#153243] border border-[#2A3641] rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => {
                setShowForm(false);
                setIsSuccess(false);
                setErrorMessage('');
              }}
              className="absolute top-4 right-4 text-[#9FB3C8] hover:text-[#DCE5F4]"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <FiCheckCircle className="text-[#09BC8A] text-5xl mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2 text-[#DCE5F4]">Mensagem enviada!</h2>
                <p className="text-[#9FB3C8]">Obrigado pelo seu contato. Retornaremos em breve marcando uma reunião pra falar sobre a demonstração.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#DCE5F4] mb-6">Agendar Demonstração</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-[#9FB3C8]" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="w-full pl-10 pr-4 py-3 bg-[#101B23] border border-[#2A3641] rounded-lg text-[#DCE5F4] placeholder-[#5E6E7A] focus:outline-none focus:ring-2 focus:ring-[#FF4000]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-[#9FB3C8]" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Seu e-mail"
                      className="w-full pl-10 pr-4 py-3 bg-[#101B23] border border-[#2A3641] rounded-lg text-[#DCE5F4] placeholder-[#5E6E7A] focus:outline-none focus:ring-2 focus:ring-[#FF4000]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="h-5 w-5 text-[#9FB3C8]" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Seu telefone"
                      className="w-full pl-10 pr-4 py-3 bg-[#101B23] border border-[#2A3641] rounded-lg text-[#DCE5F4] placeholder-[#5E6E7A] focus:outline-none focus:ring-2 focus:ring-[#FF4000]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BuildingOfficeIcon className="h-5 w-5 text-[#9FB3C8]" />
                    </div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Sua empresa"
                      className="w-full pl-10 pr-4 py-3 bg-[#101B23] border border-[#2A3641] rounded-lg text-[#DCE5F4] placeholder-[#5E6E7A] focus:outline-none focus:ring-2 focus:ring-[#FF4000]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-[#9FB3C8]">
                      Informe a data e horário que você está disponível para uma reunião
                    </p>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarIcon className="h-5 w-5 text-[#9FB3C8]" />
                      </div>
                      <input
                        type="datetime-local"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#101B23] border border-[#2A3641] rounded-lg text-[#DCE5F4] placeholder-[#5E6E7A] focus:outline-none focus:ring-2 focus:ring-[#FF4000]"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Alguma informação adicional que devemos saber?"
                    rows={3}
                    className="w-full px-4 py-3 bg-[#101B23] border border-[#2A3641] rounded-lg text-[#DCE5F4] placeholder-[#5E6E7A] focus:outline-none focus:ring-2 focus:ring-[#FF4000]"
                  />
                  {errorMessage && (
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-[#FF4000] hover:bg-[#E01A4F] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Confirmar Agendamento'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center justify-start py-12 px-6 lg:py-2 lg:px-12 max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-[55%] space-y-4">
          <div
            className="group relative h-64 lg:h-[50vh] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-zoom-in"
            onClick={() => handleImageClick("/Inverters.png")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute bottom-6 left-6 text-white z-20">
              <h3 className="text-2xl lg:text-3xl font-bold">Monitoramento Inteligente</h3>
              <p className="text-base lg:text-lg opacity-90 mt-2">Dados precisos e atualizações em tempo real</p>
            </div>
            <Image
              src="/Inverters.png"
              alt="Usina solar monitorada"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="group relative h-48 lg:h-[30vh] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-zoom-in"
              onClick={() => handleImageClick("/component.png")}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="text-lg font-semibold">Componentes Modernos</h3>
                <p className="text-xs lg:text-sm opacity-90 mt-1">Visualização completa de todos os indicadores-chave</p>
              </div>
              <Image
                src="/component.png"
                alt="Dashboard de monitoramento"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="group relative h-48 lg:h-[30vh] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-zoom-in"
              onClick={() => handleImageClick("/inversores.jpg")}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="text-lg font-semibold">Monitoramento de Inversores</h3>
                <p className="text-xs lg:text-sm opacity-90 mt-1">Compatível com principais marcas do mercado</p>
              </div>
              <Image
                src="/inversores.jpg"
                alt="Inversores solares"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] lg:ml-12 text-center lg:text-left">
          <h1 className="font-bold text-4xl lg:text-5xl text-[#DCE5F4] mb-8">
            Transforme sua Gestão de Energia Solar
          </h1>
          <div className="text-[#9FB3C8] space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <BoltIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Detecção de Falhas em Tempo Real</h3>
                  <p className="mt-1">Alertas instantâneos para correções imediatas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CloudIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Zero Infraestrutura</h3>
                  <p className="mt-1">Plataforma 100% SaaS - Sem instalação local</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <UserGroupIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Feito por Especialistas</h3>
                  <p className="mt-1">Desenvolvido por profissionais do setor solar</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CpuChipIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Compatibilidade Total</h3>
                  <p className="mt-1">Integração com principais marcas de inversores</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChartBarIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Performance Completa</h3>
                  <p className="mt-1">Dashboards com todos os indicadores-chave</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChatBubbleBottomCenterTextIcon className="h-7 w-7 flex-shrink-0 text-[#09BC8A]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#DCE5F4]">Comunicação Direta</h3>
                  <p className="mt-1">Alertas e relatórios automáticos via WhatsApp</p>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-[#DCE5F4] bg-opacity-10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#DCE5F4] mb-4">
                Quer ver sua usina operando com máxima eficiência?
              </h3>
              <p className="text-lg text-[#9FB3C8] mb-6">
                Agende uma demonstração personalizada com nosso time
              </p>
              <button
                onClick={() => {
                  setShowForm(true);
                  setIsSuccess(false);
                }}
                className="bg-[#FF4000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E01A4F] transition-colors flex items-center justify-center gap-2 mx-auto lg:mx-0"
              >
                <CalendarIcon className="h-5 w-5" />
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
