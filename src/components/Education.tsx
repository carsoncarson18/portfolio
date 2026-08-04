import React from "react";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <div>
            <h2 className="text-[40px] md:text-6xl font-extrabold tracking-tight text-[#2D1C1E] lowercase leading-none mb-8">
                education
            </h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="py-7 border-t border-[#2D1C1E]/10"
            >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="text-lg md:text-xl font-semibold text-[#2D1C1E]">
                        University of Central Florida
                    </h3>
                    <span className="text-xs md:text-sm text-[#8C8078] [font-variant-numeric:tabular-nums] whitespace-nowrap">
                        Expected May 2027
                    </span>
                </div>
                <p className="text-sm md:text-[15px] text-[#6B424D]">
                    B.S. in Computer Science, Minor in Data Science
                </p>
            </motion.div>
        </div>
    );
}
