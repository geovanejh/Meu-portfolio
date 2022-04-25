export const Education = () => {
    let courses = [
        {
            name: "Técnico em Informática",
            institution: "Escola Informatize",
            link: "http://www.informatize.com.br/",
            modality: "Presencial",
            date: "Mar 2018 - Mar 2020",
            degree: "Técnico",
        },
        {
            name: "Análise e Desenvolvimento de Sistemas",
            institution: "FTEC NH",
            link: "https://www.ftec.com.br/",
            modality: "Presencial",
            date: "Jan 2020 - Cursando",
            degree: "Técnologo",
        },
    ];
    return (
        <section
            className="w-full py-16 overflow-hidden bg-gray-50 relative"
            name="education"
            id="education">
            <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
                <h2 className="text-gray-900 text-3xl font-bold">Educação</h2>
                <ol className="items-center sm:flex py-6 w-full">
                    {courses.map((item) => (
                        <li
                            key={item.name}
                            NameName="relative mb-6 lg:px-5 sm:mb-0 w-full">
                            <div className="flex items-center">
                                <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-gray-50  sm:ring-8 shrink-0">
                                    <svg
                                        className="w-3 h-3 text-blue-600 "
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <div className="sm:flex justify-between">
                                    <h3 className="text-lg font-semibold text-slate-900 ">
                                        {item.name}
                                    </h3>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className="font-bold text-lg flex items-center group text-blue-700">
                                        <span>@{item.institution}</span>
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
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                                    {item.date}
                                </time>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};
