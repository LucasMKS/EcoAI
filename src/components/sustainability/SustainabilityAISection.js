'use client'

import React from 'react';
import { useLanguage } from '../language/LanguageContext';
import { motion } from 'framer-motion';
import HeroVideoDialog from "../ui/hero-video-dialog";


const SustainabilityAISection = () => {
    const { language } = useLanguage();

    const content = {
        pt: {
            title: 'Benefícios e Desafios da IA no Contexto Climático',
            cardA: 'Benefícios',
            cardB: 'Desafios',
            liCardA: {
                li1: "Análise de dados complexos: A IA facilita a análise de grandes volumes de dados climáticos, permitindo previsões mais precisas",
                li2: "Otimização de processos: Sistemas de IA otimizam redes elétricas, agricultura e transporte, reduzindo o consumo energético e as emissões",
                li3: "Eficiência em monitoramento ambiental: Ferramentas de IA monitoram florestas, emissões e ecossistemas, ajudando a identificar e mitigar impactos ambientais",
            },
            liCardB: {
                li1: "Exigência de dados extensivos: IA requer grandes volumes de dados para treinar modelos robustos, o que nem sempre está disponível",
                li2: "Impacto ambiental da IA: O processamento de dados consome muita energia, o que pode agravar a pegada de carbono",
                li3: "Transparência e segurança: Alguns modelos de IA são complexos, dificultando a transparência e a interpretação dos resultados",
            },
            titleV: 'Videos',
        },
        en: {
            title: 'Benefícios e Desafios da IA no Contexto Climático',
            cardA: 'Benefícios',
            cardB: 'Desafios',
            liCardA: {
                li1: "Análise de dados complexos: A IA facilita a análise de grandes volumes de dados climáticos, permitindo previsões mais precisas",
                li2: "Otimização de processos: Sistemas de IA otimizam redes elétricas, agricultura e transporte, reduzindo o consumo energético e as emissões",
                li3: "Eficiência em monitoramento ambiental: Ferramentas de IA monitoram florestas, emissões e ecossistemas, ajudando a identificar e mitigar impactos ambientais",
            },
            liCardB: {
                li1: "Exigência de dados extensivos: IA requer grandes volumes de dados para treinar modelos robustos, o que nem sempre está disponível",
                li2: "Impacto ambiental da IA: O processamento de dados consome muita energia, o que pode agravar a pegada de carbono",
                li3: "Transparência e segurança: Alguns modelos de IA são complexos, dificultando a transparência e a interpretação dos resultados",
            },
            titleV: 'Videos',
        },
    };

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold mb-8 text-center text-black"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {content[language].title}
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-neutral-800 p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-neutral-100">{content[language].cardA}</h3>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-200">
                            <li>
                                <span className="font-medium">{content[language].liCardA.li1}</span>
                            </li>
                            <li>
                                <span className="font-medium">{content[language].liCardA.li2}</span>
                            </li>
                            <li>
                                <span className="font-medium">{content[language].liCardA.li3}</span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="bg-neutral-800 p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-neutral-100">{content[language].cardB}</h3>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-200">
                            <li>
                                <span className="font-medium">{content[language].liCardB.li1}</span>
                            </li>
                            <li>
                                <span className="font-medium">{content[language].liCardB.li2}</span>
                            </li>
                            <li>
                                <span className="font-medium">{content[language].liCardB.li3}</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <p className="text-3xl font-bold mt-12 text-center text-neutral-950"> {content[language].titleV} </p>
                <motion.div
                    className="mt-12 bg-neutral-900 p-6 rounded-lg shadow-md w-5/6 flex items-center justify-center gap-4 mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <HeroVideoDialog
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    />
                    <HeroVideoDialog
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default SustainabilityAISection;