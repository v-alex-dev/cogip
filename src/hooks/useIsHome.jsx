import {useEffect, useState} from "react";

export function useIsHome() {
    const location = window.location.pathname;
    const [size, setSize] = useState(window.innerWidth)


    const [home, setHome] = useState()

    useEffect(() => {
        const isHome = () => {
            return location === '/' && size > 780
        }
        setHome(isHome())
        const handleResize = () => {
            setSize(window.innerWidth);
            setHome(isHome());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },)

    return home
}