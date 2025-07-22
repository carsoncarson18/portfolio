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
    { name: "Javascript" },
    { name: "Node.js" },
    { name: "Vercel" },
    { name: "Render" },

];

export default function SkillsCarousel() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_#d946ef]"
            >
                Skills
            </motion.h2>

            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="overflow-hidden whitespace-nowrap cursor-default select-none"
            >
                <div
                    className={`inline-flex gap-10 animate-scrollSkills ${isPaused ? "animation-play-state-paused" : ""}`}
                >
                    {/* carousel of skills */}
                    {[...skills, ...skills].map(({ name }, i) => (
                        <div
                            key={i}
                            className="rainbow-border relative inline-block w-52 rounded-lg p-[2px] mb-4 cursor-default select-none"
                        >
                            <div className="bg-zinc-950 rounded-lg px-6 py-6 text-center animate-pulseGlow">
                                <h3 className="text-lg font-semibold text-fuchsia-400">{name}</h3>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
}
