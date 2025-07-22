import React from "react";
import { FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="py-20 px-6 text-center bg-zinc-900">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-4">Contact</h2>

            <div className="flex justify-center gap-6 items-center">
                <a
                    href="mailto:carsondavie18@gmail.com"
                    className="text-green-400 hover:text-lime-400 transition duration-300"
                >
                    carsondavie18@gmail.com
                </a>

                <a
                    href="https://linkedin.com/in/carson-davie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-pink-500 hover:text-zinc-900 p-3 rounded-full text-white transition duration-300 shadow-md hover:shadow-pink-400/60"
                >
                    <FaLinkedin size={24} />
                </a>

                <a
                    href="https://github.com/carsoncarson18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-pink-500 hover:text-zinc-900 p-3 rounded-full text-white transition duration-300 shadow-md hover:shadow-pink-400/60"
                >
                    <FaGithub size={24} />
                </a>

                <a
                    href="https://open.spotify.com/user/eucqyg1eslgn21q6wyn8ffyvv?si=a4ddcaeda3f64317"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-pink-500 hover:text-black p-3 rounded-full text-white transition duration-300 shadow-md hover:shadow-pink-400/60"
                >
                    <FaSpotify size={24} />
                </a>
            </div>
            <p className="text-zinc-300 mb-6 pt-10 font-mono text-sm">
                © <span className="text-pink-400">Carson Davie</span> • Developer Portfolio
            </p>

        </section>
    );
}
