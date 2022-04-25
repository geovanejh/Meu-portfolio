import { useState } from "react";

function Nav() {
    let Links = [
        { name: "Sobre mim", link: "#skills" },
        { name: "Educação", link: "#education" },
        { name: "Experiência", link: "#experience" },
        { name: "Projetos", link: "#projects" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className="w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white md:py-4 py-6 md:px-10 px-7">
                <div className="font-sora font-bold text-2xl cursor-pointer flex items-center text-slate-800 md:pl-20">
                    &lt;Geovane Hartmann /&gt;
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden my-1">
                    <img src={`${open ? "close" : "menu"}.svg`} />
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 pr-20 transition-all duration-500 ease-in ${
                        open
                            ? "top-20 opacity-100"
                            : "top-[-490px] md:opacity-100 opacity-0"
                    }`}>
                    {Links.map((item) => (
                        <li
                            key={item.name}
                            className="md:ml-8 text-md md:my-0 my-5 md:mx-10">
                            <a
                                href={item.link}
                                className="text-gray-500 hover:text-blue-600 duration-200">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Nav;
