'use client'
import React from 'react'
import { WavyBackground } from '../../ui/wavy-background.tsx'
// import { AnimatedTooltip } from './ui/animated-tooltip.tsx';
import { LinkPreview } from '../ui/link-preview.tsx';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip.tsx';

const socials = [
    {
        id: 1,
        name: 'LinkedIn',
        link: 'pnk892',
        image:
            'https://skillicons.dev/icons?i=linkedin',
    },
    {
        id: 2,
        name: 'Github',
        link: 'pnk-Itoc-892',
        image:
            'https://skillicons.dev/icons?i=github',
    },
    {
        id: 3,
        name: 'Instagram',
        link: 'pankajsingh892',
        image:
            'https://skillicons.dev/icons?i=instagram',
    },
    {
        id: 4,
        name: 'Drop A Mail',
        link: 'pnkdtu892@gmail.com',
        image:
            'https://skillicons.dev/icons?i=gmail',
    },
];

const ContactSection = () => {
    return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                {/* // ! Contact Section */}
                <div className="flex justify-center items-center h-full flex-col px-4">
                    <div className="tracking-wide text-xl md:text-4xl max-w-6xl mx-auto mb-10">
                        Connect with me On{" "}
                        <LinkPreview url="https://linkedin.com" className="font-bold">
                            LinkedIn
                        </LinkPreview>{" "}
                        and{" "}
                        <LinkPreview url="https://instagram.com" className="font-bold">
                            Instagram
                        </LinkPreview>{" "}
                        <p className="tracking-wide text-xl text-center md:text-3xl max-w-6xl mx-auto">or</p>
                        simply drop a mail at{" "}
                        <LinkPreview url="https://gmail.com" className="font-bold">
                            pnkdtu892@gmail.com
                        </LinkPreview>{" "}
                    </div>
                    <section>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold text-center mb-6">Social Links</h2>
                        <p className="text-base md:text-lg text-white text-center mb-4">Redirect To My Social Pages</p>
                        <div className="flex items-center justify-center mb-10 w-full">
                            <AnimatedTooltip items={socials} />
                        </div>
                    </section>
                    <p className="text-white tracking-wide text-xl md:text-4xl max-w-4xl mx-auto mt-10">
                        Do Visit My {" "}
                        <LinkPreview url="https://github.com/pnk-ltoc-892" className="font-bold">
                            Github
                        </LinkPreview>{" "}
                        to view my Projects
                    </p>
                </div>
            </WavyBackground>
        </div>
    )
}

export default ContactSection
