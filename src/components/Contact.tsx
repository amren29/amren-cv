'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="relative px-6 py-32 md:px-12 lg:px-20">
            {/* Background gradient */}
            <div className="absolute inset-0 glow-gradient opacity-60" />

            <div className="relative max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
                >
                    I'm ready to be part of your success.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
                >
                    Bridging the gap between creative vision and logistical reality. Let's bring operational precision to your next project.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center gap-3"
                >
                    <a
                        href="/works"
                        className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-full border border-black text-black hover:bg-black hover:text-white transition-all group"
                    >
                        See My Work
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                    <a
                        href="/Mohamed%20Amrin%20-%20CV%20(2026).pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-full bg-black text-white hover:bg-black/80 transition-all group"
                    >
                        Download Resume
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
