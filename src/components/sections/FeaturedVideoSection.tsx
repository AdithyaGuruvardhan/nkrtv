import { useRef, useState } from 'react';

export default function FeaturedVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

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
    vid.play().catch(() => {});
  };

  return (
    <section id="featured-video" className="relative mx-auto w-full max-w-[1510px] overflow-hidden bg-black px-4 sm:px-6 lg:px-10">
      {/* Video */}
      <video
        ref={videoRef}
        className="block h-[300px] w-full object-cover sm:h-[400px] md:h-[480px] lg:h-[760px]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://nkrtv.in/wp-content/uploads/2026/01/Promo-01_Super-Kannadiga_NKR_V2-1-1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.80)] via-[rgba(0,0,0,0.15)] to-transparent" />

      {/* Bottom content bar */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 px-6 pb-7 pt-10 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:pb-10">
        {/* Left: Title + description */}
        <div className="max-w-lg">
          <h2 className="mb-2 text-[22px] font-extrabold text-white sm:text-[28px] md:text-[32px]">
            Super Kannadiga
          </h2>
          <p className="text-[13px] font-medium leading-relaxed text-[rgba(255,255,255,0.85)] sm:text-[15px]">
            Experience the ultimate celebration of Karnataka's rich heritage and culture.
            <br className="hidden sm:block" />
            Join us on this extraordinary journey.
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleWatchNow}
            className="rounded-[6px] bg-[#E63E1A] px-6 py-3 text-[14px] font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#c93212] active:scale-95"
          >
            Watch Now
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 rounded-[6px] border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.12)] px-4 py-3 text-[13px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-[rgba(255,255,255,0.22)]"
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
