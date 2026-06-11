import { useEffect, useState } from 'react';
import ContentShowcaseSection from './components/sections/ContentShowcaseSection'
import ComingSoonSection from './components/sections/ComingSoonSection'
import FeaturedVideoSection from './components/sections/FeaturedVideoSection'
import DivineContentSection from './components/sections/DivineContentSection'
import EntertainmentSerialSection from './components/sections/EntertainmentSerialSection'
import YogaPathaSection from './components/sections/YogaPathaSection'
import BlogsSection from './components/sections/BlogsSection'
import ContactSection from './components/sections/ContactSection'
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import Footer from './components/layout/Footer';
import InlineVideoSection from './components/sections/InlineVideoSection';
import FictionPage from './pages/FictionPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AdsPage from './pages/AdsPage';
import AdvertisementPage from './pages/AdvertisementPage';
import AdvertisementsPage from './pages/AdvertisementsPage';
import WhyNKRBlogPage from './pages/WhyNKRBlogPage';
import NKRSpecialitiesBlogPage from './pages/NKRSpecialitiesBlogPage';
import CEOBlogPage from './pages/CEOBlogPage';
import PageMetadata from './components/seo/PageMetadata';
import { SITE_DESCRIPTION, SITE_NAME } from './config/site';

const pageMetaByPath: Record<string, { title: string; description: string; path: string; keywords: string }> = {
  '/': {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: '/',
    keywords: 'NKR TV, NKR TV Kannada, Kannada Entertainment, Live TV Kannada, Kannada Culture',
  },
  '/our-programs': {
    title: 'Fiction',
    description: 'Watch NKR TV Kannada fiction series, short films, and serialized stories.',
    path: '/our-programs',
    keywords: 'Kannada Serial, Kannada Fiction, Panchamaveda, Kannada Short Films, NKR TV Programs',
  },
  '/about': {
    title: 'About Us',
    description: 'Learn about the vision, people, and mission behind NKR TV Kannada.',
    path: '/about',
    keywords: 'About NKR TV, Kannada TV Channel, NKR Vision, NKR Mission',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Get in touch with NKR TV Kannada for questions, feedback, or partnerships.',
    path: '/contact',
    keywords: 'Contact NKR TV, NKR TV Kannada contact, reach NKR TV',
  },
  '/blogs': {
    title: 'Blogs',
    description: 'Read the latest NKR TV Kannada blogs, updates, and stories.',
    path: '/blogs',
    keywords: 'Kannada Culture Blogs, NKR TV Updates, Karnataka Heritage Blog',
  },
  '/blog': {
    title: 'Blogs',
    description: 'Read the latest NKR TV Kannada blogs, updates, and stories.',
    path: '/blogs',
    keywords: 'Kannada Culture Blogs, NKR TV Updates, Karnataka Heritage Blog',
  },
  '/ads': {
    title: 'Enquiry For Ads',
    description: 'Advertise with NKR TV Kannada and reach a broad regional audience.',
    path: '/ads',
    keywords: 'Kannada TV Advertising, Advertise with NKR, NKR TV Ad Enquiry',
  },
  '/advertisement': {
    title: 'Advertisement',
    description: 'Advertise with NKR TV Kannada and reach a broad regional audience.',
    path: '/advertisement',
    keywords: 'Kannada TV Advertising, Advertise with NKR',
  },
  '/Advertisement': {
    title: 'Advertisement',
    description: 'Advertise with NKR TV Kannada and reach a broad regional audience.',
    path: '/advertisement',
    keywords: 'Kannada TV Advertising, Advertise with NKR',
  },
  '/advertisements': {
    title: 'Advertisements',
    description: 'Explore advertisement opportunities and brand placement with NKR TV Kannada.',
    path: '/advertisements',
    keywords: 'Brand Placement NKR TV, Advertisement opportunities Kannada TV',
  },
  '/blog/why-nkr-kannada-channel': {
    title: 'Why NKR Kannada Channel',
    description: 'A Celebration of Karnataka\'s Rich Culture and Heritage',
    path: '/blog/why-nkr-kannada-channel',
    keywords: 'Why NKR TV, Kannada Heritage, NKR TV Culture, Kannada Magic',
  },
  '/blog/nkr-specialities': {
    title: 'NKR Specialities',
    description: 'Exploring the Rich Tapestry of Karnataka\'s Culture with NKR Specialities.',
    path: '/blog/nkr-specialities',
    keywords: 'NKR Specialities, Panchamaveda, Dharma Jyothi, Swada Sambhrama, Kannada TV Shows',
  },
  '/blog/a-note-from-ceo': {
    title: 'A Note from CEO',
    description: 'Celebrating Karnataka\'s Culture and Identity with NKR TV.',
    path: '/blog/a-note-from-ceo',
    keywords: 'NKR TV CEO, Rekha K Govind, Kannada Identity, NKR Leadership',
  },
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const pageMeta = pageMetaByPath[currentPath] ?? {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: '/',
    keywords: 'NKR TV, Kannada TV, Entertainment',
  };

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  if (currentPath === '/our-programs') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <FictionPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/about') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <AboutPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/contact') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <ContactPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/blogs' || currentPath === '/blog') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <BlogPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/blog/why-nkr-kannada-channel') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <WhyNKRBlogPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/blog/nkr-specialities') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <NKRSpecialitiesBlogPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/blog/a-note-from-ceo') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <CEOBlogPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/ads') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <AdsPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/advertisement' || currentPath === '/advertisement/' || currentPath === '/Advertisement') {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#ede6df] text-ink">
        <PageMetadata {...pageMeta} />
        <AdvertisementPage />
      </main>
    );
  }

  if (currentPath === '/advertisements') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
        <PageMetadata {...pageMeta} />
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <AdvertisementsPage />
          <Footer />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
      <PageMetadata {...pageMeta} />
      <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
        <Header />
        <HeroSection />
        <ContentShowcaseSection />
        <ComingSoonSection />

        {/* Ad Posters */}
        <section className="bg-white py-10 pb-14">
          <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">
            <div className="mb-6">
              <h2 className="mb-2 text-[28px] md:text-[36px] font-black text-[#1a0a00]">
                Partner your brand with NKR TV Kannada
              </h2>
              <div className="h-[3px] w-10 rounded-full bg-[#FF5A3C]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="overflow-hidden rounded-[14px]">
                <img
                  src="/images/cook_show_ad.webp"
                  alt="Cook Show Ad"
                  className="block h-full min-h-[100px] w-full object-cover sm:min-h-[120px] md:min-h-[140px]"
                />
              </div>
              <div className="overflow-hidden rounded-[14px]">
                <img
                  src="/images/devotion_ad.webp"
                  alt="Devotion Ad"
                  className="block h-full min-h-[100px] w-full object-cover sm:min-h-[120px] md:min-h-[140px]"
                />
              </div>
              <div className="overflow-hidden rounded-[14px]">
                <img
                  src="/images/super_kannadiga_ad.webp"
                  alt="Super Kannadiga Ad"
                  className="block h-full min-h-[100px] w-full object-cover sm:min-h-[120px] md:min-h-[140px]"
                />
              </div>
            </div>
          </div>
        </section>

        <FeaturedVideoSection />
        <DivineContentSection />

        <InlineVideoSection videoSrc="/videos/NKRTV_Kannada.webm" />

        <EntertainmentSerialSection />

        <InlineVideoSection videoSrc="/videos/Alle_Arambha_Prema.webm" />

        <YogaPathaSection />
        <BlogsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
