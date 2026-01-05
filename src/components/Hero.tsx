'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Ticket } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20">
            {/* Background gradient */}
            <div className="absolute inset-0 glow-gradient opacity-30 pointer-events-none" />

            <div className="w-full max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                {/* Left Column: Heading + Button */}
                <div className="lg:col-span-8 flex flex-col items-start z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-10 -ml-1 text-black"
                    >
                        Hey, I am Amren. <br className="hidden md:block" />
                        Print & Event Operation.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        <a
                            href="/works"
                            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full border border-black text-black hover:bg-black hover:text-white transition-all group"
                        >
                            See My Work
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                        <a
                            href="/Mohamed%20Amrin%20-%20CV%20(2026)_compressed.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full bg-black text-white hover:bg-black/80 transition-all group"
                        >
                            Download Resume
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Description Text */}
                <div className="lg:col-span-4 lg:flex lg:justify-end mt-4 lg:mt-2">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-[13px] md:text-[15px] text-gray-500 max-w-[350px] leading-relaxed"
                    >
                        Dedicated to bridging the gap between creative vision and logistical reality. I leverage 5+ years of experience to ensure every event and print project is delivered with precision.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}

