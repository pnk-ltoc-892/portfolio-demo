"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";
import React from "react";

export function SkillsHeroSection({children}:{children: React.ReactNode}) {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="py-16 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white h-full leading-relaxed lg:leading-snug text-center mx-auto"
            >
                <div>
                    {children}
                </div>
            </motion.h1>
        </HeroHighlight>
    );
}