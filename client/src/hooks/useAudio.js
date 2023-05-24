import { useMemo, useEffect } from "react";
import beep from "../assets/beep.mp3";

const useAudio = () => {
    const audio = useMemo(() => new Audio(beep), []);
    const toggle = () => audio.play();

    useEffect(() => {
        audio.load();
        return () => {
            audio.removeEventListener("ended", () => audio.pause());
        };
    }, []);

    return toggle;
};

export default useAudio;
