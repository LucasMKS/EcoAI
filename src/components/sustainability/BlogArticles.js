import React from "react";
import { useLanguage } from '../language/LanguageContext';

const BlogArticles = () => {
    const { language } = useLanguage();

    const content = {
        pt: {
            title: 'IA na Mitigação das Mudanças Climáticas',
            resume: "A Inteligência Artificial (IA) é uma ferramenta emergente com grande potencial para enfrentar um dos maiores desafios contemporâneos: a mitigação das mudanças climáticas. Diversas áreas vêm explorando soluções baseadas em IA para reduzir emissões de gases de efeito estufa (GEE), otimizar o uso de recursos e promover um desenvolvimento mais sustentável. Com base em estudos recentes, incluindo o roadmap da ICEF (2023), a análise de Kaack et al. (2021) e a revisão de Chen et al. (2023), este texto explora como a IA pode desempenhar um papel crucial na luta contra as mudanças climáticas.",
            text: {
                title: "Eficiência Energética e Gestão de Redes Elétricas",
                t1: "A eficiência energética é uma das áreas mais promissoras para a aplicação da IA no combate às mudanças climáticas. Em sistemas de energia, a IA pode otimizar o consumo, prever demandas e integrar fontes renováveis de forma mais eficaz. A ICEF (2023) destaca que a IA possibilita previsões de demanda energética que ajudam a reduzir o uso de combustíveis fósseis e a integrar fontes de energia renovável.",
                t2: "Chen et al. (2023) enfatizam que a IA, ao ser combinada com redes inteligentes (smart grids), pode reduzir o custo de eletricidade em até 20%, além de melhorar a confiabilidade e a resiliência das redes. Um exemplo é o uso de IA para gerenciar o fluxo de energia entre diversas fontes, garantindo o equilíbrio entre oferta e demanda, o que é essencial para uma rede sustentável.",
            },
            text2: {
                title: "Previsão Climática e Monitoramento de Emissões",
                t1: "A precisão na previsão climática é outra área onde a IA oferece contribuições significativas. Graças a algoritmos de aprendizado profundo e análise de grandes volumes de dados meteorológicos, a IA consegue fornecer previsões mais detalhadas e em tempo real sobre eventos climáticos extremos, permitindo melhor preparação e resposta a esses fenômenos. Chen et al. (2023) destacam que cerca de 70% do setor de gás natural já utiliza IA para aprimorar a precisão de previsões meteorológicas, auxiliando na prevenção de desastres naturais.",
                t2: "Além disso, a IA permite monitorar emissões de GEE em tempo real, utilizando sensores e imagens de satélite. Isso facilita a identificação de fontes de emissão, como vazamentos de metano em infraestruturas industriais, e possibilita a implementação rápida de medidas corretivas (ICEF, 2023). A combinação de dados climáticos e análise preditiva também é uma estratégia-chave para aprimorar modelos climáticos e, assim, informar melhor os formuladores de políticas públicas.",
            },
            quote: {
                text: "AI is a powerful tool that is being used in nearly every sector, from generating images to medicine, there is no reason why it can’t also be used to build society’s resilience to climate change.",
                person: "Dr. Renee Obringer",
            },
            text3: {
                title: "Desafios e Recomendações",
                t1: "Apesar das grandes promessas, a adoção da IA para mitigação climática enfrenta desafios significativos. Entre eles estão o alto custo da tecnologia, a necessidade de infraestrutura robusta para processar grandes volumes de dados e preocupações éticas relacionadas à privacidade. Outro ponto importante é o impacto ambiental da própria infraestrutura de IA, que demanda uma quantidade significativa de energia e recursos para operar.",
                t2: "A ICEF (2023) sugere o desenvolvimento de políticas públicas para fomentar o uso da IA em iniciativas climáticas, promovendo também o compartilhamento de dados climáticos entre instituições. Incentivos para pesquisa e desenvolvimento de IA focada em sustentabilidade são cruciais para reduzir barreiras financeiras e técnicas, enquanto a criação de diretrizes éticas pode mitigar preocupações com privacidade e segurança.",
            },
            conclusion: {
                title: "Conclusão",
                text: "A IA possui um potencial transformador na mitigação das mudanças climáticas, com aplicações em áreas que vão desde a previsão climática até a agricultura e o transporte sustentável. Os avanços nessas tecnologias não apenas promovem a eficiência energética e a redução de emissões, mas também podem impulsionar a economia e melhorar a qualidade de vida nas cidades e zonas rurais. Ao mesmo tempo, é essencial que o desenvolvimento e a implementação da IA sejam acompanhados de políticas públicas, regulamentações e investimentos que garantam seu uso ético e acessível, tornando-a uma ferramenta fundamental para uma transição global rumo a um futuro mais sustentável.",
            }
        },
        en: {
            title: 'AI in Climate Change Mitigation',
            resume: "Artificial Intelligence (AI) is an emerging tool with tremendous potential to address one of the most pressing contemporary challenges: climate change mitigation. Various fields are exploring AI-based solutions to reduce greenhouse gas (GHG) emissions, optimize resource usage, and promote more sustainable development. Based on recent studies, including the ICEF roadmap (2023), Kaack et al. (2021), and the review by Chen et al. (2023), this text explores how AI can play a critical role in combating climate change.",
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
                        <h3 className="text-2xl font-semibold dark:text-white">{content[language].text.title}</h3>
                        <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text.t1}</p>

                        <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text.t2}</p>
                        {/* <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">free version of Preline</a>, */}
                        <blockquote className="text-center p-4 sm:px-7">
                            <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                                {content[language].quote.text}
                            </p>
                            <p className="mt-5 text-gray-800 dark:text-neutral-200">
                                {content[language].quote.person}
                            </p>
                        </blockquote>

                        <figure>
                            <img src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                            <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                                A man and a woman looking at a cell phone.
                            </figcaption>
                        </figure>

                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold dark:text-white">{content[language].text2.title}</h3>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text2.t1}</p>
                        </div>

                        {/* <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                            <li className="ps-2">Preline allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on," <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">said</a> Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
                            <li className="ps-2">Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's work," said David Scott, Creative Director at <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">Eventbrite</a>.</li>
                        </ul> */}

                        <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].text2.t2}</p>

                        <div className="space-y-3">
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
                            <p className="text-2xl font-semibold dark:text-neutral-200">{content[language].conclusion.title}</p>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{content[language].conclusion.text}</p>
                        </div>

                        {/* <div>
                            <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                Plan
                            </a>
                            <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                Web development
                            </a>
                            <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                Free
                            </a>
                            <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                Team
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BlogArticles;