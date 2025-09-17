"use client";

import { useState } from "react";
import { ImHome } from "react-icons/im";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

const navItems = [
    { href: "/", icon: <ImHome size={24} />, key: "/" },
    { href: "/about", icon: <MdOutlineEmojiPeople size={24} />, key: "/about" },
    { href: "/projects", icon: <MdContactPage size={24} />, key: "/projects" },
    { href: "/portfolio", icon: <FaBook size={24} />, key: "/portfolio" },
    { href: "/contact", icon: <IoMdContacts size={24} />, key: "/contact" },
];

export default function Navbar() {
    const [activeNav, setActiveNav] = useState<string>("#");

    return (
        <nav className='fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex gap-6 z-50'>
            {navItems.map((item) => (
                <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setActiveNav(item.key)}
                    className={`text-gray-600 hover:text-green-600 transition-colors ${
                        activeNav === item.key ? "text-green-600 scale-110" : ""
                    }`}
                    aria-current={activeNav === item.key ? "page" : undefined}
                >
                    {item.icon}
                </a>
            ))}
        </nav>
    );
}