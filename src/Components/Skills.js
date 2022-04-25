import React from "react";

export const Skills = () => {
    let mySkills = [
        { tech: "HTML5", link: "html.svg" },
        { tech: "CSS3", link: "css.svg" },
        { tech: "JS ES6+", link: "js.svg" },
        { tech: "React.js", link: "react.svg" },
        { tech: "Next.js", link: "next.svg" },
        { tech: "Tailwind", link: "tailwind.svg" },
        { tech: "NoSQL", link: "nosql.svg" },
        { tech: "MySQL", link: "mysql.svg" },
        { tech: "Node.js", link: "node.svg" },
    ];
    return (
        <section
            className="w-full py-16 overflow-hidden bg-white relative"
            name="skills"
            id="skills">
            <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
            <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] -skew-x-12 left-0 top-0"></div>
            <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
                <h2 className="text-gray-900 text-3xl font-bold">Sobre mim</h2>
                <div className="sm:flex justify-center center-items w-full py-10">
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 md:px-3 md:mr-5">
                        <p className="text-gray-600 text-lg text-justify">
                            Olá, eu sou{" "}
                            <span className="text-blue-600 ">estudante</span> do
                            curso de{" "}
                            <span className="text-blue-600">
                                Análise e Desenvolvimento de Sistemas
                            </span>{" "}
                            e{" "}
                            <span className="text-blue-600">
                                desenvolvedor web
                            </span>
                            , atualmente focado em estudar tecnologias frontend,
                            embora também goste de praticar ferramentas backend.
                            Hoje busco oportunidades profissionais para praticar
                            minhas habilidades. Você pode verificar o meu perfil
                            completo no LinkedIn.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/geovane-hartmann"
                            target="_blank"
                            className="text-blue-600 font-bold text-lg mt-5 flex items-center group">
                            <span>LinkedIn</span>
                            <svg
                                className="w-5 h-5 group-hover:ml-1 transition-all ease-out duration-200"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 h-auto overflow-hidden py-6 sm:py-0 ">
                        <img
                            src="https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg"
                            className="rounded-md shadow-xl sm:rounded-xl"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 md:gap-3 lg:gap-9 gap-6 mt-8">
                        {mySkills.map((item) => (
                            <div
                                key={item.tech}
                                className="h-28 flex-col w-20 bg-white rounded-xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
                                <img
                                    src={`${item.link}`}
                                    className="h-2/5 w-auto"
                                />
                                <p className="mt-3">{item.tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
