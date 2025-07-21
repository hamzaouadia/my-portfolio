import { useState } from 'react';

import HeadLine from '../components/HeadLine';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import ShowProject from '../components/ShowProject';


type Project = {
  name: string;
  github: string;
  description: string;
  alldescription: string;
};

export default function Home() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    
    return (
        <>
        <ShowProject
            activeProject={activeProject}
            setActiveProject={setActiveProject}
        />

        <div className='relative z-100 overflow-hidden'>
            <HeadLine />
            <About />
            <Education />
            <Projects setActiveProject={setActiveProject} />
            <Connect />
        </div>
        </>
    );
}
