import React from "react";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="relative px-6 py-20 bg-[#FEFEF6] overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-12 relative">
                <h2 className="text-4xl md:text-5xl font-normal text-[#2D1C1E] mt-1 relative">
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#6B424D] rounded-full"></span>
                    Education
                </h2>
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-[#6B424D]/20 shadow-sm"
                >
                    {/* Corner brackets */}
                    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#6B424D]/30" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#6B424D]/30" />

                    <h3 className="text-2xl md:text-3xl font-light text-[#2D1C1E] mb-2">
                        University of Central Florida
                    </h3>

                    <p className="text-[#3B2A2C]/90 text-lg mb-4">Expected May 2027</p>

                    <p className="text-[#3B2A2C]/90 text-lg leading-relaxed">
                        B.S. in Computer Science, Minor in Data Science
                    </p>
                </motion.div>
            </div>
        </section>
    );
}