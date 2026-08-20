import { useId } from "react";

export default function Logo({ className = "h-10 w-10" }) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Utkarsh Turkane"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="13"
        fill={`url(#${gradientId})`}
      />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#ffffff"
      >
        UT
      </text>
    </svg>
  );
}