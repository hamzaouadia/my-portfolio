import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Constants
const POINT_COUNT = 1000;
const BOUNDS = 50;
const MAX_SPEED = 0.1;
const SEPARATION_DISTANCE = 5;
const NEIGHBOR_DISTANCE = 20;
const BOID_SIZE = 0.5;
const MOUSE_AVOID_DIST = 10;
const MOUSE_AVOID_FORCE = 0.1;

const BoidAlgo = () => {
  const pointsRef = useRef();
  const mouse = useRef(new THREE.Vector3(0, 0, 0));

  const positions = useRef(new Array(POINT_COUNT).fill().map(() => new THREE.Vector3()));
  const velocities = useRef(new Array(POINT_COUNT).fill().map(() => new THREE.Vector3()));

  // Initialize boids
  useEffect(() => {
    for (let i = 0; i < POINT_COUNT; i++) {
      positions.current[i].set(
        Math.random() * BOUNDS * 2 - BOUNDS,
        Math.random() * BOUNDS * 2 - BOUNDS,
        Math.random() * BOUNDS * 2 - BOUNDS
      );
      velocities.current[i].set(
        Math.random() * 0.2 - 0.1,
        Math.random() * 0.2 - 0.1,
        Math.random() * 0.2 - 0.1
      );
    }

    // Set initial buffer geometry
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < POINT_COUNT; i++) {
        posAttr.setXYZ(i, positions.current[i].x, positions.current[i].y, positions.current[i].z);
      }
      posAttr.needsUpdate = true;
    }
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current.set(x * BOUNDS, y * BOUNDS, 0); // Keep z = 0
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Boid behaviors
  const separation = (boid, index) => {
    const steer = new THREE.Vector3();
    let count = 0;

    positions.current.forEach((other, i) => {
      if (i !== index) {
        const dist = boid.distanceTo(other);
        if (dist < SEPARATION_DISTANCE && dist > 0) {
          steer.add(boid.clone().sub(other).normalize().divideScalar(dist));
          count++;
        }
      }
    });

    return count > 0 ? steer.divideScalar(count) : steer;
  };

  const alignment = (boid, index) => {
    const avgVel = new THREE.Vector3();
    let count = 0;

    positions.current.forEach((other, i) => {
      if (i !== index && boid.distanceTo(other) < NEIGHBOR_DISTANCE) {
        avgVel.add(velocities.current[i]);
        count++;
      }
    });

    return count > 0 ? avgVel.divideScalar(count).normalize().multiplyScalar(0.05) : avgVel;
  };

  const cohesion = (boid, index) => {
    const center = new THREE.Vector3();
    let count = 0;

    positions.current.forEach((other, i) => {
      if (i !== index && boid.distanceTo(other) < NEIGHBOR_DISTANCE) {
        center.add(other);
        count++;
      }
    });

    return count > 0
      ? center.divideScalar(count).sub(boid).normalize().multiplyScalar(0.05)
      : new THREE.Vector3();
  };

  const avoidMouse = (boid) => {
    const dist = boid.distanceTo(mouse.current);
    if (dist < MOUSE_AVOID_DIST) {
      return boid.clone().sub(mouse.current).normalize().multiplyScalar(MOUSE_AVOID_FORCE);
    }
    return new THREE.Vector3();
  };

  // Animation loop
  useFrame(() => {
    const posAttr = pointsRef.current.geometry.attributes.position;

    for (let i = 0; i < POINT_COUNT; i++) {
      const pos = positions.current[i];
      const vel = velocities.current[i];

      const sep = separation(pos, i);
      const ali = alignment(pos, i);
      const coh = cohesion(pos, i);
      const mouseAvoid = avoidMouse(pos);

      vel.add(sep).add(ali).add(coh).add(mouseAvoid);
      vel.clampLength(0, MAX_SPEED);
      pos.add(vel);

      // Bounds check — bounce effect
      if (pos.x > BOUNDS || pos.x < -BOUNDS) vel.x *= -1;
      if (pos.y > BOUNDS || pos.y < -BOUNDS) vel.y *= -1;
      if (pos.z > BOUNDS || pos.z < -BOUNDS) vel.z *= -1;

      // Keep boid inside space
      pos.x = THREE.MathUtils.clamp(pos.x, -BOUNDS, BOUNDS);
      pos.y = THREE.MathUtils.clamp(pos.y, -BOUNDS, BOUNDS);
      pos.z = THREE.MathUtils.clamp(pos.z, -BOUNDS, BOUNDS);

      // Update buffer
      posAttr.setXYZ(i, pos.x, pos.y, pos.z);
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(POINT_COUNT * 3)}
          count={POINT_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={BOID_SIZE} sizeAttenuation color="black" />
    </points>
  );
};

export default BoidAlgo;
