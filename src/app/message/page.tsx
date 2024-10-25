"use client"
import { MessageMe } from '@/components/MessageMe.tsx'
import { AboutBGHighlight } from '@/components/ui/about-bg-highlight.tsx'
import exp from 'constants'
import React from 'react'

export const page = () => {
    return (
        <section className="relative bg-black/[0.96] w-full">
            <AboutBGHighlight>
                <div>
                    <MessageMe />
                </div>
            </AboutBGHighlight>
        </section>
    )
}

export default page