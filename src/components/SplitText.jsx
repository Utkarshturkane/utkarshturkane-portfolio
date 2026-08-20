import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplitText({
  text,
  className = "",
  charClassName = "",
  delay = 0,
  stagger = 0.04,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll(".split-char");
    gsap.fromTo(
      chars,
      { y: 40, opacity: 0, rotateX: -90, transformOrigin: "50% 100%" },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger,
        duration: 0.7,
        ease: "back.out(1.7)",
        delay,
      }
    );
  }, [delay, stagger]);

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className={`split-char inline-block will-change-transform ${charClassName}`}
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}