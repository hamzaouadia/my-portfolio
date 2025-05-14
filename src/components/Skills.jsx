import React, { useRef } from 'react';
import { delay, easeIn, motion, useInView } from "framer-motion";


const data = [
  {
    title: "Algorithms & AI",
    description: "Implementation of standard algorithms (search, sort, insert, delete) on data structures like arrays, linked lists, and trees. Introduction to finite state machines, backtracking, and asynchronous logic handling. Emphasis on optimization and problem-solving."
  },
  {
    title: "Graphics",
    description: "Low-level graphics programming using libraries like MiniLibX. Topics include pixel manipulation, RGB color models, 2D/3D rendering basics, event handling, and managing window contexts. Projects include simple games and visualization tools."
  },
  {
    title: "Group & Interpersonal Skills",
    description: "Working collaboratively in peer-based environments. Emphasis on communication, feedback culture, conflict resolution, and leadership. Managing group dynamics in team projects like 'Libft', 'minishell', and 'ft_services'."
  },
  {
    title: "Imperative Programming",
    description: "Fundamentals of programming in C. Topics include memory management, pointer arithmetic, recursion, data structures, and use of the standard C library. Strong focus on writing clean, modular, and efficient code under Unix."
  },
  {
    title: "Network & System Administration",
    description: "Core networking concepts including IP, subnets, DNS, routing. Hands-on system administration: user/group management, SSH, firewalls, cron jobs, and configuring services like Nginx and MariaDB inside Linux-based environments (Docker, VMs)."
  },
  {
    title: "Object-Oriented Programming",
    description: "Advanced C++ programming. Key concepts include classes, inheritance, polymorphism, abstraction, templates, and the Standard Template Library (STL). Projects involve design patterns and implementing scalable OOP systems."
  },
  {
    title: "Rigor",
    description: "High standards in code correctness, error handling, and testing. Rigorous peer review processes and automated testing tools (Moulinette) to ensure robustness and edge-case coverage. Required to meet strict project specifications and deadlines."
  },
  {
    title: "System Programming",
    description: "Interfacing directly with the Unix OS. Topics include file I/O, process management (fork, exec, wait), signals, pipes, sockets, and threading. Projects such as 'minishell' and 'Philosophers' reinforce deep understanding of systems-level concepts."
  },
  {
    title: "Web Development",
    description: "Full-stack development with modern tools. Topics include HTML/CSS/JS, RESTful APIs, authentication, deployment, and frameworks like Node.js and Django. Emphasis on backend-first thinking, clean architecture, and UX-aware design."
  }
];


const containerVariant1 = {
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

const SkillsCard = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
};

const Skills = () => {
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
                        variants={containerVariant1}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}>
                        <h1 className="text-black lg:p-0 font-bebas leading-[1] text-15xl lg:rotate-90 font-bold text-shadow-md ">
                            Skills
                        </h1>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                className="text-black flex justify-center flex-col w-full p-8 m-4"
                variants={containerVariant1}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <div className="grid grid-cols-3 gap-5 hover:cursor-pointer m-4">
                    {data.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={SkillsCard}
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

export default Skills;