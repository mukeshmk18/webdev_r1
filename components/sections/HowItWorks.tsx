"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Zap, TrendingUp } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Discovery & Strategy",
        description: "We analyze your current workflows to identify high-impact automation opportunities.",
        icon: Search,
    },
    {
        id: 2,
        title: "Custom Design",
        description: "Our team architects a tailored AI solution that integrates seamlessly with your existing stack.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "Seamless Implementation",
        description: "We deploy your agents and automations with zero downtime and full team training.",
        icon: Zap,
    },
    {
        id: 4,
        title: "Scale & Optimize",
        description: "Continuous monitoring and refinement ensure your AI systems evolve with your business.",
        icon: TrendingUp,
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-black/50 relative">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                    <p className="text-text-secondary text-lg">Your journey to full automation in 4 simple steps.</p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-6 relative z-10 glass shadow-xl">
                                <step.icon className="w-10 h-10 text-primary" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-black border-2 border-black">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
