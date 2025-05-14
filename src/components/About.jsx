import React, { useRef } from 'react';
import { Link } from "react-scroll";
import { motion, useInView } from "framer-motion";

const aboutText = `
Hamza Ouadia — a passionate full-stack developer with a solid foundation in Django, React, C/C++, and networking. I studied at 42 (1337), where I learned to solve complex problems through project-based, peer-driven learning.

As a full-stack developer, I enjoy building complete web applications — from designing user-friendly interfaces with React and TailwindCSS to developing powerful backends using Django and managing databases efficiently. I also love exploring creative technologies like Three.js and GSAP to bring unique experiences to life.

I'm currently seeking a full-stack development internship where I can apply my skills, learn from experienced teams, and contribute to meaningful, real-world projects. If you’re looking for someone who’s adaptable, curious, and excited about building full-stack solutions.
`;

const About = ({ onNavClick }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6 },
        }),
    };

    const popIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i = 0) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.2, duration: 0.6 },
        }),
    }

    return (
        <section ref={sectionRef} className="h-screen w-screen flex items-center justify-center flex-col lg:flex-row pt-19">
            <div className=''>
                <div className="flex flex-col lg:flex-row p-15 h-full w-full">
                    <motion.h1
                        className="font-bebas text-[clamp(3rem,60vw,60rem)] leading-none font-bold text-shadow"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={popIn}
                        custom={0}
                    >
                        WHO
                    </motion.h1>
                    <div className="flex flex-col items-start">
                        <motion.h1
                            className="font-bebas text-[clamp(1.5rem,18vw,15rem)] leading-[1] font-bold lg:pt-15 text-shadow-md "
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0.5}
                        >
                            I'AM
                        </motion.h1>
                        {aboutText.trim().split('\n\n').map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className="font-medium text-[clamp(1rem,1vw,1rem)] m-2 mt-0"
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                        <motion.p
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={aboutText.split('\n\n').length + 1}
                            className=""
                        >
                            <Link
                                to="contact"
                                smooth={true}
                                onClick={() => onNavClick(5)}
                                className="font-extrabold underline-animation m-2 mt-0 hover:cursor-pointer"
                            >
                                let’s connect!
                            </Link>
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
