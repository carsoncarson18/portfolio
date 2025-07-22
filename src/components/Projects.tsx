import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Aurify",
            description:
                "An AI-driven Spotify app that analyzes your listening habits to align you with your unique Sonic Aura. ",
            tech: ["React", "Tailwind", "Spotify API", "FastAPI"],
            url: "https://aurify-sound.vercel.app"
        }, {
            title: "Solar Capability Analysis App",
            description:
                "A geographic analysis designed to identify the optimal locations for solar farms in the Orlando region. ",
            tech: ["ArcGIS Pro", "WeatherAPI", "React"],
            url: "https://carsoncarson18.github.io/solar-react-app/",
        },

        {
            title: "Naive Instrumental Dj_Dave Remix",
            description:
                "The song playing in the background! ",
            tech: ["SonicPI", "Ruby"],
            url: "https://github.com/carsoncarson18/naiveRemix",
        },
    ];

    return (
        <section
            id="projects"
            className="relative bg-zinc-950 pb-20 pt-5 px-6 text-white overflow-hidden"
        >
            {/* floating particle overlay */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <svg
                    className="w-full h-full opacity-10 animate-float-slow"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                >
                    <circle cx="10" cy="10" r="1.5" fill="#22d3ee" />
                    <circle cx="30" cy="80" r="1" fill="#f472b6" />
                    <circle cx="70" cy="30" r="1.8" fill="#c084fc" />
                    <circle cx="90" cy="70" r="1.2" fill="#a3e635" />
                </svg>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-12 drop-shadow-[0_0_10px_#22d3ee] text-center"
            >
                Projects
            </motion.h2>

            <div className="grid gap-16 max-w-5xl mx-auto">
                {projects.map((proj, i) => (
                    <motion.a
                        key={proj.title}
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.3, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative bg-zinc-900 border border-cyan-500 rounded-2xl p-6 shadow-lg shadow-cyan-600/40 hover:shadow-cyan-500/90 transition duration-300 cursor-pointer block"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 relative group inline-block cursor-pointer select-none">
                            <span className="absolute left-0 top-0 text-fuchsia-400 opacity-60 animate-glitch delay-150 pointer-events-none select-none">
                                {proj.title}
                            </span>
                            <span className="absolute left-0 top-0 text-green-400 opacity-40 animate-glitch delay-300 pointer-events-none select-none">
                                {proj.title}
                            </span>
                            <span className="relative z-10">{proj.title}</span>
                        </h3>

                        <p className="mt-4 text-zinc-300 font-mono px-5">
                            <span className="text-green-400 select-none">{'/* '}</span>
                            {proj.description}
                            <span className="text-green-400 select-none">{' */'}</span>
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-fuchsia-400 font-mono">
                            {proj.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-zinc-800 border border-fuchsia-600 px-2 py-1 rounded-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* soundwave bars */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-cyan-400 rounded"
                        animate={{
                            height: ["8px", "28px", "8px"],
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            delay: i * 0.1,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
