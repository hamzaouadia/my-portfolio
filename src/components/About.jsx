import React, { useRef } from 'react';
import { Link } from "react-scroll";
import { animate, delay, easeIn, motion, useInView } from "framer-motion";
import { text } from 'framer-motion/m';
import { ImTextColor } from 'react-icons/im';

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        }
    }
};

const lineVariant = {
    hidden: { x: 500, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

const paragraphVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.5,
        }
    }
};

const About = ({ onNavClick }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.5, // Ensures the full section is visible
    });

    

    const lines = ["I'm", "Hamza", "Ouadia!"];

    return (
        <section ref={sectionRef} className="h-screen w-screen lg:flex lg:flex-row pt-16">
            <motion.div
                className='flex flex-col bg-black m-2 p-4 pt-16'
                variants={containerVariant}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                {lines.map((text, idx) => (
                    <motion.div
                        key={idx}
                        className='flex items-start'
                        variants={lineVariant}
                    >
                        <h1 className="text-eaebf5 text-4xl font-bebas-15rem">
                            {text}
                        </h1>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className='items-center justify-end flex flex-col m-2 p-4 lg:pb-16 z-2'
                variants={paragraphVariant}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <p className="text-black text-4xl text-start">
                    A 24-year-old developer studying at 1337 (42). Passionate about 
                    problem-solving, clean code, and creative digital experiences.
                    I’m constantly learning and building cool projects. Whether it's 
                    web development, backend systems, or interactive 3D experiences, 
                    I enjoy turning ideas into reality.
                    Feel free to explore my work, and if you’d like to collaborate or just chat, don’t hesitate to{" "}
                    <Link
                        to="contact"
                        smooth={true}
                        onClick={() => onNavClick(5)}
                        className="font-semibold underline-animation hover:cursor-pointer"
                    >
                        reach out!
                    </Link>
                </p>
            </motion.div>
        </section>
    );
};

export default About;
