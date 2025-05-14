import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";

const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Education", path: "education" },
    { name: "Contact", path: "contact" },
];

const NavBar = ({ onNavClick, activeIndex }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [glitchText, setGlitchText] = useState("Maker");

    useEffect(() => {
        let isOriginal = true;

        const glitch = gsap.timeline({
            repeat: -1,
            repeatDelay: 6,
        });

        glitch
            .to(".glitch", { x: -3, y: 2, duration: 0.05, ease: "none" })
            .to(".glitch", { x: 0, y: 0, duration: 0.05, ease: "none" })
            .to(".glitch", { skewX: 20, duration: 0.05, ease: "none" }, "+=0.2")
            .to(".glitch", { skewY: 5, duration: 0.05, ease: "none" })
            .to(".glitch", { skewY: 0, duration: 0.05, ease: "none" })
            .to(".glitch", { skewX: -10, opacity: 0, duration: 0.05, ease: "none" })
            .to(".glitch", {
                x: 2,
                y: -2,
                duration: 0.05,
                ease: "none",
                opacity: 1,
                onStart: () => {
                    setGlitchText(isOriginal ? "M4k3r" : "Maker");
                    isOriginal = !isOriginal;
                },
            })
            .to(".glitch", { filter: "contrast(0) brightness(2)", duration: 0.05, ease: "none" })
            .to(".glitch", { filter: "none", duration: 0.05, ease: "none" })
            .to(".glitch", { skewX: 0, duration: 0.05, ease: "none" })
            .to(".glitch", { x: 3, y: -1, duration: 0.05, ease: "none" }, "+=0.1")
            .to(".glitch", { x: 0, y: 0, duration: 0.05, ease: "none" });

        return () => glitch.kill();
    }, []);

    return (
        <header id="header" className="fixed font-poppins top-0 left-0 right-0 z-10 backdrop-blur-lg">
            <div className="container mx-auto flex items-center justify-between p-4 ">
                <Link
                    to="home"
                    smooth={true}
                    onClick={() => {
                        setIsMenuOpen(false);
                        onNavClick(0);
                    }}
                    className="glitch text-gray-700 font-bebas leading-[1] font-bold text-4xl cursor-pointer hover:text-black"
                >
                    {glitchText}
                </Link>

                <button
                    className="text-gray-700 hover:text-black lg:hidden hover:cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <nav
                    className={`${
                        isMenuOpen
                            ? "opacity-100 visible pointer-events-auto bg-color-eaebf5 backdrop-blur-2xl"
                            : "opacity-0 invisible pointer-events-none"
                    } absolute top-16 w-full left-0 flex flex-col z-50 transition-all ease-in-out duration-300 lg:relative lg:top-0 lg:w-auto lg:flex-row lg:items-center lg:opacity-100 lg:visible lg:pointer-events-auto`}
                >
                    <ul className="flex flex-col overflow-x-auto font-extrabold lg:flex-row lg:space-x-6 p-4 lg:p-0">
                        {navItems.map((item, index) => (
                            <li key={index} className="flex-shrink-0 pl-4 lg:pl-0">
                                <Link
                                    to={item.path}
                                    smooth={true}
                                    className={`underline-animation relative block cursor-pointer p-4 lg:p-2 text-gray-700 hover:text-black ${
                                        activeIndex === index ? 'active' : ''
                                      }`}                                      
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        onNavClick(index);
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <div className="flex flex-col lg:flex-row lg:space-x-6">
                            <li className="flex justify-center">
                                <a
                                    href="/my-portfolio/my-cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-40 relative border-2 flex justify-center border-black rounded cursor-pointer p-4 lg:p-2 text-gray-700 hover:bg-black hover:text-white"
                                >
                                    Download CV
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
