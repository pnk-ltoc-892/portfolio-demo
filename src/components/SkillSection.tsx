'use client' // ! Motion - Usually On CLient Side

import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient.tsx'

import skillData from '../data/skills.json'

interface Skill {
    id: number,
    title: string,
    icon: string
}

const SkillSection = () => {
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide'>Featured Courses</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl' >Learn With the Best</p>
                </div>
            </div>

            <div className='mt-10'>
                <div className='px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto'>
                    {
                        skillData.skills.map((skill: Skill, index) => (
                            <div key={index} className='flex justify-center hover:scale-105 hover:translate-x-2 transition-all duration-300'>
                                <BackgroundGradient
                                    className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                    <div className="h-18 w-[14rem] p-2 sm:p-3 flex items-center justify-start gap-3">
                                        <img src={skill.icon} alt="" 
                                        className='h-12 w-12'
                                        />
                                        <p className="text-2xl sm:text-xl text-black dark:text-neutral-200">{skill.title}</p>
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