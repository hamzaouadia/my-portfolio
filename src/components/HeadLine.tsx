import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeadLine() {
    return (
        <section id="Home" className='h-screen bg-[#111111] flex flex-row justify-center items-center'>
            <div className='h-full flex flex-col justify-center items-start lg:px-20 px-4 lg:gap-10 gap-5'>
                <p className='text-white lg:text-4xl text-2xl italic'>
                    “Websites promote you 24/7: No employee will do that.” -
                </p>
                <p className='text-white text-xl font-light'>Paul Cookson</p>
                <div className="w-full text-lg font-light flex  justify-end items-end mt-5 px-1">
                    <motion.a
                        href="#Connect"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="flex lg:flex-row flex-col items-end hover-target hover:underline decoration-white"
                    >
                        <p className="text-white font-bold">wanna be promoted?</p>
                        <div className="relative w-6 h-6 lg:mx-2">
                            <motion.div
                                className="absolute top-0 left-0 text-white"
                                variants={{
                                    rest: { y: 0, opacity: 1 },
                                    hover: { y: 10, opacity: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <ArrowDown />
                            </motion.div>

                            <motion.div
                                className="absolute top-0 left-0 text-white"
                                variants={{
                                    rest: { y: -10, opacity: 0 },
                                    hover: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                                }}
                            >
                                <ArrowDown />
                            </motion.div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}