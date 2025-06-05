import Hero from '@/components/Hero';
import GithubSection from '@/components/GithubSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <GithubSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}