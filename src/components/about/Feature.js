import React from "react";
import { useLanguage } from '../language/LanguageContext';
import { DivOrigami } from "./DivOrigami";

const Hero = () => {
    const { language } = useLanguage();

    const content = {
        pt: {
            tec: 'Tecnologias usadas',
            title1: 'Sobre o Projeto',
            text1: 'Este projeto tem como objetivo utilizar os conhecimentos desenvolvidos na Unidade Curricular Inglês Instrumental e Pensamento Digital para a construção de um Website, em inglês, acerca de uma ou diversas das temáticas relacionadas à tecnologia digital, conectando com o Tema Gerador do Semestre 2024.2 "Terra, Nossa Casa" e "Cuidando do Planeta, Cuidando de Nós".',
            title2: 'O Que é Este Projeto?',
            text2: 'Este projeto reúne artigos e informações sobre como a Inteligência Artificial (IA) pode ser aplicada para combater as mudanças climáticas. Ele explora como a IA pode melhorar a eficiência energética, otimizar redes de energia, prever fenômenos climáticos extremos e monitorar o meio ambiente. O objetivo é compartilhar conhecimentos sobre as soluções tecnológicas disponíveis para mitigar os impactos das mudanças climáticas e promover um futuro mais sustentável.',
        },
        en: {
            tec: 'Technologies Used',
            title1: 'About Project',
            text1: "This project aims to use the knowledge developed in the Instrumental English and Digital Thinking courses to build a website, in English, on one or more topics related to digital technology. It connects with the 2024.2 Semester's Generating Theme 'Earth, Our Home' and 'Taking Care of the Planet, Taking Care of Ourselves.'.",
            title2: 'What is This Project?',
            text2: 'This project gathers articles and information on how Artificial Intelligence (AI) can be applied to combat climate change. It explores how AI can improve energy efficiency, optimize energy grids, predict extreme weather events, and monitor the environment. The goal is to share knowledge about the technological solutions available to mitigate the impacts of climate change and promote a more sustainable future.',
        },
    };

    return (
        <div className="hero bg-background pt-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex flex-col items-center font-robotoCondensed text-neutral-100">
                    <h2 className="text-2xl font-semibold">{content[language].tec}</h2>
                    <DivOrigami className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="p-6">
                    <h1 className="text-5xl font-bold font-robotoCondensed text-neutral-100">{content[language].title1}</h1>
                    <p className="py-8 font-inter text-lg text-neutral-300">
                    {content[language].text1}
                    </p>
                    <h1 className="text-5xl font-bold font-robotoCondensed text-neutral-100">{content[language].title2}</h1>
                    <p className="py-8 font-inter text-lg text-neutral-300">
                    {content[language].text2}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
