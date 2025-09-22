import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "IT & Network Support Intern",
        company: "Lightspeed Technology",
        date: "June 2024 - present",
        description:
            "With Virtue, I developed backend VOIP solutions to improve performance and user experience. I led client onboarding and new hire training. I also troubleshot network issues via SIP flow analysis, provided on-site IT support, and managed hardware setups.",
    },

    {
        role: "Web Designer",
        company: "UCF Fashion Society",
        date: "August 2025 - present",
        description:
            "I worked with a 15-member design team to launch the Fashion Society’s first official website, building responsive UI components and photo galleries in React and Tailwind while bringing Figma designs to life in an Agile-inspired workflow.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-20 px-6 max-w-6xl mx-auto bg-[#FCFCFC]"
        >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-normal text-[#2D1C1E] mb-12 text-center relative">
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#6B424D] rounded-full"></span>
                Experience
            </h2>

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
                        {/* Role & Company */}
                        <h3 className="text-2xl md:text-3xl font-light text-[#2D1C1E] mb-2">
                            {role}{" "}
                            <span className="text-[#6B424D] font-light">@ {company}</span>
                        </h3>

                        {/* Date */}
                        <p className="text-[#3B2A2C]/90 text-lg mb-4">{date}</p>

                        {/* Description */}
                        <p className="text-[#3B2A2C]/90 text-lg leading-relaxed">{description}</p>

                        {/* Subtle marker */}
                        <div className="absolute top-0 right-0 w-3 h-3 bg-[#6B424D] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
