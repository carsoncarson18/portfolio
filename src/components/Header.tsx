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
        <header className="absolute top-0 left-0 w-full z-50 p-4 flex justify-end">
            {/* Button to toggle audio playback */}
            <button
                onClick={handleClick}
                className="bg-fuchsia-600 text-white px-4 py-2 rounded hover:bg-fuchsia-500 transition"
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
