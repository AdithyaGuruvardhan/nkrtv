import DotBackdrop from '../components/decor/DotBackdrop';

const heroImage = new URL('../aryamba.webp', import.meta.url).href;
const advertisementImage = new URL('../aryamba (1).webp', import.meta.url).href;

const heroFeatures = [
  {
    title: 'ನಮ್ಮ ಗುರಿ',
    text: 'ಸತ್ಯ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಸಮುದಾಯದ ಸೇವೆ',
    icon: (
      <path d="M12 2.75a9.25 9.25 0 1 0 9.25 9.25h-2.1A7.15 7.15 0 1 1 12 4.85v-2.1Zm7.78.72-4.1.63.72 1.26-5.02 5.02a1.65 1.65 0 1 0 2.24 2.24l5.02-5.02 1.26.72.63-4.1a.66.66 0 0 0-.75-.75Zm-7.73 7.1a1.43 1.43 0 1 1 0 2.86 1.43 1.43 0 0 1 0-2.86Z" />
    ),
  },
  {
    title: 'ನಮ್ಮ ದೃಷ್ಟಿ',
    text: 'ಕನ್ನಡದ ಜನತೆಗೆ ಜ್ಞಾನ, ಮನರಂಜನೆ ಮತ್ತು ಪ್ರೇರಣೆ',
    icon: (
      <path d="M12 5.1c5.2 0 8.83 5.03 9.4 5.88.2.31.2.73 0 1.04-.57.85-4.2 5.88-9.4 5.88s-8.83-5.03-9.4-5.88a.96.96 0 0 1 0-1.04C3.17 10.13 6.8 5.1 12 5.1Zm0 2.05c-3.58 0-6.39 3.05-7.28 4.35.89 1.3 3.7 4.35 7.28 4.35s6.39-3.05 7.28-4.35C18.39 10.2 15.58 7.15 12 7.15Zm0 1.33a3.02 3.02 0 1 1 0 6.04 3.02 3.02 0 0 1 0-6.04Zm0 2.05a.97.97 0 1 0 0 1.94.97.97 0 0 0 0-1.94Z" />
    ),
  },
  {
    title: 'ನಮ್ಮ ಬದ್ಧತೆ',
    text: 'ಗುಣಮಟ್ಟದ ಕಾರ್ಯಕ್ರಮಗಳು ನಿಮ್ಮ ಮನಮನಗಳಿಗೆ.',
    icon: (
      <path d="M8 11.35a3.45 3.45 0 1 1 0-6.9 3.45 3.45 0 0 1 0 6.9Zm8 0a3.45 3.45 0 1 1 0-6.9 3.45 3.45 0 0 1 0 6.9ZM8 13.15c2.9 0 5.25 1.72 5.25 3.85v1.05c0 .57-.46 1.03-1.03 1.03H3.78c-.57 0-1.03-.46-1.03-1.03V17c0-2.13 2.35-3.85 5.25-3.85Zm8 0c2.9 0 5.25 1.72 5.25 3.85v1.05c0 .57-.46 1.03-1.03 1.03H15.1c.1-.33.15-.68.15-1.03V17c0-1.35-.65-2.61-1.74-3.6.75-.16 1.59-.25 2.49-.25Z" />
    ),
  },
];

const adBenefits = [
  {
    title: 'ವಿಶಾಲ ಪ್ರೇಕ್ಷಕರ ವಲಯ',
    text: 'ಗ್ರಾಮಾಂತರದಿಂದ ನಗರಗಳವರೆಗೆ ನಿಮ್ಮ ಹೆಜ್ಜೆಯನ್ನು ನಿಜ, ವಿಶ್ವಾಸದಿಂದ.',
    icon: (
      <path d="M8.2 11.15a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm7.6 0a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2ZM8.2 12.85c2.9 0 5.25 1.62 5.25 3.63v1.2c0 .5-.41.9-.9.9h-8.7c-.5 0-.9-.4-.9-.9v-1.2c0-2.01 2.35-3.63 5.25-3.63Zm7.6.12c2.82 0 5.1 1.57 5.1 3.51v1.2c0 .5-.4.9-.9.9h-4.85c.08-.29.12-.59.12-.9v-1.2c0-1.2-.56-2.32-1.52-3.2.63-.2 1.33-.31 2.05-.31Z" />
    ),
  },
  {
    title: 'ಗುರಿ ಹೊಂದಿದ ಪ್ರೇಕ್ಷಕರು',
    text: 'ಕುಟುಂಬಗಳು, ಮಹಿಳೆಯರು, ಯುವಕರು ಹಾಗೂ ಭಕ್ತ ಸಮೂಹ.',
    icon: (
      <path d="M3.5 10.4 15.8 4.2c.78-.39 1.7.18 1.7 1.05v13.5c0 .87-.92 1.44-1.7 1.05l-6.24-3.15v-4.07l5.54-2.8a.82.82 0 0 0-.74-1.46L7.95 11.56v4.26l-4.45-2.24A1.75 1.75 0 0 1 3.5 10.4Zm15.9-1.95 1.26-1.26a.9.9 0 0 1 1.27 1.27l-1.26 1.26a.9.9 0 1 1-1.27-1.27Zm.68 5.85a.9.9 0 0 1 1.14-.57l1.67.56a.9.9 0 0 1-.57 1.7l-1.67-.56a.9.9 0 0 1-.57-1.13Zm.57-3.91 1.67-.56a.9.9 0 1 1 .57 1.7l-1.67.56a.9.9 0 0 1-.57-1.7Z" />
    ),
  },
  {
    title: 'ಹೆಚ್ಚಿನ ಪರಿಣಾಮ',
    text: 'ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್‌ಗೆ ಸಂಪರ್ಕ, ಗುರುತಿನ ಮತ್ತು ದೃಶ್ಯ ಪರಿಣಾಮ.',
    icon: (
      <path d="M4.5 18.75h15a1 1 0 0 1 0 2h-15a1 1 0 0 1 0-2Zm1.1-5.05h2.85c.5 0 .9.4.9.9v2.35c0 .5-.4.9-.9.9H5.6c-.5 0-.9-.4-.9-.9V14.6c0-.5.4-.9.9-.9Zm5.05-4.1h2.85c.5 0 .9.4.9.9v6.45c0 .5-.4.9-.9.9h-2.85c-.5 0-.9-.4-.9-.9V10.5c0-.5.4-.9.9-.9Zm5.05-5.7h2.85c.5 0 .9.4.9.9v12.15c0 .5-.4.9-.9.9H15.7c-.5 0-.9-.4-.9-.9V4.8c0-.5.4-.9.9-.9Z" />
    ),
  },
  {
    title: 'ವಿಶ್ವಾಸಾರ್ಹ ಮಾಧ್ಯಮ',
    text: 'ಸತ್ಯ, ಸಂಸ್ಕೃತಿ ಹಾಗೂ ಮೌಲ್ಯಾಧಾರಿತ ಕಾರ್ಯಕ್ರಮಗಳ ವಿಶ್ವಾಸ.',
    icon: (
      <path d="M8.3 13.03 5.74 15.6a2.43 2.43 0 0 1-3.44-3.44l3.62-3.61a3.6 3.6 0 0 1 4.64-.38l-.12.12-1.36 1.36a1.35 1.35 0 0 0 0 1.91 3.4 3.4 0 0 0 4.8 0l.9-.9 5.62 5.62a2.4 2.4 0 0 1-3.39 3.39l-1.3-1.3-.78.78a2.35 2.35 0 0 1-3.32 0L8.3 13.03Zm4.3-8.1a3.6 3.6 0 0 1 4.62.4l4.48 4.48a2.43 2.43 0 0 1-3.44 3.44l-3.01-3.01-1.94 1.93a1.37 1.37 0 0 1-1.94 0l-.58-.58a.34.34 0 0 1 0-.48l1.81-1.81a3.1 3.1 0 0 0 0-4.38Z" />
    ),
  },
];

export default function AdvertisementPage() {
  return (
    <div className="bg-[#fffdf9] text-[#3b2c2a]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-[0.34] [background-image:radial-gradient(circle_at_18%_20%,rgba(231,156,58,0.18)_0,transparent_28%),linear-gradient(135deg,rgba(179,32,26,0.04)_0,transparent_36%)]" />
        <DotBackdrop className="-top-28 -right-28 h-[420px] w-[420px] opacity-15" />
        <div className="relative mx-auto grid min-h-screen w-full max-w-[1440px] items-center gap-4 px-5 py-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 xl:px-12">
          <div className="z-10 flex flex-col items-center pb-3 pt-4 text-center lg:items-start lg:text-left">
            <img
              src="https://nkrtv.in/wp-content/uploads/2024/12/cropped-NKR_Logo-3.png"
              alt="NKR TV Kannada"
              className="h-[150px] w-[220px] object-contain sm:h-[180px] sm:w-[270px] lg:ml-[92px] lg:h-[210px] lg:w-[318px]"
            />

            <div className="mt-1 w-full">
              <h1
                className="font-black leading-[1.25] text-[#c81a17] drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]"
                style={{
                  fontFamily: "'Noto Sans Kannada', 'Tunga', 'Nirmala UI', sans-serif",
                  fontSize: 'clamp(2.1rem, 4.2vw, 3.6rem)',
                }}
              >
                ನಮ್ಮ ಕನ್ನಡದ ರಾಜ್ ಟಿವಿ
              </h1>
              <p
                className="mt-1 text-[1.2rem] font-extrabold leading-snug text-[#4b332f] sm:text-[1.45rem] lg:text-[1.62rem]"
                style={{ fontFamily: "'Noto Sans Kannada', 'Tunga', 'Nirmala UI', sans-serif" }}
              >
                ಅಜ್ಜ ಅಭಿಮಾನದಿಲ್ಲ ಕನ್ನಡದತನ
              </p>
              <p className="mt-5 text-[1.3rem] font-black uppercase tracking-[0.04em] text-[#9b1d1a] sm:text-[1.6rem] lg:text-[1.78rem]">
                Your Channel. Your Voice.
              </p>
            </div>

            <div className="mt-7 flex w-full max-w-[610px] items-center justify-center gap-3">
              <span className="h-px flex-1 bg-[#ead6c2]" />
              <span className="h-2 w-2 rounded-full bg-[#b93420]" />
              <span className="h-px flex-1 bg-[#ead6c2]" />
            </div>

            <div className="mt-8 grid w-full max-w-[650px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
              {heroFeatures.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-4 text-center ${index > 0 ? 'sm:border-l sm:border-[#eadfd4]' : ''}`}
                >
                  <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#f0c891] text-[#e78022]">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
                      {item.icon}
                    </svg>
                  </div>
                  <h2
                    className="mt-4 text-[1.12rem] font-black leading-snug text-[#8d3a26]"
                    style={{ fontFamily: "'Noto Sans Kannada', 'Tunga', 'Nirmala UI', sans-serif" }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="mx-auto mt-2 max-w-[150px] text-[0.85rem] font-bold leading-[1.55] text-[#6c554f]"
                    style={{ fontFamily: "'Noto Sans Kannada', 'Tunga', 'Nirmala UI', sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://www.nkrtvkannada.com"
              className="mt-9 inline-flex items-center gap-3 text-[1rem] font-extrabold text-[#4d403d] sm:text-[1.12rem]"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-[#3a322f]">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.17a15.8 15.8 0 0 0-1.16-5.01A8.02 8.02 0 0 1 18.9 11ZM12 4.04c.7.94 1.48 3.2 1.69 6.96h-3.38c.21-3.76.99-6.02 1.69-6.96ZM4.1 13h3.17c.16 1.95.57 3.68 1.16 5.01A8.02 8.02 0 0 1 4.1 13Zm3.17-2H4.1a8.02 8.02 0 0 1 4.33-5.01A15.8 15.8 0 0 0 7.27 11ZM12 19.96c-.7-.94-1.48-3.2-1.69-6.96h3.38c-.21 3.76-.99 6.02-1.69 6.96Zm3.57-1.95c.59-1.33 1-3.06 1.16-5.01h3.17a8.02 8.02 0 0 1-4.33 5.01Z" />
              </svg>
              www.nkrtvkannada.com
            </a>
          </div>

          <div className="relative min-h-[480px] sm:min-h-[650px] lg:min-h-screen">
            <img
              src={heroImage}
              alt="Karnataka culture collage"
              className="absolute bottom-[-2px] left-1/2 h-full max-h-[920px] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_18px_34px_rgba(99,44,13,0.22)] lg:left-auto lg:right-[-88px] lg:translate-x-0 xl:right-[-34px]"
            />
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#e8dfd6] bg-[#fffefa]">
        <DotBackdrop className="left-[-180px] top-16 h-[340px] w-[340px] opacity-15" />
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-0 px-4 py-8 sm:px-6 md:flex-row md:flex-nowrap lg:px-0">
          <div className="relative z-10 flex w-full flex-col md:w-[45.5%] md:shrink-0 md:border-r md:border-[#f0e4da] md:pb-7 md:pl-2 md:pr-8 lg:pl-0 lg:pr-10">
            <div className="mb-7">
              <h2
                className="text-[1.72rem] font-black leading-tight text-[#c21f1b] sm:text-[2.02rem]"
                style={{ fontFamily: "'Noto Sans Kannada', 'Tunga', 'Nirmala UI', sans-serif" }}
              >
                ಯಾಕೆ ಜಾಹೀರಾತು ನೀಡಬೇಕು
              </h2>
              <p className="mt-1 text-[1.06rem] font-black uppercase tracking-[0.01em] text-[#a92a22] sm:text-[1.25rem]">
                Advertise With NKR TV
              </p>
            </div>

            <div className="grid gap-7">
              {adBenefits.map((item) => (
                <div key={item.title} className="grid grid-cols-[82px_1fr] items-center gap-3">
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#fff0bd] text-[#cf3a1c] shadow-[0_1px_0_rgba(255,255,255,0.95)]">
                    <svg viewBox="0 0 24 24" className="h-9 w-9 fill-current">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-[1.15rem] font-black leading-tight text-[#2c4c90] sm:text-[1.28rem]"
                      style={{ fontFamily: "'Noto Sans Kannada', 'Tunga', 'Nirmala UI', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 max-w-[360px] text-[0.92rem] font-bold leading-[1.52] text-[#626064] sm:text-[1.02rem]"
                      style={{ fontFamily: "'Noto Sans Kannada', 'Tunga', 'Nirmala UI', sans-serif" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full items-start justify-center overflow-hidden pt-5 md:w-[54.5%] md:shrink-0 md:pl-9 md:pt-0 lg:pl-11">
            <img
              src={advertisementImage}
              alt="NKR TV advertisement opportunities"
              className="h-auto w-full max-w-[620px] object-contain md:-mt-8 md:max-w-[650px] lg:-mt-10 lg:max-w-[690px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
