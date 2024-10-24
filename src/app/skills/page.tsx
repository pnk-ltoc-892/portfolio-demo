
import { SkillsHeroSection } from "@/components/SkillsHeroSection";
import SkillSection from "@/components/SkillSection.tsx";


export default function Home() {
    return (
        <main className="antialiased ">
            {/* // Featured Section */}
            <SkillsHeroSection children={<SkillSection />}/>
        </main>
    );
}
