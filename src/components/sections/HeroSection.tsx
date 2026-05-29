import { useState, useRef, useEffect } from 'react';

const videos = [
  "https://nkrtv.in/wp-content/uploads/2026/01/NKRTV_Kannada_720P.mp4",
  "https://nkrtv.in/wp-content/uploads/2026/01/Promo-01_Super-Kannadiga_NKR_V2-1-1.mp4",
  "https://nkrtv.in/wp-content/uploads/2026/01/Alle_Arambha_Prema_PROMO_A_Heartwarming_Coastal_Love_Story_New_Serial_on_NKRTV_Kannada_serial_720P.mp4"
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Manage video playback based on active slide
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="mt-[80px] flex flex-1 px-4 py-6 sm:mt-[100px] sm:px-6 lg:mx-auto lg:mt-[104px] lg:w-[90vw] lg:max-w-[1200px] lg:px-0 lg:py-8">
      {/* Kept the original gradient border unchanged as requested */}
      <div className="w-full rounded-[2rem] bg-[linear-gradient(90deg,#FFC107_0%,#FF5A3C_23%,#BD2E8B_49%,#5B2D91_75%,#1D3FA3_100%)] p-1.5 shadow-[0_20px_60px_rgba(29,63,163,0.14)]">
        
        {/* Slider Container replacing the single video */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.7rem] bg-black md:aspect-[2/1] lg:aspect-[18/9]">
          
          {videos.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
              }`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload={index === 0 ? "auto" : "none"}
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/40 md:h-12 md:w-12"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/40 md:h-12 md:w-12"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {videos.map((_, index) => (
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
