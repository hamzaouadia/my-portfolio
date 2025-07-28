
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full z-0 sticky bottom-0  bg-[#000000] text-white lg:px-60 px-4 flex flex-col items-start justify-between">
             
            <div className="text-2xl flex font-semibold border-b-1 py-4 border-white/20 w-full">
                <p className="p-2 hover-target">
                    <a href="#Home">
                        Hamza Ouadia
                    </a>
                </p>
            </div>

            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col space-y-4 py-6 text-sm">
                    <a href="#About" className="hover-target py-1 px-2">About</a>
                    <a href="#Education" className="hover-target py-1 px-2">Education</a>
                    <a href="#Projects" className="hover-target py-1 px-2">Projects</a>
                    <a href="#Connect" className="hover-target py-1 px-2">Connect</a>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                    <a
                        href="https://github.com/hamzaouadia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-target py-1 px-2 rounded-full"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/haouadia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-target py-1 px-2 rounded-full"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:ouadia.h.dev@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-target py-1 px-2 rounded-full"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://wa.me/0721443201"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-target py-1 px-2 rounded-full"
                    >
                        <Phone className="w-5 h-5" />
                    </a>

                </div>
            </div>
        </footer>
    );
}
