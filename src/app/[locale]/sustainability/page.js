"use client";

import React, { useRef } from "react";
import HeroSection from "../../components/sustainability/HeroSection";
import SwipeCarousel from "../../components/sustainability/Carousel";
import HoverImageLinks from "../../components/sustainability/HoverImageLinks";
import BlogArticles from "../../components/sustainability/BlogArticles";
import dynamic from "next/dynamic";

const LazyFeatureSection = dynamic(
  () => import("../../components/sustainability/FeatureSection"),
  { ssr: false } // Desativa a renderização no servidor
);

export default function Sustainability() {
  const blogArticlesRef = useRef(null);

  const scrollToBlogArticles = () => {
    blogArticlesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-green-50">
      <main className="pt-20 font-inter ">
        <HeroSection onLearnMoreClick={scrollToBlogArticles} />
        <div ref={blogArticlesRef}>
          <BlogArticles />
        </div>
        <LazyFeatureSection />
        <HoverImageLinks />
        <SwipeCarousel />
      </main>
    </div>
  );
}
