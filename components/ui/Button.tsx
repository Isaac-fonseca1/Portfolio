"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, icon, children, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary:
                "bg-neon-cyan/90 text-black hover:bg-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)] border border-transparent",
            outline:
                "border border-white/20 hover:border-neon-cyan/50 text-foreground hover:text-neon-cyan bg-transparent hover:bg-white/5",
            ghost: "text-foreground/70 hover:text-foreground hover:bg-white/5",
        };

        const sizes = {
            sm: "h-8 px-4 text-xs",
            md: "h-10 px-6 py-2 text-sm",
            lg: "h-12 px-8 text-base",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading}
                // Cast props to HTMLMotionProps to satisfy framer-motion types while keeping precise React attributes
                {...props as HTMLMotionProps<"button">}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && icon && <span className="mr-2">{icon}</span>}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };

