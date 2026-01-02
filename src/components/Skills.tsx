'use client';

import { motion } from 'framer-motion';

const allSkills = [
    // Event & Operations Priority
    'Event Planning', 'Project Management', 'Vendor Negotiation', 'Resource Management', 'Client Communication', 'On-Site Coordination',
    // Design & Creative
    'Adobe Illustrator', 'Adobe Photoshop', 'Corel Draw', 'Canva', 'Branding', 'Visual Storytelling', 'Event Design',
    // Digital Marketing
    'Facebook Ads', 'Google Ads', 'Social Media Marketing', 'Campaign Management',
    // Web Development
    'HTML', 'CSS', 'JavaScript', 'Shopify', 'WooCommerce', 'Database Management',
    // AI & Automation
    'ChatGPT', 'Claude AI', 'Uizard', 'Design Prototyping',
    // Languages
    'Malay (Fluent)', 'English (Working Proficiency)',
];

export default function Skills() {
    return (
        <section id="skills" className="px-6 py-24 md:px-12 lg:px-20 bg-white">
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
                        <p className="text-sm font-normal text-black">[03] Skills</p>
                    </motion.div>

                    {/* Right Column - All Skills in One Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-wrap gap-2"
                    >
                        {allSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
