"use client";

import React from 'react';
import { Leaf, Zap, Recycle } from 'lucide-react';
import { useLanguage } from '../language/LanguageContext';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function GreenSection() {
  const { language } = useLanguage();

  const content = {
    pt: {
      heading: 'Inteligência Artificial na Mitigação das Mudanças Climáticas',
      solutions: [
        {
          title: "Monitoramento Ambiental em Tempo Real",
          description: "Implementamos soluções de energia solar e eólica para reduzir a dependência de combustíveis fósseis."
        },
        {
          title: "Otimização de Energia Renovável",
          description: "Otimizamos o consumo de energia em edifícios e processos industriais, reduzindo custos e emissões."
        },
        {
          title: "Gestão Inteligente de Resíduos",
          description: "Desenvolvemos estratégias de reciclagem e reutilização para minimizar o impacto ambiental."
        },
      ],
      exploreButton: "Explore Todas as Soluções"
    },
    en: {
      heading: 'Artificial Intelligence in Climate Change Mitigation',
      solutions: [
        {
          title: "Real-Time Environmental Monitoring",
          description: "We implement solar and wind energy solutions to reduce dependence on fossil fuels."
        },
        {
          title: "Renewable Energy Optimization",
          description: "We optimize energy consumption in buildings and industrial processes, reducing costs and emissions."
        },
        {
          title: "Intelligent Waste Management",
          description: "We develop recycling and reuse strategies to minimize environmental impact."
        },
      ],
      exploreButton: "Explore All Solutions"
    }
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
              icon={index === 0 ? Leaf : index === 1 ? Zap : Recycle}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            {exploreButton}
          </a>
        </div>
      </div>
    </section>
  );
}
