import React, { useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/button";

const BlogArticles = () => {
  const t = useTranslations("BlogArticles");
  const sectionRefs = {
    EnergyEfficiency: useRef(null),
    ClimateForecasting: useRef(null),
    ClimateChangeMonitoring: useRef(null),
  };

  const scrollTo = (sectionId) => (e) => {
    e.preventDefault();
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      const yOffset = -window.innerHeight / 4;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-green-50 p-4 md:p-8 border-b-4 border-black">
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl font-roboto">
                {t("title")}
              </h2>
              <p className="text-lg text-neutral-700 ">
                {t.rich("resume", {
                  energy: (chunks) => (
                    <a
                      href="#EnergyEfficiency"
                      onClick={scrollTo("EnergyEfficiency")}
                      className="text-blue-600 hover:underline"
                    >
                      {chunks}
                    </a>
                  ),
                  forecasting: (chunks) => (
                    <a
                      href="#ClimateForecasting"
                      onClick={scrollTo("ClimateForecasting")}
                      className="text-blue-600 hover:underline"
                    >
                      {chunks}
                    </a>
                  ),
                  monitoring: (chunks) => (
                    <a
                      href="#ClimateChangeMonitoring"
                      onClick={scrollTo("ClimateChangeMonitoring")}
                      className="text-blue-600 hover:underline"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </div>
            <figure>
              <img src="/images/climateChange.jpg" alt="Climate Change Image" />
            </figure>
            <div
              className="space-y-3"
              ref={sectionRefs.EnergyEfficiency}
              id="EnergyEfficiency"
            >
              <h3 className="text-2xl font-semibold font-roboto">
                {t("text.title")}
              </h3>
              <p className="text-lg text-neutral-700 ">
                {t.rich("text.t1", {
                  icef: (chunks) => (
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/pdfs/AI-ClimateRoadmapICEF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
              <p className="text-lg text-neutral-700 ">
                {t.rich("text.t2", {
                  chen: (chunks) => (
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/pdfs/AI-based-Solutions-for-Climate-Change.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>
            <figure>
              <img src="/images/EFFICIENT.jpg" alt="Energy Efficiency Image" />
            </figure>
            <div
              className="space-y-3"
              ref={sectionRefs.ClimateForecasting}
              id="ClimateForecasting"
            >
              <h3 className="text-2xl font-semibold font-roboto">
                {t("text2.title")}
              </h3>
              <p className="text-lg text-neutral-700 ">
                {t.rich("text2.t1", {
                  chen: (chunks) => (
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/pdfs/AI-based-Solutions-for-Climate-Change.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>
            <p className="text-lg text-neutral-700 ">
              {t.rich("text2.t2", {
                icef: (chunks) => (
                  <Link
                    className="text-blue-600 hover:underline"
                    href="/pdfs/AI-ClimateRoadmapICEF.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-light text-neutral-700 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal font-roboto">
                {t("quote.text")}
              </p>
              <p className="mt-5 text-neutral-700 font-robotoCondensed">
                {t("quote.person")}
              </p>
            </blockquote>
            <div
              className="space-y-3"
              ref={sectionRefs.ClimateChangeMonitoring}
              id="ClimateChangeMonitoring"
            >
              <h3 className="text-2xl font-semibold font-roboto">
                {t("text3.title")}
              </h3>
              <p className="text-lg text-neutral-700">{t("text3.t1")}</p>
              <p className="text-lg text-neutral-700">{t("text3.t2")}</p>
            </div>
            <figure>
              <img
                src="/images/emission.webp"
                alt="Climate Change Monitoring Image"
              />
            </figure>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold font-roboto">
                {t("text4.title")}
              </h3>
              <p className="text-lg text-neutral-700 ">{t("text4.t1")}</p>
              <p className="text-lg text-neutral-700">
                {t.rich("text4.t2", {
                  icef: (chunks) => (
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/pdfs/AI-ClimateRoadmapICEF.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-2xl font-semibold font-roboto">
                {t("conclusion.title")}
              </p>
              <p className="text-lg text-neutral-700">
                {t("conclusion.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
