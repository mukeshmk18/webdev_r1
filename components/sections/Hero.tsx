"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { Spotlight } from "@/components/ui/Spotlight";

export function Hero() {
    const { openBooking } = useBooking();

    return (
        <section
            id="home"
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Enhanced Ambient Glow */}
                <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] animate-float opacity-50" />
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-secondary/30 rounded-full blur-[100px] animate-float opacity-50" style={{ animationDelay: "2s" }} />

                {/* Moving Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
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
