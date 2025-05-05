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
        <header id="header" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between p-4 ">
                <Link
                    to="home"
                    smooth={true}
                    onClick={() => {
                        setIsMenuOpen(false);
                        onNavClick(0);
                    }}
                    className="glitch text-gray-700 cursor-pointer hover:text-black font-bold text-xl"
                >
                    {glitchText}
                </Link>

                <button
                    className="text-gray-700 hover:text-black md:hidden hover:cursor-pointer"
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
                    className={`absolute md:relative top-16 w-full flex justify-between md:w-auto md:top-0 transition-all ease-in-out duration-300 ${
                        isMenuOpen
                            ? "opacity-100 visible bg-color-eaebf5"
                            : "opacity-0 md:opacity-100 md:visible"
                    }`}
                >
                    <ul className="flex flex-col overflow-x-auto md:flex-row md:space-x-6 p-4 md:p-0">
                        {navItems.map((item, index) => (
                            <li key={index} className="flex-shrink-0">
                                <Link
                                    to={item.path}
                                    smooth={true}
                                    className={`underline-animation relative block cursor-pointer font-semibold p-4 md:p-2 text-gray-700 hover:text-black ${
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
                        <li className="flex-shrink-0">
                            <a
                                href="/my-portfolio/my-cv.pdf"
                                // download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block border-2 border-black rounded cursor-context-menu font-semibold p-4 md:p-2 text-gray-700 hover:bg-black hover:text-white"
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
