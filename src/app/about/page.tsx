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
                            My career didn't start in a boardroom; it started on the production floor. As a Graphic Designer & Sales Executive at <strong className="text-black">HS Printing Solution</strong>, I learned the hard truth about the creative industry: a beautiful design is worthless if it can't be executed. I spent two years mastering the technical realities of production, checking proofs, correcting layouts, and ensuring color accuracy. But beyond the software, I managed client relationships from start to finish. I learned that "sales" wasn't just about closing a deal; it was about guiding a client from a vague idea to a tangible, high-quality product they were proud to hold in their hands.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            In 2022, I joined <strong className="text-black">303 Events</strong> seeking a bigger challenge. My role as a Print & Event Executive required me to scale my skills from 2D flyers to 3D experiences. I coordinated full-scale event productions, negotiated with vendors to protect margins, and supervised on-site teams to ensure flawless delivery. However, the biggest shift in my career happened here. I realized that executing the event was only half the battle; we had to sell it first.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            I expanded my scope into Sales and Digital Marketing, taking charge of managing campaigns on <strong className="text-black">Google Ads and Facebook Ads</strong>. I wasn't just designing the visuals anymore; I was analyzing the data, optimizing ad spend, and driving the actual conversions that kept the business growing. This experience transformed me from a "Creative" into a "Commercial Strategist" who understands how to balance operational costs with revenue goals.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Most recently, I have stepped into focused operational roles that demand speed and adaptability. As a <strong className="text-black">Contract Event Executive</strong> at <strong className="text-black">YHP Event</strong>, I managed high-volume logistical requirements, ensuring that complex setups and teardowns were executed with military precision during peak seasons. Following that, as an <strong className="text-black">Event Executive</strong> at <strong className="text-black">Creative Event</strong>, I bridged the gap between the creative department and ground operations, ensuring that the visual concept was never lost during the logistical execution.
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
