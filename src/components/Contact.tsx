import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface ContactProps {
    id?: string;
}

export default function Contact({ id }: ContactProps) {
    return (
        <section id={id} className="bg-[#FEFEF6] text-[#2D1C1E] px-6 py-16 md:py-20 border-t border-black/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div>
                    <h2 className="text-[46px] md:text-7xl font-extrabold tracking-tight text-[#2D1C1E] lowercase leading-none mb-6">
                        contact
                    </h2>
                    <p className="text-lg md:text-xl text-[#8C8078] leading-relaxed max-w-[36ch]">
                        Have a project in mind or just want to say hi? My inbox is open.
                    </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-6">
                    <a
                        href="mailto:carsondavie18@gmail.com"
                        className="inline-flex items-center gap-2 bg-black text-white text-lg md:text-xl px-7 py-4 rounded-full transition-colors hover:bg-[#3E5A3A]"
                    >
                        <FaEnvelope size={18} />
                        carsondavie18@gmail.com
                    </a>

                    <div className="flex gap-4">
                        <a
                            href="https://linkedin.com/in/carson-davie"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="bg-[#3E5A3A]/10 hover:bg-[#3E5A3A]/20 p-3 rounded-full transition duration-300"
                        >
                            <FaLinkedin size={22} className="text-[#3E5A3A]" />
                        </a>

                        <a
                            href="https://github.com/carsoncarson18"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="bg-[#3E5A3A]/10 hover:bg-[#3E5A3A]/20 p-3 rounded-full transition duration-300"
                        >
                            <FaGithub size={22} className="text-[#3E5A3A]" />
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-sm font-mono text-[#8C8078] text-center mt-12 md:mt-16">
                © <span className="text-[#3E5A3A] font-bold">Carson Davie</span> • Developer Portfolio
            </p>
        </section>
    );
}
