import { AnimatedTestimonials } from "./Testimonials";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function AnimatedTestimonialsDemo() {
  const t = useTranslations("AnimatedTestimonials");

  const testimonials = [
    {
      quote: t("galdino.quote"),
      name: t("galdino.name"),
      designation: t.rich("galdino.designation", {
        link: (chunks) => (
          <Link
            className="text-blue-500 underline hover:text-blue-700 transition duration-300"
            href="/pdfs/GabrielGaldino.pdf"
            passHref
            target="_blank"
          >
            {chunks}
          </Link>
        ),
      }),
      src: "/images/ggaldino.png",
    },
    {
      quote: t("lucas.quote"),
      name: t("lucas.name"),
      designation: t.rich("lucas.designation", {
        link: (chunks) => (
          <Link
            className="text-blue-500 underline hover:text-blue-700 transition duration-300"
            href="/pdfs/LucasMarques.pdf"
            passHref
            target="_blank"
          >
            {chunks}
          </Link>
        ),
      }),
      src: "/images/lucasm.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
