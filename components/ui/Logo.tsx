"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className="relative w-10 h-10 flex items-center justify-center bg-transparent">
                {/* Simplified Abstract "M" and "K" based on description/style */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M25 80V20C25 20 25 20 45 20C75 20 75 45 75 45C75 45 75 45 50 45" stroke="url(#logo_grad)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45 45H75L90 15" stroke="url(#logo_grad_2)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M75 45L90 80" stroke="url(#logo_grad_2)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />

                    <defs>
                        <linearGradient id="logo_grad" x1="25" y1="20" x2="25" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4F46E5" />
                            <stop offset="1" stopColor="#7C3AED" />
                        </linearGradient>
                        <linearGradient id="logo_grad_2" x1="45" y1="15" x2="90" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F43F5E" />
                            <stop offset="1" stopColor="#FB923C" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                mKrew<span className="text-primary">AI</span>
            </span>
        </div>
    );
}
