'use client'

import React from 'react'
import HeroSection from '../../components/sustainability/HeroSection'
import { SwipeCarousel } from '../../components/sustainability/Carousel';
import { HoverImageLinks } from '../../components/sustainability/HoverImageLinks';
import BlogArticles from '../../components/sustainability/BlogArticles';
import FeatureSection from '../../components/sustainability/FeatureSection';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-green-50 ">
      <main className="pt-20">
        <HeroSection />
        <BlogArticles />
        <FeatureSection />
        <HoverImageLinks />
        <SwipeCarousel />
      </main>
    </div>
  )
}