"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Globe, Mail, Users, FileText, BarChart, ArrowRight, X, Database, Megaphone } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "@/components/ui/Logo";
import { useBooking } from "@/context/BookingContext";

const services = [
    {
        title: "AI Telecalling Agent",
        description: "Automated outbound/inbound calling with natural voice AI. Perfect for sales and support.",
        icon: Phone,
        color: "from-purple-500 to-indigo-500",
        details: "Our AI Telecalling Agents use advanced natural language processing to hold human-like conversations. They can handle cold calling, appointment setting, customer support queries, and feedback collection capabilities. Capable of handling thousands of concurrent calls, ensuring no lead is ever missed."
    },
    {
        title: "WhatsApp AI Chatbot",
        description: "24/7 automated customer support, lead qualification, and order tracking via WhatsApp.",
        icon: MessageCircle,
        color: "from-green-400 to-emerald-600",
        details: "Turn WhatsApp into your most powerful sales and support channel. Our bots can handle complex queries, send automated follow-ups, broadcast promotional messages, and integrate directly with your CRM/Store to update order statuses in real-time."
    },
    {
        title: "Website Builder",
        description: "AI-powered website creation. Faster, cheaper, and better SEO than traditional builders.",
        icon: Globe,
        color: "from-blue-400 to-cyan-500",
        details: "Launch your professional presence in minutes, not months. Our AI analysis your industry and brand to generate high-converting, SEO-optimized websites. Includes automatic hosting, SSL, and mobile responsiveness out of the box."
    },
    {
        title: "Email Automation",
        description: "Intelligent email marketing, drip campaigns, and smart segmentation for higher open rates.",
        icon: Mail,
        color: "from-yellow-400 to-orange-500",
        details: "Maximize your email ROI with hyper-personalized campaigns. Our system segments your audience based on behavior and engagement, sending the right message at the perfect time to boost open rates and conversions."
    },
    {
        title: "Lead Generation & Nurturing",
        description: "Automated lead finding, data enrichment, and outreach to fill your pipeline.",
        icon: Users,
        color: "from-pink-500 to-rose-500",
        details: "Stop wasting time manually searching for leads. Our agent scrapes validated databases, enriches contact info, verifies emails, and initiates personalized outreach sequences. It nurtures warm leads until they are ready to book a meeting with you."
    },
    {
        title: "Task Automation",
        description: "Automate repetitive daily tasks like data entry, reports, and file management.",
        icon: FileText,
        color: "from-teal-400 to-cyan-600",
        details: "Free your team from the mundane. We build custom workflows/scripts to automate data entry, invoice processing, social media posting, and report generation. Connects seamlessly with Zapier, Make, and custom APIs."
    },
    {
        title: "Power BI Dashboards",
        description: "Real-time data visualization and KPI tracking for data-driven decisions.",
        icon: BarChart,
        color: "from-amber-400 to-orange-600",
        details: "Visualize your success. We aggregate data from all your business sources into stunning, interactive Power BI dashboards. Track KPIs in real-time, identify trends, and make data-backed decisions instantly."
    },
    {
        title: "RAG Chatbot",
        description: "Intelligent AI assistant that learns from your private documents and data for pinpoint accuracy.",
        icon: Database,
        color: "from-cyan-500 to-blue-600",
        details: "Harness the power of Retrieval-Augmented Generation (RAG). We build custom AI models that are trained specifically on your company's data, manuals, and knowledge base. This ensures that the AI provides accurate, context-aware answers without hallucinating, serving as the ultimate internal support or customer-facing expert."
    },
    {
        title: "AI Ads Builder",
        description: "Generate high-converting ad copies, visuals, and target audience insights in seconds.",
        icon: Megaphone,
        color: "from-rose-500 to-red-600",
        details: "Revolutionize your marketing with AI-driven advertisement creation. Our tool generates compelling ad copy, professional-grade visuals, and optimized targeting strategies across multiple platforms. Save thousands on creative costs and A/B test your way to maximum ROI instantly."
    },
];

export function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const { openBooking } = useBooking();

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">

                {/* New Challenges Section */}
                <div className="max-w-4xl mx-auto mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Your Challenges, <span className="text-secondary">Our Solutions</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 rounded-2xl border-white/10"
                    >
                        <p className="text-xl md:text-2xl font-light text-gray-200 mb-6 italic">
                            "Most businesses don’t fail because of poor products — they fail because of poor systems."
                        </p>
                        <p className="text-text-secondary text-lg mb-8">
                            Without a predictable flow of qualified leads, growth stalls. That’s where we come in.
                            We turn your marketing challenges into <span className="text-primary font-bold">scalable, automated growth systems.</span>
                        </p>
                    </motion.div>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <Logo className="scale-125" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Our Intelligent <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary text-lg"
                    >
                        Comprehensive AI solutions designed to modernize every aspect of your business operations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-[32px] glass-card hover:bg-white/[0.02] transition-all duration-500 cursor-pointer flex flex-col h-full premium-border overflow-hidden"
                            onClick={() => setSelectedService(service)}
                        >
                            {/* Animated Background Highlight */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className={clsx("w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br shadow-lg relative group-hover:scale-110 transition-transform duration-500", service.color)}>
                                <service.icon className="text-white w-7 h-7 relative z-10" />
                                {/* Icon Glow */}
                                <div className="absolute inset-0 bg-inherit rounded-inherit blur-xl opacity-40 group-hover:opacity-80 transition-opacity" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">{service.title}</h3>
                            <p className="text-text-secondary mb-6 leading-relaxed flex-grow font-light text-[15px]">
                                {service.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors mt-auto">
                                <span className="uppercase tracking-widest text-[11px]">Analyze Solution</span>
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                            </div>

                            {/* Hover Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div >

            {/* Service Detail Modal */}
            <AnimatePresence>
                {
                    selectedService && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedService(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />

                            {/* Modal Content */}
                            <motion.div
                                layoutId={`service-${selectedService.title}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className={clsx("w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br", selectedService.color)}>
                                    <selectedService.icon className="text-white w-8 h-8" />
                                </div>

                                <h3 className="text-3xl font-bold mb-4">{selectedService.title}</h3>
                                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                    {selectedService.details}
                                </p>

                                <div className="pt-6 border-t border-white/10 flex justify-end">
                                    <button
                                        onClick={() => {
                                            setSelectedService(null);
                                            openBooking();
                                        }}
                                        className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
                                    >
                                        Get Started with this Service
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence >
        </section >
    );
}
