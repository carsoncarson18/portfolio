import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tech?: string[];
    url: string;
    image: string;
    bg: string;
    isAudioProject?: boolean;
}

interface ProjectsProps {
    id?: string;
    playing: boolean;
    togglePlaying: () => void;
}

export default function Projects({ id, playing, togglePlaying }: ProjectsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects: Project[] = [
        {
            title: "Aurify",
            description:
                "An AI-driven Spotify app that analyzes your listening habits to align you with your unique Sonic Aura.",
            tech: ["React", "Tailwind", "Spotify API", "FastAPI"],
            url: "https://aurify-sound.vercel.app",
            image: "/aurify.png",
            bg: "rgba(107,66,77,0.8)",
        },
        {
            title: "UCF Fashion Society",
            description:
                "The official website for UCF's Fashion Society, featuring responsive photo galleries and event pages.",
            tech: ["React", "Tailwind", "Figma"],
            url: "https://ucffashionsociety.com/",
            image: "/fshomepage.jpg",
            bg: "rgba(251,207,232,0.8)",
        },
        {
            title: "Solar Capability Analysis App",
            description:
                "A geographic analysis designed to identify the optimal locations for solar farms in the Orlando region.",
            tech: ["ArcGIS Pro", "WeatherAPI", "React"],
            url: "https://carsoncarson18.github.io/solar-react-app/",
            image: "/solar.png",
            bg: "rgba(167,196,198,0.8)",
        },
        {
            title: "Naive Instrumental Dj_Dave Remix",
            description: "The song playing in the background!",
            tech: ["SonicPI", "Ruby"],
            url: "https://github.com/carsoncarson18/naiveRemix",
            image: "/remix.png",
            bg: "rgba(195,181,253,0.8)",
            isAudioProject: true,
        },
    ];

    return (
        <section
            id={id}
            className="relative bg-[#0a0510] px-6 py-20 text-white overflow-hidden"
        >

            <h2 className="text-[46px] md:text-7xl font-extrabold tracking-tight text-white lowercase leading-none mb-14 max-w-6xl mx-auto">
                projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {projects.map((proj, i) => {
                    const isLastOdd = i === projects.length - 1 && projects.length % 2 !== 0;

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
                            {/* Project image */}
                            <motion.div
                                className="relative rounded-3xl shadow-xl overflow-hidden transition-all p-10" // <-- add padding
                                style={{ backgroundColor: proj.bg, backdropFilter: "blur(8px)" }}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 20px 40px rgba(107,66,77,0.3)",
                                }}
                            >
                                <div className="aspect-[3/2] overflow-hidden rounded-xl relative">
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.015] rounded-xl"
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-30 transition-opacity"></div>
                                </div>
                            </motion.div>


                            {/* Project description + audio button */}
                            <div className="mt-6 flex flex-col md:flex-row md:justify-between items-start md:items-center text-center md:text-left space-y-4 md:space-y-0">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-light transition-colors hover:text-[#D9A6B3]">
                                        {proj.title}
                                    </h3>
                                    <p className="text-lg text-[#8C8078] transition-colors hover:text-white">
                                        {proj.description}
                                    </p>
                                </div>

                                {proj.isAudioProject && (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            togglePlaying();
                                        }}
                                        className="mt-2 md:mt-0 px-4 py-2 rounded-full bg-purple-600/80 text-white shadow-lg backdrop-blur-sm hover:bg-purple-500/90 transition-all duration-300"
                                    >
                                        {playing ? "Mute" : "Unmute"}
                                    </button>
                                )}
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}
