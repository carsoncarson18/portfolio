import React from "react";
import Experience from "./Experience";
import Education from "./Education";

interface ExperienceEducationSectionProps {
    id?: string;
}

const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({ id }) => {
    return (
        <section id={id} className="relative bg-[#FEFEF6] px-6 py-15 overflow-hidden max-w-6xl mx-auto">

            {/* Flex layout */}
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-2/3">
                    <Experience />
                </div>
                <div className="md:w-1/3">
                    <Education />
                </div>
            </div>
        </section>
    );
};

export default ExperienceEducationSection;
