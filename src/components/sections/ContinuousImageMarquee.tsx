type ContinuousImageMarqueeProps = {
  images: string[];
  className?: string;
  imageClassName?: string;
  imageObjectPositionClassName?: string;
  imageScaleClassName?: string;
  itemClassName?: string;
  heightClassName?: string;
  durationSeconds?: number;
  repeatCount?: number;
  alt?: string;
};

export default function ContinuousImageMarquee({
  images,
  className = '',
  imageClassName = '',
  imageObjectPositionClassName = 'object-bottom',
  imageScaleClassName = 'scale-[1.6]',
  itemClassName = '',
  heightClassName = 'h-[148px] sm:h-[168px]',
  durationSeconds = 24,
  repeatCount = 4,
  alt = 'Decorative strip',
}: ContinuousImageMarqueeProps) {
  const repeatedGroups = Array.from({ length: repeatCount }, (_, index) => index);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <style>{`
        @keyframes continuousImageMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-25%, 0, 0);
          }
        }
      `}</style>
      <div
        className="flex w-max items-stretch gap-0 will-change-transform"
        style={{ animation: `continuousImageMarquee ${durationSeconds}s linear infinite` }}
      >
        {repeatedGroups.map((groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 items-stretch gap-0">
            {images.map((src, index) => (
              <div
                key={`${groupIndex}-${src}-${index}`}
                className={`flex w-[165px] shrink-0 overflow-hidden sm:w-[195px] ${heightClassName} ${itemClassName}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className={`h-full w-full object-contain ${imageObjectPositionClassName} ${imageScaleClassName} ${imageClassName}`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
