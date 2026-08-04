import React, { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AudioPlayer from "./components/AudioPlayer";
import ExperienceEducationSection from "./components/ExperienceEducationSection";
import PillNav from "./components/PillNav";

export default function App() {
    const [playing, setPlaying] = useState(false);
    const muted = false;

    const togglePlaying = () => setPlaying(prev => !prev);

    const location = useLocation();

    return (
        <MotionConfig reducedMotion="user">
            <div className="relative min-h-screen font-sans bg-[#FEFEF6] text-black">
                {/* Background audio */}
                <AudioPlayer
                    src="/naiveRemix.wav"
                    playing={playing}
                    muted={muted}
                    volume={0.2}
                />

                {/* Sticky nav only on /portfolio */}
                {location.pathname === "/portfolio" && (
                    <PillNav
                        logo="/favico.png"
                        logoAlt="Company Logo"
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '#about' },
                            { label: 'Projects', href: '#projects' },
                            { label: 'Skills', href: '#skills' },
                            { label: 'Contact', href: '#contact' },
                        ]}
                        activeHref="/portfolio"
                        className="sticky top-0 z-100 w-full bg-[#FCFCFC] flex justify-center
                         md:max-w-4xl md:mx-auto"
                        ease="power2.easeOut"
                        baseColor="#000000"
                        pillColor="#ffffff"
                        hoveredPillTextColor="#ffffff"
                        pillTextColor="#000000"
                    />
                )}

                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/portfolio"
                            element={
                                <>
                                    <About id="about" />
                                    <ExperienceEducationSection id="education" />
                                    <Projects
                                        id="projects"
                                        playing={playing}
                                        togglePlaying={togglePlaying}
                                    />
                                    <Skills id="skills" />
                                    <Contact id="contact" />
                                </>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </MotionConfig>
    );
}
