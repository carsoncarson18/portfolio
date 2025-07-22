import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="pt-20 bg-zinc-950 px-6 max-w-3xl mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-12 drop-shadow-[0_0_10px_#22d3ee] text-center"
            >
                About Me
            </motion.h2>
            <p className="text-lg text-zinc-300">
                My name is Carson Davie, a software engineer who values clean, efficient code and thoughtful design. I’m quick to learn new technologies and enjoy solving challenging problems. I focus on building practical and polished web applications that make an impact. With experience across different projects and teams, I bring a strong work ethic and a collaborative mindset.
            </p>
        </section>
    );
}