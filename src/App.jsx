import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import BackAnimation from "./components/BackAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = ["home", "about", "skills", "projects", "education", "contact"];
const horizontalSections = ["about", "skills", "projects", "education"];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (!element) return;

    const horizontalTrigger = ScrollTrigger.getById("horizontalScroll");

    if (horizontalSections.includes(target) && horizontalTrigger) {
      const targetIndex = horizontalSections.indexOf(target);
      const scrollRange = horizontalTrigger.end - horizontalTrigger.start;
      const scrollPos = horizontalTrigger.start + (targetIndex / (horizontalSections.length - 1)) * scrollRange;

      gsap.to(window, {
        scrollTo: { y: scrollPos, autoKill: false },
        duration: 1,
        ease: "power2.inOut",
        ...(currentIndex === 0 || currentIndex === 5 ? { delay: 1 } : {}),
      });
    }
  };
  
  const handleNavClick = (index) => {
    const targetName = sections[index];
    scrollToSection(targetName);
    setCurrentIndex(index);
    setActiveIndex(index);    // track the clicked link
  };

  useEffect(() => {
    const content = gsap.utils.toArray(".horizontal-sections .content");

    // console.log(-100 * (content.length - 1));
  
    const horizontalAnimation = gsap.to(content, {
      xPercent: -100 * (content.length - 1),
      ease: "none",
      onUpdate: () => {
        const progress = horizontalAnimation.progress();
        const index = Math.round(progress * (content.length - 1));
        setCurrentIndex(index + 1); // +1 to offset from 'home'
        setActiveIndex(index + 1);
      },
      
    });
  
    ScrollTrigger.create({
      id: "horizontalScroll",
      trigger: ".horizontal-sections",
      pin: true,
      scrub: 0,
      snap: 1 / (content.length - 1),
      end: () => `+=${(content.length - 1) * window.innerWidth}`,
      animation: horizontalAnimation,
    });
  
    // ScrollTrigger for Home
    ScrollTrigger.create({
      trigger: "#home",
      end: "bottom 50%",
      onEnter: () => {
        setCurrentIndex(0);
        setActiveIndex(0);
      },
      onEnterBack: () => {
        setCurrentIndex(0);
        setActiveIndex(0);
      },
      // markers: true, // optional: remove in production
    });
  
    // ScrollTrigger for Contact
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top center",
      onEnter: () => {
        setCurrentIndex(sections.length - 1);
        setActiveIndex(sections.length - 1);
      },
      onEnterBack: () => {
        setCurrentIndex(sections.length - 1);
        setActiveIndex(sections.length - 1);
      },
    });
  
    return () => {
      ScrollTrigger.getById("horizontalScroll")?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(window);
    };
  }, []);

  return (
    <div className="bg-color-eaebf5 text-black">
      <NavBar onNavClick={handleNavClick} activeIndex={activeIndex} />
      {/* <BackAnimation /> */}
      <div className="vertical-section mx-auto z-10 overflow-x-hidden">
        <Element id="home"> <Home /> </Element>
        <div className="horizontal-sections flex h-screen w-screen">
          <Element className="content" id="about"> <About onNavClick={handleNavClick} /> </Element>
          <Element className="content" id="skills"> <Skills /> </Element>
          <Element className="content" id="projects"> <Projects /> </Element>
          <Element className="content" id="education"> <Education /> </Element>
        </div>
        <Element id="contact"> <Contact /> </Element>
      </div>
      <Footer />
    </div>
  );
};

export default App;
