import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

const shapeDefs = [
  { geometry: <torusKnotGeometry args={[1.15, 0.34, 160, 24]} />, pos: [0, 0, 0] },
  { geometry: <icosahedronGeometry args={[0.75, 0]} />, pos: [2.8, 0.9, -1] },
  { geometry: <octahedronGeometry args={[0.6, 0]} />, pos: [-2.3, -0.8, -1.5] },
  { geometry: <sphereGeometry args={[0.5, 24, 24]} />, pos: [2.6, -1, 0.5] },
];

function FloatingShapes({ colors, position, scale }) {
  const group = useRef(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
      group.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {shapeDefs.map((shape, i) => (
        <Float
          key={i}
          speed={1.4 + i * 0.3}
          rotationIntensity={0.5}
          floatIntensity={0.9}
        >
          <mesh position={shape.pos}>
            {shape.geometry}
            <meshStandardMaterial
              color={colors[i % colors.length]}
              wireframe
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeScene({
  colors = ["#ec4899", "#4ade80", "#facc15", "#fb923c"],
  position = [2.4, 0, 0],
  scale = 1,
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      className="pointer-events-none"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <FloatingShapes colors={colors} position={position} scale={scale} />
    </Canvas>
  );
}