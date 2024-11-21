"use client";

import React from 'react';
import { ImagesSliderDemo } from '../components/home/PrincipalSlider';
import GreenSection from '../components/home/GreenSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20 font-roboto font-normal">
        <ImagesSliderDemo />
        <GreenSection />
      </main>
    </div>
  );
}
