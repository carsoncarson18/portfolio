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
        <div>
            <h2 className="text-[40px] md:text-6xl font-extrabold tracking-tight text-[#2D1C1E] lowercase leading-none mb-8">
                experience
            </h2>

            <div>
                {experiences.map(({ role, company, date, description }, i) => (
                    <motion.div
                        key={role + company}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="py-7 border-t border-[#2D1C1E]/10"
                    >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                            <h3 className="text-lg md:text-xl font-semibold text-[#2D1C1E]">
                                {role}
                            </h3>
                            <span className="text-xs md:text-sm text-[#8C8078] [font-variant-numeric:tabular-nums] whitespace-nowrap">
                                {date}
                            </span>
                        </div>
                        <p className="text-sm md:text-[15px] text-[#6B424D] mb-2">@ {company}</p>
                        <p className="text-sm md:text-[15px] text-[#8C8078] leading-relaxed max-w-[58ch]">
                            {description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
