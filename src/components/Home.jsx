import React, { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline()

      tl.to(".h1", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".h1", {
        borderBottom: "1px solid black",
        ease: "power2.inOut",
      })
      .to(".p", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".div-1", {
        scrollTrigger: {
          trigger: ".div-1",
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
      })
      
    return () => tl.kill();
  }, []);

  return (
    <section className="h-screen w-screen p-16 flex flex-col items-center justify-center text-black">
      <div className="div-1">
        <h1
          className="h1 font-bebas opacity-0 font-bold text-shadow-md leading-[1] 
          text-[clamp(1.5rem,20vw,15rem)]"
        >
          Hi, I'm M4k3r
        </h1>
        <p className="p opacity-0 max-w-4xl text-[clamp(1rem,2vw,10rem)] lg:text-[clamp(1rem,1vw,10rem)] mt-4">
          A passionate full-stack developer crafting modern web experiences with React, Gsap, Three.js, Django and Node.js.
          I build fast, responsive, and visually engaging applications that bring ideas to life.
        </p>
      </div>
      
    </section>
  );
};

export default Home;
