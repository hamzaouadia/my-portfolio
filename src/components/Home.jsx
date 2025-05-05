import React, { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.set(".h1", { opacity: 0})
    tl.set(".h1", { border: 0})
    tl.set(".p", { opacity: 0})
      .to(".h1", {
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
      .to(".home", {
        scrollTrigger: {
          trigger: ".home",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
        opacity: 0
      })
      
    return () => tl.kill();
  }, []);

  return (
    <section className="home h-screen w-screen p-16 flex flex-col items-center justify-center text-black">
      <div>
        <h1 className="h1 font-bebas-15rem text-9xl font-bold border-b-2">Hi, I'm Maker</h1>
        <p className="p font-light max-w-4xl">
          A passionate full-stack developer crafting modern web experiences with React, Gsap, Three.js, Django and Node.js.
          I build fast, responsive, and visually engaging applications that bring ideas to life.
        </p>

      </div>
    </section>
  );
};

export default Home;
