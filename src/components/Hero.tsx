import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const [playing, setPlaying] = useState(false);

    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    };

    return (
        <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center bg-zinc-950 overflow-hidden">
            {/* background vid */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/bgVisual2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 bg-black bg-opacity-80 rounded-lg px-6 py-4">
                {/* glitch container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="relative">
                        <span className="absolute inset-0 text-cyan-400 opacity-70 animate-glitch delay-150 pointer-events-none select-none text-6xl md:text-8xl font-extrabold text-center w-full">
                            Hi, I'm Carson
                        </span>
                        <span className="absolute inset-0 text-fuchsia-400 opacity-50 animate-glitch delay-300 pointer-events-none select-none text-6xl md:text-8xl font-extrabold text-center w-full">
                            Hi, I'm Carson
                        </span>
                        <h1 className="relative text-6xl md:text-8xl font-extrabold text-cyan-300 drop-shadow-[0_0_10px_#22d3ee] select-none">
                            Hi, I'm Carson
                        </h1>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="mt-4 text-lg md:text-2xl text-fuchsia-300 font-light max-w-xl drop-shadow-[0_0_6px_#e879f9]"
                >
                    Welcome to my portfolio!
                </motion.p>
            </div>
        </section>

    );
}
