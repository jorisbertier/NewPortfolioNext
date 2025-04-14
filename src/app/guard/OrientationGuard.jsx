"use client";

import { useEffect, useState } from "react";

export default function OrientationGuard({ children }) {
    const [orientation, setOrientation] = useState("");

useEffect(() => {
    function updateOrientation() {
        if (window.innerWidth < 450) {
            setOrientation(window.screen.orientation.type);
        } else {
            setOrientation(""); // reset si écran trop large
        }
    }

    updateOrientation();
    window.addEventListener("orientationchange", updateOrientation);
    window.addEventListener("resize", updateOrientation); // pour gérer aussi resize

    return () => {
        window.removeEventListener("orientationchange", updateOrientation);
        window.removeEventListener("resize", updateOrientation);
    };
}, [orientation]);

    if (orientation === "landscape-primary") {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#171717]">
                <p className="text-xl text-center px-4 text-white">
                    Please rotate your device to landscape mode for a better experience.
                </p>
            </div>
        );
    }

    return <>{children}</>;
}
