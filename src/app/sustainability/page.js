'use client'

import React from 'react'
import HeroSection from '../../components/sustainability/HeroSection'
import { SwipeCarousel } from '../../components/sustainability/Carousel';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-green-50 ">
      <main className="pt-20">
        <HeroSection />
        <SwipeCarousel />
      </main>
    </div>
  )
}