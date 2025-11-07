"use client";

import React from "react";
import {Link} from '../../navigation';
import {useTranslations} from 'next-intl';
import FeatureCard from "./FeatureCard";
import { Zap, Brain, Sun } from "lucide-react";

export default function GreenSection() {
  const t = useTranslations('GreenSection');
  const solutions = [
    {
      icon: Brain,
      title: t('solutions.solution1.title'),
      description: t('solutions.solution1.description'),
    },
    {
      icon: Zap,
      title: t('solutions.solution2.title'),
      description: t('solutions.solution2.description'),
    },
    {
      icon: Sun,
      title: t('solutions.solution3.title'),
      description: t('solutions.solution3.description'),
    },
  ];

  return (
    <section className="bg-green-50 py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t('heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
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
            {t('exploreButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}
