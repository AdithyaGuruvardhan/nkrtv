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
import FictionPage from './pages/FictionPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AdsPage from './pages/AdsPage';
import AdvertisementPage from './pages/AdvertisementPage';
import AdvertisementsPage from './pages/AdvertisementsPage';
import PageMetadata from './components/seo/PageMetadata';
import { SITE_DESCRIPTION, SITE_NAME } from './config/site';

const pageMetaByPath: Record<string, { title: string; description: string; path: string }> = {
  '/': {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: '/',
  },
  '/our-programs': {
    title: 'Fiction',
    description: 'Watch NKR TV Kannada fiction series, short films, and serialized stories.',
    path: '/our-programs',
  },
  '/about': {
    title: 'About Us',
    description: 'Learn about the vision, people, and mission behind NKR TV Kannada.',
    path: '/about',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Get in touch with NKR TV Kannada for questions, feedback, or partnerships.',
    path: '/contact',
  },
  '/blogs': {
    title: 'Blogs',
    description: 'Read the latest NKR TV Kannada blogs, updates, and stories.',
    path: '/blogs',
  },
  '/blog': {
    title: 'Blogs',
    description: 'Read the latest NKR TV Kannada blogs, updates, and stories.',
    path: '/blogs',
  },
  '/ads': {
    title: 'Enquiry For Ads',
    description: 'Advertise with NKR TV Kannada and reach a broad regional audience.',
    path: '/ads',
  },
  '/advertisement': {
    title: 'Advertisement',
    description: 'Advertise with NKR TV Kannada and reach a broad regional audience.',
    path: '/advertisement',
  },
  '/Advertisement': {
    title: 'Advertisement',
    description: 'Advertise with NKR TV Kannada and reach a broad regional audience.',
    path: '/advertisement',
  },
  '/advertisements': {
    title: 'Advertisements',
    description: 'Explore advertisement opportunities and brand placement with NKR TV Kannada.',
    path: '/advertisements',
  },
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const pageMeta = pageMetaByPath[currentPath] ?? {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: '/',
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
        <EntertainmentSerialSection />
        <YogaPathaSection />
        <BlogsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
