import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    const ring = ringRef.current;

    const xGlow = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3.out" });
    const yGlow = gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3.out" });

    const onMove = (event) => {
      xGlow(event.clientX);
      yGlow(event.clientY);
      xRing(event.clientX);
      yRing(event.clientY);
    };

    const onOver = (event) => {
      if (event.target.closest("a, button, .btn, input, textarea, select")) {
        gsap.to(ring, {
          scale: 1.8,
          backgroundColor: "rgba(124, 58, 237, 0.12)",
          borderColor: "rgba(6, 182, 212, 0.9)",
          duration: 0.25,
        });
      }
    };

    const onOut = (event) => {
      if (event.target.closest("a, button, .btn, input, textarea, select")) {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(124, 58, 237, 0.7)",
          duration: 0.25,
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}