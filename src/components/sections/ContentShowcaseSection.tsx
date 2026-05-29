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
    badgeColor: '#ffb21d',
    numberColor: '#ffb21d',
  },
  {
    title: 'AMRUTHA VACHANA',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback-1.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-1.jpg',
    badge: 'New Season',
    badgeColor: '#ff7a2f',
    numberColor: '#ff7a2f',
  },
  {
    title: 'BHAAGI',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/2025_NKRTV_720P.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-2.jpg',
    badge: 'Recently Added',
    badgeColor: '#d92a73',
    numberColor: '#d92a73',
  },
  {
    title: 'DR CINEMA',
    video:
      'https://nkrtv.in/wp-content/uploads/2026/01/Dr._Cinema_PROMO_Behind-the-Scenes_Truths_of_Kannada_Film_Industry_Ganesh_Kasaragod_NKR_TV_1080P.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-3.jpg',
    badge: 'Trending',
    badgeColor: '#8a34c1',
    numberColor: '#8a34c1',
  },
  {
    title: 'DEAR MOMENTS',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback-2.mp4',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-thumbnails-4.jpg',
    badge: 'Top Pick',
    badgeColor: '#2452c8',
    numberColor: '#2452c8',
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
    video.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const cardNumber = useMemo(() => String(index + 1).padStart(2, '0'), [index]);

  return (
    <div className="card bb-card" data-title={card.title} data-video={card.video}>
      <div
        className="card-image-wrapper bb-openPlayer"
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
          className="card-number-badge"
          style={{ backgroundColor: card.numberColor }}
        >
          {cardNumber}
        </div>
        <div className="badge-left" style={{ backgroundColor: card.badgeColor }}>
          {card.badge}
        </div>
        <img src={card.image} alt={card.title} />
        <video className="bb-vid" loop muted playsInline preload="none" ref={videoRef}>
          <source src={card.video} type="video/mp4" />
        </video>
      </div>
      <div className="card-info">
        <div className="card-title">{card.title}</div>
        <div className="card-subtitle">NKR TV KANNADA</div>
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
    const card = track.querySelector<HTMLElement>('.card');
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
      video.play().catch(() => {});
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
    <section className="content-showcase-section">
      <div className="bg-dots" />
      <div className="bg-left-blob" />
      <div className="bg-top-circle" />
      <div className="bg-right-leaves" />
      <div className="bg-bottom-strip" />
      <div className="bg-bottom-corner" />

      <div className="main-container">
        <div className="section-header">
          <div className="title-container">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              <span>Explore our best</span>
            </div>
            <h2 className="section-title">
              <span className="highlight">TOP 5</span> CONTENT
            </h2>
            <div className="title-underline" />
            <p className="section-kannada">ನೋಡಿ ಕನ್ನಡದ ಬೆಸ್ಟ್ ಕಂಟೆಂಟ್</p>
          </div>
          <a href="/" className="view-all-btn">
            View All Content <span className="arrow">→</span>
          </a>
        </div>

        <div className="carousel-wrapper">
          <button
            type="button"
            id="bbLeft"
            className="nav-arrow"
            aria-label="Scroll left"
            onClick={() => scrollTrack('left')}
          >
            <span className="nav-icon nav-icon-left">‹</span>
          </button>

          <div ref={trackRef} className="cards-container" id="bbTrack">
            {cards.map((card, index) => (
              <ShowcaseCard key={card.title} card={card} index={index} onOpen={setActiveCard} />
            ))}
          </div>

          <button
            type="button"
            id="bbRight"
            className="nav-arrow"
            aria-label="Scroll right"
            onClick={() => scrollTrack('right')}
          >
            <span className="nav-icon nav-icon-right">›</span>
          </button>
        </div>

        <div className="carousel-dots">
          <div className="dot active" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      <div className={`bb-modal ${activeCard ? 'bb-open' : ''}`} id="bbModal" aria-hidden={!activeCard}>
        <div className="bb-modalBox" role="dialog" aria-modal="true" aria-label="Video player">
          <div className="bb-modalTop">
            <div className="bb-nowTitle" id="bbNowPlaying">
              {activeCard ? `Now playing: ${activeCard.title}` : 'Now playing'}
            </div>
            <button className="bb-close" id="bbCloseBtn" type="button" onClick={() => setActiveCard(null)}>
              ✕
            </button>
          </div>
          <video className="bb-modalVideo" id="bbModalVideo" controls autoPlay playsInline preload="none" ref={modalVideoRef} />
        </div>
      </div>
    </section>
  );
}
