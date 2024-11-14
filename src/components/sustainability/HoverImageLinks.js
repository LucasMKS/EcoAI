import React, { useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useLanguage } from '../language/LanguageContext';
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Fontes relevantes para pesquisa',
      link: {
        heading: 'UNU',
        subheading: 'Universidade das Nações Unidas',
      },
      link2: {
        heading: 'NATURE',
        subheading: 'Nature é a principal revista científica multidisciplinar do mundo',
      },
      link3: {
        heading: 'EARTH.ORG',
        subheading: 'Um site de notícias ambientais que tem como objetivo ilustrar as repercussões das mudanças climáticas sobre os seres humanos e o meio ambiente por meio do jornalismo de dados.',
      },
    },
    en: {
      title: 'Relevant sources for research',
      link: {
        heading: 'UNU',
        subheading: 'United Nations University',
      },
      link2: {
        heading: 'NATURE',
        subheading: "Nature is the world's leading multidisciplinary science journal",
      },
      link3: {
        heading: 'EARTH.ORG',
        subheading: 'an environmental news website that aims to illustrate the repercussions of climate change on the humans and the environment with power data journalism.',
      },
    },
  };

  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white">{content[language].title}</h1>
      <div className="mx-auto max-w-5xl">
        <Link
          heading={content[language].link.heading}
          subheading={content[language].link.subheading}
          imgSrc="https://unu.edu/sites/default/files/styles/content_width/public/2024-08/renee-featured-image.webp?itok=q80T8IXL"
          href="https://unu.edu/topics/climate-change"
        />
        <Link
          heading={content[language].link2.heading}
          subheading={content[language].link2.subheading}
          imgSrc="https://media.springernature.com/w440/springer-static/cover-hires/journal/41558/14/11?q=95"
          href="https://www.nature.com/nclimate/"
        />
        <Link
          heading={content[language].link3.heading}
          subheading={content[language].link3.subheading}
          imgSrc="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2024/11/Copy-of-Untitled-683-x-1024-px-72.jpg"
          href="https://earth.org/climate-change/"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};