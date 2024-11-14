import React, { useRef } from "react";
import Link from 'next/link';
import { useLanguage } from '../language/LanguageContext';
import { Button } from "@/src/components/ui/button";

const BlogArticles = () => {
    const { language } = useLanguage();
    const sectionRefs = {
        EnergyEfficiency: useRef(null),
        ClimateForecasting: useRef(null),
        ClimateChangeMonitoring: useRef(null)
    };

    const scrollTo = (sectionId) => (e) => {
        e.preventDefault();
        const ref = sectionRefs[sectionId];
        if (ref && ref.current) {
            const yOffset = -window.innerHeight / 4;
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


    const content = {
        pt: {
            title: 'IA na Mitigação das Mudanças Climáticas',
            resume: (
                <>
                    A IA tem o potencial de revolucionar a forma como lidamos com as mudanças climáticas, fornecendo ferramentas para <a href="#EnergyEfficiency" onClick={scrollTo('EnergyEfficiency')} className="text-blue-600 hover:underline">eficiência energética</a>, <a href="#ClimateForecasting" onClick={scrollTo('ClimateForecasting')} className="text-blue-600 hover:underline">previsão climática</a>, <a href="#ClimateChangeMonitoring" onClick={scrollTo('ClimateChangeMonitoring')} className="text-blue-600 hover:underline">monitoramento das mudanças climáticas</a>, dentre outros. No entanto, para que sua contribuição seja maximizada, é necessário superar os desafios atuais, expandindo a disponibilidade de dados, integrando modelos de IA com abordagens tradicionais e garantindo que os desenvolvimentos sejam eticamente sustentáveis. A implementação de políticas públicas que apoiem o uso responsável da IA e promovam a colaboração entre instituições pode acelerar o desenvolvimento de tecnologias mais robustas e acessíveis, consolidando a IA como um dos pilares da sustentabilidade ambiental para as próximas gerações.
                </>
            ),
            text: {
                title: "Eficiência Energética e Gestão de Redes Elétricas",
                t1: (
                    <>
                        "A eficiência energética é uma das áreas mais promissoras para a aplicação da IA no combate às mudanças climáticas. Em sistemas de energia, a IA pode otimizar o consumo, prever demandas e integrar fontes renováveis de forma mais eficaz.
                        <Button asChild>
                            <Link href="/pdfs/sustainability-report.pdf" target="_blank" rel="noopener noreferrer"> A ICEF (2023)
                            </Link>
                        </Button>
                        
                        destaca que a IA possibilita previsões de demanda energética que ajudam a reduzir o uso de combustíveis fósseis e a integrar fontes de energia renovável."
                    </>
                ),
                t2: "Chen et al. (2023) enfatizam que a IA, ao ser combinada com redes inteligentes (smart grids), pode reduzir o custo de eletricidade em até 20%, além de melhorar a confiabilidade e a resiliência das redes. Um exemplo é o uso de IA para gerenciar o fluxo de energia entre diversas fontes, garantindo o equilíbrio entre oferta e demanda, o que é essencial para uma rede sustentável.",
            },
            text2: {
                title: "Previsão Climática e Gestão de Emergências",
                t1: "A precisão na previsão climática é outra área onde a IA oferece contribuições significativas. Graças a algoritmos de aprendizado profundo e análise de grandes volumes de dados meteorológicos, a IA consegue fornecer previsões mais detalhadas e em tempo real sobre eventos climáticos extremos, permitindo melhor preparação e resposta a esses fenômenos. Chen et al. (2023) destacam que cerca de 70% do setor de gás natural já utiliza IA para aprimorar a precisão de previsões meteorológicas, auxiliando na prevenção de desastres naturais.",
                t2: "Além disso, a IA permite monitorar emissões de GEE em tempo real, utilizando sensores e imagens de satélite. Isso facilita a identificação de fontes de emissão, como vazamentos de metano em infraestruturas industriais, e possibilita a implementação rápida de medidas corretivas (ICEF, 2023). A combinação de dados climáticos e análise preditiva também é uma estratégia-chave para aprimorar modelos climáticos e, assim, informar melhor os formuladores de políticas públicas.",
            },
            quote: {
                text: "AI is a powerful tool that is being used in nearly every sector, from generating images to medicine, there is no reason why it can’t also be used to build society’s resilience to climate change.",
                person: "Dr. Renee Obringer",
            },
            text3: {
                title: "Monitoramento das Mudanças Climáticas",
                t1: "A aplicação da IA, especialmente do Machine Learning (ML), tem possibilitado o processamento de grandes volumes de dados climáticos, captados por satélites e sensores. Esses dados, fundamentais para a análise de padrões climáticos, podem ser processados e interpretados de forma mais rápida e precisa pela IA, que identifica padrões e tendências a partir de séries temporais complexas. Um dos maiores desafios da ciência climática é justamente a quantidade massiva de dados produzidos continuamente. No entanto, essa quantidade de informação só se torna útil quando pode ser organizada e analisada eficientemente, uma tarefa em que a IA é altamente eficaz.",
                t2: "Por meio de redes neurais e algoritmos de aprendizado profundo, a IA permite monitorar o desmatamento, avaliar a saúde dos ecossistemas e prever a dispersão de poluentes. Na Amazônia, por exemplo, a IA tem sido utilizada para detectar desmatamentos em tempo real, permitindo uma resposta mais rápida para a conservação da floresta. Esse monitoramento contínuo e detalhado possibilita políticas mais informadas de conservação e recuperação ambiental, além de quantificar o impacto de mudanças no uso da terra.",
            },
            text4: {
                title: "Desafios e Recomendações",
                t1: "Apesar das grandes promessas, a adoção da IA para mitigação climática enfrenta desafios significativos. Entre eles estão o alto custo da tecnologia, a necessidade de infraestrutura robusta para processar grandes volumes de dados e preocupações éticas relacionadas à privacidade. Outro ponto importante é o impacto ambiental da própria infraestrutura de IA, que demanda uma quantidade significativa de energia e recursos para operar.",
                t2: "A ICEF (2023) sugere o desenvolvimento de políticas públicas para fomentar o uso da IA em iniciativas climáticas, promovendo também o compartilhamento de dados climáticos entre instituições. Incentivos para pesquisa e desenvolvimento de IA focada em sustentabilidade são cruciais para reduzir barreiras financeiras e técnicas, enquanto a criação de diretrizes éticas pode mitigar preocupações com privacidade e segurança.",
            },
            conclusion: {
                title: "Conclusão",
                text: "A IA tem o potencial de revolucionar a forma como lidamos com as mudanças climáticas, fornecendo ferramentas para eficiência energética, previsão climática, monitoramento das mudanças climáticas, dentre outros. No entanto, para que sua contribuição seja maximizada, é necessário superar os desafios atuais, expandindo a disponibilidade de dados, integrando modelos de IA com abordagens tradicionais e garantindo que os desenvolvimentos sejam eticamente sustentáveis. A implementação de políticas públicas que apoiem o uso responsável da IA e promovam a colaboração entre instituições pode acelerar o desenvolvimento de tecnologias mais robustas e acessíveis, consolidando a IA como um dos pilares da sustentabilidade ambiental para as próximas gerações.",
            }
        },
        en: {
            title: 'AI in Climate Change Mitigation',
            resume: (
                <>
                    AI has the potential to revolutionize the way we address climate change by providing tools for <a href="#EnergyEfficiency" onClick={scrollTo('EnergyEfficiency')} className="text-blue-600 hover ">energy efficiency</a>, <a href="#ClimateForecasting" onClick={scrollTo('ClimateForecasting')} className="text-blue-600 hover ">climate forecasting</a>, <a href="#ClimateChangeMonitoring" onClick={scrollTo('ClimateChangeMonitoring')} className="text-blue-600 hover ">climate change monitoring</a>, among others. However, to maximize its contribution, it is necessary to overcome current challenges, expand data availability, integrate AI models with traditional approaches, and ensure that developments are ethically sustainable. The implementation of public policies that support the responsible use of AI and promote collaboration between institutions can accelerate the development of more robust and accessible technologies, solidifying AI as one of the pillars of environmental sustainability for future generations.
                </>
            ),
            text: {
                title: "Energy Efficiency and Grid Management",
                t1: "Energy efficiency is one of the most promising areas for applying AI in climate change mitigation. In energy systems, AI can optimize consumption, forecast demand, and integrate renewable sources more effectively. ICEF (2023) highlights that AI enables energy demand forecasts that help reduce fossil fuel reliance and integrate renewable energy sources.",
                t2: "Chen et al. (2023) emphasize that AI, when combined with smart grids, can reduce electricity costs by up to 20%, while improving grid reliability and resilience. An example includes AI's ability to manage energy flow among various sources, ensuring balance between supply and demand, essential for a sustainable grid.",
            },
            text2: {
                title: "Climate Forecasting and Emissions Monitoring",
                t1: "Accuracy in climate forecasting is another area where AI offers significant contributions. Through deep learning algorithms and analysis of vast meteorological data, AI provides detailed, real-time forecasts on extreme weather events, enabling better preparation and response to such phenomena. Chen et al. (2023) note that approximately 70% of the natural gas sector already uses AI to improve weather forecast accuracy, aiding in natural disaster prevention.",
                t2: "Additionally, AI enables real-time GHG emissions monitoring using sensors and satellite imagery. This facilitates the identification of emission sources, such as methane leaks in industrial infrastructure, and allows for the swift implementation of corrective measures (ICEF, 2023). Combining climate data and predictive analysis is also a key strategy for enhancing climate models and, thereby, better informing policymakers.",
            },
            quote: {
                text: "AI is a powerful tool that is being used in nearly every sector, from generating images to medicine, there is no reason why it can’t also be used to build society’s resilience to climate change.",
                person: "Dr. Renee Obringer",
            },
            text3: {
                title: "Climate Change Monitoring",
                t1: "The application of AI, especially Machine Learning (ML), has made it possible to process large volumes of climate data captured by satellites and sensors. These data, crucial for analyzing climate patterns, can be processed and interpreted more quickly and accurately by AI, which identifies patterns and trends from complex time series. One of the greatest challenges in climate science is precisely the massive amount of data produced continuously. However, this amount of information only becomes useful when it can be organized and analyzed efficiently, a task in which AI is highly effective.",
                t2: "Through neural networks and deep learning algorithms, AI allows for the monitoring of deforestation, assessing ecosystem health, and predicting the dispersion of pollutants. In the Amazon, for example, AI has been used to detect deforestation in real time, allowing for a quicker response to forest conservation. This continuous and detailed monitoring enables more informed conservation and environmental recovery policies, in addition to quantifying the impact of land-use changes.",
            },
            text4: {
                title: "Challenges and Recommendations",
                t1: "Despite its great promise, adopting AI for climate mitigation faces significant challenges. These include high technology costs, the need for robust infrastructure to process large data volumes, and ethical concerns related to privacy. Another key point is the environmental impact of AI infrastructure itself, which demands a significant amount of energy and resources to operate.",
                t2: "ICEF (2023) suggests developing public policies to promote AI use in climate initiatives, encouraging the sharing of climate data across institutions. Funding for research and development of AI focused on sustainability is crucial to reducing financial and technical barriers, while ethical guidelines are needed to address privacy and security concerns.",
            },
            conclusion: {
                title: "Conclusion",
                text: "AI has transformative potential in climate change mitigation, with applications in areas ranging from climate forecasting to sustainable agriculture and transportation. Advances in these technologies not only promote energy efficiency and emissions reduction but also stimulate the economy and improve quality of life in urban and rural areas. At the same time, it is essential that the development and implementation of AI are supported by public policies, regulations, and investments to ensure its ethical and accessible use, making it a key tool in the global transition toward a more sustainable future.",
            }
        },
    };

    return (
        <section className="bg-green-50 p-4 md:p-8 border-b-4 border-black">
            <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                <div className="max-w-2xl">
                    <div className="space-y-5 md:space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">{content[language].title}</h2>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].resume}</p>
                        </div>

                        <figure>
                            <img src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                        </figure>

                        <div className="space-y-3" ref={sectionRefs.EnergyEfficiency} id="EnergyEfficiency">
                            <h3 className="text-2xl font-semibold dark:text-white">{content[language].text.title}</h3>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text.t1}</p>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text.t2}</p>
                        </div>
                        
                        <figure>
                            <img src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                                A man and a woman looking at a cell phone.
                            </figcaption>
                        </figure>

                        <div className="space-y-3" ref={sectionRefs.ClimateForecasting} id="ClimateForecasting">
                            <h3 className="text-2xl font-semibold dark:text-white">{content[language].text2.title}</h3>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text2.t1}</p>
                        </div>

                        <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text2.t2}</p>

                        <blockquote className="text-center p-4 sm:px-7">
                            <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                                {content[language].quote.text}
                            </p>
                            <p className="mt-5 text-gray-800 dark:text-neutral-200">
                                {content[language].quote.person}
                            </p>
                        </blockquote>

                        <div className="space-y-3" ref={sectionRefs.ClimateChangeMonitoring} id="ClimateChangeMonitoring">
                            <h3 className="text-2xl font-semibold dark:text-white">{content[language].text3.title}</h3>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text3.t1}</p>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text3.t2}</p>
                        </div>

                        <figure>
                            <img src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                                A man and a woman looking at a cell phone.
                            </figcaption>
                        </figure>

                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold dark:text-white">{content[language].text4.title}</h3>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text4.t1}</p>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text4.t2}</p>
                        </div>

                        <div className="space-y-3">
                            <p className="text-2xl font-semibold dark:text-neutral-200">{content[language].conclusion.title}</p>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].conclusion.text}</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default BlogArticles;