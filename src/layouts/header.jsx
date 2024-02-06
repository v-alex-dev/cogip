import NavHeader from "../components/nav-header.jsx";
import {useEffect, useState} from "react";
import {useIsHome} from "../hooks/useIsHome.jsx";
import {motion} from "framer-motion";


const Header = () => {
    const home = useIsHome();

    return (
        <>
            <header className={"bg-yellow"}>
                <NavHeader/>
                {home && (
                    <div className={"flex flex-col md:flex-row justify-around mx-auto items-center"}>
                        <motion.div
                            initial={{x: -500}}
                            animate={{x: 0}}
                            transition={{
                                duration: 1,
                                type: 'spring',
                                ease: 'easeIn'
                            }}
                            className={"w-1/3"}>
                            <h2 className={"uppercase font-inter font-black text-center text-5xl "}>manage your
                                customers and invoices easly</h2>
                        </motion.div>
                        <motion.img
                            initial={{x: 500}}
                            animate={{x: 0}}
                            transition={{
                                duration: 1,
                                type: 'spring',
                                ease: 'easeIn'
                            }}
                            className={"w-1/2"} src={"/src/assets/DrawKit_Vector_Illustration_Project_Manager.svg"}
                             alt={"projectManager"}/>
                    </div>
                )}
                <svg className={"w-11/12 mx-auto relative -bottom-1"} viewBox="0 0 1299 112" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
                </svg>

            </header>
        </>
    )
}

export default Header;