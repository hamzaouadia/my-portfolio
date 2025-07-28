import { Minimize, Github } from 'lucide-react';
import gsap from "gsap";
import { useEffect, useRef } from 'react';


const techKeywords = [
  "React", "Tailwind CSS", "Node.js", "Express", "JWT", "PostgreSQL", "Knex.js", "Docker ", "Docker-Compose",
  "GitHub Actions", "AWS ECS", "AWS RDS", "Prometheus", "Grafana", "Winston", "CloudWatch",
  "Django", "Channels", "ASGI", "WebSocket", "JavaScript", "Python", "CSS", "Flexbox", "Grid", 
  "pytest", "Ansible", "Nginx", "MariaDB", "PHP‑FPM", "OpenSSL", "TCP", "HTTP", "C++17", "CMake", "ApacheBench"
];

function highlightTechnologies(text: string): React.ReactElement[] {
    const escapedKeywords: string[] = techKeywords.map((k: string) =>
        k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    const regex: RegExp = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "g");

    return text.split("\n").map((line: string, i: number) => (
        <p key={i} className="mb-2 leading-relaxed">
            {line.split(regex).map((part: string, j: number) =>
                techKeywords.includes(part) ? (
                    <span
                        key={j}
                        className="inline-block bg-white/10  font-semibold px-2 py-0.5 rounded-md mx-0.5 shadow-sm backdrop-blur-sm"
                    >
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </p>
    ));
}


type Project = {
    name: string;
    github: string;
    description: string;
    alldescription: string;
};

import React from "react";

export default function ShowProject(
  {
    activeProject,
    setActiveProject,
  }: {
    activeProject: Project | null;
    setActiveProject: (project: Project | null) => void;
  }
) {
    const clickEffectRef = useRef<HTMLDivElement>(null);
    
    const handleClose = () => {
        const clickEffect = clickEffectRef.current;
        if (!clickEffect) return;
        
        gsap.to(clickEffect, {
            opacity: 0,
            duration: 0.3,
            ease: "power3.inOut",
            onComplete: () => setActiveProject(null),
        });
    };

    
    useEffect(() => {
        const clickEffect = clickEffectRef.current;
        if (!clickEffect) return;

        if (activeProject) {
            gsap.to(clickEffect, {
                width: `${window.innerWidth}px`,
                height: `${window.innerHeight}px`,
                opacity: 1,
                duration: 0.3,
                ease: "power3.out",
            });
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

    }, [activeProject]);

    return (
        <div
            ref={clickEffectRef}
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                opacity: 0,
                width: `${window.innerWidth}px`,
                height: `${window.innerHeight}px`,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                pointerEvents: activeProject ? "auto" : "none",
                zIndex: 9000,
                transform: "translate(-50%, -50%)",
                overflow: "hidden",
                padding: "1rem",
            }}
            >

            {/* ✅ Active Project Content */}
            {activeProject && (
                <div className="w-full h-full min-h-screen text-black flex flex-col justify-center items-center py-10 sm:py-16 z-50">
                    <div className="relative flex flex-col lg:max-w-4xl w-full bg-white shadow-lg transition-all duration-300 max-h-[90vh]">
                        <div
                            className="w-full p-4 flex justify-end bg-black z-[100]"
                            onClick={handleClose}
                        >
                            <Minimize className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col overflow-y-auto">
                            <div className='flex flex-col p-6'>
                                <div className="flex items-center justify-between mb-6 pb-2">
                                    <h1 className="text-2xl sm:text-4xl  peace-font-medium">
                                        {activeProject.name}
                                    </h1>
                                </div>

                                <div className="text-base sm:text-lg font-light whitespace-pre-line leading-relaxed">
                                    {highlightTechnologies(activeProject.alldescription)}
                                </div>
                                <div className='mt-4 text-sm text-gray-500'>
                                    {activeProject.github && (
                                        <a
                                            href={activeProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black flex items-center gap-1 text-sm hover:underline"
                                            >
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </a>
                                    )}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )

}