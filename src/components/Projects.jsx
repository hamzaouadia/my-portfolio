import React, { useRef } from 'react';
import { delay, easeIn, motion, useInView } from "framer-motion";
import { title } from 'framer-motion/client';


const data = [
    {
        title: "minishell",
        description: "A simple shell implementation in C, demonstrating knowledge of process management and command execution.",
    },
    {
        title: "philosophers",
        description: "A multi-threaded program simulating the dining philosophers problem, showcasing synchronization and concurrency control.",
    },
    {
        title: "cub3D",
        description: "A 3D game engine project that implements raycasting to create a 3D environment using C.",
    },
    {
        title: "inception",
        description: "A project that involves creating a containerized application using Docker, showcasing skills in virtualization and deployment.",
    },
    {
        title: "cpp_module",
        description: "A series of C++ modules covering object-oriented programming, templates, and the Standard Template Library (STL).",
    },
    {
        title: "webserv",
        description: "A web server implementation in C++ that handles HTTP/HTTPS requests and responses, demonstrating networking skills.",
    },
    {
        title: "ft_transcendence",
        description: "A web application that allows users to create and manage their own projects, showcasing full-stack development skills.",
    },
];

const containerVariant2 = {
    hidden: { opacity: 0, x: 150 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    }
};

const ProjectsCard = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
};

const Projects = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.5,
    });

    return (
        <section ref={sectionRef} className="h-screen w-screen flex items-center justify-center flex-col lg:flex-row pt-16">
            <div className='flex mr-10 pt-10 pb-10'>
                <div className="flex flex-col justify-center z-2 lg:border-0 border-b-2 lg:border-r-2 border-gray-400">
                    <motion.div 
                        variants={containerVariant2}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}>
                        <h1 className="text-black lg:p-0 font-bebas-15rem lg:rotate-90 text-9xl font-bold">
                            Projects
                        </h1>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                className="text-black flex justify-center flex-col w-full p-8 m-4"
                variants={containerVariant2}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <div className="grid grid-cols-3 gap-5 hover:cursor-pointer m-4">
                    {data.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={ProjectsCard}
                            className="group relative h-40 border-1 border-gray-400 backdrop-blur-3xl text-black rounded-2xl shadow-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-center text-xl font-bold transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                                {skill.title}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                {skill.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;