'use client'

import { useState } from 'react'
import Image from 'next/image' 
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Análises', description: 'Entenda melhor o seu tráfego', href: '#', icon: ChartPieIcon },
  { name: 'Engajamento', description: 'Fale diretamente com seus clientes', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Segurança', description: 'Os dados dos seus clientes estarão seguros', href: '#', icon: FingerPrintIcon },
  { name: 'Integrações', description: 'Conecte com ferramentas de terceiros', href: '#', icon: SquaresPlusIcon },
  { name: 'Automatizações', description: 'Crie funis estratégicos que convertem', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Acessar demonstração', href: '#', icon: PlayCircleIcon },
  { name: 'Entre em contato', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
      <nav className="mx-auto max-w-7xl px-6 py-3 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              className="-m-3 p-1.5 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <span className="sr-only">SDSync</span>
              <div className="relative h-16 w-40">
                <Image
                  alt="Logo SDSync"
                  src="/IconeSD.png"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                />
              </div>
            </a>
          </div>
          
          <PopoverGroup className="hidden lg:flex lg:gap-x-8 lg:items-center">
            <a href="#solution" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
              Solução
            </a>
            <a href="#Advantages" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
              Vantagens
            </a>
            <a href="#PricePlans" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
              Planos & Serviços
            </a>
            <a href="#AboutUs" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
              Sobre Nós
            </a>
            <a href="#Footer" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
              Contato
            </a>
            
            {/* Section Tipo lista com itens que remetem a servicos prestados */}
            {/* <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors focus:outline-none">
                Produto
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
              </PopoverButton>

              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white transition-colors">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover> */}

          </PopoverGroup>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

    </header>
  )
}