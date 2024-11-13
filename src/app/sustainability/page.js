'use client'

import React from 'react'
import HeroSection from '../../components/sustainability/HeroSection'
import { SwipeCarousel } from '../../components/sustainability/Carousel';
import { HoverImageLinks } from '../../components/sustainability/HoverImageLinks';
import SustainabilityAISection from '../../components/sustainability/SustainabilityAISection';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-green-50 ">
      <main className="pt-20">
        <HeroSection />
        <SustainabilityAISection />
        <HoverImageLinks />
        <SwipeCarousel />
        
      </main>
    </div>
  )
}