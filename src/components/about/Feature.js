import React from "react";
import { useTranslations } from "next-intl";
import { DivOrigami } from "./DivOrigami";

const Hero = () => {
  const t = useTranslations("Feature");

  return (
    <div className="hero bg-background pt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex flex-col items-center font-robotoCondensed text-neutral-100">
          <h2 className="text-2xl font-semibold">{t("tec")}</h2>
          <DivOrigami className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="p-6">
          <h1 className="text-5xl font-bold font-robotoCondensed text-neutral-100">
            {t("title1")}
          </h1>
          <p className="py-8 font-inter text-lg text-neutral-300">
            {t("text1")}
          </p>
          <h1 className="text-5xl font-bold font-robotoCondensed text-neutral-100">
            {t("title2")}
          </h1>
          <p className="py-8 font-inter text-lg text-neutral-300">
            {t("text2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
