"use client";

import React from 'react';
import Principal from '../components/home/Home';
import GreenSection from '../components/home/GreenSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <Principal />
        <GreenSection />
      </main>
    </div>
  );
}
