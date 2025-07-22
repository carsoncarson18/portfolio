import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
    src: string;
    playing: boolean;
    volume?: number;
    muted?: boolean;
    loop?: boolean;
}

// hidden background audio player
export default function AudioPlayer({
    src,
    playing,
    volume = 0.3,
    muted = false,
    loop = true,
}: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);

    // control playback & volume
    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = muted ? 0 : volume;
        audioRef.current.muted = muted;

        if (playing && !muted) {
            audioRef.current.play().catch((err) => {
                console.warn("Audio play prevented:", err);
            });
        } else {
            audioRef.current.pause();
        }
    }, [playing, muted, volume]);

    return (
        <audio
            ref={audioRef}
            src={src}
            loop={loop}
            preload="auto"
            style={{ display: "none" }}
        />
    );
}

