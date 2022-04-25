export const Projects = () => {
    let projects = [
        {
            name: "Todo-app",
            desc: "Lista de gerenciamento de tarefas construída utilizando React/Next.js, TypeScript, TailwindCSS, PlanetScale, Prisma e banco de dados MySQL",
            img: "todo.png",
            link: "https://todo-app-geovanejh.vercel.app/",
        },
        {
            name: "Gerador de QRCode",
            desc: "Página simples para geração de QRCodes através de URLS, construída utilizando React/Next.js e Styled Components",
            img: "qrcode.png",
            link: "https://qrc-ode-generator-lake.vercel.app/",
        },
        {
            name: "React Posts",
            desc: "Página simples de consulta de Posts gerados através de consulta a uma API externa. Construída utilizando React.js e CSS puro.",
            img: "reactp.png",
            link: "https://geovanereactposts.netlify.app/",
        },
        {
            name: "Tiktok Clone",
            desc: "Clone da página do tiktok construída com Next.js e Styled Components a fim de praticar estas ferramentas.",
            img: "tiktok.png",
            link: "https://nextjs-tiktok-page.vercel.app/",
        },
        {
            name: "Portolio Codelândia",
            desc: "Projeto de página de portfólio construída durante o desafio 20 da codelândia. Feito com Next.js e Styled Components a fim de praticar estas ferramentas.",
            img: "codelandia.png",
            link: "https://portfolio-codelandia-20.vercel.app/",
        },
    ];

    return (
        <section
            className="w-full py-16 overflow-hidden bg-stone-100 relative"
            id="projects">
            <div className="2xl:max-w-7xl xl:max-w-6-xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
                <h2 className="text-gray-900 text-3xl font-bold">
                    Projetos pessoais
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-8">
                    {projects.map((item) => (
                        <div
                            key={item.name}
                            className="bg-white rounded-lg overflow-hidden mb-10 shadow-md hover:scale-105 transition-all ease-out">
                            <img
                                src={item.img}
                                alt="image"
                                className="w-full border"
                            />
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                    <a
                                        className="font-semibold cursor-pointer
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-blue-600">
                                        {item.name}
                                    </a>
                                </h3>
                                <p className="text-base text-body-color leading-relaxed mb-7">
                                    {item.desc}
                                </p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-blue-600 hover:bg-blue-600 hover:text-white
                                transition">
                                    View
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
