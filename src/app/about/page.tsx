'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to home
                    </Link>
                </motion.div>

                {/* Story Content */}
                <div className="max-w-5xl">
                    <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            My career didn't start in a boardroom; it started on the production floor. As a Graphic Designer cum Sales at <strong className="text-black">HS Printing Solution</strong> from December 2019 to August 2022, I learned the hard truth about the creative industry: a beautiful design is worthless if it can't be executed. I managed client requests from design to final production, handled sales of corporate gifts and advertising products, and coordinated with the printing team to ensure accurate color matching and high-quality output. I conducted pre-print checks, generated sales leads, and trained junior designers on production-ready file preparation.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            In July 2022, I joined <strong className="text-black">303 Events</strong> as Print & Event Operation, where I stayed until October 2024. My role required me to scale my skills from 2D flyers to 3D experiences. I coordinated the planning, production, and execution of printing and event projects, acted as the primary client contact, and conducted on-site supervision during events. I negotiated with suppliers, supported the design team with creative input, and managed print production workflows from file preparation to final delivery and quality control.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            From November 2024 to February 2025, I stepped into a focused operational role at <strong className="text-black">YHP Event</strong> as Event Coordinator. I coordinated fast-paced logistical requirements for high-volume events, ensuring timely setup and teardown of equipment. I managed supplier schedules and inventory tracking, acted as the immediate on-ground support for operations, created detailed run-sheets and timelines, and liaised with venue managers to coordinate access, parking, and technical requirements.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Most recently, from March 2025 to October 2025, I served as Event Operation Executive at <strong className="text-black">KK Creative Event</strong>. I led the end-to-end management of corporate and social events, serving as the main bridge between clients, creative teams, and ground operations. I sourced and negotiated with vendors, leveraged my design background to oversee the visual quality of event setups, managed event budgets, coordinated cross-functional teams, and developed post-event reports analyzing attendee feedback and ROI metrics.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Today, I operate at the intersection of Design, Operations, and Business. I am no longer just the person who designs the banner or sets up the stage; I am the person who ensures the entire project makes sense logistically, visually, and financially.
                        </motion.p>
                    </div>
                </div>

                {/* Global CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                        I'm ready to be part of your success.
                    </h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        Bridging the gap between creative vision and logistical reality. Let's bring operational precision to your next project.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <a
                            href="/works"
                            className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-full border border-black text-black hover:bg-black hover:text-white transition-all group"
                        >
                            See My Work
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-full bg-black text-white hover:bg-black/80 transition-all group"
                        >
                            Download Resume
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
