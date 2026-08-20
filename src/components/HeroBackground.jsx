export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.14" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.14" />
          </linearGradient>
          <radialGradient id="hero-blob-1" cx="25%" cy="20%" r="55%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-blob-2" cx="80%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-wave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#hero-bg)" />

        <circle cx="280" cy="160" r="320" fill="url(#hero-blob-1)" />
        <circle cx="1180" cy="260" r="360" fill="url(#hero-blob-2)" />

        <g fill="none" stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="1.5">
          <circle cx="720" cy="420" r="240" />
          <circle cx="720" cy="420" r="170" />
          <circle cx="720" cy="420" r="100" />
        </g>

        <g fill="#7c3aed" fillOpacity="0.25">
          <circle cx="180" cy="620" r="8" />
          <circle cx="430" cy="180" r="5" />
          <circle cx="980" cy="150" r="6" />
          <circle cx="1260" cy="600" r="9" />
        </g>

        <g fill="#06b6d4" fillOpacity="0.22">
          <circle cx="560" cy="700" r="6" />
          <circle cx="850" cy="140" r="5" />
          <circle cx="1320" cy="420" r="7" />
        </g>

        <path
          d="M0 760 C240 700 420 820 720 780 C1020 740 1200 660 1440 720 L1440 900 L0 900 Z"
          fill="url(#hero-wave)"
        />
        <path
          d="M0 820 C300 860 560 780 820 820 C1080 860 1280 800 1440 840 L1440 900 L0 900 Z"
          fill="#7c3aed"
          fillOpacity="0.06"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-base-100/50 via-base-100/10 to-base-100/70" />
      <div className="absolute inset-0 bg-base-100/10" />
      <div className="dot-grid absolute inset-0 opacity-40" />
    </div>
  );
}