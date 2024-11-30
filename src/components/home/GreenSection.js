"use client";

import React from "react";
import Link from "next/link";
import { Zap, Brain, Sun } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 shadow-neutral-400">
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-neutral-700">{title}</h3>
    <p className="text-neutral-600 font-inter">{description}</p>
  </div>
);

export default function GreenSection() {
  const { language } = useLanguage();

  const content = {
    pt: {
      heading: "Inteligência Artificial na Mitigação das Mudanças Climáticas",
      solutions: [
        {
          title: "Previsão Climática e Gestão de Emergências",
          description:
            "IA melhora previsões climáticas, monitora emissões em tempo real e auxilia políticas públicas com análises preditivas e dados precisos.",
        },
        {
          title: "Eficiência Energética e Gestão de Redes Elétricas",
          description:
            "IA otimiza consumo energético, prevê demandas, integra renováveis e reduz custos em 20% com redes inteligentes, promovendo sustentabilidade.",
        },
        {
          title: "Monitoramento das Mudanças Climáticas",
          description:
            "IA processa grandes dados climáticos, detecta desmatamentos em tempo real e apoia políticas ambientais com análises rápidas e detalhadas.",
        },
      ],
      exploreButton: "Explore Todas as Soluções",
    },
    en: {
      heading: "Artificial Intelligence in Climate Change Mitigation",
      solutions: [
        {
          title: "Climate Forecasting and Emergency Management",
          description:
            "AI enhances climate predictions, monitors emissions in real time, and supports public policies with predictive analysis and accurate data.",
        },
        {
          title: "Energy Efficiency and Grid Management",
          description:
            "AI optimizes energy consumption, predicts demand, integrates renewables, and reduces costs by 20% with smart grids, fostering sustainability.",
        },
        {
          title: "Climate Change Monitoring",
          description:
            "AI processes large climate datasets, detects deforestation in real time, and supports environmental policies with fast, detailed analyses.",
        },
      ],
      exploreButton: "Explore All Solutions",
    },
  };

  const { heading, solutions, exploreButton } = content[language];

  return (
    <section className="bg-green-50 py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={index === 0 ? Brain : index === 1 ? Zap : Sun}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
        <div className="mt-16 text-center font-inter">
          <Link
            href="/sustainability"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            {exploreButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
