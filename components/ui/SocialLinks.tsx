import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Isaac-fonseca1", // Placeholder
        icon: Github,
        color: "hover:text-white",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/isaac-fonseca-17a785223/", // Placeholder
        icon: Linkedin,
        color: "hover:text-blue-400",
    },
    {
        name: "Email",
        href: "mailto:isaacgfds@hotmail.com", // Placeholder
        icon: Mail,
        color: "hover:text-neon-cyan",
    },
];

export function SocialLinks() {
    return (
        <div className="flex gap-6">
            {socialLinks.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-zinc-400 transition-colors duration-300 ${item.color}`}
                    aria-label={item.name}
                >
                    <item.icon className="w-6 h-6" />
                </Link>
            ))}
        </div>
    );
}
