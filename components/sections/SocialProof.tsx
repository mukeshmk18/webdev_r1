"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Muthu lakshmi",
        role: "Kanna Motors, TN",
        content: "mKrew AI completely transformed our customer support. Our response time went from hours to seconds.",
        rating: 5,
    },
    {
        name: "Ramachandhiran G",
        role: "Director of Sales, Shine Groups",
        content: "The lead generation agent is a game-changer. It's like having a team of 10 SDRs working 24/7.",
        rating: 5,
    },
    {
        name: "Suresh yadav",
        role: "Operations Manager, SwiftLogistics",
        content: "We saved over 40 hours per week on manual data entry. The daily task automation is flawless.",
        rating: 5,
    },
];

const faqs = [
    {
        question: "How does the AI Telecalling Agent work?",
        answer: "Our natural voice AI handles inbound and outbound calls 24/7, qualifying leads and booking appointments automatically."
    },
    {
        question: "Is the 30-day money-back guarantee real?",
        answer: "Yes! We stand by our results. If you don't see value within 30 days, we'll refund your investment in full."
    },
    {
        question: "Is lead generation cheaper than Clay?",
        answer: "Yes. We offer more affordable, all-in-one lead finding and enrichment automated workflows compared to Clay."
    },
    {
        question: "Is it cheaper than GoDaddy?",
        answer: "Yes. Our AI website builder provides premium, SEO-optimized sites at a fraction of GoDaddy's ongoing costs."
    }
];

export function SocialProof() {
    return (
        <section className="py-24 bg-background relative">
            <div className="container px-4 md:px-6">

                {/* FAQ Section */}
                <div className="mb-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked <span className="text-gradient">Questions</span></h2>
                    <div className="grid gap-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="font-bold text-white text-lg mb-2">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} fill="currentColor" className="w-4 h-4" />
                                ))}
                            </div>
                            <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <div className="font-bold text-white">{testimonial.name}</div>
                                <div className="text-sm text-primary">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
