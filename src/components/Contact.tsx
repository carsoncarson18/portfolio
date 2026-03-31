import React from "react";
import { FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";

interface ContactProps {
    id?: string;
}

export default function Contact({ id }: ContactProps) {
    return (
        <footer id={id} className="bg-[#FEFEF6] text-[#2D1C1E] py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border-t border-[#000000]">
            {/* Copyright */}
            <p className="text-sm font-mono text-[#6B424D]">
                © <span className="text-[#6B424D]/80 font-bold">Carson Davie</span> • Developer Portfolio
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-2 md:mt-0">
                <a
                    href="https://linkedin.com/in/carson-davie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FBCFE8]/40 hover:bg-[#FBCFE8]/70 p-2 rounded-full transition duration-300 shadow-md hover:shadow-[#FBCFE8]/50"
                >
                    <FaLinkedin size={20} className="text-[#6B424D]" />
                </a>

                <a
                    href="https://github.com/carsoncarson18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FBCFE8]/40 hover:bg-[#FBCFE8]/70 p-2 rounded-full transition duration-300 shadow-md hover:shadow-[#FBCFE8]/50"
                >
                    <FaGithub size={20} className="text-[#6B424D]" />
                </a>

                <a
                    href="https://open.spotify.com/user/eucqyg1eslgn21q6wyn8ffyvv?si=a4ddcaeda3f64317"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FBCFE8]/40 hover:bg-[#FBCFE8]/70 p-2 rounded-full transition duration-300 shadow-md hover:shadow-[#FBCFE8]/50"
                >
                    <FaSpotify size={20} className="text-[#6B424D]" />
                </a>
            </div>
        </footer>
    );
}
