import FeaturedSection from "@/components/FeaturedSection.tsx";
import Footer from "@/components/Footer.tsx";
import HeroSection from "@/components/HeroSection.tsx";
import InstructorSection from "@/components/InstructorSection.tsx";
import { MusicSchoolTestimonials } from "@/components/MusicSchoolTestimonials.tsx";
import Navbar from "@/components/Navbar.tsx";
import UpcomingWebinars from "@/components/UpcomingWebinars.tsx";
import { WhyChooseUs } from "@/components/WhyChooseUs.tsx";

export default function Home() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-6" />
      </div>
    
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

      {/* // Footer Section */}
      <Footer />

    </main>
    </>
  );
}
