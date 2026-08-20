import Logo from "./Logo";

export default function Loader({ done }) {
  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-6 bg-base-100 transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="loader-logo">
        <Logo />
      </div>
      <div className="loader-text font-bold tracking-widest">
        UTKARSH TURKANE
      </div>
      <div className="loader-bar h-1 w-48 overflow-hidden rounded-full bg-base-200">
        <div className="loader-bar-fill h-full rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>
    </div>
  );
}