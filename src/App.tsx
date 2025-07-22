import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AudioPlayer from "./components/AudioPlayer";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function App() {
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);

    function togglePlaying() {
        setPlaying((prev) => !prev);
    }

    function toggleMuted() {
        setMuted((prev) => !prev);
    }

    return (
        <div className="relative min-h-screen font-sans bg-zinc-950 text-white">
            <AudioPlayer
                src="/naiveRemix.wav"
                playing={playing}
                muted={muted}
                volume={0.2}
            />

            <Header playing={playing} togglePlaying={togglePlaying} />

            <main className="relative z-10">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}
