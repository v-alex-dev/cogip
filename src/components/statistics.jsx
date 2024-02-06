import React from 'react';
import {getContacts} from "../api/contacts.js";
import {getInvoices} from "../api/getInvoices.js";
import {getCompanies} from "../api/companies.js";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

const Statistics = () => {
    const [contacts, setContacts] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
    getContacts()
    .then((contacts) =>  setContacts(contacts.data.length))
    .catch((error) => console.error('Error fetching contacts:', error.message));
    }, []);

     useEffect(() => {
    getInvoices()
    .then((invoices) =>  setInvoices(invoices.data.length))
    .catch((error) => console.error('Error fetching invoices:', error.message));
    }, []);

     useEffect(() => {
    getCompanies()
    .then((companies) =>  setCompanies(companies.data.length))
    .catch((error) => console.error('Error fetching companies:', error.message));
    }, []);


    return (
        <div className="w-full md:w-11/12 p-8 rounded-md font-inter shadow-md shadow-gray-200 bg-white">
            <h2 className="font-bold text-lg"> Statistics </h2>
            <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap  md:justify-around">
               <motion.div
                   initial={{x: -600, opacity: -2, rotate:-490}}
                   animate={{x: 0, opacity: 1, rotate:0}}
                   transition={{
                        delay:0.6,
                       duration: 2,
                       type: 'spring',
                       ease: 'easeOut'
                   }}
                   className="bg-violet text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 my-2 mr-2">
                    <span> {invoices} </span>
                    <span> Invoices </span>
                </motion.div>
               <motion.div
                   initial={{x: -500, opacity: -2, rotate:-490}}
                   animate={{x: 0, opacity: 1, rotate:0}}
                   transition={{
                        delay:0.3,
                       duration: 2,
                       type: 'spring',
                       ease: 'easeOut'
                   }}
                   className="bg-lavande text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 m-2">
                    <span> {contacts} </span>
                    <span> Contacts </span>
                </motion.div>
               <motion.div
                   initial={{x: -400, opacity: -2, rotate:-490}}
                   animate={{x: 0, opacity: 1, rotate:0}}
                   transition={{
                       duration: 2,
                       type: 'spring',
                       ease: 'easeOut'
                   }}
                   className="bg-pink text-white font-bold rounded-full flex flex-col justify-center items-center w-32 h-32 p-8 m-2">
                    <span> {companies} </span>
                    <span> Companies </span>
                </motion.div>
          </div>
        </div>
    )
}

export default Statistics;