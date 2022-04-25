import { useState } from "react";

export const Experiences = () => {
    const [actived, setActived] = useState(0);

    const jobs = [
        {
            name: "Unimed VS",
            desc: "Auxiliar no desenvolvimento de sistemas utilizando tecnologias como HTML, CSS, JavaScript e Vue.js",
            role: "Estagiário em desenvolvimento web",
            time: "Nov 2020 - Nov 2021",
        },
        {
            name: "Akorel",
            desc: "Reposição de estoque, separação de pedidos etc.",
            role: "Jovem Aprendiz - Almoxarifado",
            time: "Abr 2018 - Abr 2019",
        },
    ];

    return (
        <section
            className="w-full py-16 overflow-hidden bg-white relative"
            name="experience"
            id="experience">
            <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
            <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] left-0 top-0"></div>
            <div className="max-w-6xl relative mx-auto flex sm:px-0 px-5 flex-col items-start sm:items-center justify-center">
                <h2 className="text-gray-900 text-3xl font-bold">
                    Experiências profissionais
                </h2>
                <div class="container py-10">
                    <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-slate-900">
                        <div class="flex flex-row-reverse md:contents">
                            <div class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                                <div className="md:flex justify-between">
                                    <h3 class="font-semibold text-lg mb-1">
                                        Estagiário em desenvolvimento web{" "}
                                    </h3>
                                    <a
                                        href="https://unimedvs.com.br/"
                                        target="_blank"
                                        className="font-bold text-lg flex items-center group text-blue-700">
                                        <span>@Unimed VS</span>
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
                                <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                    Nov 2020 - Nov 2021
                                </p>
                                <div class="text-justify">
                                    <p className="flex flex-col my-2">
                                        <span className="my-2">
                                            - Auxiliar no desenvolvimento de
                                            sistemas utilizando tecnologias como
                                            HTML, CSS, JavaScript e Vue.js;
                                        </span>
                                        <span className="my-2">
                                            - Trabalhar com metodologias Ágeis,
                                            como scrum, e suas cerimônias.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                                </div>
                                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                            </div>
                        </div>

                        <div class="flex md:contents">
                            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                                </div>
                                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                            </div>
                            <div class=" col-start-6 col-end-12 p-4 rounded-xl my-4 mr-auto  w-10/12">
                                <div className="md:flex justify-between">
                                    <h3 class="font-semibold text-lg mb-1">
                                        Auxiliar de Almoxarifado
                                    </h3>
                                    <a
                                        href="https://www.akorel.com.br/"
                                        target="_blank"
                                        className="font-bold text-lg flex items-center group text-blue-700">
                                        <span>@Akorel</span>
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
                                <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                    Abr 2018 - Abr 2019
                                </p>
                                <div class="text-justify">
                                    <p className="flex flex-col my-2">
                                        <span className="my-2">
                                            - Reposição de estoque;
                                        </span>
                                        <span className="my-2">
                                            - Separação de pedidos.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
