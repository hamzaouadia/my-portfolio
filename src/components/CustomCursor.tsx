import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;

      gsap.set(cursor, {
        x: pos.x,
        y: pos.y,
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    const handleEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      gsap.to(cursor, {
        width: rect.width + 10,
        height: rect.height + 10,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        ease: "power3.out",
        duration: 0.3,
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
          width: 20,
          height: 20,
          ease: "power3.out",
          duration: 0.3,
        });
      };

      const hoverables = document.querySelectorAll(".hover-target");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });

      return () => {
        document.removeEventListener("mousemove", move);
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", handleEnter);
          el.removeEventListener("mouseleave", handleLeave);
        });
      };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor-hole"
        className="md:opacity-100 opacity-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }
      }
      />
      <style>{`body { cursor: none; }`}</style>
    </>
  );
}
