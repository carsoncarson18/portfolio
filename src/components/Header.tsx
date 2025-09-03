import React, { useState } from "react";

interface HeaderProps {
    playing: boolean;
    togglePlaying: () => void;
}

export default function Header({ playing, togglePlaying }: HeaderProps) {
    const [hasStarted, setHasStarted] = useState(false);

    const handleClick = () => {
        if (!hasStarted) setHasStarted(true);
        togglePlaying();
    };

    return (
        <header className="absolute top-6 left-1/2 -translate-x-1/2 w-full z-50 flex justify-center">
            <button
                onClick={handleClick}
                className="px-6 py-2 rounded-full text-white font-medium
                           bg-purple-600/80 hover:bg-purple-500/90 
                           shadow-lg shadow-purple-500/30
                           transition-all duration-300 backdrop-blur-sm"
            >
                {!hasStarted
                    ? "Hear a song I remixed!"
                    : playing
                        ? "Mute"
                        : "Unmute"}
            </button>
        </header>
    );
}
