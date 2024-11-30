"use client";

import React from "react";
import { useLanguage } from "../language/LanguageContext";
import { motion } from "framer-motion";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";

const AboutUs = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Sobre Nós",
      subtitle: "Conheça Nossa Equipe",
      introduction:
        "Nossa equipe é formada por estudantes apaixonados por tecnologia e sustentabilidade.",
      course: "Curso",
    },
    en: {
      title: "About Us",
      subtitle: "Meet Our Team",
      introduction:
        "Our team is made up of students passionate about technology and sustainability.",
      course: "Course",
    },
  };

  return (
    <div className="container mx-auto px-4 py-20 bg-green-100 w-full rounded-xl rounded-b-none border-2 border-green-900">
      <motion.h1
        className="text-4xl font-bold text-center mb-4 font-robotoCondensed"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {content[language].title}
      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-12 font-inter"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {content[language].introduction}
      </motion.p>
      <AnimatedTestimonialsDemo />
    </div>
  );
};

export default AboutUs;
