import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSection() {
  const t = useTranslations("FeatureSection");

  const features = [
    {
      name: "feature1.name",
      description: "feature1.description",
      icon: FiArrowRight,
    },
    {
      name: "feature2.name",
      description: "feature2.description",
      icon: FiArrowRight,
    },
    {
      name: "feature3.name",
      description: "feature3.description",
      icon: FiArrowRight,
    },
    {
      name: "feature4.name",
      description: "feature4.description",
      icon: FiArrowRight,
    },
  ];

  return (
    <div className="bg-green-100 py-24 sm:py-32 border-b-4 border-neutral-600 shadow-lg shadow-neutral-700 drop-shadow-xl ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t("title")}
          </p>
          <p className="mt-6 text-lg/8 text-neutral-800">{t("resume")}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {t(feature.name)}
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-800">
                  {t(feature.description)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="text-3xl font-bold mt-12 text-center text-neutral-950">
        {" "}
        VIDEOS{" "}
      </p>
      <div className="mt-12 bg-neutral-900 p-6 rounded-lg justify-center flex flex-col items-center gap-4 mx-auto w-full sm:w-5/6 md:flex-row lg:w-4/5 xl:w-2/3">
        <Link
          href="https://www.youtube.com/watch?v=RNhbqQefPSg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-2 text-neutral-300 font-robotoCondensed text-center hover:no-underline">
            {t("video1.title")}
          </p>
          <Image
            src="/images/ted.jpg"
            alt="Can AI Help Solve the Climate Crisis? | Sims Witherspoon | TED"
            width={640}
            height={390}
            className="rounded-md hover:transform hover:scale-105 transition-transform"
          />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=OskYAE3P9oI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-2 text-neutral-300 font-robotoCondensed text-center hover:stroke-none">
            {t("video2.title")}
          </p>
          <Image
            src="/images/climate-tech.jpg"
            alt="Climate Tech vs. Cleantech: What's the Difference?"
            width={640}
            height={390}
            className="rounded-md hover:transform hover:scale-105 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
