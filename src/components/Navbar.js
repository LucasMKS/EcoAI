"use client"

import React from 'react';
import Image from "next/image";
import { Leaf, Menu } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from '../components/language/LanguageSwitcher';
import { useLanguage } from '../components/language/LanguageContext';

const NavButton = ({ href, children }) => {
  return (
    <Link href={href} className="px-4 py-3 rounded-md text-lg font-semibold hover:bg-green-700 focus:bg-green-700 transition duration-150 ease-in-out">
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { language } = useLanguage();

  const navItems = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      sustainability: 'Sustentabilidade',
    },
    en: {
      home: 'Home',
      about: 'About',
      sustainability: 'Sustainability',
    },
  };

  return (
    <nav className="bg-background text-white fixed top-0 w-full z-10 opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
          <Image
                width={100}
                height={100}
                src="/images/logo2_v2.png"
                alt="Logo sustentability"
                className="h-10 w-full rounded-lg object-cover object-top" />
          </div>

          <div className="hidden md:flex space-x-6 mx-auto">
            <NavButton href="/">{navItems[language].home}</NavButton>
            <NavButton href="/sustainability">{navItems[language].sustainability}</NavButton>
            <NavButton href="/about">{navItems[language].about}</NavButton>
          </div>

          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <button className="p-3 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;