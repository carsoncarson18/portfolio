import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "Aurify",
            description:
                "An AI-driven Spotify app that analyzes your listening habits to align you with your unique Sonic Aura.",
            tech: ["React", "Tailwind", "Spotify API", "FastAPI"],
            url: "https://aurify-sound.vercel.app",
            image: "/aurify.png",
            bg: "#fbcfe8",
        },
        {
            title: "Solar Capability Analysis App",
            description:
                "A geographic analysis designed to identify the optimal locations for solar farms in the Orlando region.",
            tech: ["ArcGIS Pro", "WeatherAPI", "React"],
            url: "https://carsoncarson18.github.io/solar-react-app/",
            image: "/solar.png",
            bg: "#a7c4c6",
        },
        {
            title: "Naive Instrumental Dj_Dave Remix",
            description: "The song playing in the background!",
            tech: ["SonicPI", "Ruby"],
            url: "https://github.com/carsoncarson18/naiveRemix",
            image: "/remix.png",
            bg: "#c3b5fd",
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

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center relative">
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-pink-400 rounded-full"></span>
                Projects
            </h2>

            {/* grid container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {projects.map((proj, i) => {
                    // if this is the last project in an odd-length array
                    const isLastOdd =
                        i === projects.length - 1 && projects.length % 2 !== 0;

                    return (
                        <motion.a
                            key={proj.title}
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`block transition-all duration-300 ${hoveredIndex !== null && hoveredIndex !== i
                                ? "opacity-50 scale-95"
                                : "opacity-100 scale-100"
                                } ${isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}`}
                        >
                            {/* pastel background */}
                            <motion.div
                                className="relative rounded-3xl p-12 shadow-lg transition-all"
                                style={{ backgroundColor: proj.bg }}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow:
                                        "0 20px 40px rgba(0,255,255,0.3)",
                                }}
                            >
                                <div className="aspect-[3/2] overflow-hidden rounded-xl">
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.015] rounded-xl"
                                    />
                                </div>
                            </motion.div>

                            {/* title + description */}
                            <div className="mt-6 space-y-1">
                                <h3 className="text-3xl font-semibold text-white transition-colors hover:text-cyan-400">
                                    {proj.title}
                                </h3>
                                <p className="text-sm text-gray-400 transition-colors hover:text-white">
                                    {proj.description}
                                </p>
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}
