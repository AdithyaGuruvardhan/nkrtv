import { useEffect, useMemo, useRef, useState } from 'react';

type ContentCard = {
  title: string;
  video: string;
  image: string;
  badge: string;
  badgeColor: string;
  numberColor: string;
};

const cards: ContentCard[] = [
  {
    title: 'DHARMA JYOTHI',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails.jpg',
    badge: 'New Episode',
    badgeColor: '#FFC107',
    numberColor: '#FFC107',
  },
  {
    title: 'AMRUTHA VACHANA',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback-1.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-1.jpg',
    badge: 'New Season',
    badgeColor: '#FF5A3C',
    numberColor: '#FF5A3C',
  },
  {
    title: 'BHAAGI',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/2025_NKRTV_720P.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-2.jpg',
    badge: 'Recently Added',
    badgeColor: '#BD2E8B',
    numberColor: '#BD2E8B',
  },
  {
    title: 'DR CINEMA',
    video:
      'https://nkrtv.in/wp-content/uploads/2026/01/Dr._Cinema_PROMO_Behind-the-Scenes_Truths_of_Kannada_Film_Industry_Ganesh_Kasaragod_NKR_TV_1080P.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-3.jpg',
    badge: 'Trending',
    badgeColor: '#5B2D91',
    numberColor: '#5B2D91',
  },
  {
    title: 'DEAR MOMENTS',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback-2.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-4.jpg',
    badge: 'Top Pick',
    badgeColor: '#1D3FA3',
    numberColor: '#1D3FA3',
  },
];

function ShowcaseCard({
  card,
  index,
  onOpen,
}: {
  card: ContentCard;
  index: number;
  onOpen: (card: ContentCard) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => { });
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const cardNumber = useMemo(() => String(index + 1).padStart(2, '0'), [index]);

  return (
    <div
      className="carousel-card group/card relative rounded-[22px] bg-white p-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(92,51,183,0.12)] snap-center min-w-[80vw] flex-[0_0_80vw] xl:min-w-[250px] xl:flex-1"
      data-title={card.title}
      data-video={card.video}
    >
      <div
        className="relative aspect-[3/3.6] cursor-pointer overflow-hidden rounded-[10px] bg-[#eee]"
        onClick={() => onOpen(card)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onOpen(card);
          }
        }}
      >
        <div
          className="absolute left-0 top-0 z-[2] flex h-[40px] w-[44px] items-center justify-center rounded-br-[16px] rounded-tl-[10px] text-center text-[18px] font-[800] tracking-[-0.5px] text-white"
          style={{ backgroundColor: card.numberColor }}
        >
          {cardNumber}
        </div>
        <div
          className="absolute left-[54px] top-[10px] z-[2] rounded-[20px] px-[10px] py-[4px] text-[10px] font-[600] tracking-[0.3px] text-white"
          style={{ backgroundColor: card.badgeColor }}
        >
          {card.badge}
        </div>
        <img
          src={card.image}
          alt={card.title}
          className="block h-full w-full object-cover object-center transition-opacity duration-300 group-hover/card:opacity-0"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          loop
          muted
          playsInline
          preload="none"
          ref={videoRef}
        >
          <source src={card.video} type="video/mp4" />
        </video>
      </div>
      <div className="mt-[16px] pb-[4px] pl-0">
        <div className="mb-[4px] text-[15px] font-[700] uppercase text-[#211A4D]">{card.title}</div>
        <div className="text-[10px] font-[700] uppercase tracking-[0.5px] text-[#5B2D91]">NKR TV KANNADA</div>
      </div>
    </div>
  );
}

export default function ContentShowcaseSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeCard, setActiveCard] = useState<ContentCard | null>(null);

  const getScrollStep = () => {
    const track = trackRef.current;
    if (!track) return 420;
    const card = track.querySelector<HTMLElement>('.carousel-card');
    if (!card) return 420;
    const gap = Number.parseFloat(getComputedStyle(track).gap || '20') || 20;
    return Math.round(card.getBoundingClientRect().width + gap);
  };

  const scrollTrack = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction === 'left' ? -getScrollStep() : getScrollStep(),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;

    if (activeCard) {
      video.src = activeCard.video;
      video.load();
      video.play().catch(() => { });
      document.body.style.overflow = 'hidden';
      return;
    }

    video.pause();
    video.removeAttribute('src');
    video.load();
    document.body.style.overflow = '';
  }, [activeCard]);

  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    [],
  );

  return (
    <section className="relative isolate overflow-x-hidden bg-[#fbfaff] text-[#1a1a1a]">
      <div className="absolute left-[-130px] top-[250px] -z-10 h-[260px] w-[260px] rounded-full bg-[linear-gradient(180deg,#FFC107_0%,#FF5A3C_23%,#BD2E8B_49%,#5B2D91_75%,#1D3FA3_100%)] opacity-50 md:left-[-170px] md:top-[-160px] md:h-[420px] md:w-[420px]" />
      {/* <div className="absolute bottom-0 right-0 -z-[2] h-[200px] w-[140px] rounded-tl-[140px] rounded-tr-[200px] bg-[linear-gradient(180deg,#FF5A3C_0%,#BD2E8B_50%,#1D3FA3_100%)] [border-top-left-radius:140px_200px]" /> */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-[28px] opacity-90 bg-[linear-gradient(90deg,#FFC107_0%,#FF5A3C_23%,#BD2E8B_49%,#5B2D91_75%,#1D3FA3_100%)]" />

      <div className="mx-auto w-full lg:w-[90vw] lg:max-w-[90vw] px-2.5 py-5 md:px-5 lg:px-0 md:pb-[40px] md:pt-[38px]">
        <div className="mb-2.5 flex flex-col items-start gap-[15px] px-2.5 md:flex-row md:items-end md:justify-between md:px-[60px] lg:px-0">
          <div className="relative inline-block">
            <div className="mb-[12px] flex items-center gap-[14px] text-[12px] font-[700] uppercase tracking-[0.04em] text-[#5B2D91]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#FF5A3C]" />
              <span>Explore our best</span>
            </div>
            <h2 className="font-inter text-[32px] font-[800] tracking-[-0.02em] text-[#211A4D] md:text-[42px]">
              TOP 5 CONTENT
            </h2>
            <div className="absolute bottom-[-6px] left-0 h-[4px] w-[72px] rounded-[999px] bg-[linear-gradient(90deg,#FFC107_0%,#FF5A3C_50%,#BD2E8B_100%)]" />
            <p className="mt-[18px] text-[16px] font-[600] text-[#5B2D91]">ನೋಡಿ ಕನ್ನಡದ ಬೆಸ್ಟ್ ಕಂಟೆಂಟ್</p>
          </div>
          <a
            href="/"
            className="group flex items-center gap-[10px] rounded-[30px] border-[1.5px] border-transparent bg-[linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#FF5A3C,#5B2D91)_border-box] px-[24px] py-[10px] text-[13px] font-[700] no-underline transition-all duration-300 hover:bg-[linear-gradient(90deg,#FF5A3C,#5B2D91)]"
          >
            <span className="bg-[linear-gradient(90deg,#FF5A3C,#BD2E8B)] bg-clip-text text-transparent group-hover:text-white group-hover:[-webkit-text-fill-color:white]">
              VIEW ALL CONTENT
            </span>
            <span className="text-[16px] text-[#5B2D91] group-hover:text-white group-hover:[-webkit-text-fill-color:white]">
              →
            </span>
          </a>
        </div>

        <div className="relative mt-[50px] flex items-center gap-5 lg:mt-[56px]">
          <button
            type="button"
            className="z-10 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-105 xl:h-[40px] xl:w-[40px]"
            aria-label="Scroll left"
            onClick={() => scrollTrack('left')}
          >
            <span className="text-[12px] font-[500] leading-none text-[#FF5A3C] xl:text-[22px]">‹</span>
          </button>

          <div
            ref={trackRef}
            className="flex flex-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-x-auto snap-x snap-mandatory gap-[15px] pb-[30px] xl:snap-none xl:gap-[20px] xl:pb-[20px]"
          >
            {cards.map((card, index) => (
              <ShowcaseCard key={card.title} card={card} index={index} onOpen={setActiveCard} />
            ))}
          </div>

          <button
            type="button"
            className="z-10 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-105 xl:h-[40px] xl:w-[40px]"
            aria-label="Scroll right"
            onClick={() => scrollTrack('right')}
          >
            <span className="text-[12px] font-[500] leading-none text-[#1D3FA3] xl:text-[22px]">›</span>
          </button>
        </div>

        <div className="mb-[26px] mt-[34px] flex justify-center gap-[12px]">
          <div className="h-[10px] w-[10px] cursor-pointer rounded-full bg-[#FF5A3C] transition-colors duration-300" />
          <div className="h-[10px] w-[10px] cursor-pointer rounded-full bg-[#b0a3c6] transition-colors duration-300" />
          <div className="h-[10px] w-[10px] cursor-pointer rounded-full bg-[#b0a3c6] transition-colors duration-300" />
          <div className="h-[10px] w-[10px] cursor-pointer rounded-full bg-[#b0a3c6] transition-colors duration-300" />
          <div className="h-[10px] w-[10px] cursor-pointer rounded-full bg-[#b0a3c6] transition-colors duration-300" />
          <div className="h-[10px] w-[10px] cursor-pointer rounded-full bg-[#b0a3c6] transition-colors duration-300" />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[9999] items-center justify-center bg-[rgba(0,0,0,0.88)] p-[16px] ${activeCard ? 'flex' : 'hidden'
          }`}
        aria-hidden={!activeCard}
      >
        <div
          className="relative overflow-hidden rounded-[12px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)] h-[56vh] w-[96vw] md:h-[min(78vh,720px)] md:w-[min(1200px,96vw)]"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between gap-[12px] bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.35)] px-[12px] py-[10px]">
            <div className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-[700] text-white">
              {activeCard ? `Now playing: ${activeCard.title}` : 'Now playing'}
            </div>
            <button
              className="cursor-pointer rounded-full border-none bg-[rgba(255,255,255,0.12)] px-[12px] py-[8px] font-[800] text-white hover:bg-[rgba(255,255,255,0.18)]"
              type="button"
              onClick={() => setActiveCard(null)}
            >
              ✕
            </button>
          </div>
          <video
            className="block h-full w-full bg-black object-contain"
            controls
            autoPlay
            playsInline
            preload="none"
            ref={modalVideoRef}
          />
        </div>
      </div>
    </section>
  );
}
