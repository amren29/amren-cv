'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="px-6 py-24 md:px-12 lg:px-20 bg-white">
            <div className="max-w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Left Column - Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:pt-2"
                    >
                        <p className="text-sm font-normal text-black">[01] About Me</p>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div>
                        {/* Main Text Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight font-normal text-gray-500 italic">
                                With over 5 years of experience in the creative and operational sectors, I have evolved from a graphic designer into a full-stack Event & Operations Executive. My background in design gives me a unique eye for detail, while my operational experience ensures projects are delivered on time and within budget. I bridge the gap between creative vision and logistical execution.{' '}
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-1 text-black not-italic font-medium hover:text-gray-600 transition-colors group"
                                >
                                    See More
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 border-t border-gray-200"
                />
            </div>
        </section>
    );
}
