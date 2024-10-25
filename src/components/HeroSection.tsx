import React from 'react'
import { Spotlight } from './ui/Spotlight.tsx'
import { TypewriterEffectSmooth } from './ui/typewriter-effect.tsx';
import { TextGenerateEffect } from './ui/text-generate-effect.tsx';

const words = [
    {
        text: "I",
    },
    {
        text: "Am",
    },
    {
        text: "Pankaj",
        classname: "text-neutral-400"
    },
    {
        text: "Singh",
        classname: "text-neutral-400"
    }
]

const intro = `a passionate full-stack developer, I love crafting & building innovative business solutions and addressing real-world problems through technology. With a knack for problem-solving, building stuff and a love for coding, I thrive on transforming ideas into functional realities. Dive in to know more about me, explore my projects, skills and things i am working on...
`;

const HeroSection = () => {
    return (
        <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-40"
                fill="white"
            />
            <Spotlight
                className="top-0 left-0 md:left-60 md:top-10"
                fill="gray"
            />
            <Spotlight
                className="-top-40 -left-20 md:-left-32 md:-top-20 h-screen"
                fill="gray"
            />

            <div className="p-4 max-w-[70rem] flex flex-col justify-center items-center mx-auto relative z-10 w-full pt-20 md:pt-0">

                <span className='text-5xl font-bold'>Hi</span>
                <div className='mx-8'>
                    <TypewriterEffectSmooth words={words} />
                </div>
                <div>
                    <TextGenerateEffect words={intro} />
                </div>

                {/* <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Spotlight effect is a great way to draw attention to a specific part
                    of the page. Here, we are drawing the attention towards the text
                    section of the page. I don&apos;t know why but I&apos;m running out of
                    copy.
                </p> */}
            </div>
        </div>
    );
}


export default HeroSection