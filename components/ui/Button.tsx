"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const variants = {
            primary: "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-primary/40",
            secondary: "bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20",
            outline: "border border-primary text-primary hover:bg-primary/10",
            ghost: "text-gray-300 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-semibold",
        };

        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...(props as any)} // Cast to any to avoid motion props conflict with standard button props if types mismatch
            >
                {children}
                {/* Simple Glow Effect on Hover for Primary */}
                {variant === 'primary' && (
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-secondary opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
                )}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
