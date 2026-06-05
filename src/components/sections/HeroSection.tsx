import { useState, useRef, useEffect, useCallback } from 'react';

const slides = [
  {
    src: '/videos/hero1.webm',
    poster: '/images/hero/slide1-poster.jpg',
  },
  {
    src: '/videos/hero2.webm',
    poster: '/images/hero/slide2-poster.jpg',
  },
  {
    src: '/videos/hero3.webm',
    poster: '/images/hero/slide3-poster.jpg',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([true, false, false]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play active, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentSlide) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  // Pre-load next slide
  useEffect(() => {
    const next = (currentSlide + 1) % slides.length;
    setLoaded((prev) => {
      if (prev[next]) return prev;
      const updated = [...prev];
      updated[next] = true;
      return updated;
    });
  }, [currentSlide]);

  const nextSlide = useCallback(() => setCurrentSlide((p) => (p + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length), []);

  return (
    <section className="mt-[78px] flex w-full flex-1 bg-[#fffdf9] lg:mt-[92px]">
      <div className="w-full">
        <div className="relative h-[320px] w-full overflow-hidden bg-black sm:h-[430px] lg:h-[520px] xl:h-[560px]">

          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.poster}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority={index === 0 ? 'high' : 'low'}
              />
              {loaded[index] && (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={slide.poster}
                >
                  <source src={slide.src} type="video/webm" />
                </video>
              )}
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 z-[11] bg-black/50 md:bg-[linear-gradient(90deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.20)_36%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.55)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[12] h-28 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="absolute left-0 right-0 top-1/2 z-[13] -translate-y-1/2 px-5 text-white sm:left-[6vw] sm:right-auto sm:max-w-[620px] sm:px-0 lg:max-w-[720px]">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#FFC107] sm:text-[13px]">NKR TV Kannada</p>
            <h1 className="text-[26px] font-black uppercase leading-[1.05] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-[36px] lg:text-[58px]">
              ಅಣು ಅಣುವಿನಲ್ಲೂ<br />
              <span className="text-[#FFC107]">ಕನ್ನಡತನ</span>
            </h1>
            <p className="mt-3 text-[13px] font-medium leading-relaxed text-white/90 sm:mt-5 sm:text-[18px]">
              Creating positive entertainment & <br /> celebrating Karnataka&apos;s rich heritage, culture, & stories.
            </p>
            <div className="mt-4 flex items-center gap-3 sm:mt-7">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-[5px] bg-[linear-gradient(135deg,#D11212,#F05B19)] px-6 py-3 text-[14px] font-extrabold uppercase text-white shadow-[0_8px_20px_rgba(209,18,18,0.28)]"
              >
                Watch Live
              </a>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-white/25 md:h-12 md:w-12"
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-white/25 md:h-12 md:w-12"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
