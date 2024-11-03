"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";
import { useLanguage } from '../language/LanguageContext';

export function ImagesSliderDemo() {
  const { language } = useLanguage();
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const heroItems = {
    pt: {
      title: 'EcoAI',
      subtitle: 'Inteligência Artificial e Sustentabilidade',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ac sem id lobortis. Nam ut nulla lobortis, bibendum odio in, varius lacus. Phasellus sit amet ligula magna. Duis ut eros non orci mollis dignissim. Nunc quis odio id augue commodo maximus sit amet ut lorem. Suspendisse et ex at est auctor placerat. Suspendisse hendrerit mauris in risus rhoncus pharetra. Maecenas enim elit, efficitur quis nibh nec, convallis blandit libero. Etiam pharetra ante ut ipsum egestas, vel consectetur ante fringilla. Aliquam quis magna eu massa dapibus euismod. Vestibulum commodo nulla velit, vel feugiat lorem tristique id.',
      button: 'Saiba mais',
    },
    en: {
      title: 'EcoAI',
      subtitle: 'Artificial Intelligence and Sustainability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ac sem id lobortis. Nam ut nulla lobortis, bibendum odio in, varius lacus. Phasellus sit amet ligula magna. Duis ut eros non orci mollis dignissim. Nunc quis odio id augue commodo maximus sit amet ut lorem. Suspendisse et ex at est auctor placerat. Suspendisse hendrerit mauris in risus rhoncus pharetra. Maecenas enim elit, efficitur quis nibh nec, convallis blandit libero. Etiam pharetra ante ut ipsum egestas, vel consectetur ante fringilla. Aliquam quis magna eu massa dapibus euismod. Vestibulum commodo nulla velit, vel feugiat lorem tristique id.',
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
          className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {heroItems[language].title} <br /> {heroItems[language].subtitle}
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto lg:mx-0"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {heroItems[language].text}
        </motion.p>
        <button
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>{heroItems[language].button} →</span>
          <div
            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>)
  );
}
