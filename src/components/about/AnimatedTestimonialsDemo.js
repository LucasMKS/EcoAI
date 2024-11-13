import { AnimatedTestimonials } from "./Testimonials";
import { useLanguage } from '../language/LanguageContext';

export function AnimatedTestimonialsDemo() {
  const { language } = useLanguage();

  const content = {
    pt: {
      quote: 'Sobre Nós',
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow.',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote1: 'Sobre Nós',
      name1: 'Homer Simpson',
      designation1: 'Product Manager at TechFlow.',
      src1: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    en: {
      quote: 'About Us',
      name: 'Sarah Chdsadasen',
      designation: 'Product Manager at TechFlow.',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote1: 'Sobre Nós',
      name1: 'Homer Simpson',
      designation1: 'Product Manager at TechFlow.',
      src1: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
