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

            <div className="absolute top-0 left-0 w-full flex justify-between items-baseline px-6 py-6 z-10">
                <div className="flex flex-col space-y-4">

                    <h1 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight lowercase leading-none select-none">
                        carson davie
                    </h1>

                    <div className="flex flex-col space-y-1 text-sm md:text-base text-black font-light">
                        <a href="https://github.com/carsoncarson18" target="_blank" rel="noopener noreferrer" className="hover:text-[#3E5A3A] transition-colors flex items-center space-x-1">
                            <span>GitHub</span>
                            <span>↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/carson-davie/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3E5A3A] transition-colors flex items-center space-x-1">
                            <span>LinkedIn</span>
                            <span>↗</span>
                        </a>
                        <a href="mailto:carsondavie18@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3E5A3A] transition-colors flex items-center space-x-1">
                            <span>Email</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>

                <Link
                    to="/portfolio"
                    className="bg-black text-white text-lg md:text-xl font-normal px-8 py-4 md:px-10 md:py-5 rounded-full transition-colors flex items-center space-x-2 shrink-0 -translate-y-[3px] sm:-translate-y-[10px] md:-translate-y-[18px] lg:-translate-y-[25px]"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(62, 90, 58)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
                >
                    <span>Open Portfolio</span>
                    <span>↗</span>
                </Link>
            </div>
        </section>
    );
}