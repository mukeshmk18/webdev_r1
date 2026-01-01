"use client";

import { motion } from "framer-motion";

export function Marquee() {
    return (
        <div className="bg-[#7c3aed] text-white py-1 overflow-hidden relative z-50">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex gap-8 items-center"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-sm font-medium tracking-wide mx-4">
                            Agents that work while you sleep.
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
