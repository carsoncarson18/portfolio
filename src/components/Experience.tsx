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
            className="relative bg-transparent py-20 px-6 text-white max-w-5xl mx-auto"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-12 drop-shadow-[0_0_10px_#22d3ee] text-center"
            >
                Experience
            </motion.h2>

            {/* Experience cards */}
            <div className="flex flex-col gap-12">
                {experiences.map(({ role, company, date, description }, i) => (
                    <motion.div
                        key={role + company}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.25 }}
                        viewport={{ once: true }}
                        className="border border-dashed border-fuchsia-400 rounded-xl p-5 bg-zinc-950/80 backdrop-blur-sm"
                    >
                        <h3 className="text-lg font-mono text-cyan-300">
                            ✦ <span className="text-white">{role}</span> <span className="text-pink-400">@ {company}</span>
                        </h3>
                        <p className="text-sm text-green-400 font-mono mb-1">{date}</p>
                        <p className="text-zinc-300 font-mono text-sm">{description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
