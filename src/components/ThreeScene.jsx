import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function FloatingShapes() {
  const group = useRef(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
      group.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={group} position={[2.4, 0, 0]}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh>
          <torusKnotGeometry args={[1.15, 0.34, 160, 24]} />
          <meshStandardMaterial
            color="#7c3aed"
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2.8, 0.9, -1]}>
          <icosahedronGeometry args={[0.75, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[-2.3, -0.8, -1.5]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.7} floatIntensity={0.8}>
        <mesh position={[2.6, -1, 0.5]}>
          <sphereGeometry args={[0.5, 24, 24]} />
          <meshStandardMaterial
            color="#22d3ee"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      className="pointer-events-none"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <FloatingShapes />
    </Canvas>
  );
}