function Main() {
    return (
        <div className="bg-gray-100 flex justify-between items-center flex-grow h-screen w-full text-slate-900">
            <div className="md:flex w-full flex-row">
                <div className="flex pt-6 flex-col justify-center items-center w-full 2xl:text-6xl md:text-4xl text-2xl font-semibold">
                    <h1>
                        Olá, <br />
                        Eu sou
                        <span className="text-blue-500"> Geovane Hartmann</span>
                        <br />
                        Fullstack web developer
                    </h1>
                    <div className="w-full flex justify-center">
                        <a
                            href="https://www.linkedin.com/in/geovane-hartmann/"
                            target="_blank">
                            <button
                                type="button"
                                className="mt-4 hover:text-white border rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 border-blue-500 text-blue-500 hover:bg-sky-600 hover:border-0 flex">
                                <svg
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                </svg>
                                &ensp;LinkedIn
                            </button>
                        </a>
                        <a href="https://github.com/geovanejh" target="_blank">
                            <button
                                type="button"
                                className="mt-4 hover:text-white border rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 border-blue-500 text-blue-500 hover:bg-sky-600 hover:border-0 flex">
                                <svg
                                    className="w-6 h-6 fill-current"
                                    fill="#000000"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    height="24px">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                                </svg>
                                &ensp;Github
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <img src="main.svg" className="2xl:w-9/12" />
                </div>
            </div>
        </div>
    );
}

export default Main;
