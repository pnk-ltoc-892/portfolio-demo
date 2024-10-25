"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./ui/animated-modal.tsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button.tsx";
import { AnimatedStackTooltip } from "./ui/animated-skills-tip.tsx";
import { features, stack } from "@/data/index.ts";
import { div } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gradient.tsx";
import { BackgroundGradientProject } from "./ui/background-gradient-project.tsx";

interface Project {
    title: string,
    description: string,
    image: string,
    status: string,
    link: string,
    code: string,
}

export function AnimatedProjectModel({ project }: { project: Project }) {
    const images = [
        "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    return (
        <div className="flex items-center justify-center bg-transparent">
            <Modal>
                        {/* // !<---- Main card ----> */}
                        <BackgroundGradientProject
                            className="rounded-2xl bg-zinc-900 overflow-hidden hover:scale-105 transition-all duration-300">
                            
                            <div className="h-[44rem] w-[32rem] rounded-2xl flex flex-col items-center justify-start p-4">
                                <img
                                    src={project.image}
                                    className="rounded-2xl h-[22rem] w-[32rem] p-0 object-cover overflow-hidden"
                                    alt={project.title}
                                />

                                <h1 className="uppercase text-neutral-200 text-start text-3xl mt-10 mb-4 font-semibold" >{project.title}{" "}{project.title}</h1>
                                <p className=" tracking-wide text-neutral-400 text-[1.15rem] h-[10rem] overflow-hidden px-2">{project.description}</p>
                                <div className="flex justify-between gap-28 items-center mb-2">
                                    <div className="px-8 py-2 rounded-full flex gap-2 w-fit items-center justify-center">
                                        <AnimatedStackTooltip items={stack} />
                                    </div>
                                    <ModalTrigger>
                                        <Button />
                                    </ModalTrigger>
                                </div>
                            </div>
                        </BackgroundGradientProject>
                        {/* // !<---- Main card ----> */}
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-2xl md:text-4xl text-neutral-200 font-bold text-center m-4">
                            {project.title}
                        </h4>
                        <div className="flex justify-center items-center py-6">
                            {images.map((image, idx) => (
                                <motion.div
                                    key={"images" + idx}
                                    style={{
                                        rotate: Math.random() * 20 - 10,
                                    }}
                                    whileHover={{
                                        scale: 1.8,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    whileTap={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    className="rounded-lg -mr-4 mt-4 bg-neutral-800 border-neutral-700 border flex-shrink-0 "
                                >
                                    <Image
                                        src={image}
                                        alt="bali images"
                                        width="1200"
                                        height="800"
                                        className="rounded-lg h-20 w-20 md:h-40 md:w-60 object-cover flex-shrink-0"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <div className="py-8 text-xl tracking-wider text-neutral-400 flex flex-wrap px-4 items-center justify-center max-w-4xl mx-auto">
                            {project.description}{" "}{project.description}
                        </div>
                        <h2 className="tracking-wider pt-6 pb-4 text-xl font-bold text-neutral-200 max-w-3xl mx-auto">
                            Salient Features :-
                        </h2>
                        <div className="grid grid-cols-2 gap-6 items-center justify-center max-w-4xl mx-auto">
                            {
                                features.map((item, idx) => (
                                    <div>
                                        <span className="text-xl text-neutral-200" >{item.heading}{": "}</span>
                                        <span className="text-lg text-neutral-400">{item.description}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <button className="bg-white max-w-fit mx-auto text-black text-sm px-4 py-2 rounded-md border border-black mt-8 ">
                            {"View Source </>"}
                        </button>

                    </ModalContent>
                    <ModalFooter className="flex gap-4 items-center justify-center">
                        <div className="flex max-w-4xl mx-auto gap-2 w-fit items-center justify-center text-xl">
                            <span className="mx-4">Stack:</span>
                            <AnimatedStackTooltip items={stack} />
                        </div>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
}

const PlaneIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
        </svg>
    );
};

const VacationIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
            <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
            <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
            <path d="M15 9l-3 5.196" />
            <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
        </svg>
    );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M10 10l2 -2l2 2" />
            <path d="M10 14l2 2l2 -2" />
        </svg>
    );
};

const FoodIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
        </svg>
    );
};

const MicIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
            <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
        </svg>
    );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 12a10 10 0 1 0 -20 0" />
            <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
            <path d="M2 12l10 10l-3.5 -10" />
            <path d="M15.5 12l-3.5 10l10 -10" />
        </svg>
    );
};
