"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle2, Phone, Mail, User, PhoneCall, ArrowRight } from "lucide-react";

export function BeforeAfterWidget() {
    const [activeTab, setActiveTab] = useState<"before" | "after">("after");

    // Auto-switch every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab(prev => prev === "before" ? "after" : "before");
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Toggle */}
            <div className="flex bg-black/40 p-1 rounded-xl mb-6 relative">
                <div className="absolute inset-0 flex">
                    <motion.div
                        className="w-1/2 h-full bg-white/10 rounded-lg"
                        layoutId="activeTabBackground"
                        animate={{ x: activeTab === "before" ? 0 : "100%" }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                </div>
                <button
                    onClick={() => setActiveTab("before")}
                    className={`flex-1 relative z-10 py-2 text-sm font-medium transition-colors ${activeTab === "before" ? "text-white" : "text-gray-400"}`}
                >
                    Before Automation
                </button>
                <button
                    onClick={() => setActiveTab("after")}
                    className={`flex-1 relative z-10 py-2 text-sm font-medium transition-colors ${activeTab === "after" ? "text-white" : "text-gray-400"}`}
                >
                    After mKrew AI
                </button>
            </div>

            <div className="relative aspect-[9/16] md:aspect-square bg-black border border-white/10 rounded-3xl overflow-hidden glass-card shadow-2xl">
                <AnimatePresence mode="wait">
                    {activeTab === "before" ? (
                        <motion.div
                            key="before"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center bg-red-950/10"
                        >
                            <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                                <XCircle className="w-10 h-10 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-red-400 mb-2">Lead Lost</h3>
                            <p className="text-gray-400 mb-6">"Sorry, we missed your call. Please leave a message."</p>

                            <div className="w-full space-y-3 opacity-50">
                                <div className="bg-white/5 p-3 rounded-lg flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-red-400" />
                                    <span className="text-sm">Missed Call (Unknown)</span>
                                    <span className="ml-auto text-xs">2m ago</span>
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm">No follow-up email sent</span>
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg flex items-center gap-3">
                                    <User className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm">Lead details unrecorded</span>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="after"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="absolute inset-0 relative"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px]" />

                            {/* Simulated Phone UI Flow */}
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex items-center gap-2 mb-6 text-xs text-gray-500 mx-auto">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    Real-time Workflow
                                </div>

                                {/* Step 1: Lead In */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/5 border border-white/10 p-4 rounded-xl mb-4 backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <User className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-bold text-white">New Lead Detected</div>
                                            <div className="text-xs text-gray-400">Website Form Submission</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="flex justify-center mb-4">
                                    <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />
                                </div>

                                {/* Step 2: AI Action */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/20 p-4 rounded-xl mb-4"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                            <PhoneCall className="w-4 h-4 text-primary" />
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-bold text-white">AI Instant Call</div>
                                            <div className="text-xs text-gray-300">Connecting in 5s...</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400 bg-black/20 p-2 rounded mt-2 font-mono">
                                        "Hi John, I saw you were interested in..."
                                    </div>
                                </motion.div>

                                <div className="flex justify-center mb-4">
                                    <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />
                                </div>

                                {/* Step 3: Result */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-bold text-white">Appointment Booked</div>
                                            <div className="text-xs text-gray-400">Synced to CRM</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
