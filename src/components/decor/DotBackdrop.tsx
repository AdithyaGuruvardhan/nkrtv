type DotBackdropProps = {
  className?: string;
};

export default function DotBackdrop({ className = '' }: DotBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full opacity-40 ${className}`}
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(230,62,26,0.22) 1.5px, transparent 1.5px)',
        backgroundSize: '18px 18px',
        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 68%)',
        maskImage: 'radial-gradient(circle at center, black 0%, transparent 68%)',
      }}
    />
  );
}
