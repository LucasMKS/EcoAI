import { AnimatedTestimonials } from "./Testimonials";
import { useLanguage } from '../language/LanguageContext';
import Link from 'next/link';

export function AnimatedTestimonialsDemo() {
  const { language } = useLanguage();

  const content = {
    pt: {
      quote: 'Sou um profissional entusiasmado e aprendiz diligente, procurando explorar e expandir conhecimentos em novos campos. Mesmo sem experiência de trabalho significativa, possuo grande vontade, adaptabilidade e motivação para aprender.',
      name: 'Gabriel Silva Galdino',
      designation: (
        <>
          Ciência da Computação - UNA Contagem. <Link className="text-blue-500 underline hover:text-blue-700 transition duration-300" href="/pdfs/GabrielGaldino.pdf" passHref target="_blank"> Curriculo </Link>
        </>
      ),
      src: '/images/ggaldino.png',
      quote1: 'Sou estudante de Ciência da Computação e estagiário na Prodemge, com uma grande paixão por tecnologia. Tenho interesse aprofundado em Java e experiência com diversas outras tecnologias, como Spring Boot e SQL, entre outras.',
      name1: 'Lucas Marques da Silva',
      designation1: (
        <>
          Ciência da Computação - UNA Contagem. <Link className="text-blue-500 underline hover:text-blue-700 transition duration-300" href="/pdfs/LucasMarques.pdf" passHref target="_blank"> Curriculo </Link>
        </>
      ),
      src1: '/images/lucasm.jpg',
    },
    en: {
      quote: 'I am an enthusiastic professional and diligent learner, seeking to explore and expand knowledge in new fields. Even without significant work experience, I possess a strong desire, adaptability, and motivation to learn.',
      name: 'Gabriel Silva Galdino',
      designation: (
        <>
          Computer Science - UNA Contagem. <Link className="text-blue-500 underline hover:text-blue-700 transition duration-300" href="/pdfs/GabrielGaldino.pdf" passHref target="_blank"> Resume </Link>
        </>
      ),
      src: '/images/ggaldino.png',
      quote1: 'I am a Computer Science student and an intern at Prodemge with a deep passion for technology. I have a strong interest in Java and experience with various technologies, including Spring Boot and SQL, among others.',
      name1: 'Lucas Marques da Silva',
      designation1: (
        <>
        Computer Science - UNA Contagem. <Link className="text-blue-500 underline hover:text-blue-700 transition duration-300" href="/pdfs/LucasMarques.pdf" passHref target="_blank"> Resume </Link>
      </>
      ),
      src1: '/images/lucasm.jpg',
    },
  };


  const testimonials = [
    {
      quote: content[language].quote,
      name: content[language].name,
      designation: content[language].designation,
      src: content[language].src,
    },
    {
      quote: content[language].quote1,
      name: content[language].name1,
      designation: content[language].designation1,
      src: content[language].src1,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
