import { useEffect, useState, useRef, use } from "react";
import { Menu, X } from "lucide-react"; // optional: use any icon you like
import { motion } from "framer-motion";

export default function NavBar() {
    const navRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    useEffect(() => {
        const nav = navRef.current;
        const homeSection = document.getElementById('Home');
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!nav || !homeSection) return;

            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;
            lastScrollY = currentScrollY;

            const navRect = nav.getBoundingClientRect();
            const homeRect = homeSection.getBoundingClientRect();

            if (navRect.top <= 0) {
                nav.classList.remove('absolute', 'bottom-0');
                nav.classList.add('fixed', 'top-0');
            }
            if (homeRect.bottom - nav.offsetHeight > 0 && !isScrollingDown) {
                nav.classList.remove('fixed', 'top-0');
                nav.classList.add('absolute', 'bottom-0');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
        <motion.nav 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.5 }}
            className="z-450 text-white bg-black lg:mix-blend-difference flex flex-row justify-between items-end w-full py-6 pl-6 fixed top-0"
        >
            <div className="flex flex-row items-center z-500">
                <motion.div
                    variants={{
                        hidden: {opacity: 0, y: -200},
                        visible: {opacity: 1, y: 0}
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hover-target peace-font-medium text-[3vh] flex rounded-sm justify-center gap-2 items-center p-2 flex-row"
                >
                    <p><a href="#Home">H/Ouadia</a></p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: {opacity: 0, y: -150},
                        visible: {opacity: 1, y: 0}
                    }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    className=" font-light text-[1.5vh] flex rounded-sm gap-2 items-end p-2 flex-row hover-target"
                >
                    <p>CREATIVE DEV</p>
                </motion.div>
            </div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: 150},
                    visible: {opacity: 1, x: 0}
                }}
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                className="lg:hidden flex flex-row gap-4 items-center p-2 z-500"
            >
                <button className="lg:hidden text-white px-6" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.div>
            {(isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 1000 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed lg:hidden top-0 right-0 w-full bg-black h-screen text-white flex flex-col items-end p-4"
                >
                    <div className="flex flex-col items-start mt-20 w-full h-full">
                        {["About", "Education", "Projects", "Connect"].map((item) => (
                            <div
                                key={item}
                                className="flex-row justify-center items-center p-4 font-bold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <p><a href={`#${item}`}>{item}</a></p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.nav>
        <motion.nav
            ref={navRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.5 }}
            className="flex justify-end p-6 absolute bottom-0 right-0 text-white font-bold mix-blend-difference z-500">
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 150},
                    visible: {opacity: 1, y: 0}
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="rounded-sm justify-center gap-2 items-center p-2 flex-row hidden lg:flex"
            >
                {["About", "Education", "Projects", "Connect"].map((item) => (
                    <div
                        key={item}
                        className="hover-target flex flex-row justify-center items-center px-4 py-2"
                    >
                        <p><a href={`#${item}`}>{item}</a></p>
                    </div>
                ))}
            </motion.div>
        </motion.nav>
        </>
    );
}
