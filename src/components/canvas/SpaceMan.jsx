import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const SpaceMan = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(isMobile ? "/spaceMan/scene-mobile-draco.glb" : "/spaceMan/scene-draco.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach(action => action.play());
    }
  }, [actions]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.8} position-y={-1.5} rotation-y={0} />
    </group>
  );
};

const SpaceManCanvas = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(max-width: 768px)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      useGLTF.preload("/spaceMan/scene-mobile-draco.glb");
    } else {
      useGLTF.preload("/spaceMan/scene-draco.glb");
    }
  }, [isMobile]);

  return (
    <Canvas
      shadows={!isMobile}
      frameloop='always'
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SpaceMan isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceManCanvas;
