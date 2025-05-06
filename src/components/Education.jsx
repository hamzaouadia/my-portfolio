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
                        className="text-black p-8 font-bold font-bebas-15rem text-6xl">
                        Education
                    </motion.h1>
                </div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 100 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-2/3 px-8 flex text-black justify-center flex-col text-start"
                >
                    <p className="text-4xl font-semibold">
                        42 (1337 School) — Oct 2022 - 2025
                    </p>
                    <p className="text-lg font-medium">
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
