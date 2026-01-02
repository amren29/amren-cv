'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const awards = [
    {
        title: 'Webby Gold Award',
        categories: ['Web Design', 'Branding'],
        year: '2025',
        link: 'https://www.webbyawards.com/',
    },
    {
        title: 'Awwwards SOTD',
        categories: ['UX/UI Design', 'Branding'],
        year: '2024',
        link: 'https://awwwards.com',
    },
    {
        title: 'Framer Site of the Month',
        categories: ['Web Design', 'Animations'],
        year: '2024',
        link: 'https://framer.com',
    },
];

export default function Awards() {
    return (
        <section className="px-6 py-24 md:px-12 lg:px-20 bg-black/[0.02]">
            <div className="max-w-[90%] mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="section-label mb-4">[05] Awards & Recognition</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
                        0X is an award-winning design studio specializing in creating impactful digital experiences.
                    </h2>
                </motion.div>

                {/* Awards list */}
                <div className="space-y-4">
                    {awards.map((award, index) => (
                        <motion.a
                            key={award.title}
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-black/[0.03] border border-black/10 hover:bg-black/[0.05] hover:border-black/20 transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
                                <h3 className="text-lg md:text-xl font-semibold">{award.title}</h3>
                                <div className="flex gap-2">
                                    {award.categories.map((cat) => (
                                        <span
                                            key={cat}
                                            className="px-3 py-1 text-xs text-muted bg-black/5 rounded-full"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-muted">{award.year}</span>
                                <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
