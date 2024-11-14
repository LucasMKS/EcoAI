'use client'

import React, { useRef } from 'react'
import HeroSection from '../../components/sustainability/HeroSection'
import { SwipeCarousel } from '../../components/sustainability/Carousel';
import { HoverImageLinks } from '../../components/sustainability/HoverImageLinks';
import BlogArticles from '../../components/sustainability/BlogArticles';
import FeatureSection from '../../components/sustainability/FeatureSection';

export default function Sustainability() {
  const blogArticlesRef = useRef(null);

  const scrollToBlogArticles = () => {
    blogArticlesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-green-50">
      <main className="pt-20">
        <HeroSection onLearnMoreClick={scrollToBlogArticles} />
        <div ref={blogArticlesRef}>
          <BlogArticles />
        </div>
        <FeatureSection />
        <HoverImageLinks />
        <SwipeCarousel />
      </main>
    </div>
  )
}