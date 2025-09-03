import React from "react";
import { motion } from "framer-motion";
import LetterGlitch from "./Threads";
import Threads from "./Threads";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center bg-zinc-950 overflow-hidden">

            {/* threads */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Threads
                    amplitude={3}
                    distance={0}
                    enableMouseInteraction={true}
                />
                <div className="absolute inset-0" />
            </div>

            {/* text container */}
            <div className="relative z-10 px-6 py-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <h1 className="text-white text-6xl md:text-8xl font-extrabold select-none">
                        Hi, I'm Carson
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="mt-4 text-white text-lg md:text-2xl font-light max-w-xl"
                >
                    Welcome to my portfolio
                </motion.p>
            </div>
        </section>
    );
}
