"use client"

import { MessageMe } from '@/components/MessageMe.tsx'
import { AboutBGHighlight } from '@/components/ui/about-bg-highlight.tsx'
import React from 'react'

export const Message = () => {
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

export default Message