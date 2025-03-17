import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    useEffect(() => {
        const updateMousePosition = (e) => {
            const now = Date.now();
            if (now - lastUpdate < 16) return; // Met à jour toutes les 16ms (~60 FPS)
            setMousePosition({ x: e.pageX, y: e.pageY });
            setLastUpdate(now);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, [lastUpdate]);

    return mousePosition;
};

export default useMousePosition;