import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { useRef } from "react";
import { techIcons } from "./icons";

const positions = [
  [0, 0, 0],
  [2.9, 1.1, -1],
  [-2.6, -0.9, -1.5],
  [2.7, -1.1, 0.5],
  [-1.7, 1.3, 0.5],
  [1.3, -1.5, -0.6],
];

function FloatingIcons({ icons, position, scale }) {
  const group = useRef(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {icons.map((icon, i) => (
        <Float
          key={icon.name}
          speed={1.5 + i * 0.25}
          rotationIntensity={0.3}
          floatIntensity={0.8}
        >
          <Html center position={positions[i]} zIndexRange={[20, 0]}>
            <div
              style={{
                width: 60,
                height: 60,
                background: "#ffffff",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill={icon.stroke ? "none" : icon.color}
                stroke={icon.stroke ? icon.color : "none"}
                strokeWidth={icon.stroke ? 1.8 : 0}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={icon.d} />
              </svg>
            </div>
          </Html>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeScene({
  icons = techIcons,
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
      <FloatingIcons icons={icons} position={position} scale={scale} />
    </Canvas>
  );
}