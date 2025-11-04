"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ImagesSlider } from "./images-slider";
import { useLanguage } from "../language/LanguageContext";
import { principalSliderContent } from "@/src/content/PrincipalSliderContent";

export function PrincipalSlider() {
  const { language } = useLanguage();
  const images = [
    "/images/sliders/photo-un.avif",
    "/images/sliders/iaplant.png",
    "/images/sliders/photo-un1.avif",
    "/images/sliders/planthand.png",
  ];

  const { subtitle, text, button } = principalSliderContent[language];

  return (
    <ImagesSlider className="min-h-screen" images={images}>
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
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-5xl md:text-7xl text-center font-alkatra py-4">
          <span className="text-green-800">Eco</span>
          <span className="text-green-600">AI</span>
        </motion.p>
        <motion.p className="font-bold text-xl md:text-5xl text-center text-neutral-200  pt-4 pb-8">
          {subtitle}
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-neutral-400 max-w-5xl mx-6 lg:mx-0 font-inter text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {text}
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href="/sustainability">
            <span>{button} →</span>
          </Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
