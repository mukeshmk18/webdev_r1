"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "24/7 Business Operations",
    "Reduce Operational Costs by 60%",
    "Instant Customer Response",
    "Scalable Infrastructure",
    "Data-Driven Insights",
    "Seamless API Integrations",
];

import { BeforeAfterWidget } from "@/components/ui/BeforeAfterWidget";

const stats = [
    { label: "Money Back Offers", value: "30 Day" },
    { label: "Uptime Guaranteed", value: "99.9%" },
    { label: "Average ROI", value: "10x" },
    { label: "Support", value: "24/7" },
];

export function Benefits() {
    return (
        <section id="benefits" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px]" />

            <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                {/* Left Side: Content */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Why Choose <span className="text-gradient">mKrew AI</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary text-lg mb-8"
                    >
                        We don't just build bots; we engineer complete business ecosystems that work tirelessly to grow your bottom line.
                    </motion.p>

                    <div className="space-y-4 mb-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <CheckCircle2 className="text-primary w-3.5 h-3.5" />
                                </div>
                                <span className="text-gray-200 font-light tracking-wide">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="flex flex-col items-center text-center p-8 glass rounded-[2rem] hover:bg-white/[0.02] transition-all duration-300 border border-white/10 shadow-xl group"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] md:text-xs text-text-secondary uppercase tracking-[0.3em] font-bold leading-relaxed max-w-[120px]">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual (Abstract or Dashboard Mockup) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full relative flex justify-center"
                >
                    <BeforeAfterWidget />
                </motion.div>
            </div>
        </section>
    );
}
