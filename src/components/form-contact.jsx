
import { useEffect, useState } from "react";
import { getContact } from "../api/contacts.js";
import { useParams } from "react-router-dom";
import {motion} from "framer-motion";

const FormContact = () => {
    const [contact, setContact] = useState({});
    const id = useParams();

    useEffect(() => {
        getContact(id.id)
        .then((contact) =>  setContact(contact.data))
        .catch((error) => console.error('Error fetching contact:', error.message));
    }, [id]);

    return (
        <motion.div
            initial={{opacity: -2}}
            animate={{ opacity: 1}}
            transition={{
                duration: 0.4,
                type: 'tween',
                ease: 'easeInOut'
            }}
            className="bg-white rounded-md shadow-md shadow-gray-200 w-11/12 mx-auto pt-16">
            <h2 className="font-inter text-xl font-bold border-b-2 border-slate-100 pb-4 mx-6 mt-4">New Contact</h2>
            <form className="flex flex-col pt-8 px-6">
                <input type="text" name="name" placeholder="Name" value={contact.name} className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <input type="text" name="phone" placeholder="Phone" value={contact.phone} className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <input type="text" name="email" placeholder="Email" value={contact.email} className="bg-bg-dashboard p-4 m-4 rounded-md" />
                <button type="submit" className="bg-lavande text-white font-inter flex flex-col justify-start items-start p-4 m-2"> Save </button>
            </form>
        </motion.div>
    )
}

export default FormContact;