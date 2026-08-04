import React from "react";
import Experience from "./Experience";
import Education from "./Education";

interface ExperienceEducationSectionProps {
    id?: string;
}

const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({ id }) => {
    return (
        <section id={id} className="relative bg-[#FEFEF6] overflow-hidden">
            <Experience />
            <Education />
        </section>
    );
};

export default ExperienceEducationSection;
