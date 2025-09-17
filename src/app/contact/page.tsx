"use client"; //Vi bruker use client fordi vi har en interaksjon på denne siden, altså ting som skal kunne endres på klientsiden

import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT = {
    title: "Contact me",
    intro: "Here are my socials and contact information. Feel free to reach out!",

    items: [
        {
            label: "GitHub",
            href: "https://github.com/snakeMax",
            icon: "github",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/chloeknutsen/",
            icon: "linkedin",
        },
    ] as {
        label: string;
        href: string;
        icon: "github" | "linkedin";
    }[],
};

export default function Page() {
    const renderIcon = (name: "github" | "linkedin" | "email") => {
        switch (name) {
            case "github":
                return <FaGithub size={80} />;
            case "linkedin":
                return <FaLinkedin size={80} />;
        }
    };

    return (
        <div className='flex flex-col items-center h-screen text-white'>
            <div className='bg-black/80 w-full max-w-[800px] h-full rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl font-bold my-4 text-white'>
                        {CONTACT.title}
                    </h1>

                    <p className='text-xl my-4 text-white text-center'>
                        {CONTACT.intro}
                    </p>

                    {CONTACT.items.map((item) => (
                        <div
                            key={item.href}
                            className='flex flex-row items-center gap-4 my-4 text-xl border-2 border-white rounded-2xl px-4 py-2 bg-gray-800 w-full'
                        >
                            <a
                                href={item.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex flex-row items-center gap-4'
                            >
                                {renderIcon(item.icon)}
                                <p>{item.label}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
