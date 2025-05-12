import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; // ✅ Import OrbitControls
import Galaxy from "./Galaxy"; // Ensure the correct path
import Box from "./Box";
import BoidAlgo from "./BoidAlgo"; // Ensure the correct path
import CanvasLoader from "./CanvasLoader";

const BackAnimation = () => {
  return (
        <div className="fixed w-full h-full z-0">
            <Canvas camera={{ position: [0, 10, 4] }}>
            {/* <Canvas camera={{ position: [0, 0, 100] }}> */}
              <Suspense fallback={<CanvasLoader />}>
              {/* <Galaxy /> */}
              {/* <BoidAlgo/> */}
              <Box/>
              <ambientLight intensity={0.5} />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
  );
};

export default BackAnimation;
