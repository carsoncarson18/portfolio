import React from "react";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="relative px-6 py-20 bg-[#FEFEF6] overflow-hidden">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-normal text-[#2D1C1E] mb-16 text-center relative">
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#6B424D] rounded-full"></span>
                Education
            </h2>

            {/* Education block */}
            <div className="max-w-3xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 bg-white/10 rounded-2xl backdrop-blur-sm"
                >
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-[#6B424D]/30 text-white font-light text-xl">
                        UCF
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-light text-[#2D1C1E]">
                            University of Central Florida
                        </h3>
                        <p className="text-[#3B2A2C]/90 mt-2 text-lg md:text-xl leading-snug font-light">
                            B.S. in Computer Science, Minor in Data Science
                            <br />
                            <span className="text-[#6B424D]/70 text-sm font-light">
                                Expected May 2027
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
