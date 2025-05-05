import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Galaxy = ({ count = 10000, radius = 10, branches = 3, spin = 2 }) => {
  const pointsRef = useRef();

  // Generate spiral galaxy positions and colors
  const { positions, colors } = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const branch = i % branches; // Assign a branch
      const angle = (branch / branches) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
      const distance = Math.pow(Math.random(), 2) * radius;

      const x = Math.cos(angle + distance * spin) * distance;
      const y = (Math.random() - 0.5) * 0.5; // Random height variation
      const z = Math.sin(angle + distance * spin) * distance;

      posArray.set([x, y, z], i * 3);

      // Calculate color based on distance (closer to center = darker)
      const normalizedDistance = distance / radius;
      const colorValue = normalizedDistance / 1.23; // Closer to center = darker
      colorArray.set([colorValue, colorValue, colorValue], i * 3);
    }

    return { positions: posArray, colors: colorArray };
  }, [count, radius, branches, spin]);

  // Swirling animation
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.005} />
    </points>
  );
};

export default Galaxy;
