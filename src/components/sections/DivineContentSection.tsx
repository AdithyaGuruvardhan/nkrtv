import { useEffect, useState } from 'react';
import DotBackdrop from '../decor/DotBackdrop';
import ContinuousImageMarquee from './ContinuousImageMarquee';

type PlaylistItem = {
  id: string;
  title: string;
  subtitle: string;
  video: string;
  badge: string;
  captureRatio?: number;
};

const playlist: PlaylistItem[] = [
  {
    id: '1',
    title: 'Agnihotra',
    subtitle: '720P • NKR TV',
    video: '/videos/AGNI_HOTRA_NKRTVKannada_720P.mp4',
    badge: 'TOP 5',
  },
  {
    id: '2',
    title: 'Anantha Darshana',
    subtitle: 'Promo • NKR TV',
    video: '/videos/Anantha_Darshana_Promo_NKR_Tv_Kannada.mp4',
    badge: 'TOP 5',
  },
  {
    id: '3',
    title: 'Naada Lahari',
    subtitle: 'Promo • Bhakti Geethegalu',
    video: '/videos/Naada_Lahari_PROMO_Kannada.mp4',
    badge: 'TOP 5',
  },
  {
    id: '4',
    title: 'Yoga Patha',
    subtitle: '720P • Promo',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/yoga-patha-ep-45-nkr-tv-kannada-720p_WutKdSd5.mp4',
    badge: 'TOP 5',
    captureRatio: 0.5,
  },
  {
    id: '5',
    title: 'Dharma Jyothi',
    subtitle: 'Promo • NKR TV',
    video: '/videos/Dharma_Jyothi_PROMO_NKR_TV_Kannada.mp4',
    badge: 'TOP 5',
    captureRatio: 0.5,
  },
];

type ModalState = { src: string; title: string } | null;

function AutoVideoThumb({ src, title, captureRatio = 0.12 }: { src: string; title: string; captureRatio?: number }) {
  const [poster, setPoster] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;
    video.src = src;

    const cleanup = () => {
      video.removeAttribute('src');
      video.load();
    };

    const captureFrame = () => {
      if (cancelled) return;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setPoster(null);
        return;
      }
      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        if (!cancelled) setPoster(dataUrl);
      } catch {
        if (!cancelled) setPoster(null);
      }
    };

    const onLoadedMetadata = () => {
      const seekTo = Math.min(1, Math.max(0.2, (video.duration || 1) * captureRatio));
      try {
        video.currentTime = seekTo;
      } catch {
        captureFrame();
      }
    };

    const onSeeked = () => {
      captureFrame();
    };

    const onError = () => {
      if (!cancelled) setPoster(null);
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('seeked', onSeeked);
    video.addEventListener('error', onError);

    return () => {
      cancelled = true;
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('error', onError);
      cleanup();
    };
  }, [src]);

  if (poster) {
    return (
      <img
        src={poster}
        alt={title}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <video
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className="h-full w-full object-cover"
      onLoadedMetadata={(e) => {
        const vid = e.currentTarget;
        if (vid.duration && isFinite(vid.duration)) {
          try {
            vid.currentTime = Math.min(1, vid.duration * captureRatio);
          } catch {
            // Fallback to the browser's default frame.
          }
        }
      }}
    />
  );
}

function VideoModal({ modal, onClose }: { modal: ModalState; onClose: () => void }) {
  if (!modal) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.88)] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative h-[56vh] w-[96vw] overflow-hidden rounded-[12px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)] md:h-[min(78vh,720px)] md:w-[min(1200px,96vw)]">
        <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between gap-3 bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-transparent px-4 py-3">
          <p className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold text-white">
            Now playing: {modal.title}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[rgba(255,255,255,0.12)] px-3 py-2 font-bold text-white hover:bg-[rgba(255,255,255,0.18)]"
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
          src={modal.src}
        />
      </div>
    </div>
  );
}

export default function DivineContentSection() {
  const [activeId, setActiveId] = useState('1');
  const [modal, setModal] = useState<ModalState>(null);
  const activePlaylistItem = playlist.find((item) => item.id === activeId) || playlist[0];

  const openModal = (src: string, title: string) => {
    setModal({ src, title });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="relative overflow-hidden bg-white py-16">
      <DotBackdrop className="-top-16 -right-16 z-0 h-[420px] w-[420px] opacity-28" />
      <DotBackdrop className="top-[22%] -left-20 z-0 h-[360px] w-[360px] opacity-18" />
      <DotBackdrop className="bottom-[4%] right-[8%] z-0 h-[260px] w-[260px] opacity-12" />
      <div className="relative z-10 mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">
        
        {/* Header Area */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#D68B45]">
                Handpicked For Your Soul
              </span>
              <div className="h-[1px] w-12 bg-[#D68B45]/50" />
            </div>
            <h2 className=" text-[42px] font-bold leading-[1.1] md:text-[56px]">
              <span className="text-[#A21D34]">Three Hours of Divine Content</span>{' '}
              <span className="text-[#311B5E]">For You</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#4b485f]">
              Immerse yourself in spiritual wisdom, powerful teachings and inspiring stories.
            </p>
          </div>
          <button
            type="button"
            className="group flex w-max items-center gap-3 rounded-full border border-[#D68B45] px-7 py-2.5 text-[14px] font-semibold text-[#311B5E] transition-all duration-300 hover:bg-[#D68B45] hover:text-white"
          >
            View All Content
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          
          {/* Left: Playlist */}
          <div className="flex w-full flex-col gap-4 lg:w-[35%]">
            {playlist.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`relative cursor-pointer rounded-[20px] p-[2px] transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D68B45] to-[#A21D34] shadow-[0_12px_30px_rgba(162,29,52,0.15)] hover:scale-[1.01]'
                      : 'bg-transparent hover:scale-[1.01]'
                  }`}
                >
                  <div
                    className={`flex items-center justify-between rounded-[18px] p-3 transition-colors duration-300 ${
                      isActive ? 'bg-white' : 'bg-[#FDF8F0] hover:bg-[#f6efe4]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative aspect-video w-[110px] shrink-0 overflow-hidden rounded-[12px] bg-black shadow-sm sm:w-[130px]">
                        <AutoVideoThumb src={item.video} title={item.title} captureRatio={item.captureRatio ?? 0.5} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-8 w-8 text-white drop-shadow-md"
                          >
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4
                          className={`text-[14px] font-bold sm:text-[16px] ${
                            isActive ? 'text-[#A21D34]' : 'text-[#311B5E]'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[12px] font-medium text-gray-500">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:block">
                      <span className="rounded-full bg-[#C62B40] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Featured Player Card */}
          <div className="flex w-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] lg:w-[65%]">
            
            {/* Top Red Gradient Area */}
            <div className="relative flex min-h-[300px] w-full items-center justify-center bg-gradient-to-br from-[#C2151B] via-[#8B101E] to-[#4B061A] p-6 sm:p-10 md:min-h-[400px]">
              <div className="absolute inset-0">
                <AutoVideoThumb
                  src={activePlaylistItem.video}
                  title={activePlaylistItem.title}
                  captureRatio={activePlaylistItem.captureRatio ?? 0.5}
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(194,21,27,0.072)_0%,rgba(139,16,30,0.080)_48%,rgba(75,6,26,0.092)_100%)]" />
              {/* Decorative Border */}
              <div className="relative z-10 flex h-full w-full max-w-2xl flex-col items-center justify-center rounded-[16px] border-[1.5px] border-[#D68B45]/60 p-6 text-center text-white sm:p-10">
                <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[#D68B45]" />
                <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[#D68B45]" />
                <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#D68B45]" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#D68B45]" />
              </div>
            </div>

            {/* Bottom Info Area */}
            <div className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h3 className="text-2xl font-extrabold text-[#311B5E]">
                  {playlist.find((p) => p.id === activeId)?.title || 'AGHINI HOTRA'}
                </h3>
                <p className="mt-1 text-[14px] font-medium text-gray-500">
                  Kannada • NKR TV
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <button
                  type="button"
                  onClick={() => {
                    const activeItem = playlist.find((p) => p.id === activeId);
                    if (activeItem) openModal(activeItem.video, activeItem.title);
                  }}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EF5923] via-[#E22262] to-[#881D6C] px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(226,34,98,0.3)] transition-transform hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  Play Now
                </button>
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Action Buttons */}
                  <button type="button" className="group flex flex-col items-center gap-2 transition-colors hover:text-[#311B5E]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#D68B45] transition-colors group-hover:border-[#D68B45] group-hover:bg-[#FDF8F0]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 group-hover:text-[#311B5E]">Watchlist</span>
                  </button>
                  <button type="button" className="group flex flex-col items-center gap-2 transition-colors hover:text-[#311B5E]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#E22262] transition-colors group-hover:border-[#E22262] group-hover:bg-pink-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 group-hover:text-[#311B5E]">Like</span>
                  </button>
                  <button type="button" className="group flex flex-col items-center gap-2 transition-colors hover:text-[#311B5E]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#311B5E] transition-colors group-hover:border-[#311B5E] group-hover:bg-indigo-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 group-hover:text-[#311B5E]">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative left-1/2 z-10 mt-6 h-[80px] w-screen -translate-x-1/2 overflow-hidden">
          <ContinuousImageMarquee
            className="absolute inset-x-0 -bottom-6"
            images={[
              '/images/monuments/1.png',
              '/images/monuments/2.png',
              '/images/monuments/3.png',
              '/images/monuments/4.png',
              '/images/monuments/5.png',
              '/images/monuments/6.png',
              '/images/monuments/7.png',
              '/images/monuments/8.png',
              '/images/monuments/9.png',
            ]}
            heightClassName="h-[76px] sm:h-[82px] lg:h-[80px]"
            imageScaleClassName="scale-[1.15]"
            durationSeconds={24}
            repeatCount={4}
            alt="Karnataka decorative strip"
          />
        </div>

        {/* Bottom Feature Highlights Bar */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#FDF8F0] px-4 py-4 sm:px-6 sm:py-8 lg:px-10">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D68B45] sm:text-[12px] sm:tracking-[0.2em]">
              Coming Soon
            </span>
            <div className="h-[1px] w-8 bg-[#D68B45]/50 sm:w-12" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="flex min-h-[68px] items-center gap-2.5 rounded-[16px] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:gap-3 sm:px-5 sm:py-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDF8F0] text-[#D68B45] sm:h-10 sm:w-10">
                <i className="fa-solid fa-leaf text-[13px] sm:text-[16px]" />
              </div>
              <h4 className="text-[11px] font-bold leading-[1.15] text-[#311B5E] sm:text-[14px] sm:leading-tight">
                Amrutha Vachana
              </h4>
            </div>
            <div className="flex min-h-[68px] items-center gap-2.5 rounded-[16px] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:gap-3 sm:px-5 sm:py-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDF8F0] text-[#D68B45] sm:h-10 sm:w-10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" aria-hidden="true">
                  <rect x="5.2" y="3" width="2.4" height="18" rx="1.1" />
                  <rect x="10.8" y="3" width="2.4" height="18" rx="1.1" />
                  <rect x="16.4" y="3" width="2.4" height="18" rx="1.1" />
                </svg>
              </div>
              <h4 className="text-[11px] font-bold leading-[1.15] text-[#311B5E] sm:text-[14px] sm:leading-tight">
                Narayanim
              </h4>
            </div>
            <div className="flex min-h-[68px] items-center gap-2.5 rounded-[16px] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:gap-3 sm:px-5 sm:py-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDF8F0] text-[#D68B45] sm:h-10 sm:w-10">
                <i className="fa-solid fa-bottle-water text-[13px] sm:text-[16px]" />
              </div>
              <h4 className="text-[11px] font-bold leading-[1.15] text-[#311B5E] sm:text-[14px] sm:leading-tight">
                Amrutha Paana
              </h4>
            </div>
            <div className="flex min-h-[68px] items-center gap-2.5 rounded-[16px] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:gap-3 sm:px-5 sm:py-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDF8F0] text-[#D68B45] sm:h-10 sm:w-10">
                <span className="text-[15px] font-bold leading-none sm:text-[18px]">₹</span>
              </div>
              <h4 className="text-[11px] font-bold leading-[1.15] text-[#311B5E] sm:text-[14px] sm:leading-tight">
                Super Kannadiga
              </h4>
            </div>
          </div>
        </div>

      </div>
      {modal && <VideoModal modal={modal} onClose={closeModal} />}
    </section>
  );
}
