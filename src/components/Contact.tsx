import React from "react";
import { FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";

export default function Contact() {
    return (
        <footer className="bg-zinc-900 text-white py-4 px-6 flex justify-between items-center">
            {/* Left: Copyright */}
            <p className="text-zinc-400 text-sm font-mono">
                © <span className="text-pink-400">Carson Davie</span> • Developer Portfolio
            </p>

            {/* Right: Social Links */}
            <div className="flex gap-4">
                <a
                    href="https://linkedin.com/in/carson-davie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-pink-500 hover:text-zinc-900 p-2 rounded-full text-white transition duration-300 shadow-md hover:shadow-pink-400/60"
                >
                    <FaLinkedin size={20} />
                </a>

                <a
                    href="https://github.com/carsoncarson18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-pink-500 hover:text-zinc-900 p-2 rounded-full text-white transition duration-300 shadow-md hover:shadow-pink-400/60"
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href="https://open.spotify.com/user/eucqyg1eslgn21q6wyn8ffyvv?si=a4ddcaeda3f64317"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-pink-500 hover:text-black p-2 rounded-full text-white transition duration-300 shadow-md hover:shadow-pink-400/60"
                >
                    <FaSpotify size={20} />
                </a>
            </div>
        </footer>
    );
}
