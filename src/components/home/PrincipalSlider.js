"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";
import { useLanguage } from '../language/LanguageContext';

export function ImagesSliderDemo() {
  const { language } = useLanguage();
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/images/sliders/iaplant.png",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/images/sliders/mentia.png",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/images/sliders/planthand.png",
  ];

  const heroItems = {
    pt: {
      title: 'EcoAI',
      subtitle: 'Inteligência Artificial e Sustentabilidade',
      text: 'A inteligência artificial é uma área da tecnologia que se destaca pela capacidade de desenvolver sistemas que simulam a inteligência humana, realizando tarefas complexas como reconhecimento de padrões, aprendizado com dados e automação de processos. A IA tem um papel crucial na mitigação das mudanças climáticas, pois possibilita uma abordagem baseada em dados para monitoramento e controle ambiental.',
      button: 'Saiba mais',
    },
    en: {
      title: 'EcoAI',
      subtitle: 'Artificial Intelligence and Sustainability',
      text: 'Artificial intelligence is a field of technology renowned for its ability to develop systems that simulate human intelligence, performing complex tasks such as pattern recognition, data-driven learning, and process automation. AI plays a critical role in mitigating climate change by enabling a data-driven approach to environmental monitoring and control.',
      button: 'Learn more',
    },
  };

  return (
    (<ImagesSlider className="min-h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.p
          className="font-bold text-5xl md:text-7xl text-center font-alkatra py-4">
          <span className="text-green-800">Eco</span>
          <span className="text-green-600">AI</span>
        </motion.p>
        <motion.p
          className="font-bold text-xl md:text-5xl text-center text-neutral-200  pt-4 pb-8">
          {heroItems[language].subtitle}
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-neutral-400 max-w-5xl mx-6 lg:mx-0 font-inter text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {heroItems[language].text}
        </motion.p>
        <button
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 ">
          <span>{heroItems[language].button} →</span>
          <div
            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>)
  );
}
