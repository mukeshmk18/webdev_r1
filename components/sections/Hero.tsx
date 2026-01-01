"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export function Hero() {
    const { openBooking } = useBooking();

    return (
        <section
            id="home"
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 bg-background antialiased bg-grid-white/[0.02]"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 bg-background">
                {/* Glowing Orbs - More sophisticated colors */}
                <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

                {/* Refined Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] opacity-[0.15]" />

                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm font-medium text-secondary mb-10 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse" />
                    Next-Gen AI Automation Agency
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    Transform Your Business <br />
                    with <span className="text-gradient">AI Automation</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-12 font-light"
                >
                    Automate repetitive tasks, streamline workflows, and scale your operations 24/7 with our cutting-edge AI solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full shimmer-btn transition-transform hover:scale-105 group" onClick={openBooking}>
                        Book Free Appointment <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto h-14 px-10 text-lg rounded-full glass hover:bg-white/10 transition-transform hover:scale-105"
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Play className="mr-2 h-5 w-5 fill-current" /> View Services
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
