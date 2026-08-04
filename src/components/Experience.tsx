import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Technology Solutions Intern",
        company: "Brown & Brown",
        date: "May 2026 - August 2026",
        description:
            "Built Scout, a Claude-powered agent that automates first-pass security investigations across nine platforms via an MCP server and reusable tool library. Scout gathers evidence, analyzes findings, and drafts reports behind human approval, cutting investigation time ~85% and saving ~2,180 analyst hours a year at ~$2.50 per report.",
    },
    {
        role: "IT & Network Support Intern",
        company: "Lightspeed Technology",
        date: "June 2024 - December 2025",
        description:
            "Built backend VOIP solutions with Virtue, led client onboarding and new-hire training, and resolved network issues via SIP flow analysis alongside on-site IT support and hardware setup.",
    },
    {
        role: "Web Designer",
        company: "UCF Fashion Society",
        date: "August 2025 - present",
        description:
            "Helped launch the Fashion Society's first official website with a 15-member design team, building responsive UI components and photo galleries in React and Tailwind from Figma designs.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-20 px-6 max-w-6xl mx-auto bg-[#FEFEF6]"
        >
            {/* Heading */}
            <div className="text-center mb-12 relative">
                <h2 className="text-4xl md:text-5xl font-normal text-[#2D1C1E] mt-1 relative">
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#6B424D] rounded-full"></span>
                    Experience
                </h2>
            </div>

            {/* Experience list */}
            <div className="flex flex-col gap-12 md:flex-row md:gap-8">
                {experiences.map(({ role, company, date, description }, i) => (
                    <motion.div
                        key={role + company}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.25 }}
                        viewport={{ once: true }}
                        className="flex-1 relative rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-[#6B424D]/20 shadow-sm hover:scale-[1.02] transition-transform duration-300"
                    >
                        {/* Corner brackets */}
                        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#6B424D]/30" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#6B424D]/30" />

                        {/* Role & Company */}
                        <h3 className="text-2xl md:text-3xl font-light text-[#2D1C1E] mb-2">
                            {role}{" "}
                            <span className="text-[#6B424D] font-light">@ {company}</span>
                        </h3>

                        {/* Date */}
                        <p className="text-[#3B2A2C]/90 text-lg mb-4">{date}</p>

                        {/* Description */}
                        <p className="text-[#3B2A2C]/90 text-lg leading-relaxed">{description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}