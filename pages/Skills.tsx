
import { SkillsHeroSection } from "@/components/SkillsHeroSection";
import SkillSection from "@/components/SkillSection.tsx";


export default function Skills() {
    return (
        <main className="antialiased ">
            {/* // Featured Section */}
            <SkillsHeroSection children={<SkillSection />}/>
        </main>
    );
}
