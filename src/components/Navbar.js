"use client"

import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X, Edit, PlusSquare, Share, Trash, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from '../components/language/LanguageSwitcher';
import { useLanguage } from '../components/language/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const NavButton = ({ href, children, onClick }) => {
  return (
    <Link href={href} className="px-4 py-3 rounded-md text-lg font-semibold hover:bg-green-700 focus:bg-green-700 transition duration-150 ease-in-out" onClick={onClick}>
      {children}
    </Link>
  );
};

const StaggeredDropDown = ({ language }) => {
  const [open, setOpen] = useState(false);

  const dropdownItems = {
    pt: {
      home: 'Inicio',
      sustainability: 'Sustentabilidade',
      about: 'Sobre',
    },
    en: {
      home: 'Home',
      sustainability: 'Sustainability',
      about: 'About',
    },
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-600 transition-colors"
      >
        <span className="font-medium text-sm">{dropdownItems[language].postActions}</span>
        <motion.span variants={iconVariants}>
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
      >
        <Option setOpen={setOpen} Icon={Edit} text={dropdownItems[language].home} href="/" />
        <Option setOpen={setOpen} Icon={PlusSquare} text={dropdownItems[language].sustainability} href="/sustainability" />
        <Option setOpen={setOpen} Icon={Share} text={dropdownItems[language].about} href="/about" />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen, href }) => {
  return (
    <Link href={href} passHref>
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon size={16} />
        </motion.span>
        <span>{text}</span>
      </motion.li>
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
    <nav className="bg-foreground text-white fixed top-0 w-full z-10 opacity-95 border-b-2 border-green-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Image
              width={300}
              height={300}
              src="/images/logo2_ed.png"
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
            <StaggeredDropDown language={language} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default Navbar;