export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid place-items-center rounded-full border border-amber-200 bg-amber-50 font-serif tracking-tight text-neutral-800 ${className}`}
    >
      VS
    </span>
  );
}
