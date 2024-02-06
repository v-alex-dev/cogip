import {useEffect, useState} from "react";

export function useIsDashboard() {
    const location = window.location.pathname;
    const [size, setSize] = useState(window.innerWidth)


    const [dashboard, setDashboard] = useState()

    useEffect(() => {
        const isDashboard = () => {
            return size > 780
        }
        setDashboard(isDashboard())
        const handleResize = () => {
            setSize(window.innerWidth);
            setDashboard(isDashboard());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },)

    return dashboard
}