"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

import { useBooking } from "@/context/BookingContext";

export function CTA() {
    const { openBooking } = useBooking();

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-secondary/20" />

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto glass-card rounded-[40px] p-12 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.5)] premium-border relative overflow-hidden"
                >
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
                        Ready to <span className="text-gradient">Automate?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Join the elite companies leveraging bespoke AI ecosystems
                        to dominate their industry. Let's build your future.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-xl rounded-full shimmer-btn shadow-[0_20px_40px_rgba(124,58,237,0.3)] transition-transform hover:scale-105 active:scale-95 group" onClick={openBooking}>
                            Book Free Strategy Call <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
