import { useState } from 'react';

type PlaylistItem = {
  id: string;
  title: string;
  subtitle: string;
  video: string;
  badge: string;
};

const playlist: PlaylistItem[] = [
  {
    id: '1',
    title: 'AGHINI HOTRA',
    subtitle: '720P • NKR TV',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/AGNI_HOTRA_NKRTVKannada_720P-1-1.mp4',
    badge: 'TOP 5',
  },
  {
    id: '2',
    title: 'ANANTHA DARSHAANA',
    subtitle: '720P • Channel',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/NKR_TV_Kannada_720P.mp4',
    badge: 'TOP 5',
  },
  {
    id: '3',
    title: 'NAADA LAHARI',
    subtitle: '1080P • Promo',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/Naada_Lahari_PROMO_Kannada_Bhakti_Geethegalu_to_Start_Your_Day_Mon_Fri_at_7_00AM_nkrtvkannada_1080P.mp4',
    badge: 'TOP 5',
  },
  {
    id: '4',
    title: 'DHARMA JYOTHI',
    subtitle: '144P • Episode',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/Dharma_Jyothi_EP-149_NKR_TV_Kannada_144P.mp4',
    badge: 'TOP 5',
  },
];

type ModalState = { src: string; title: string } | null;

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

  const openModal = (src: string, title: string) => {
    setModal({ src, title });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">
        
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
              <span className="text-[#A21D34]">Divine Content</span>{' '}
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
                        <video
                          src={item.video}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onLoadedMetadata={(e) => {
                            const vid = e.currentTarget;
                            if (vid.duration && isFinite(vid.duration)) {
                              vid.currentTime = vid.duration / 2;
                            } else {
                              vid.currentTime = 0.5;
                            }
                          }}
                          className="h-full w-full object-cover"
                        />
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
              {/* Decorative Border */}
              <div className="relative flex h-full w-full max-w-2xl flex-col items-center justify-center rounded-[16px] border-[1.5px] border-[#D68B45]/60 p-6 text-center text-white sm:p-10">
                <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[#D68B45]" />
                <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[#D68B45]" />
                <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#D68B45]" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#D68B45]" />
                
                <h3 className="mb-6 text-xl font-bold tracking-wide text-[#D68B45] sm:text-2xl">
                  | ವಿಜಾಪುರದ ಗುಡಿಗಾಳ್ವೆ |
                </h3>
                <div className="space-y-4 text-[13px] leading-relaxed text-white/90 sm:text-[15px]">
                  <p>
                    "NKR TV" ಚಾನೆಲ್ ನಲ್ಲಿ ಪ್ರಸಾರವಾಗುವ "ಅಗ್ನಿಹೋತ್ರ" ಕಾರ್ಯಕ್ರಮವು ವೇದದ ಜ್ಞಾನವನ್ನು, ಸಂಸ್ಕೃತಿ, ಜೀವನ ಮಾರ್ಗ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆಯಲ್ಲಿ ಹೇಗೆ ತೋರಿಸುತ್ತದೆ. ಈ ಕಾರ್ಯಕ್ರಮವು ಪ್ರತಿಯೊಬ್ಬರ ಜೀವನದ ಪಥಗಳನ್ನು, ಧರ್ಮದ ಪುನರ್ರಚನೆ, ಧ್ಯಾನ ಮತ್ತು ಯೋಗದ ಬಗ್ಗೆ ವ್ಯಕ್ತಿಗತ ನಿಲುವಿಗೆ ಹೆಚ್ಚಿನ ನೆರವು ನೀಡುತ್ತದೆ.
                  </p>
                  <p>
                    ಈ ಕಾರ್ಯಕ್ರಮವು ಜೀವನ ಉನ್ನತಿಗೆ ಹಾಗೂ ವಿಶಿಷ್ಟವಾದ ಮನಸ್ಥಿತಿ ಹಾಗೂ ತೀವ್ರತೆಗಳನ್ನು ಹಾಗೂ ಆಳವಾದ ವೇದ ಸಂಭಾವನೆಯನ್ನು ಅನುಭವಿಸಲು ಸಹಕಾರಿಯಾಗಿದೆ.
                  </p>
                  <p className="hidden sm:block">
                    ಪ್ರತಿ ಸಂಜೆಯೂ ಮೂಲ ಧ್ಯಾನ, ಭಕ್ತಿ ವೇದದ ಜೀವನ ನಮ್ಮ ಮಾರ್ಗದ ನಿಮಿತ್ತ. ಆಧ್ಯಾತ್ಮಿಕ ಜ್ಞಾನ ಈ ಸಂಕುಲವನ್ನು ನಿಮ್ಮ ಹೃದಯದೊಳಗೆ ಸ್ವೀಕರಿಸುತ್ತದೆ. "NKR TV" ಚಾನೆಲ್ ನಲ್ಲಿ ಆದರ್ಶ ಮೂಲದ ಜೀವನದ ಬೆಳವಣಿಗೆ ನಿಮ್ಮನ್ನು ಸೇರಬಲ್ಲದು.
                  </p>
                </div>
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

        {/* Bottom Feature Highlights Bar */}
        <div className="mt-12 flex flex-col flex-wrap items-start justify-between gap-6 rounded-[20px] border border-[#f0e6d6] bg-[#FDF8F0] p-6 sm:flex-row sm:items-center sm:p-8">
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fcece6] text-[20px]">
              🌸
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#311B5E] sm:text-[15px]">Spiritual Wisdom</h4>
              <p className="text-[12px] font-medium text-gray-500">Timeless Teachings</p>
            </div>
          </div>

          <div className="hidden h-10 w-[1px] bg-[#f0e6d6] sm:block" />

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fcece6] text-[20px]">
              📖
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#311B5E] sm:text-[15px]">Curated with Care</h4>
              <p className="text-[12px] font-medium text-gray-500">Handpicked Content</p>
            </div>
          </div>

          <div className="hidden h-10 w-[1px] bg-[#f0e6d6] lg:block" />

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fcece6] text-[20px]">
              ⭐
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#311B5E] sm:text-[15px]">Inspiring Stories</h4>
              <p className="text-[12px] font-medium text-gray-500">Real Life Experiences</p>
            </div>
          </div>

          <div className="hidden h-10 w-[1px] bg-[#f0e6d6] sm:block" />

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fcece6] text-[20px]">
              ❤️
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#311B5E] sm:text-[15px]">Peace & Positivity</h4>
              <p className="text-[12px] font-medium text-gray-500">For Every Soul</p>
            </div>
          </div>

        </div>

      </div>
      {modal && <VideoModal modal={modal} onClose={closeModal} />}
    </section>
  );
}
