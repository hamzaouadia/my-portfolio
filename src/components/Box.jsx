import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
    const meshRef = useRef();
    let time = useRef(Math.random() * 1000);

    useFrame(() => {
        if (meshRef.current) {
        // Glitchy Mode (Random Jitter & Movement)
        meshRef.current.rotation.x += Math.random() * 0.02;
        meshRef.current.rotation.y += Math.random() * 0.02;

        time.current += Math.random() * 0.02;

        const glitchY = (Math.random() - 0.5) * 0.5;
        const glitchZ = (Math.random() - 0.5) * 0.5;

        // Movement restricted to the right side (positive x-axis)
        const baseX = Math.sin(time.current * 0.1) * 20;
        const glitchX = Math.random() * 0.5; // Only positive glitch
        let posX = Math.max(10, baseX) + glitchX;
        let posY = Math.cos(time.current * 0.8) * 5 + glitchY;
        let posZ = Math.sin(time.current * 0.6) * 5 + glitchZ;

        // Constrain position within window bounds
        const windowWidth = window.innerWidth / 100; // Scale to match 3D units
        const windowHeight = window.innerHeight / 100; // Scale to match 3D units

        posX = Math.min(Math.max(posX, -windowWidth / 4), windowWidth / 4);
        posY = Math.min(Math.max(posY, -windowHeight / 4), windowHeight / 4);

        meshRef.current.position.x = posX;
        meshRef.current.position.y = posY;
        meshRef.current.position.z = posZ;

        meshRef.current.material.wireframe = Math.random() > 0.01;
        }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[8, 8, 8]} />
      <meshStandardMaterial color={"black"}/>
    </mesh>
  );
};

export default Box;
