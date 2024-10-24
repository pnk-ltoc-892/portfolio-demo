'use client' // ! Motion - Usually On CLient Side

import React from 'react'
import { BackgroundGradient } from './ui/background-gradient.tsx'

import skillData from '../data/skills.json'

interface Skill {
    id: number,
    title: string,
    icon: string
}
const SkillSection = () => {
    return (
        <div className='py-12'>
            <div>
                <div className="text-center">
                    <h2 className='text-4xl text-teal-600 font-semibold tracking-wide'>Skills</h2>
                    <p className='mt-2 text-md leading-8 font-extrabold tracking-light text-white sm:text-4xl' >Technologies I Work With</p>
                </div>
            </div>

            <div className='mt-10'>
                {/* <div className='px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto'> */}
                <div className='px-16 flex flex-wrap gap-6 justify-center mx-auto'>
                    {
                        skillData.skills.map((skill: Skill, index) => (
                            <div key={index} className='flex justify-center hover:scale-105 hover:translate-x-2 transition-all duration-200'>
                                <BackgroundGradient
                                    className="flex flex-col rounded-full bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                    <div className="px-6 py-3 flex items-center justify-center gap-4">
                                        <img src={skill.icon} alt="" 
                                        className='h-10 w-10'
                                        />
                                        <p className="text-2xl sm:text-2xl font-semibold text-black dark:text-neutral-200">{skill.title}</p>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillSection