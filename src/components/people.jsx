import React, { useState, useEffect } from 'react';
import {getContacts} from '../api/contacts.js';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Loader from "../layouts/loader.jsx";

const People = () => {
    const id = useParams();
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        getContacts()
        .then((contacts) => {
            if (id.id) {
                const filteredContacts = contacts.data.filter((contact) => contact.company_id === parseInt(id.id));
                setContacts(filteredContacts);
            } else {
                setContacts(contacts.data);
            }})
        .catch((error) => console.error('Error fetching contacts:', error.message));
    }, [])

    return (
        <div className="flex w-10/12 flex-col md:flex-row md:flex-wrap md:gap-8">
            {Array.isArray(contacts) && contacts.length > 0 ? (
                contacts.map((contact) => (
                    <div className="bg-slate-100 w-72 h-48 rounded-xl flex flex-col justify-center items-center my-9 mx-auto md:mx-0 md:flex-row md:gap-8 md:w-3/12" key={contact.id}>
                        <Link to={`/showcontact/${contact.id}`}>
                            <div className="flex flex-col md:flex-row md:gap-8 md:justify-center md:items-center">
                                <img src={`https://ui-avatars.com/api/?name=${contact.name}&background=random`} alt="avatar" className="rounded-full w-24 h-24 mt-10 md:mt-0" />
                                <p className="text-xl font-black font-roboto">{contact.name}</p>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                // insert spinner here
                <Loader/>
            )}
        </div>
    );
}

export default People;