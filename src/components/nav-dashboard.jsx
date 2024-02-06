import HamburgerMenu from "./hamburger-menu.jsx";
import Avatar from "./avatar.jsx";
import {motion} from "framer-motion";
import dashboardImg from "../assets/Icon_dashboard.svg";
import invoicesImg from "../assets/Icon_Invoices.svg";
import companiesImg from "../assets/Icon_Companies.svg";
import contactImg from "../assets/Icon_contact.svg";

const navDashboard = () => {
    const listNav = [
        {
            url: '/dashboard',
            content: 'Dashboard',
            img: dashboardImg
        },
        {
            url: '/dashboard/new-invoice',
            content: 'Invoices',
            img: invoicesImg
        },
        {
            url: '/dashboard/new-company',
            content: 'Companies',
            img: companiesImg
        },
        {
            url: '/dashboard/new-contact',
            content: 'Contacts',
            img: contactImg
        },
    ];
    return (
        <div className={'h-screen w-1/4 '}>
            <motion.div
                initial={{x: -600, opacity: -2}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 1.5,
                    type: 'tween',
                    ease: 'easeOut'
                }}
                className={"w-1/6 h-full fixed bg-white"}>
                <nav className={"flex flex-col h-full"}>
                    <div id="profil" className={"flex flex-col mx-auto items-center gap-4 mt-8 mb-10 pb-2 border-b w-full h-1/5"}>
                        <Avatar name={"name"}/>
                        <p className={"font-roboto font-black"}>name</p>
                    </div>
                    <HamburgerMenu listNav={listNav} userLog={true}/>

                </nav>
            </motion.div>
        </div>

    )
}

export default navDashboard;