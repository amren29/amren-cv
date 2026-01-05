'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Corporate Event 2024',
        category: 'Event',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    },
    {
        id: 12,
        title: 'East My Media',
        category: 'Web Design',
        year: '2024',
        image: 'https://api.microlink.io/?url=https%3A%2F%2Feastmymedia.my&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
        id: 14,
        title: 'Exhibition Booth Concept',
        category: '3D Design',
        year: '2024',
        image: '/3D/1.3D.png',
    },
    {
        id: 4,
        title: 'Corporate Brochure',
        category: 'Printing',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    },
    {
        id: 7,
        title: 'Brand Identity Design',
        category: 'Graphic Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=600&fit=crop',
    },
    {
        id: 13,
        title: 'GM Rental Car',
        category: 'Web Design',
        year: '2024',
        image: 'https://api.microlink.io/?url=https%3A%2F%2Fgmrentalcarsandakan.com&screenshot=true&meta=false&embed=screenshot.url',
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
