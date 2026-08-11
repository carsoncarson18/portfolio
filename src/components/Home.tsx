import { useState } from "react";
import { Link } from "react-router-dom";
import CatScene from "./CatScene";

export default function Home() {
    const [prefersReducedMotion] = useState(
        () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    );

    return (
        <section className="relative h-screen flex flex-col justify-center items-center bg-[#0a0510] overflow-hidden">

            {/* Subtle scanline overlay */}
            <div
                className="absolute inset-0 z-10 pointer-events-none opacity-30"
                style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)",
                }}
            />

            {/* 3D scene */}
            <div className="absolute inset-0 w-full h-full z-0 bg-[#0a0510]">
                {!prefersReducedMotion ? (
                    <CatScene />
                ) : (
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            background:
                                "radial-gradient(circle at 60% 35%, rgba(255,45,107,0.35), transparent 55%), radial-gradient(circle at 25% 70%, rgba(51,224,255,0.25), transparent 50%), #0a0510",
                        }}
                    />
                )}
                <div className="absolute inset-0 bg-white/10" />
            </div>

            <div className="absolute top-0 left-0 w-full flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-6 sm:gap-4 px-6 py-6 z-10">
                <div className="flex flex-col space-y-4">

                    <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight lowercase leading-none select-none">
                        carson davie
                    </h1>

                    <div className="flex flex-col space-y-1 text-sm md:text-base text-white/80 font-light">
                        <a href="https://github.com/carsoncarson18" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d6b] transition-colors flex items-center space-x-1">
                            <span>GitHub</span>
                            <span>↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/carson-davie/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d6b] transition-colors flex items-center space-x-1">
                            <span>LinkedIn</span>
                            <span>↗</span>
                        </a>
                        <a href="mailto:carsondavie18@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d6b] transition-colors flex items-center space-x-1">
                            <span>Email</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>

                <Link
                    to="/portfolio"
                    className="self-start bg-white text-black text-lg md:text-xl font-normal px-8 py-4 md:px-10 md:py-5 rounded-full transition-colors flex items-center space-x-2 shrink-0 sm:-translate-y-[10px] md:-translate-y-[18px] lg:-translate-y-[25px]"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff2d6b")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                >
                    <span>Open Portfolio</span>
                    <span>↗</span>
                </Link>
            </div>
        </section>
    );
}