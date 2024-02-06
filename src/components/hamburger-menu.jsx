import {Link} from "react-router-dom";
import {Fade as Hamburger} from 'hamburger-react';
import {useEffect, useState} from "react";
import LoginModal from "./login_modal.jsx";
import Avatar from "./avatar.jsx";
import BtnSignUp from "./btn-signUp.jsx";

const HamburgerMenu = ({listNav, userLog}) => {


    const [isOpen, setOpen] = useState(false);
    const [href, setHref] = useState('');
    const [path, setPath] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setHref(window.location.href)
        setPath(window.location.pathname)
    })
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const displayLogBtn = () => {
        return path.startsWith('/dashboard') ? "md:flex md:flex-col md:justify-between h-full" : "md:flex md:justify-between md:w-full font-medium"
    }

    const displayListNav = () => {
        if (path !== "/dashboard" && !path.startsWith('/dashboard')) {
            return `md:flex md:flex-wrap gap-2 md:space-x-5 md:h-10 md:w-2/3 font-roboto font-black ${isOpen ? 'block border-b  mb-3' : 'hidden'}`
        } else {
            return `md:flex md:flex-col md:border-b gap-3 items-center h-full`
        }
    }
    const classLink = (item) => {
        if (path.startsWith('/dashboard')) {
            return path.endsWith(item.url) ? "border-r-4 border-lavande flex w-full" : "flex w-full";
        } else {
            return path.endsWith(item.url)  ? "border border-black btn-link-default " : "border-none btn-link-default";
        }
    };


    return (
        <div
            className={displayLogBtn()}>
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            <ul className={displayListNav()}>
                {listNav.map((item) => (
                    <li key={item.url}
                        className={classLink(item)}>
                        {item.img && <img className={"basis-1/12 mx-5"} src={item.img} alt={item.content}/>}
                        <Link to={item.url}>{item.content}</Link>
                    </li>
                ))}
            </ul>
            <ul className={`md:flex md:space-x-4  ${isOpen ? 'block  mb-3' : 'hidden'}`}>
                {userLog && !path.startsWith("/dashboard") || !userLog && !path.startsWith("/dashboard") ? (
                    <>
                        <li className={"btn-link-default bg-white rounded-xl flex items-center"}><BtnSignUp isLog={userLog}/></li>
                        <li className={"btn-link-default flex items-center"}>
                            <button onClick={openModal}>Login</button>
                        </li>
                    </>
                ) : (
                    path.startsWith("/dashboard") && (
                        <li className={"btn-link-default rounded-xl w-full pt-10 flex items-center justify-between"}>
                            <div className={"w-8"}>
                                <Avatar name={"name"}/>
                            </div>
                            <Link to={"/"} className={"font-inter text-lavande p-3"}>Logout</Link>
                        </li>
                    )
                )}
            </ul>

            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={closeModal}/>}
        </div>
    );
}

export default HamburgerMenu;
