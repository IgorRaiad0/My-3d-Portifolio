import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const DesktopPC = () => {
  const group = useRef();
  const computer = useGLTF("./desktop_pc/scene-draco.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.3) * 0.5;
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={4} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={512}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={1.3}
        position={[0, -2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const DesktopPCCanvas = () => {
  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <DesktopPC />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DesktopPCCanvas;
