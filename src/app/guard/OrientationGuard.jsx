"use client";

import { useEffect, useState } from "react";

export default function OrientationGuard({ children }) {
    const [orientation, setOrientation] = useState("");

    useEffect(() => {
        // Function to update the orientation state
        if(window.innerWidth < 450) {
            function updateOrientation() {
            setOrientation(window.screen.orientation.type);
            }
            // Initial update of the orientation state
            updateOrientation();
            // Add an event listener for orientation change
            window.addEventListener("orientationchange", updateOrientation);
            window.addEventListener("resize", updateOrientation);
            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener("orientationchange", updateOrientation);
                window.removeEventListener("resize", updateOrientation);
            };

        }
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
