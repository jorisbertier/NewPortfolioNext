"use client";

import { useEffect, useState } from "react";

export default function OrientationGuard({ children }) {
    const [orientation, setOrientation] = useState("");
    const isSmallScreen = window.innerWidth < 450;

    useEffect(() => {
        function updateOrientation() {
            if (window.innerWidth < 450) {
                setOrientation(window.screen.orientation.type);
            } else {
                setOrientation("");
            }
        }
    
        updateOrientation();
        window.addEventListener("orientationchange", updateOrientation);
        window.addEventListener("resize", updateOrientation);
    
        return () => {
            window.removeEventListener("orientationchange", updateOrientation);
            window.removeEventListener("resize", updateOrientation);
        };
    }, [isSmallScreen]);
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
