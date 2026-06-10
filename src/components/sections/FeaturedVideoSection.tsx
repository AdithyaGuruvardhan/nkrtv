import { useEffect, useRef, useState } from 'react';

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9.75 9A.75.75 0 009 9.75v4.5a.75.75 0 001.5 0v-4.5A.75.75 0 009.75 9zm5.25 0a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FeaturedVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playIntent, setPlayIntent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          return;
        }

        const vid = videoRef.current;
        if (vid && !vid.paused) {
          vid.pause();
        }
        setPlayIntent(false);
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const vid = videoRef.current;
    if (!vid) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    vid.addEventListener('play', onPlay);
    vid.addEventListener('pause', onPause);

    return () => {
      vid.removeEventListener('play', onPlay);
      vid.removeEventListener('pause', onPause);
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || !playIntent) return;
    const vid = videoRef.current;
    if (!vid) return;

    const startPlayback = () => {
      vid.play()
        .then(() => setPlayIntent(false))
        .catch(() => setPlayIntent(false));
    };

    if (vid.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      startPlayback();
      return;
    }

    vid.addEventListener('canplay', startPlayback, { once: true });
    return () => vid.removeEventListener('canplay', startPlayback);
  }, [shouldLoad, playIntent]);

  const handlePlay = () => {
    setShouldLoad(true);
    setPlayIntent(true);
  };

  const handlePause = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();
    setPlayIntent(false);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      handlePause();
      return;
    }
    handlePlay();
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  const handleWatchNow = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = false;
    setMuted(false);
    vid.currentTime = 0;
    setShouldLoad(true);
    setPlayIntent(true);
  };

  return (
    <section
      ref={sectionRef}
      id="featured-video"
      className="mx-auto w-full max-w-[1510px] overflow-hidden bg-[#fffdf9] px-4 py-10 sm:px-6 sm:py-12 lg:px-10"
    >
      <div className="group relative aspect-video w-full overflow-hidden rounded-[8px] bg-black">
        <video
          ref={videoRef}
          className="block h-full w-full"
          muted
          loop
          playsInline
          preload={shouldLoad ? 'auto' : 'none'}
          poster="/images/super_kannadiga_banner.webp"
        >
          {shouldLoad && (
            <>
              <source
                src="/videos/super_kannadiga_new_promo.webm"
                type="video/webm"
              />
              <source
                src="/videos/super_kannadiga_new_promo.mp4"
                type="video/mp4"
              />
            </>
          )}
        </video>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause Super Kannadiga promo' : 'Play Super Kannadiga promo'}
          className={`absolute inset-0 flex items-center justify-center transition-colors ${
            isPlaying
              ? 'bg-transparent hover:bg-black/30'
              : 'bg-black/30 hover:bg-black/40'
          }`}
        >
          {isPlaying ? (
            <PauseIcon className="h-10 w-10 text-white opacity-80 drop-shadow-md transition-opacity group-hover:opacity-100 sm:h-12 sm:w-12" />
          ) : (
            <PlayIcon className="h-10 w-10 text-white drop-shadow-md sm:h-12 sm:w-12" />
          )}
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[38rem]">
          <h2 className="mb-2 text-[22px] font-extrabold text-[#A21D34] sm:text-[28px] md:text-[32px]">
            Super Kannadiga
          </h2>
          <p className="text-[11px] font-medium leading-[1.45] text-[#A21D34] sm:text-[13px] md:text-[15px] lg:text-[16px]">
            <span className="block">Experience the ultimate celebration of Karnataka's rich heritage and culture.</span>
            <span className="block">Join us on this extraordinary journey.</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={handleWatchNow}
            className="rounded-[6px] bg-[#E63E1A] px-6 py-3 text-[14px] font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#c93212] active:scale-95"
          >
            Watch Now
          </button>
          {isPlaying ? (
            <button
              type="button"
              onClick={handlePause}
              className="flex items-center gap-2 rounded-[6px] border border-[#A21D34] px-4 py-3 text-[13px] font-semibold text-[#A21D34] transition-all duration-200 hover:bg-[#A21D34]/10"
            >
              <PauseIcon className="h-4 w-4" />
              Pause
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePlay}
              className="flex items-center gap-2 rounded-[6px] border border-[#A21D34] px-4 py-3 text-[13px] font-semibold text-[#A21D34] transition-all duration-200 hover:bg-[#A21D34]/10"
            >
              <PlayIcon className="h-4 w-4" />
              Play
            </button>
          )}
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 rounded-[6px] border border-[#A21D34] px-4 py-3 text-[13px] font-semibold text-[#A21D34] transition-all duration-200 hover:bg-[#A21D34]/10"
          >
            {muted ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                </svg>
                Unmute
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>
                Mute
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
