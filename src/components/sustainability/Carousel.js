import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Link from 'next/link';

const cards = [
  {
    imgSrc: "/images/carousel/unep.png",
    title: "Climate Action",
    description: "How artificial intelligence is helping tackle environmental challenges",
    url: "https://www.unep.org/news-and-stories/story/how-artificial-intelligence-helping-tackle-environmental-challenges"
  },
  {
    imgSrc: "/images/carousel/earthOrg.png",
    title: "Can Machine Learning Help Tackle Climate Change?",
    description: "Otimizando o uso de recursos para um mundo melhor",
    url: "https://earth.org/machine-learning-climate-change/"
  },
  {
    imgSrc: "/images/carousel/unuEdu.png",
    title: "UNU Report: Don’t Dismiss the Great Power of AI for Climate Change Impact Assessment",
    description: "Transformando resíduos em oportunidades",
    url: "https://unu.edu/inweh/press-release/unu-report-dont-dismiss-great-power-ai-climate-change-impact-assessment"
  },
  {
    imgSrc: "/images/carousel/ClimateRoadmap.png",
    title: "Artificial Intelligence for Climate Change Mitigation Roadmap",
    description: "O documento 'Artificial Intelligence for Climate Change Mitigation Roadmap' (ICEF, dezembro de 2023) explora o potencial da Inteligência Artificial (IA) para reduzir as emissões de gases de efeito estufa (GEE) e apoiar o combate às mudanças climáticas.",
    url: "/pdfs/AI-ClimateRoadmapICEF.pdf"
  },
  {
    imgSrc: "/images/carousel/KaackAligning.png",
    title: "Aligning artificial intelligence with climate change mitigation",
    description: "O documento 'Aligning Artificial Intelligence with Climate Change Mitigation' (Kaack et al., 2021) propõe um modelo para analisar o impacto da Inteligência Artificial (IA) na mitigação das mudanças climáticas.",
    url: "/pdfs/Kaack_2021_Aligning.pdf"
  },
  {
    imgSrc: "/images/carousel/AI-based.png",
    title: "Artifcial intelligence‑based solutions for climate change: a review",
    description: "O documento 'Artificial intelligence-based solutions for climate change: a review' (2023) discute o papel da Inteligência Artificial (IA) em mitigar os efeitos das mudanças climáticas, abordando várias áreas principais.",
    url: "/pdfs/AI-based-Solutions-for-Climate-Change.pdf"
  },
  {
    imgSrc: "/images/carousel/HarnessingPowerAI.png",
    title: "Harnessing the Power of AI for Climate Change Impact Assessment",
    description: "Cultivando um amanhã mais verde",
    url: "/pdfs/Harnessing_the_Power_of_AI__Obringer__2024_.pdf"
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === cards.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < cards.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-8 px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          More articles
        </motion.h2>

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing max-w-3xl mx-auto"
      >
        <Cards imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Cards = ({ imgIndex }) => {
  return (
    <>
      {cards.map((card, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="w-full shrink-0 px-2"
          >
            <Link href={card.url} passHref target="_blank" rel="noopener noreferrer" >
              <div className="card w-full bg-base-100 shadow-xl image-full cursor-pointer">
                <figure>
                  <img src={card.imgSrc} alt={card.title} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {cards.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};