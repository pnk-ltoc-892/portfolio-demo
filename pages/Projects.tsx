'use client'

import { AnimatedProjectModel } from '@/components/AnimatedProjectModel.tsx'
import { projectData } from '@/data/index.ts'
import React from 'react'

const Projects = () => {
    return (
        <section className="relative h-full bg-black/[0.96] w-full">
            <div className="h-full w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center">

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className="text-center z-10 mt-16">
                    <h2 className='text-4xl text-teal-600/100 font-semibold tracking-wide'>
                        {"[Projects]"}</h2>
                    <p className='text-md leading-8 font-extrabold tracking-light text-white sm:text-4xl' >What I&apos;ve Been Working On</p>
                </div>
                <div className='grid grid-cols-2 gap-[5rem] mt-16'>
                    <div className='flex flex-col gap-[6rem]'>
                    <AnimatedProjectModel project={projectData[0]} />
                    <AnimatedProjectModel project={projectData[2]} />
                    </div>
                    <div className='flex flex-col gap-[6rem] mt-[8rem]'>
                        <AnimatedProjectModel project={projectData[1]} />
                        <AnimatedProjectModel project={projectData[3]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects