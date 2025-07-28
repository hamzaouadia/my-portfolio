import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isOverTarget = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const CURSOR_SIZE = 20;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;

      if (!isOverTarget.current) {
        gsap.set(cursor, {
          x: pos.x,
          y: pos.y,
        });
      }

      requestAnimationFrame(animate);
    };

    const hoverableHandleEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      isOverTarget.current = true;

      gsap.to(cursor, {
        width: rect.width,
        height: rect.height,
        duration: 0.1,
      });
    };

    const differenceHandleEnter = () => {
      gsap.to(cursorRef.current, {
        width: 200,
        height: 200,
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        duration: 0.1,
      });
    };

    const differenceHandleLeave = () => {
      gsap.to(cursor, {
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        scale: 1,
        duration: 0.1,
        borderRadius: "0%",
        backgroundColor: "transparent",
      });
    }

    const hoverableHandleMove = (e: Event) => {
      if (!isOverTarget.current || !cursor) return;

      const mouseEvent = e as MouseEvent;
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mouseEvent.clientX - cx;
      const dy = mouseEvent.clientY - cy;

      gsap.to(cursor, {
        x: cx + dx * 0.09,
        y: cy + dy * 0.09,
        scale: 1,
        duration: 0.1,
      });
    };

    const hoverableHandleLeave = () => {
      isOverTarget.current = false;
      gsap.to(cursor, {
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        scale: 1,
        duration: 0.1,
        borderRadius: "0%",
      });
    };

    const hoverables = document.querySelectorAll(".hover-target");
    const hoverDifference = document.querySelectorAll(".hover-difference");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", hoverableHandleEnter);
      el.addEventListener("mousemove", hoverableHandleMove);
      el.addEventListener("mouseleave", hoverableHandleLeave);
    });
    
    hoverDifference.forEach((el) => {
      el.addEventListener("mouseenter", differenceHandleEnter);
      el.addEventListener("mouseleave", differenceHandleLeave);
    });

    document.addEventListener("mousemove", move);
    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", hoverableHandleEnter);
        el.removeEventListener("mousemove", hoverableHandleMove);
        el.removeEventListener("mouseleave", hoverableHandleLeave);
      });
      hoverDifference.forEach((el) => {
        el.removeEventListener("mouseenter", differenceHandleEnter);
        el.removeEventListener("mouseleave", differenceHandleLeave);
      });
      isOverTarget.current = false;
      gsap.killTweensOf(cursor);
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
        }}
      />
      <style>{`body { cursor: none; }`}</style>
    </>
  );
}
