'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Vaultpay',
        category: 'Product Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    },
    {
        id: 2,
        title: 'Greene',
        category: 'Graphic Design',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&h=600&fit=crop',
    },
    {
        id: 3,
        title: 'Gamestats',
        category: 'Product Design',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop',
    },
    {
        id: 4,
        title: 'Flowstate',
        category: 'UX/UI Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=600&fit=crop',
    },
    {
        id: 5,
        title: 'Nexus',
        category: 'Web Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop',
    },
    {
        id: 6,
        title: 'Artisan',
        category: 'Branding',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="px-6 pb-24 pt-12 md:px-12 lg:px-20">
            <div className="max-w-full mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between mb-12 border-b border-black/10 pb-6"
                >
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Selected projects</h2>
                    <Link
                        href="/works"
                        className="text-sm md:text-base text-muted hidden md:flex items-center gap-2 hover:text-black transition-colors"
                    >
                        See more
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="project-card group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/5 mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Arrow Icon - Top Right */}
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                    <ArrowUpRight className="w-5 h-5 text-black" />
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-medium text-black">{project.title}</h3>
                                <div className="text-right">
                                    <span className="block text-sm font-medium text-black mb-0.5">{project.year}</span>
                                    <span className="block text-xs text-muted">{project.category}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
