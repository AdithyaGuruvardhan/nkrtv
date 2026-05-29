import Header from './components/layout/Header';
import ContentShowcaseSection from './components/sections/ContentShowcaseSection';

export default function App() {
  return (
    <main className="min-h-screen bg-[#fffdf9] text-ink">
      <div className="mx-auto flex min-h-screen max-w-[1680px] flex-col px-0 pb-8 pt-0">
        <Header />
        <ContentShowcaseSection />
      </div>
    </main>
  );
}
