import React, { useRef } from 'react';
import { delay, easeIn, motion, useInView } from "framer-motion";
import { title } from 'framer-motion/client';


const data = [
  {
    title: "minishell",
    description: "A simplified Unix shell implemented in C. Covers process creation, piping, redirection, signal handling, and built-in command parsing — reinforcing low-level system programming concepts."
  },
  {
    title: "philosophers",
    description: "A concurrency-focused project simulating the classic dining philosophers problem. Emphasizes thread management, mutex usage, and avoiding race conditions and deadlocks."
  },
  {
    title: "cub3D",
    description: "A basic 3D rendering engine using raycasting in C, inspired by early FPS games like Wolfenstein 3D. Demonstrates graphics programming, math, and event-driven input handling."
  },
  {
    title: "inception",
    description: "A Docker-based project focused on service orchestration. Involves building a multi-container environment (Nginx, WordPress, MariaDB, etc.), highlighting skills in DevOps, system design, and container networking."
  },
  {
    title: "cpp_module",
    description: "A series of C++ modules introducing object-oriented programming principles, inheritance, polymorphism, exception handling, templates, and STL usage through practical exercises."
  },
  {
    title: "webserv",
    description: "A from-scratch HTTP server in C++ supporting GET, POST, and DELETE methods, CGI handling, and multiple client connections — reinforcing deep understanding of networking and protocol-level programming."
  },
  {
    title: "ft_transcendence",
    description: "A full-stack web application (typically using Django, JavaScript, and PostgreSQL) featuring authentication, real-time multiplayer game (Ping-Pong), chat, and user management. Represents the capstone project combining front-end, back-end, and DevOps skills."
  }
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
                        <h1 className="text-black lg:p-0 font-bebas leading-[1] lg:leading-[2] lg:text-[clamp(3rem,25vh,30rem)] text-[clamp(3rem,30vw,30rem)] lg:rotate-90 font-bold text-shadow-md ">
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
                    {data.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={ProjectsCard}
                            className="group relative h-40 border-1 border-gray-400 backdrop-blur-3xl text-black rounded-2xl shadow-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <div className="absolute inset-0 px-2 flex items-center justify-center text-center lg:text-[clamp(1rem,2vh,3rem)] text-[clamp(1rem,2vw,3rem)] font-bold transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                                {project.title}
                            </div>
                            <div className="absolute inset-0 px-4 flex items-center justify-center text-center lg:text-[clamp(0.7rem,1vh,2rem)] text-[clamp(0.5rem,1vw,2rem)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                {project.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;