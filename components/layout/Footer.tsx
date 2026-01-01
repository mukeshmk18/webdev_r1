import Link from "next/link";
import { Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12 md:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold tracking-tighter text-foreground">
                                mKrew<span className="text-primary">AI</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary max-w-sm mb-6">
                            Empowering businesses with intelligent automation solutions.
                            Efficiency, scalability, and growth driven by AI.
                        </p>
                        <div className="flex gap-4 text-text-secondary">
                            <Link href="#" className="hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="https://www.linkedin.com/in/mukeshkanna18" target="_blank" className="hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="https://www.instagram.com/mukeshmk_18/" target="_blank" className="hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-6">Services</h3>
                        <ul className="space-y-4 text-text-secondary">
                            <li><Link href="#" className="hover:text-primary transition-colors">AI Calling Agent</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">WhatsApp Chatbot</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Lead Gen Automation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Daily Task Bots</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-6">Company</h3>
                        <ul className="space-y-4 text-text-secondary">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-6">Contact</h3>
                        <ul className="space-y-4 text-text-secondary">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm">+91 9952881781</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm">mkannakamal17@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
                    <div>&copy; {new Date().getFullYear()} mKrew AI. All rights reserved.</div>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
