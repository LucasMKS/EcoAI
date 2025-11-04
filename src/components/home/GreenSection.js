"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../language/LanguageContext";
import FeatureCard from "./FeatureCard";
import { greenSectionContent } from "../../content/GreenSectionContent";

export default function GreenSection() {
  const { language } = useLanguage();

  const { heading, solutions, exploreButton } = greenSectionContent[language];

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
            {exploreButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
