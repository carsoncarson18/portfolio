import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    SiReact, SiTypescript, SiTailwindcss, SiFigma, SiPython,
    SiFastapi, SiGit, SiHtml5, SiCss3, SiC, SiJavascript,
    SiNodedotjs, SiVercel, SiRender,
} from "react-icons/si";
import { FaLock, FaExchangeAlt } from "react-icons/fa";

interface SkillsCarouselProps {
    id?: string;
}

const skills = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Figma", icon: SiFigma },
    { name: "Python", icon: SiPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "RESTful API", icon: FaExchangeAlt },
    { name: "OAuth", icon: FaLock },
    { name: "Git", icon: SiGit },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "TSX / JSX", icon: SiReact },
    { name: "C", icon: SiC },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
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
                    {[...skills, ...skills].map(({ name, icon: Icon }, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08 }}
                            className="relative inline-block min-w-[180px] rounded-3xl p-[2px] bg-gradient-to-br from-[#6B424D]/20 via-[#6B424D]/30 to-[#6B424D]/20 transition-all shadow-md hover:shadow-lg"
                        >
                            <div className="bg-[#FEFEF6]/95 rounded-3xl px-8 py-6 text-center backdrop-blur-md flex flex-col items-center gap-2">
                                <Icon size={28} className="text-[#6B424D]" />
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