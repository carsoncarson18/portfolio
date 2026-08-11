import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

interface AboutExperienceEducationProps {
    id?: string;
}

const AboutExperienceEducation: React.FC<AboutExperienceEducationProps> = ({ id }) => {
    return (
        <section id={id} className="relative bg-[#0a0510] px-6 py-24 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-x-20 gap-y-16">
                <div className="md:w-1/2 flex flex-col gap-16 md:gap-20">
                    <About />
                    <Education />
                </div>
                <div className="md:w-1/2">
                    <Experience />
                </div>
            </div>
        </section>
    );
};

export default AboutExperienceEducation;
