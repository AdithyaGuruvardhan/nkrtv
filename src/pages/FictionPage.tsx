import { useState, useRef } from 'react';

type VideoItem = {
  id: string;
  videoId: string;
  pill: string;
  headline: string;
  desc: string;
  duration: string;
};

type SerialItem = {
  videoId: string;
  episodeNo: string;
  title: string;
  desc: string;
  tags: string[];
};

type Section = {
  title: string;
  eyebrow: string;
  playlistUrl: string;
  type: 'grid' | 'carousel';
  gridItems?: VideoItem[];
  carouselItems?: SerialItem[];
};

const sections: Section[] = [
  {
    title: 'Aparoopada Athithigalu',
    eyebrow: 'Serial',
    playlistUrl: '#',
    type: 'carousel',
    carouselItems: [
      { videoId: 'bVo9goe_qAo', episodeNo: '01', title: 'Aparoopada Sunday Promo', desc: 'Aparoopada Athithigalu Sunday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'GyjceLPpHm8', episodeNo: '02', title: 'Aparoopada Saturday Promo', desc: 'Aparoopada Athithigalu Saturday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'doVsx0Ra01o', episodeNo: '03', title: 'Aparoopada Sunday Promo', desc: 'Aparoopada Athithigalu Sunday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'e5ALXcgfLjU', episodeNo: '04', title: 'Aparoopada Saturday Promo', desc: 'Aparoopada Athithigalu Saturday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'oQYvgbo74Wg', episodeNo: '05', title: 'Aparoopada Episode 01', desc: 'Aparoopada Athithigalu episode 01 from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
    ],
  },
  {
    title: 'Dear Moments',
    eyebrow: 'Short Film',
    playlistUrl: 'https://youtube.com/playlist?list=PLCm_kBZi_HdUTnWncfuMeDuPDX4NnCtaG',
    type: 'grid',
    gridItems: [
      { id: '1', videoId: 't7V8PxAA1PY', pill: 'EPISODE 01', headline: 'Dear Moments Ep01', desc: 'Heartfelt stories that connect, inspire and stay with you.', duration: '24 min' },
      { id: '2', videoId: '4VxHPm1z8ME', pill: 'EPISODE 02', headline: 'Dear Moments Ep02', desc: 'Real moments. Raw emotions. True connections.', duration: '22 min' },
      { id: '3', videoId: 'a2D-2zJyZBk', pill: 'EPISODE 03', headline: 'Dear Moments Ep03', desc: 'Stories that reflect life, love and everything in between.', duration: '26 min' },
    ],
  },
  {
    title: 'Mooruvare Neetigalu',
    eyebrow: 'Serial',
    playlistUrl: 'https://youtube.com/playlist?list=PLps63nPL1fp9mtrz3MYMx61lfydIjRdvs',
    type: 'grid',
    gridItems: [
      { id: '1', videoId: 'rltBtJw6ULM', pill: 'EPISODE 01', headline: 'Mooruvare Neetigalu Ep01', desc: 'A journey of love, values and life lessons.', duration: '28 min' },
      { id: '2', videoId: '2xxcxQvNCGc', pill: 'EPISODE 02', headline: 'Mooruvare Neetigalu Ep02', desc: 'Conversations that change perspectives forever.', duration: '30 min' },
      { id: '3', videoId: 'BGL0pptUdNU', pill: 'EPISODE 03', headline: 'Mooruvare Neetigalu Ep03', desc: 'Family, values and the bonds that make us.', duration: '25 min' },
    ],
  },
];

export default function FictionPage() {
  const [modalVid, setModalVid] = useState<{ id: string; title: string } | null>(null);
  const panchamavedaTrackRef = useRef<HTMLDivElement>(null);

  const popularPrograms = [
    {
      title: 'Panchamaveda',
      subtitle: 'Serial',
      videoId: 'ohwMhi7F2UU',
      time: 'Monday - Friday\nMorning 5.30 AM',
    },
    {
      title: 'Aparoopada Athithigalu',
      subtitle: 'Serial',
      videoId: 'bVo9goe_qAo',
      time: 'Sunday - Saturday\nEvening 6.00 PM',
    },
    {
      title: 'Dear Moments',
      subtitle: 'Short Film',
      videoId: 't7V8PxAA1PY',
      time: 'Sunday - Friday\nMorning 6.30 AM',
    },
    {
      title: 'Mooruvare Neetigalu',
      subtitle: 'Short Film',
      videoId: 'rltBtJw6ULM',
      time: 'Monday - Saturday\nEvening 7.30 PM',
    },
  ];

  const panchamavedaEpisodes = [
    { videoId: 'ohwMhi7F2UU', episodeNo: '15', title: 'Panchamaveda Episode 15', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 15.', tags: ['U/A', 'Promo', 'YouTube'] },
    { videoId: 'mMLehox1aOI', episodeNo: '14', title: 'Panchamaveda Episode 14', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 14.', tags: ['U/A', 'Promo', 'YouTube'] },
    { videoId: 'qwL_-SaAur0', episodeNo: '13', title: 'Panchamaveda Episode 13', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 13.', tags: ['U/A', 'Promo', 'YouTube'] },
    { videoId: 'imiO6BjfpiA', episodeNo: '12', title: 'Panchamaveda Episode 12', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 12.', tags: ['U/A', 'Promo', 'YouTube'] },
    { videoId: 'FrQMSLH8Jy4', episodeNo: '11', title: 'Panchamaveda Episode 11', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 11.', tags: ['U/A', 'Promo', 'YouTube'] },
  ];

  const openModal = (id: string, title: string) => {
    setModalVid({ id, title });
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalVid(null);
    document.body.style.overflow = '';
  };

  const scrollPanchamaveda = (dir: 'left' | 'right') => {
    panchamavedaTrackRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };
  return (
    <div className="fiction-page relative min-h-screen overflow-hidden bg-[#FDF8F3]">
      <style>{`
        @media (max-width: 639px) {
          .fiction-page .fiction-hero {
            padding: 108px 16px 48px;
          }

          .fiction-page .fiction-hero-title {
            font-size: clamp(28px, 9vw, 40px);
          }

          .fiction-page .fiction-hero-copy {
            font-size: 14px;
            line-height: 1.6;
          }

          .fiction-page .fiction-content {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 24px;
          }

          .fiction-page .fiction-content > * {
            max-width: 100%;
          }

          .fiction-page .fiction-section {
            margin-bottom: 42px;
          }

          .fiction-page .fiction-section-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 18px;
          }

          .fiction-page .fiction-section-title {
            font-size: 18px;
            line-height: 1.15;
          }

          .fiction-page .fiction-section-action {
            font-size: 11px;
            padding: 8px 12px;
            width: 100%;
            justify-content: center;
          }

          .fiction-page .fiction-program-card {
            min-height: 150px;
          }

          .fiction-page .fiction-program-card h3 {
            max-width: 100%;
            font-size: 15px;
          }

          .fiction-page .fiction-carousel-track {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            padding-left: 4px;
            padding-right: 4px;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
          }

          .fiction-page .fiction-carousel-card {
            min-width: min(84vw, 320px);
            scroll-snap-align: start;
          }

          .fiction-page .fiction-carousel-media {
            height: 140px;
          }

          .fiction-page .fiction-carousel-body {
            padding: 14px 12px 12px;
          }

          .fiction-page .fiction-carousel-number {
            font-size: 3.1rem;
          }

          .fiction-page .fiction-carousel-title {
            font-size: 14px;
          }

          .fiction-page .fiction-carousel-copy {
            font-size: 11px;
          }

          .fiction-page .fiction-carousel-play {
            font-size: 13px;
          }

          .fiction-page .fiction-grid-card {
            min-height: unset;
          }

          .fiction-page .fiction-grid-media {
            height: 185px !important;
          }

          .fiction-page .fiction-grid-body {
            padding: 16px;
          }

          .fiction-page .fiction-grid-title {
            font-size: 16px;
          }

          .fiction-page .fiction-grid-copy {
            font-size: 12px;
          }

          .fiction-page .fiction-grid-play {
            font-size: 13px;
          }

          .fiction-page .fiction-panchamaveda-track {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            padding-left: 4px;
            padding-right: 4px;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
          }

          .fiction-page .fiction-panchamaveda-item {
            min-width: min(84vw, 320px);
            scroll-snap-align: start;
          }

          .fiction-page .fiction-panchamaveda-item .fiction-panchamaveda-image {
            height: 140px;
          }

          .fiction-page .fiction-panchamaveda-item .fiction-panchamaveda-body {
            padding: 14px 14px 12px;
          }

          .fiction-page .fiction-panchamaveda-item .fiction-panchamaveda-number {
            font-size: 3.25rem;
          }

          .fiction-page .fiction-panchamaveda-item h3 {
            font-size: 14px;
          }

          .fiction-page .fiction-panchamaveda-item p {
            font-size: 11px;
          }

          .fiction-page .fiction-panchamaveda-controls {
            margin-top: 12px;
          }

          .fiction-page .fiction-carousel-controls {
            margin-top: 12px;
          }

          .fiction-page .fiction-cini-title {
            font-size: 30px;
          }

          .fiction-page .fiction-subsection-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .fiction-page .fiction-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .fiction-page .fiction-grid-card {
            min-height: unset;
          }

          .fiction-page .fiction-grid-card .fiction-grid-media {
            height: 185px;
          }

          .fiction-page .fiction-grid-card .fiction-grid-body {
            padding: 16px;
          }

          .fiction-page .fiction-grid-card .fiction-grid-title {
            font-size: 16px;
          }

          .fiction-page .fiction-grid-card .fiction-grid-copy {
            font-size: 12px;
          }

          .fiction-page .fiction-grid-card .fiction-grid-play {
            font-size: 13px;
          }

          .fiction-page .fiction-modal {
            padding: 12px;
          }

          .fiction-page .fiction-modal-shell {
            height: min(74vh, 640px);
            border-radius: 16px;
          }

          .fiction-page .fiction-modal-title {
            max-width: 72%;
            font-size: 12px;
          }
        }
      `}</style>
      {/* ===== HERO SECTION ===== */}
      <section
        className="fiction-hero relative w-full overflow-hidden text-center px-6 pt-[140px] pb-20"
        style={{ background: 'linear-gradient(135deg, #ba2015 0%, #e84310 55%, #f49911 100%)' }}
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] opacity-55"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] opacity-35"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
          }}
        />
        <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.25em] text-orange-200">
          NKR TV KANNADA
        </p>
        <h1
          className="fiction-hero-title mb-4 font-extrabold leading-tight text-white"
          style={{ fontSize: 'clamp(36px, 6vw, 60px)' }}
        >
          Fictional Stories
        </h1>
        <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-white/40" />
        <p className="fiction-hero-copy mx-auto max-w-xl text-[16px] font-medium text-white/90">
          Explore serials and short films that entertain, inspire, and connect.
        </p>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="fiction-content relative z-10 mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div
          className="pointer-events-none absolute right-0 top-10 h-[400px] w-[500px] opacity-45"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] opacity-35"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
          }}
        />
        {/* ===== POPULAR PROGRAMS ===== */}
        <section className="fiction-section relative mb-10 overflow-hidden">
          <div className="fiction-section-heading mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E63E1A] text-white">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M12 2l2.39 6.93H22l-5.95 4.32 2.27 6.75L12 15.91l-6.32 4.09 2.27-6.75L2 8.93h7.61L12 2z"/></svg>
              </div>
              <h2 className="fiction-section-title text-[15px] sm:text-[17px] font-extrabold uppercase tracking-wide text-[#2D1810]">Popular Programs</h2>
            </div>
            <a href="#" className="fiction-section-action hidden sm:flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide text-[#E63E1A]">
              View All Programs
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {popularPrograms.map((program) => (
                <button
                  key={program.title}
                  onClick={() => openModal(program.videoId, program.title)}
                  className="fiction-program-card group relative min-h-[176px] overflow-hidden rounded-[10px] text-left shadow-[0_10px_22px_rgba(0,0,0,0.11)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${program.videoId}/hqdefault.jpg`}
                    alt={program.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(77,18,9,0.94)_0%,rgba(77,18,9,0.72)_52%,rgba(77,18,9,0.28)_100%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white">
                    <div>
                      <h3 className="max-w-[72%] text-[18px] font-black leading-[1.08]">{program.title}</h3>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/82">{program.subtitle}</p>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </section>

        <section className="relative mb-10 overflow-hidden">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E63E1A] text-white">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M12 2l2.39 6.93H22l-5.95 4.32 2.27 6.75L12 15.91l-6.32 4.09 2.27-6.75L2 8.93h7.61L12 2z"/></svg>
              </div>
              <h2 className="text-[15px] sm:text-[17px] font-extrabold uppercase tracking-wide text-[#2D1810]">Panchamaveda</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wide text-[#E63E1A]">
              View Full Playlist →
            </a>
          </div>

          <div>
            <div
              ref={panchamavedaTrackRef}
              className="fiction-panchamaveda-track grid gap-[18px] overflow-x-auto pb-4 px-1"
              style={{
                gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {panchamavedaEpisodes.map((item) => (
                <button
                  key={item.videoId}
                  onClick={() => openModal(item.videoId, item.title)}
                  className="fiction-panchamaveda-item group relative flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 pb-1.5"
                  style={{
                    minWidth: 180,
                    background: 'linear-gradient(180deg,#fff9f6 0%,#fff 100%)',
                    border: '1px solid rgba(230,62,26,0.12)',
                    boxShadow: '0 4px 16px rgba(230,62,26,0.06)',
                    paddingBottom: 0,
                  }}
                >
                  <div className="fiction-panchamaveda-image relative overflow-hidden rounded-t-[10px]" style={{ height: 150, background: '#fde8e2' }}>
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2.5 left-2.5 z-20 text-[10px] font-extrabold text-white rounded-full px-2.5 py-1"
                      style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)' }}>Promo</span>
                    <span className="absolute top-2.5 right-2.5 z-20 w-10 h-10 rounded-full flex flex-col items-center justify-center bg-white/95 text-[9px] font-extrabold leading-tight shadow-md"
                      style={{ color: '#E63E1A' }}>
                      <span>TOP</span><span className="text-[13px]">5</span>
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: '#E63E1A' }} />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-20 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)', boxShadow: '0 8px 18px rgba(230,62,26,0.3)' }}>
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    </div>
                  </div>

                  <div className="fiction-panchamaveda-body flex flex-col flex-1 px-3 pt-6 pb-4">
                    <div className="flex items-start gap-2">
                      <span className="fiction-panchamaveda-number text-5xl font-extrabold leading-none tracking-tight flex-shrink-0"
                        style={{ color: 'rgba(230,62,26,0.12)', lineHeight: '0.9' }}>{item.episodeNo}</span>
                      <h3 className="text-[15px] font-extrabold text-[#1a0a00] leading-snug mt-1">{item.title}</h3>
                    </div>
                    <p className="text-[12px] text-[#6e5a55] leading-relaxed mt-2 line-clamp-3" style={{ minHeight: 52 }}>{item.desc}</p>
                    <div className="mt-3 flex items-center gap-2 text-sm font-bold" style={{ color: '#E63E1A' }}>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)', boxShadow: '0 6px 14px rgba(230,62,26,0.25)' }}>
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                      </span>
                      Watch Now
                    </div>
                    <div className="mt-3 pt-3 border-t flex items-center justify-between gap-2"
                      style={{ borderColor: 'rgba(230,62,26,0.12)' }}>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md"
                            style={{ background: 'rgba(230,62,26,0.08)', color: '#E63E1A' }}>{tag}</span>
                        ))}
                      </div>
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0 fill-[#E63E1A]">
                        <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      </svg>
                    </div>
                  </div>
                </button>
                ))}
            </div>
            <div className="fiction-panchamaveda-controls flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => scrollPanchamaveda('left')}
                className="fiction-panchamaveda-arrow flex h-10 w-10 items-center justify-center rounded-full border border-[#f0d6c8] bg-white text-[#E63E1A] shadow-[0_8px_18px_rgba(230,62,26,0.08)] transition-all hover:bg-[#fff6f2] hover:shadow-[0_10px_20px_rgba(230,62,26,0.12)]"
                aria-label="Scroll Panchamaveda left"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                onClick={() => scrollPanchamaveda('right')}
                className="fiction-panchamaveda-arrow flex h-10 w-10 items-center justify-center rounded-full border border-[#f0d6c8] bg-white text-[#E63E1A] shadow-[0_8px_18px_rgba(230,62,26,0.08)] transition-all hover:bg-[#fff6f2] hover:shadow-[0_10px_20px_rgba(230,62,26,0.12)]"
                aria-label="Scroll Panchamaveda right"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* Aparoopada Athithigalu */}
        <SectionBlock section={sections[0]} onPlay={openModal} />

        {/* Cini Yaana — grouped section */}
        <div className="relative mb-16 z-10 overflow-hidden">
          <div
            className="pointer-events-none absolute right-0 top-0 h-[360px] w-[460px] opacity-35"
            style={{
              backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] opacity-25"
            style={{
              backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
            }}
          />

          {/* Cini Yaana main header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 text-[11px] font-extrabold tracking-[0.2em] uppercase mb-3"
              style={{ color: '#E63E1A' }}>
              <span className="w-8 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
              Collection
              <span className="w-8 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
            </div>
            <h2 className="fiction-cini-title text-3xl md:text-[42px] font-black text-[#1a0a00] leading-tight">CINI YAANA</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.25)' }} />
              <span className="w-2 h-2 rounded-full" style={{ background: '#E63E1A' }} />
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.25)' }} />
            </div>
          </div>

          {/* Dear Moments */}
          <div className="mb-12">
            <div className="fiction-subsection-header flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.15em] uppercase" style={{ color: '#E63E1A' }}>{sections[1].eyebrow}</p>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#1a0a00]">{sections[1].title}</h3>
              </div>
              <a href={sections[1].playlistUrl} target="_blank" rel="noopener noreferrer"
                className="text-sm font-bold px-4 py-2 rounded-full transition-colors"
                style={{ background: 'rgba(230,62,26,0.1)', color: '#E63E1A' }}>
                View Full Playlist →
              </a>
            </div>
            <div className="fiction-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections[1].gridItems?.map((item) => (
                <GridCard key={item.id} item={item} onPlay={openModal} />
              ))}
            </div>
          </div>

          {/* Mooruvare Neetigalu */}
          <div>
            <div className="fiction-subsection-header flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.15em] uppercase" style={{ color: '#E63E1A' }}>{sections[2].eyebrow}</p>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#1a0a00]">{sections[2].title}</h3>
              </div>
              <a href={sections[2].playlistUrl} target="_blank" rel="noopener noreferrer"
                className="text-sm font-bold px-4 py-2 rounded-full transition-colors"
                style={{ background: 'rgba(230,62,26,0.1)', color: '#E63E1A' }}>
                View Full Playlist →
              </a>
            </div>
            <div className="fiction-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections[2].gridItems?.map((item) => (
                <GridCard key={item.id} item={item} onPlay={openModal} />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ===== MODAL ===== */}
      {modalVid && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          style={{ background: 'rgba(10,3,0,0.92)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="fiction-modal-shell relative w-full max-w-[1100px] rounded-2xl overflow-hidden bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)]"
            style={{ height: 'min(76vh,720px)' }}>
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between gap-3 px-4 py-3"
              style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.85),transparent)' }}>
              <p className="fiction-modal-title text-white text-sm font-bold truncate max-w-[80%]">Now playing: {modalVid.title}</p>
              <button onClick={closeModal}
                className="rounded-full px-3 py-1.5 text-white font-black text-sm bg-white/15 hover:bg-white/25 transition-colors">✕</button>
            </div>
            <iframe
              className="w-full h-full border-none"
              src={`https://www.youtube.com/embed/${modalVid.id}?autoplay=1&rel=0`}
              title="Video player"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

function SectionBlock({ section, onPlay }: { section: Section; onPlay: (id: string, title: string) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>('[data-card]');
    const gap = 18;
    const step = card ? card.getBoundingClientRect().width + gap : 280;
    trackRef.current.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div className="fiction-section relative mb-16 z-10 overflow-hidden">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[360px] w-[460px] opacity-35"
        style={{
          backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
        }}
      />
      <div className="fiction-section-heading flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(230,62,26,0.12)' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E63E1A">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.15em] uppercase" style={{ color: '#E63E1A' }}>{section.eyebrow}</p>
            <h2 className="fiction-section-title text-2xl md:text-3xl font-extrabold text-[#1a0a00]">{section.title}</h2>
          </div>
        </div>
        <a href={section.playlistUrl} target="_blank" rel="noopener noreferrer"
          className="fiction-section-action text-sm font-bold px-4 py-2 rounded-full transition-colors"
          style={{ background: 'rgba(230,62,26,0.1)', color: '#E63E1A' }}>
          View Full Playlist →
        </a>
      </div>

      {section.type === 'grid' && section.gridItems && (
        <div className="fiction-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.gridItems.map((item) => (
            <GridCard key={item.id} item={item} onPlay={onPlay} />
          ))}
        </div>
      )}

      {section.type === 'carousel' && section.carouselItems && (
        <div className="px-0 md:px-0">
          <div ref={trackRef}
            className="fiction-carousel-track grid gap-[18px] overflow-x-auto pb-4"
            style={{
              gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}>
            {section.carouselItems.map((item) => (
                <CarouselCard key={item.videoId} item={item} onPlay={onPlay} />
              ))}
          </div>
          <div className="fiction-carousel-controls flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scroll('left')}
              className="fiction-carousel-arrow flex h-10 w-10 items-center justify-center rounded-full border border-[#f0d6c8] bg-white text-[#E63E1A] shadow-[0_8px_18px_rgba(230,62,26,0.08)] transition-all hover:bg-[#fff6f2] hover:shadow-[0_10px_20px_rgba(230,62,26,0.12)]"
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="fiction-carousel-arrow flex h-10 w-10 items-center justify-center rounded-full border border-[#f0d6c8] bg-white text-[#E63E1A] shadow-[0_8px_18px_rgba(230,62,26,0.08)] transition-all hover:bg-[#fff6f2] hover:shadow-[0_10px_20px_rgba(230,62,26,0.12)]"
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function GridCard({ item, onPlay }: { item: VideoItem; onPlay: (id: string, title: string) => void }) {
  return (
    <div
      data-card
      onClick={() => onPlay(item.videoId, item.headline)}
      className="fiction-grid-card group bg-white rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        border: '1px solid rgba(230,62,26,0.1)',
        boxShadow: '0 4px 16px rgba(230,62,26,0.06)',
        minHeight: 360,
      }}
    >
      <div className="fiction-grid-media relative w-full overflow-hidden bg-black" style={{ height: 210 }}>
        <img
          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
          alt={item.headline}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: '#E63E1A', boxShadow: '0 4px 16px rgba(230,62,26,0.5)' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="fiction-grid-body flex flex-col flex-1 p-5">
        <span className="self-start text-[10px] font-extrabold tracking-wider rounded-full px-3 py-1.5 mb-3 uppercase"
          style={{ color: '#E63E1A', background: 'rgba(230,62,26,0.1)' }}>
          {item.pill}
        </span>
        <h3 className="fiction-grid-title text-[17px] font-extrabold text-[#1a0a00] leading-snug mb-2 line-clamp-2">{item.headline}</h3>
        <p className="fiction-grid-copy text-[13px] text-[#6e5a55] leading-relaxed line-clamp-3">{item.desc}</p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="fiction-grid-play inline-flex items-center gap-1.5 px-4 h-8 rounded-full text-white text-sm font-bold"
            style={{ background: '#E63E1A', boxShadow: '0 4px 12px rgba(230,62,26,0.35)' }}>
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Play
          </div>
          <span className="text-sm font-bold" style={{ color: '#D52912' }}>{item.duration}</span>
        </div>
      </div>
    </div>
  );
}

function CarouselCard({ item, onPlay }: { item: SerialItem; onPlay: (id: string, title: string) => void }) {
  return (
    <article
      data-card
      onClick={() => onPlay(item.videoId, item.title)}
      className="fiction-carousel-card group relative flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 pb-1.5"
      style={{
        minWidth: 180,
        background: 'linear-gradient(180deg,#fff9f6 0%,#fff 100%)',
        border: '1px solid rgba(230,62,26,0.12)',
        boxShadow: '0 4px 16px rgba(230,62,26,0.06)',
        paddingBottom: 0,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10"
        style={{ background: 'linear-gradient(90deg,#E63E1A,#D52912)' }} />

      <div className="fiction-carousel-media relative overflow-hidden rounded-t-[10px]" style={{ height: 150, background: '#fde8e2' }}>
        <img
          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2.5 left-2.5 z-20 text-[10px] font-extrabold text-white rounded-full px-2.5 py-1"
          style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)' }}>Promo</span>
        <span className="absolute top-2.5 right-2.5 z-20 w-10 h-10 rounded-full flex flex-col items-center justify-center bg-white/95 text-[9px] font-extrabold leading-tight shadow-md"
          style={{ color: '#E63E1A' }}>
          <span>TOP</span><span className="text-[13px]">5</span>
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: '#E63E1A' }} />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-20 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)', boxShadow: '0 8px 18px rgba(230,62,26,0.3)' }}>
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
      </div>

      <div className="fiction-carousel-body flex flex-col flex-1 px-3 pt-6 pb-4">
        <div className="flex items-start gap-2">
          <span className="fiction-carousel-number text-5xl font-extrabold leading-none tracking-tight flex-shrink-0"
            style={{ color: 'rgba(230,62,26,0.12)', lineHeight: '0.9' }}>{item.episodeNo}</span>
          <h3 className="fiction-carousel-title text-[15px] font-extrabold text-[#1a0a00] leading-snug mt-1">{item.title}</h3>
        </div>
        <p className="fiction-carousel-copy text-[12px] text-[#6e5a55] leading-relaxed mt-2 line-clamp-3" style={{ minHeight: 52 }}>{item.desc}</p>
        <div className="fiction-carousel-play mt-3 flex items-center gap-2 text-sm font-bold" style={{ color: '#E63E1A' }}>
          <span className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)', boxShadow: '0 6px 14px rgba(230,62,26,0.25)' }}>
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          </span>
          Watch Now
        </div>
        <div className="mt-3 pt-3 border-t flex items-center justify-between gap-2"
          style={{ borderColor: 'rgba(230,62,26,0.12)' }}>
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md"
                style={{ background: 'rgba(230,62,26,0.08)', color: '#E63E1A' }}>{tag}</span>
            ))}
          </div>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0 fill-[#E63E1A]">
            <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
        </div>
      </div>
    </article>
  );
}
