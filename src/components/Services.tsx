'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Event Executive',
        company: 'Creative Event',
        period: 'March 2025 – Oct 2025',
        responsibilities: [
            'Led the end-to-end management of corporate and social events, serving as the main bridge between clients, creative teams, and ground operations.',
            'Sourced and negotiated with vendors to secure cost-effective production materials without compromising on quality or brand standards.',
            'Leveraged design background to oversee the visual quality of event setups, ensuring all printed materials met strict brand guidelines.',
            'Managed event budgets and tracked expenses to ensure projects stayed within allocated resources.',
            'Coordinated cross-functional teams including designers, AV technicians, and venue staff for seamless event delivery.',
            'Developed post-event reports analyzing attendee feedback and ROI metrics for stakeholder presentations.',
        ],
    },
    {
        title: 'Event Coordinator',
        company: 'YHP Event',
        period: 'Nov 2024 – Feb 2025',
        responsibilities: [
            'Coordinated fast-paced logistical requirements for high-volume events, ensuring timely setup and teardown of equipment.',
            'Assisted in managing supplier schedules and inventory tracking to prevent shortages during peak event days.',
            'Acted as the immediate on-ground support for operations, ensuring health and safety protocols were followed during load-ins.',
            'Created detailed run-sheets and timelines for event execution, minimizing delays and miscommunication.',
            'Liaised with venue managers to coordinate access, parking, and technical requirements.',
            'Supported client communication by providing real-time updates on event progress and addressing last-minute changes.',
        ],
    },
    {
        title: 'Print & Event Executive',
        company: '303 Events',
        period: 'July 2022 – Oct 2024',
        responsibilities: [
            'Coordinated the planning, production, and execution of printing and event projects.',
            'Acted as the primary client contact, ensuring requirements and deadlines were met.',
            'Conducted on-site supervision during events to ensure flawless execution.',
            'Negotiated with suppliers to secure cost-effective pricing for event and printing needs.',
            'Supported the design team with creative input for event concepts and marketing campaigns.',
            'Managed print production workflows from file preparation to final delivery and quality control.',
            'Built and maintained strong relationships with printing vendors, securing preferred rates and priority turnaround.',
            'Oversaw branding consistency across all printed collateral including banners, signage, and promotional materials.',
        ],
    },
    {
        title: 'Graphic Designer',
        company: 'Nazteh',
        period: 'Dec 2021 – July 2022',
        responsibilities: [
            'Designed branding assets, social media visuals, and digital ads for multiple campaigns.',
            'Created website content graphics (banners, landing page visuals, product images) to ensure brand consistency.',
            'Collaborated with marketing teams on campaign strategies and storytelling concepts.',
            'Adapted designs for multiple formats (desktop, mobile, print) while maintaining quality.',
            'Developed brand style guides and visual identity systems for new product launches.',
            'Produced motion graphics and animated content for social media engagement campaigns.',
            'Conducted competitor analysis to inform design direction and stay ahead of industry trends.',
        ],
    },
    {
        title: 'Graphic Designer cum Sales',
        company: 'HS Printing Solution',
        period: 'Dec 2019 – Dec 2021',
        responsibilities: [
            'Managed client requests from design to final production, ensuring timely delivery of projects.',
            'Handled sales of corporate gifts and advertising products, building long-term client relationships.',
            'Coordinated with the printing team to ensure accurate color matching and high-quality output.',
            'Conducted pre-print checks (proofing, layout corrections) to avoid production errors.',
            'Generated sales leads through cold calling, networking events, and referral programs.',
            'Prepared quotations and proposals for prospective clients, closing deals worth significant revenue.',
            'Trained junior designers on production-ready file preparation and print specifications.',
            'Maintained client database and followed up on repeat orders to maximize customer retention.',
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="px-6 py-24 md:px-12 lg:px-20 bg-white">
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
                        <p className="text-sm font-normal text-black">[02] Work Experience</p>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div className="space-y-0">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title + exp.company}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="py-8 border-t border-gray-200 first:border-t-0 first:pt-0"
                            >
                                {/* Header Row */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
                                        <p className="text-sm text-muted">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-muted md:text-right">{exp.period}</span>
                                </div>

                                {/* Responsibilities */}
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
