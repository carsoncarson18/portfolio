import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface ContactProps {
    id?: string;
}

export default function Contact({ id }: ContactProps) {
    return (
        <section id={id} className="bg-[#FEFEF6] text-[#2D1C1E] px-6 py-20 border-t border-black/10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-normal mb-4 relative inline-block">
                    Get In Touch
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6B424D] rounded-full"></span>
                </h2>
                <p className="text-lg text-[#3B2A2C]/90 mt-8 mb-8">
                    Have a project in mind or just want to say hi? My inbox is open.
                </p>
                <a
                    href="mailto:carsondavie18@gmail.com"
                    className="inline-flex items-center gap-2 bg-black text-white text-base px-6 py-3 rounded-full transition-colors hover:bg-[#6B424D]"
                >
                    <FaEnvelope size={16} />
                    carsondavie18@gmail.com
                </a>

                <div className="flex justify-center gap-4 mt-10">
                    <a
                        href="https://linkedin.com/in/carson-davie"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="bg-[#FBCFE8]/40 hover:bg-[#FBCFE8]/70 p-2 rounded-full transition duration-300 shadow-md hover:shadow-[#FBCFE8]/50"
                    >
                        <FaLinkedin size={20} className="text-[#6B424D]" />
                    </a>

                    <a
                        href="https://github.com/carsoncarson18"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="bg-[#FBCFE8]/40 hover:bg-[#FBCFE8]/70 p-2 rounded-full transition duration-300 shadow-md hover:shadow-[#FBCFE8]/50"
                    >
                        <FaGithub size={20} className="text-[#6B424D]" />
                    </a>
                </div>
            </div>

            <p className="text-sm font-mono text-[#6B424D] text-center mt-16">
                © <span className="text-[#6B424D]/80 font-bold">Carson Davie</span> • Developer Portfolio
            </p>
        </section>
    );
}
