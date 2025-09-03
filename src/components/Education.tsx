import React from "react";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className=" px-6 text-center text-zinc-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 relative">
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-fuchsia-400 rounded-full"></span>
                Education
            </h2>

            <div className="max-w-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    className="relative flex items-start gap-4 rounded-2xl border border-zinc-700 bg-zinc-900/70 p-8 text-left shadow-lg"
                >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white font-bold">
                        🎓
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            University of Central Florida
                        </h3>
                        <p className="text-zinc-400 mt-2 text-xl">
                            B.S. in Computer Science, Minor in Data Science
                            <br />
                            <span className="text-fuchsia-400 font-medium text-sm">Expected May 2027</span>
                        </p>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}
