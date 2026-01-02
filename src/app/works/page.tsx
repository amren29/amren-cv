'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

const categories = ['All', 'Event', 'Printing', 'Graphic Design', '3D Design', 'Web Design'];

const allProjects = [
    {
        id: 1,
        title: 'Corporate Event 2024',
        category: 'Event',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    },
    {
        id: 2,
        title: 'Annual Gala Night',
        category: 'Event',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
    },
    {
        id: 3,
        title: 'Product Launch Event',
        category: 'Event',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    },
    {
        id: 4,
        title: 'Corporate Brochure',
        category: 'Printing',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    },
    {
        id: 5,
        title: 'Event Banners',
        category: 'Printing',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&h=600&fit=crop',
    },
    {
        id: 6,
        title: 'Marketing Materials',
        category: 'Printing',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop',
    },
    {
        id: 7,
        title: 'Brand Identity Design',
        category: 'Graphic Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=600&fit=crop',
    },
    {
        id: 8,
        title: 'Social Media Campaign',
        category: 'Graphic Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop',
    },
    {
        id: 9,
        title: 'Product Packaging',
        category: 'Graphic Design',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
    {
        id: 10,
        title: 'Exhibition Booth',
        category: '3D Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    },
    {
        id: 11,
        title: 'Product Mockup',
        category: '3D Design',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
        id: 12,
        title: 'Portfolio Website',
        category: 'Web Design',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
        id: 13,
        title: 'E-commerce Site',
        category: 'Web Design',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    },
];

export default function WorksPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === activeCategory);

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
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-black transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to home
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
                        All Works
                    </h1>
                    <p className="text-lg text-muted max-w-xl">
                        A collection of projects spanning events, printing, design, and more.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeCategory === category
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="group cursor-pointer"
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

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
