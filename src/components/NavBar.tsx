import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react"; // optional: use any icon you like

export default function NavBar() {
    
    const [shrinked, setShrinked] = useState(false);
    const lastScrollY = useRef(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);
    

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShrinked(currentScrollY > lastScrollY.current && currentScrollY > 20);
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed z-200 flex justify-center lg:mix-blend-difference bg-black w-full">
            <div className="flex w-full justify-center items-center">
                <div className={`flex lg:w-2/3 w-full lg:flex-row flex-col py-8 px-2 font-semibold justify-between rounded-lg transition-all duration-400 ease-in-out
                    ${shrinked ? 'lg:py-3 lg:w-150 lg:mt-5 lg:bg-[#1d201d]' : ''}
                `}>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className={`flex items-center lg:px-10 px-6 ${shrinked ? 'lg:border-r lg:border-white/50' : 'border-none'}`}>
                            <p  className="text-2xl whitespace-nowrap"><a onClick={closeMobileMenu} className="hover-target text-white" href="#Home">Hamza Ouadia</a></p>
                        </div>
                        <button className="lg:hidden text-white px-6" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    <div
                        className={`flex flex-row  items-center justify-end px-7 w-full transition-all duration-400 ease-in-out transform
                        `}
                    >
                        {/* Inner container for smooth spacing and font-size animation */}
                        <div className={`
                            lg:flex flex-col lg:flex-row gap-6 items-end text-lg text-white transition-all duration-400 ease-in-out 
                            ${shrinked ? 'lg:text-sm' : ''}
                            ${isMobileMenuOpen ? 'flex' : 'hidden'}
                            w-full sm:w-auto sm:px-0 pt-4 sm:pt-0
                        `}>
                            <p><a onClick={closeMobileMenu} className="hover-target" href="#About">About</a></p>
                            <p><a onClick={closeMobileMenu} className="hover-target" href="#Education">Education</a></p>
                            <p><a onClick={closeMobileMenu} className="hover-target" href="#Works">Works</a></p>
                            <p><a onClick={closeMobileMenu} className="hover-target" href="#Connect">Connect</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}