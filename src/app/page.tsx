import HeroSection from "@/components/HeroSection.tsx";
import About from "../../pages/About.tsx";
import Skills from "../../pages/Skills.tsx";
import Projects from "../../pages/Projects.tsx";
import Message from "../../pages/Message.tsx";
import Footer from "../../pages/Footer.tsx";



export default function Home() {
  return (
    <> 
    <main className="min-h-screen bg-black/[0.96] antialiased">
      {/* // Hero Section */}
      <HeroSection />

      {/* // About Section */}
      <About />

      {/* // Skills Section */}
      <Skills />

      {/* // Projects Section */}
      <Projects />

      {/* // Message Section */}
      <Message />

      {/* // Footer Section */}
      <Footer />
    </main>
    </>
  );
}
