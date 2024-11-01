"use client"

import { React } from "react";
import { ArrowRightCircle } from 'lucide-react'
import { useLanguage } from '../language/LanguageContext';
import { motion } from "framer-motion";

const Home = () => {
  const { language } = useLanguage();

  const heroItems = {
    pt: {
      title: 'SUSTENTABILIDADE INTELIGENTE',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ac sem id lobortis. Nam ut nulla lobortis, bibendum odio in, varius lacus. Phasellus sit amet ligula magna. Duis ut eros non orci mollis dignissim. Nunc quis odio id augue commodo maximus sit amet ut lorem. Suspendisse et ex at est auctor placerat. Suspendisse hendrerit mauris in risus rhoncus pharetra. Maecenas enim elit, efficitur quis nibh nec, convallis blandit libero. Etiam pharetra ante ut ipsum egestas, vel consectetur ante fringilla. Aliquam quis magna eu massa dapibus euismod. Vestibulum commodo nulla velit, vel feugiat lorem tristique id.',
      button: 'Saiba mais',
    },
    en: {
      title: 'Smart Sustainability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ac sem id lobortis. Nam ut nulla lobortis, bibendum odio in, varius lacus. Phasellus sit amet ligula magna. Duis ut eros non orci mollis dignissim. Nunc quis odio id augue commodo maximus sit amet ut lorem. Suspendisse et ex at est auctor placerat. Suspendisse hendrerit mauris in risus rhoncus pharetra. Maecenas enim elit, efficitur quis nibh nec, convallis blandit libero. Etiam pharetra ante ut ipsum egestas, vel consectetur ante fringilla. Aliquam quis magna eu massa dapibus euismod. Vestibulum commodo nulla velit, vel feugiat lorem tristique id.',
      button: 'Learn more',
    },
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-4 sm:px-6 lg:px-8 shadow-2xl drop-shadow-2xl shadow-green-100 border-b-2 border-green-900 ">
      {/* Hero Section */}
      <motion.div 
        className="hero bg-opacity-95 rounded-3xl shadow-lg p-12 sm:p-8 md:p-12 lg:p-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "rgba(0, 0, 0, 0.75)",
        }}
      >
        <div className="hero-content flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            className="w-full max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <img
              src="https://picsum.photos/1000/800"
              alt="Tecnologia sustentável em ação"
              className="rounded-lg shadow-xl w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          <div className="text-center lg:text-left max-w-2xl lg:pr-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {heroItems[language].title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {heroItems[language].text}
            </motion.p>
            <motion.button 
              className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full flex items-center justify-center gap-2 font-semibold transition-transform transform hover:scale-105 shadow-lg hover:shadow-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{heroItems[language].button}</span>
              <ArrowRightCircle className="ml-2" size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
};

export default Home;