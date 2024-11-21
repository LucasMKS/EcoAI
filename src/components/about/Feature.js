import React from "react";
import { useLanguage } from '../language/LanguageContext';
import { DivOrigami } from "./DivOrigami";

const Hero = () => {
    const { language } = useLanguage();

    const content = {
        pt: {
            tec: 'Tecnologias usadas',
            title1: 'Sobre o Projeto',
            text1: 'Bem-vindo à nossa página "Sobre"! Este projeto foi concebido com o objetivo de [descrever brevemente o objetivo do projeto, como "promover a cultura musical" ou "facilitar o acesso a informações sobre artistas"]. Em um mundo cada vez mais digital, acreditamos que é essencial conectar as pessoas com as histórias e a arte que moldam a nossa cultura.',
            title2: 'O Que é Este Projeto?',
            text2: 'Este projeto é uma plataforma dedicada a [explicar o que o projeto oferece, como "explorar a música e as biografias de artistas de diferentes gêneros e épocas"]. Nosso objetivo é criar um espaço onde os usuários possam não apenas descobrir novas músicas, mas também entender o contexto cultural e pessoal que envolve cada artista. Acreditamos que cada canção conta uma história e queremos compartilhar essas narrativas com o mundo.',
        },
        en: {
            tec: 'Technologies Used',
            title1: 'About Project',
            text1: 'Welcome to our "About" page! This project was conceived with the goal of [briefly describing the project\'s objective, such as "promoting musical culture" or "facilitating access to information about artists"]. In an increasingly digital world, we believe it is essential to connect people with the stories and art that shape our culture.',
            title2: 'What is This Project?',
            text2: 'This project is a platform dedicated to [explain what the project offers, such as "exploring music and artist biographies from different genres and eras"]. Our goal is to create a space where users can not only discover new music, but also understand the cultural and personal context that surrounds each artist. We believe that each song tells a story and we want to share these narratives with the world.',
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
