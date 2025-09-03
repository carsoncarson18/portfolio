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
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-20 px-6 max-w-6xl mx-auto"
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center relative">
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-pink-400 rounded-full"></span>
                Experience
            </h2>


            <div className="flex flex-col gap-12">
                {experiences.map(({ role, company, date, description }, i) => (
                    <motion.div
                        key={role + company}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.25 }}
                        viewport={{ once: true }}
                        className="relative rounded-xl p-6 bg-zinc-900/50 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 shadow-md shadow-cyan-500/20"
                    >
                        {/* Title now clean white */}
                        <h3 className="text-3xl font-bold text-white mb-1">
                            {role}{" "}
                            <span className="text-pink-400 font-light">@ {company}</span>
                        </h3>

                        {/* Date */}
                        <p className="text-lg text-cyan-300 mb-3">{date}</p>

                        {/* Description */}
                        <p className="text-zinc-300 text-lg leading-relaxed">{description}</p>

                        {/* Floating accent dot */}
                        <div className="absolute top-0 right-0 w-3 h-3 bg-pink-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
