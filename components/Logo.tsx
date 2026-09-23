export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-accent">T</span>he<span className="text-accent">C</span>ourt<span className="text-accent">S</span>ociety
    </span>
  );
}
