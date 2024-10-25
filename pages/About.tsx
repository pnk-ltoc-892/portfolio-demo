import { AboutBento } from '@/components/AboutBento.tsx'
import { AboutBGHighlight } from '@/components/ui/about-bg-highlight.tsx'
import React from 'react'

const About = () => {
    return (
        <section className="relative min-h-screen bg-black/[0.96] w-full">
            <AboutBGHighlight>
                <div className="text-center z-10">
                    <h2 className='text-4xl py-8 text-teal-500/100 font-semibold tracking-wide mb-2'>
                        {"[About Me]"}</h2>
                </div>
                <AboutBento />
            </AboutBGHighlight>
        </section>
    )
}

export default About