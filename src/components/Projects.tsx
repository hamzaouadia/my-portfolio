import type { Dispatch, SetStateAction } from 'react';
import { motion } from "framer-motion";


const projectsData = [
  {
    name: "AI-Powered Travel Platform",
    github: "",
    description: "A full-stack web platform connecting users to tourism services using modern tech stack.",
    alldescription: `
        Led end‑to‑end development of an AI‑powered travel platform designed to match users with tailored tourism services (hotels, tours, rentals).  
        Architected a responsive, mobile‑first frontend in React with Tailwind CSS, implementing dynamic role‑based dashboards for admins, providers, and customers.  
        Developed a secure RESTful backend API using Node.js and Express; integrated JWT authentication, granular role and permission management, and input validation.  
         
        Containerized the entire stack with Docker , authored custom Dockerfiles and Docker-Compose configurations for seamless local development and production deployments.  
        Implemented CI/CD pipelines in GitHub Actions. 
    `.trim()
  },
  {
    name: "Real-Time Multiplayer Game (Pong)",
    github: "https://github.com/hamzaouadia/1337-projects/tree/main/ft_transcendence",
    description: "A real-time 2-player Pong game built with Django Channels and WebSockets.",
    alldescription: `
        Designed and built a two‑player online Pong game to demonstrate mastery of real‑time communication in web applications.  
        Implemented server‑side game logic in Python using Django Channels and ASGI, maintaining game state and handling concurrency for multiple simultaneous matches.  
        Developed a smooth, low‑latency client in vanilla JavaScript, leveraging the WebSocket API to exchange real‑time position and scoring updates at 60 FPS.  
        Built a matchmaking service to pair players automatically, queue requests, and handle disconnects gracefully with reconnection logic.  
        Styled the game interface with CSS Flexbox/Grid and custom animations for paddle movement, ball physics, and scoring feedback.  
        Packaged the application in Docker containers; wrote Docker-Compose definitions for local testing and CI workflows.  
        Automated tests for game logic and WebSocket endpoints using pytest and factory fixtures; integrated test suite into CI pipeline to maintain code quality.
    `.trim()
  },
  {
    name: "Dockerized Microservices Infrastructure",
    github: "https://github.com/hamzaouadia/1337-projects/tree/main/Inception",
    description: "A DevOps-focused infrastructure running multiple services using Docker.",
    alldescription: `
        Architected and implemented a modular microservices environment for hosting PHP‑based CMS and static content on a Debian foundation.  
        Authored Dockerfiles for each service — Nginx (reverse proxy & load balancer), MariaDB (persistent volume storage), PHP‑FPM (WordPress execution), and custom CMS containers.  
        Configured Docker Compose to orchestrate networks, volumes, and service dependencies; applied health checks and restart policies for resilience.  
        Secured all services with SSL/TLS via OpenSSL; created wildcard certificates and automated renewal scripts integrated into container lifecycles.  
        Set up Nginx as a reverse proxy with multiple virtual hosts, load‑balancing strategies, and rate‑limiting rules to optimize performance and harden security.  
        Managed persistent storage with named volumes and bind mounts; performed backup and restore drills to validate data integrity.  
    `.trim()
  },
  {
    name: "HTTP Server in C++",
    github: "https://github.com/hamzaouadia/1337-projects/tree/main/webserv",
    description: "A custom HTTP server built from scratch using C++ without external libraries.",
    alldescription: `
        Engineered a standalone HTTP/1.1 server in modern C++17 to deepen understanding of network protocols and systems programming.  
        Implemented a parsing engine to read raw TCP streams, extract HTTP requests, handle headers, query parameters, and route to appropriate handlers.  
        Designed a thread pool manager to efficiently multiplex client connections; balanced workload across threads to support high concurrency.  
        Built static file serving capabilities with support for byte‑range requests, MIME type detection, and gzip compression.  
        Integrated graceful shutdown and connection timeouts; wrote custom logging for request tracing and performance metrics.  
        Tested server compliance against RFC standards using curl and custom Python scripts; benchmarked throughput with ApacheBench, optimizing lock contention and buffer management.  
        Packaged build process with CMake; authored detailed README and deployment instructions for Linux environments.
    `.trim()
  }
];

type Project = {
  name: string;
  github: string;
  description: string;
  alldescription: string;
};

type ProjectsProps = {
  setActiveProject: Dispatch<SetStateAction<Project | null>>;
};

export default function Projects({ setActiveProject }: ProjectsProps) {
    return (
        <section id='Projects' className="h-screen z-10 bg-white flex flex-row justify-center items-center">
            <div className='w-full h-full flex flex-row justify-center items-center lg:px-30 px-4 py-30'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ staggerChildren: 0.5 }}
                    className='flex w-full h-full flex-col justify-center items-center gap-2'
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: index == 0 ? 0 : -150 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ zIndex: 10 - index }}
                            className='w-full flex bg-white  flex-col justify-between border-b py-1 pt-4'
                        >
                        <div className='w-full flex flex-row justify-start items-center'>
                            <p className='lg:text-[4vw] py-2 text-[1.5rem] text-start peace-font-medium lg:whitespace-nowrap'>
                                {project.name}
                            </p>
                        </div>
                        <div className='w-full flex flex-row justify-between items-end'>
                            <p className='text-sm text-start font-light'>
                                {project.description}
                            </p>
                            <p
                                onClick={() => setActiveProject(project)}
                                className='text-sm text-start font-light click-target cursor-pointer hover:underline hover-target'
                            >
                                Show
                            </p>
                        </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}