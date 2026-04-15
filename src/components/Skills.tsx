import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillsCarouselProps {
    id?: string;
}

const skills = [
    "React", "TypeScript", "Tailwind CSS", "Figma", "Python",
    "FastAPI", "RESTful API", "OAuth", "Git", "HTML",
    "CSS", "TSX / JSX", "C", "JavaScript", "Node.js",
    "Vercel", "Render"
];

export default function SkillsCarousel({ id }: SkillsCarouselProps) {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section id={id} className="relative py-32 px-6 bg-[#FEFEF6] overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-16 relative">
                <h2 className="text-4xl md:text-5xl font-light text-[#2D1C1E]/90 mt-1 relative">
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#6B424D]/70 rounded-full"></span>
                    Skills
                </h2>
            </div>

            {/* Scrolling */}
            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="overflow-hidden whitespace-nowrap cursor-default select-none py-4"
            >
                <div
                    className={`inline-flex gap-10 animate-scrollSkills ${isPaused ? "animation-play-state-paused" : ""}`}
                >
                    {[...skills, ...skills].map((name, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08 }}
                            className="relative inline-block min-w-[180px] rounded-3xl p-[2px] bg-gradient-to-br from-[#6B424D]/20 via-[#6B424D]/30 to-[#6B424D]/20 transition-all shadow-md hover:shadow-lg"
                        >
                            <div className="bg-[#FEFEF6]/95 rounded-3xl px-8 py-6 text-center backdrop-blur-md">
                                <h3 className="text-xl md:text-2xl font-light text-[#2D1C1E]/90">
                                    {name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}