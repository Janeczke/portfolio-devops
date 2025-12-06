// app/page.tsx
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
// (później: AboutSection, SkillsSection itd.)

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </MainLayout>
  );
}
