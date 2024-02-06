import DynamicTitle from "../components/dynamic-title.jsx";
import Avatar from "../components/avatar.jsx";
import { useParams } from "react-router";
import React, { useState, useEffect, useMemo } from 'react';
import {getContact} from '../api/contacts.js';

const InfosContact = ({user}) => {
    const id = useParams();
    const [contact, setContact] = useState([]);

    useEffect(() => {
        getContact(id.id)
        .then((contact) =>  setContact(contact.data))
        .catch((error) => console.error('Error fetching contact:', error.message));
    }, [])

    return (
         <div>
            <div className={"w-1/2 ml-24"}>
                <DynamicTitle title={contact.name}/>
            </div>
            <div className="flex flex-col items-center md:flex-row-reverse md:justify-between">
                <div className="pt-32 md:w-6/12 md:h-52 md:flex md:justify-center md:items-center md:pt-0">
                    <Avatar name={contact.name}/>
                </div>
                <div className="mt-12 md:ml-24 md:pt-32 md:w-6/12">
                    <p className="font-roboto font-medium"> <span className="font-bold">Contact: </span> {contact.name} </p>
                    <p className="font-roboto font-medium"> <span className="font-bold">Phone: </span> {contact.phone} </p>
                    <p className="font-roboto font-medium"> <span className="font-bold">Mail: </span> {contact.email} </p>
                    <p className="font-roboto font-medium capitalize"> <span className="font-bold">Company: </span> {contact.company_name} </p>
                </div>
            </div>
         </div>
    )
}

export default InfosContact;