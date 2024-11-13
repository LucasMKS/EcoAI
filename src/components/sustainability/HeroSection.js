import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../language/LanguageContext';

export default function HeroSection() {
  const { language } = useLanguage();

    const content = {
        pt: {
            title: 'EcoAI - Inteligência Artificial para a Sustentabilidade',
            introduction: "A IA tem um grande potencial para auxiliar nos esforços de mitigação das mudanças climáticas em diversas áreas. No entanto, é importante considerar cuidadosamente seus impactos e limitações, buscando uma aplicação responsável e eficaz dessas tecnologias.",
            resume: "A inteligência artificial é uma tecnologia emergente com um imenso potencial para enfrentar desafios globais. Diante da crise climática, a IA pode ser utilizada como uma ferramenta poderosa para desenvolver soluções inovadoras que auxiliam a mitigação dos efeitos das mudanças climáticas. Esse projeto explora como a IA pode ser aplicada em diversos cenários para monitorar, prever e reduzir os impactos das atividades humanas no ambiente, contribuindo para um planeta mais sustentável e equilibrado. Ao utilizar modelos de aprendizado de máquina, análise de dados e sistemas inteligentes, a IA permite a criação de abordagens proativas e otimizadas para o combate às alterações climáticas.",
        },
        en: {
          title: 'EcoAI - Inteligência Artificial para a Sustentabilidade',
          introduction: "A IA tem um grande potencial para auxiliar nos esforços de mitigação das mudanças climáticas em diversas áreas. No entanto, é importante considerar cuidadosamente seus impactos e limitações, buscando uma aplicação responsável e eficaz dessas tecnologias.",
          resume: "A inteligência artificial é uma tecnologia emergente com um imenso potencial para enfrentar desafios globais. Diante da crise climática, a IA pode ser utilizada como uma ferramenta poderosa para desenvolver soluções inovadoras que auxiliam a mitigação dos efeitos das mudanças climáticas. Esse projeto explora como a IA pode ser aplicada em diversos cenários para monitorar, prever e reduzir os impactos das atividades humanas no ambiente, contribuindo para um planeta mais sustentável e equilibrado. Ao utilizar modelos de aprendizado de máquina, análise de dados e sistemas inteligentes, a IA permite a criação de abordagens proativas e otimizadas para o combate às alterações climáticas.",
        },
    };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full py-12 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {content[language].title}
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {content[language].introduction}
            </motion.p>
          </div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-white">Learn more</h2>
            <p className="text-gray-400 max-w-lg">
            {content[language].resume}
            </p>
          </motion.div>
        </motion.div>

        {/* Right content - Image with curved frame effect */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
        >
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-gray-800 bg-gray-800 transform hover:rotate-0 transition-transform duration-300">
            {/* Overlay to create depth effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none z-10"></div>
            
            {/* Main image */}
            <img
              src="https://picsum.photos/1200/900"
              alt="Laptop mostrando dashboard de sustentabilidade"
              className="w-full h-full object-cover"
            />

            {/* Inner shadow effect */}
            <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
          </div>

          {/* Background decoration */}
          <motion.div 
            className="absolute -inset-4 -z-10 bg-gradient-to-r from-[#90B290]/20 to-[#90B290]/10 blur-2xl rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}