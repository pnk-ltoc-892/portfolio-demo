import React from 'react'

export const Button = () => {
    return (
        <div className="bg-indigo-600/[0.4] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-[4px] text-xs font-semibold leading-6  text-white flex items-center justify-center">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="text-xs relative flex items-center z-10 rounded-full bg-zinc-950 py-1 px-3 ring-1 ring-white/10 min-w-fit">
                Know More
            </div>
            <span className="absolute -bottom-0 left-[1.25rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </div>
    )
}
