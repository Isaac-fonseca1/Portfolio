import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
}
