import { useEffect, useState } from 'react';
import ContentShowcaseSection from './components/sections/ContentShowcaseSection'
import ExploreNewSection from './components/sections/ExploreNewSection'
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

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  if (currentPath === '/fiction') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
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
        <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
          <Header />
          <ContactPage />
          <Footer />
        </div>
      </main>
    );
  }

  if (currentPath === '/blogs') {
    return (
      <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
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
        <AdvertisementPage />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffdf9] text-ink overflow-x-hidden">
      <div className="flex min-h-screen w-full flex-col px-0 pb-0 pt-0">
        <Header />
        <HeroSection />
        <ContentShowcaseSection />
        <ExploreNewSection />
        <ComingSoonSection />
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
