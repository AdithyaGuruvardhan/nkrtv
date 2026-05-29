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

export default function App() {
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
