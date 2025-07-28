'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsUpDown } from 'lucide-react';

const Technologies = ['React', 'TypeScript', 'TailwindCSS', 'Docker'];
const SoftSkills = ['Teamwork', 'Communication', 'Problem Solving', 'Adaptability'];

export default function Skills() {
  const words = ['TECH', 'SOFT'];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  const currentSkills = index === 0 ? Technologies : SoftSkills;

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(e.deltaY > 0 ? 1 : -1);
    setIndex((prev) => (prev + (e.deltaY > 0 ? 1 : -1) + words.length) % words.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartY.current === null) return;
    const diffY = touchStartY.current - e.touches[0].clientY;

    if (Math.abs(diffY) > 30) {
      setDirection(diffY > 0 ? 1 : -1);
      setIndex((prev) => (prev + (diffY > 0 ? 1 : -1) + words.length) % words.length);
      touchStartY.current = null;
    }
    e.preventDefault();
  };

  useEffect(() => {
    const el = scrollBoxRef.current;
    if (!el) return;

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('touchstart', handleTouchStart, { passive: false });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section
      id="Skills"
      className="relative bg-white flex flex-row justify-center items-center px-4"
    >
      <div className='p-2 flex flex-col justify-start items-center pt-28 w-full h-full'>
        {/* Scroll indicator */}
        <div className="flex flex-row justify-center text-neutral-400">
          <motion.div
            animate={{ y: [-2, 3, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex"
          >
            <ChevronsUpDown size={20} />
          </motion.div>
          <p className="text-xs mt-1 ml-1">Scroll / Swipe</p>
        </div>

        {/* Word Switcher */}
        <div className="p-2 flex flex-row perspective-[1000px] touch-none">
          <div ref={scrollBoxRef} className="h-full flex flex-col justify-end items-center">
            <div className="flex flex-row">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, rotateX: direction === 1 ? 90 : -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: direction === 1 ? -90 : 90 }}
                  transition={{ duration: 0.5 }}
                  className="px-2 w-[4ch] flex justify-center items-center lg:text-[8vw] text-6xl whitespace-nowrap peace-font-medium"
                >
                  {words[index]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Background SKILLS text */}
        <div className='relative -mt-[2vh]'>
          <p className='peace-font-medium text-[20vw] text-gray-200 leading-none select-none'>
            SKILLS
          </p>
        </div>

        {/* Skill List */}
        <div className="mt-4 z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {currentSkills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm sm:text-base bg-neutral-100 px-4 py-2 rounded-xl shadow-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
