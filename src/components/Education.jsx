import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const Education = () => {
    const eduRef = useRef(null);
    const isInView = useInView(eduRef, {
        once: false,
        amount: 0.5,
    });

    return (
        <section  className=" h-screen w-screen flex flex-col lg:flex-row items-center justify-center text-center p-16">
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Title Section */}
                <div className='border-b-2 lg:border-0 lg:border-r-2 border-gray-400'>
                    <motion.h1 
                        ref={eduRef}
                        initial={{ opacity: 0, y: -200 }}
                        animate={isInView ? { opacity: 1, y: -50 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-black p-8 font-bold text-shadow-md font-bebas leading-[0.5] lg:leading-[1] lg:text-[clamp(3rem,30vh,30rem)] text-[clamp(3rem,25vw,30rem)]">
                        Education
                    </motion.h1>
                </div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 100 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex p-0 lg:px-4 text-black justify-center flex-col text-start"
                >
                    <p className="lg:text-[clamp(1rem,1.5vw,4rem)] text-[clamp(1rem,1.5vh,4rem)] font-semibold">
                        42 (1337 School) — Oct 2022 - 2025
                    </p>
                    <p className="lg:text-[clamp(0.5rem,0.8vw,2rem)] text-[clamp(0.5rem,1vh,2rem)] font-light">
                        Completed the final project by developing a scalable and secure web application,
                        demonstrating expertise in system programming, algorithms, and software development
                        best practices.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Education;
