import React from "react";
import { FiArrowRight } from "react-icons/fi";
import HeroVideoDialog from "../ui/hero-video-dialog";

const features = [
    {
        name: 'Análise de dados complexos',
        description:
            'A IA facilita a análise de grandes volumes de dados climáticos, permitindo previsões mais precisas.',
        icon: FiArrowRight,
    },
    {
        name: 'Otimização de processos',
        description:
            'Sistemas de IA otimizam redes elétricas, agricultura e transporte, reduzindo o consumo energético e as emissões.',
        icon: FiArrowRight,
    },
    {
        name: 'Eficiência em monitoramento ambiental',
        description:
            'Ferramentas de IA monitoram florestas, emissões e ecossistemas, ajudando a identificar e mitigar impactos ambientais.',
        icon: FiArrowRight,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FiArrowRight,
    },
]

export default function FeatureSection() {
    return (
        <div className="bg-green-100 py-24 sm:py-32 border-b-4 border-neutral-600 shadow-lg shadow-neutral-700 drop-shadow-xl ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Benefícios da IA no Contexto Climático
                    </p>
                    <p className="mt-6 text-lg/8 text-neutral-800">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-neutral-800">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <p className="text-3xl font-bold mt-12 text-center text-neutral-950"> VIDEOS </p>
            <div className="mt-12 bg-neutral-900 p-6 rounded-lg shadow-md w-5/6 flex items-center justify-center gap-4 mx-auto">
                <HeroVideoDialog
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    )
}
