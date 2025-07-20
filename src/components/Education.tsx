import LeetImage from '../assets/images/1337-bg.jpg';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EductionText = `1337 is a cutting-edge, tuition-free coding school in Morocco and part of the global 42 Network.
It has no teachers, no lectures, and no traditional courses—learning is 100% project-based.
Students solve real-world programming challenges and learn by doing.
The program begins with the Piscine, a month-long coding bootcamp focused on C and problem-solving.
Core subjects include low-level programming, algorithms, web development, and networking.
All progress is self-paced, and peer collaboration is essential.
Every project is rigorously evaluated through code reviews and automated tests.
The system teaches autonomy, resilience, and real-world software skills.
1337 produces developers who are self-taught, adaptable, and technically strong.
It’s more than a school—it’s a launchpad for world-class developers.`;

const text = "1337";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each character
    },
  },
};

const charVariants = {
  hidden: { x: 1000},
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function Education() {
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false });
    return(
        <section
            id="Education"
            ref={textRef}
            className="relative h-full bg-white z-10 flex flex-col lg:flex-row justify-center items-center"
        >
            <div className="absolute top-[-0.1rem] left-0 w-full lg:h-[31.2vh] h-40 bg-black"/>
            {/* Left Side (Text Content) */}
            <div className="w-full h-full flex flex-col justify-center lg:items-start items-center pt-28 lg:py-0 py-10 lg:pt-0 lg:px-30 px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={ isInView ? "visible" : "hidden" }
                    style={{ mixBlendMode: "difference"}}
                    className="flex flex-row"
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                        key={index}
                        variants={charVariants}
                        transition={{ ease: "easeInOut" }}
                        className="lg:font-bold text-white mix-blend-difference lg:text-[25vw] peace-font-medium text-9xl"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
                <div className="flex flex-row justify-start items-start gap-10 py-2">
                    <p className="text-lg font-medium text-black">{EductionText}</p>
                </div>
            </div>

            {/* Right Side (Image) */}
            <div className="h-full lg:w-2/3 w-full flex flex-row justify-center items-center">
                <div className="h-full flex items-center">
                    <img
                        src={LeetImage}
                        alt="Profile"
                        className="w-full lg:h-screen h-full object-cover z-10"
                    />
                </div>
            </div>
        </section>
    )
}