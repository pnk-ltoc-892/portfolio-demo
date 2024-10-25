import { AboutBento } from '@/components/AboutBento.tsx'
import { AboutBGHighlight } from '@/components/ui/about-bg-highlight.tsx'
import { HeroHighlight } from '@/components/ui/hero-highlight.tsx'
import React from 'react'

const page = () => {
    return (
        <section className="relative min-h-screen bg-black/[0.96] w-full">
            <AboutBGHighlight>
                <div className="text-center z-10">
                    <h2 className='text-4xl py-8 text-teal-500/100 font-semibold tracking-wide mb-2'>
                        {"[About Me]"}</h2>
                    {/* <p className='text-md leading-8 font-extrabold tracking-light text-white sm:text-4xl' >What I&apos;ve Been Working On</p> */}
                </div>
                <AboutBento />
            </AboutBGHighlight>
        </section>
    )
}

export default page