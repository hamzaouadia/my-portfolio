
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full z-0 sticky bottom-0  bg-[#000000] text-white lg:px-60 px-4 flex flex-col items-start justify-between">
             
            {/* Left: Logo */}
            <div className="text-2xl flex font-semibold border-b-1 py-4 border-white/20 w-full">
                <p className="py-4">
                    Hamza Ouadia
                </p>
            </div>

            {/* Middle: Navigation */}
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col space-y-4 py-6 text-sm">
                    <a href="#Home" className="hover-target">Home</a>
                    <a href="#About" className="hover-target">About</a>
                    <a href="#Works" className="hover-target">Works</a>
                    <a href="#Connect" className="hover-target">Connect</a>
                </div>

                {/* Right: Socials */}
                <div className="flex flex-col items-center justify-center space-y-4">
                    <a
                        href="https://github.com/hamzaouadia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-target p-1 rounded-full"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/haouadia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-target p-1 rounded-full"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:ouadia.h.dev@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-target p-1 rounded-full"
                    >
                        <Mail className="w-5 h-5" />
                    </a>

                    {/* Add more social icons as needed */}
                </div>
            </div>
        </footer>
    );
}
