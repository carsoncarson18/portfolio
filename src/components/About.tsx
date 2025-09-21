import { motion } from "framer-motion";
import React from "react";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
    return (
        <section id={id} className="relative bg-[#FCFCFC] px-6 py-20 overflow-hidden">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-normal text-[#2D1C1E] mb-16 text-center relative">
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#6B424D]/70 rounded-full shadow-glow animate-pulse-slower"></span>
                About Me
            </h2>

            {/* Bio */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl mx-auto relative z-10 text-center"
            >
                <p className="text-2xl md:text-3xl text-[#3B2A2C] font-light leading-relaxed tracking-wide mb-8">
                    I’m Carson Davie, a software engineer who crafts clean, efficient code and thoughtful digital experiences. I enjoy tackling challenging problems and transforming ideas into polished, practical web applications.
                </p>
                <p className="text-xl md:text-2xl text-[#3B2A2C]/80 font-light leading-relaxed tracking-wide">
                    Across projects and teams, I bring creativity, collaboration, and a sharp eye for detail. My work balances function with aesthetic, aiming for solutions that feel effortless yet intentional.
                </p>
            </motion.div>

            {/* underline */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#6B424D]/50 rounded-full shadow-[0_0_12px_2px_rgba(107,66,77,0.3)] animate-pulse-slower"></div>
        </section>
    );
};

export default About;
