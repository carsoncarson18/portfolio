import React from "react";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="pt-10 px-6 text-center bg-transparent text-zinc-100">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-12 drop-shadow-[0_0_10px_#22d3ee] text-center"
            >
                Education
            </motion.h2>

            {/* education card */}
            <div className="max-w-xl mx-auto">
                <div
                    className="rounded-lg p-8 text-left text-white"
                    style={{
                        background:
                            "linear-gradient(270deg, #22d3ee, #a855f7, #22d3ee, #a855f7)",
                        backgroundSize: "400% 400%",
                        animation: "gradient-x 6s ease infinite",
                    }}
                >
                    <h3 className="text-xl font-semibold mb-2">University of Central Florida</h3>
                    <p className="text-zinc-300">
                        B.S. in Computer Science, minor in Data Science &middot; Expected 2027
                    </p>
                </div>
            </div>
        </section>
    );
}
