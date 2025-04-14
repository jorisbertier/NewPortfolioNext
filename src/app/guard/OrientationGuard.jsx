"use client";

import { useEffect, useState } from "react";

export default function OrientationGuard({ children }) {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            const isPortraitMode =
                window.matchMedia("(orientation: portrait)").matches &&
                window.innerHeight > window.innerWidth;
            setIsPortrait(isPortraitMode);
        };

        checkOrientation();
        window.addEventListener("resize", checkOrientation);
        window.addEventListener("orientationchange", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
            window.removeEventListener("orientationchange", checkOrientation);
        };
    }, []);

    if (isPortrait) {
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
