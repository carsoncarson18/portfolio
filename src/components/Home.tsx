import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [prefersReducedMotion] = useState(
        () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    );

    return (
        <section className="relative h-screen flex flex-col justify-center items-center bg-[#FEFEF6] overflow-hidden">

            {/* Subtle scanline overlay */}
            <div
                className="absolute inset-0 z-10 pointer-events-none opacity-30"
                style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)",
                }}
            />

            {/* Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                {!prefersReducedMotion && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/newbloom.mp4" type="video/mp4" />
                    </video>
                )}
                <div className="absolute inset-0 bg-white/30" />
            </div>

            <div className="absolute top-0 left-0 w-full flex justify-between px-6 py-6 z-10">
                <div className="flex flex-col space-y-3">

                    {/* Corner bracket — top left */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black/30" />

                    <div className="flex flex-col space-y-0.5">
                        <span className="text-[9px] tracking-[0.3em] uppercase text-black/30 select-none font-light">
                            Portfolio
                        </span>
                        <h1 className="text-black text-2xl md:text-3xl select-none">
                            Carson Davie
                        </h1>
                    </div>

                    <div className="flex flex-col space-y-1 text-sm md:text-base text-black font-light">
                        <a href="https://github.com/carsoncarson18" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors flex items-center space-x-1">
                            <span>GitHub</span>
                            <span>↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/carson-davie/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors flex items-center space-x-1">
                            <span>LinkedIn</span>
                            <span>↗</span>
                        </a>
                        <a href="mailto:ca331228@ucf.edu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors flex items-center space-x-1">
                            <span>Email</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>

                <Link
                    to="/portfolio"
                    className="bg-black text-white text-base font-light px-6 rounded-full transition-colors flex items-center space-x-2"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(107, 66, 77)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
                >
                    <span>Open Portfolio</span>
                    <span>↗</span>
                </Link>
            </div>

            {/* Bottom-right corner bracket */}
            <div className="absolute bottom-4 right-5 w-3 h-3 border-b border-r border-black/30 z-10" />
        </section>
    );
}