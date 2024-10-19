import FeaturedSection from "@/components/FeaturedSection.tsx";
import HeroSection from "@/components/HeroSection.tsx";
import InstructorSection from "@/components/InstructorSection.tsx";
import { MusicSchoolTestimonials } from "@/components/MusicSchoolTestimonials.tsx";
import UpcomingWebinars from "@/components/UpcomingWebinars.tsx";
import { WhyChooseUs } from "@/components/WhyChooseUs.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      
      {/* // Hero Section */}
      <HeroSection />

      {/* // Featured Section */}
      <FeaturedSection />

      {/* // Stcky Scroll Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <MusicSchoolTestimonials />

      {/* // Webinars Section */}
      <UpcomingWebinars />

      {/* // Instructor Section */}
      <InstructorSection />

    </main>
    
  );
}
