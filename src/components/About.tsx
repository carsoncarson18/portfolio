import { motion } from "framer-motion";
import React from "react";

const About: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h2 className="relative inline-block text-[40px] md:text-6xl font-extrabold tracking-tight text-white lowercase leading-none mb-8">
                <img
                    src="/sprite.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute -top-8 -left-2 w-9 h-9 md:w-11 md:h-11 -rotate-12 [image-rendering:pixelated]"
                />
                about
            </h2>

            <p className="text-xl md:text-2xl font-medium text-white leading-snug max-w-[26ch] mb-5">
                I'm Carson Davie, a software engineer who crafts clean, efficient code and
                thoughtful digital experiences.
            </p>
            <p className="text-base text-[#8C8078] leading-relaxed max-w-[42ch]">
                I enjoy tackling challenging problems and transforming ideas into polished,
                practical applications. I bring creativity, collaboration, and a sharp
                eye for detail to every project and team I work with.
            </p>
        </motion.div>
    );
};

export default About;
