import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Figma" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "RESTful API" },
    { name: "OAuth" },
    { name: "Git" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "TSX / JSX" },
    { name: "C" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "Vercel" },
    { name: "Render" },
];

export default function SkillsCarousel() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center relative">
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full"></span>
                Skills
            </h2>

            {/* scrolling wrapper */}
            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="overflow-hidden whitespace-nowrap cursor-default select-none"
            >
                <div
                    className={`inline-flex gap-8 animate-scrollSkills ${isPaused ? "animation-play-state-paused" : ""}`}
                >
                    {[...skills, ...skills].map(({ name }, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="relative inline-block min-w-[160px] rounded-xl p-[1px] bg-gradient-to-r from-cyan-500/40 to-fuchsia-500/40 hover:from-cyan-500/60 hover:to-fuchsia-500/60 transition-all"
                        >
                            <div className="bg-zinc-950/80 rounded-xl px-6 py-4 text-center">
                                <h3 className="text-lg font-medium text-white">{name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
