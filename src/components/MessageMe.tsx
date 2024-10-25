"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function MessageMe() {
    const placeholders = [
        "Got a burning question? Ask away!",
        "What's on your mind? I'm all ears!",
        "Curious? Drop your question here!",
        "What do you want to know? Hit me up!",
        "Ask me anything, no filter!",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[20rem] flex flex-col justify-center items-center px-4">
            <h1 className="mb-4 sm:mb-8 text-2xl text-center sm:text-5xl font-bold text-neutral-300 ">
                Drop Me A Message Below!
            </h1>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}
