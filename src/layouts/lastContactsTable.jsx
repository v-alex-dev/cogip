import React, {useState, useEffect, Suspense} from 'react';
import {getContacts} from "../api/contacts.js";
import Table from "../components/table.jsx";
import {Await} from "react-router-dom";
import Loader from "./loader.jsx";
import light from  "../assets/light.svg"


const LastContacts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getContacts()
            .then(res => {
                const formattedContacts = res.data.slice(0, 5).map(data => ({
                    Name: data.name,
                    Phone: data.phone,
                    Mail: data.email,
                    Company: data.company_name,
                    Created_At: new Date(data.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    })
                }));
                setData(formattedContacts);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <section>
            {loading ? (
                <Loader primaryColor={"#F9DE4E"} secondaryColor={"#6dafa7"}/>
            ) : (
                <>
                    <Table
                        dataTable={data}
                        titleTable={"Last Contacts"}
                        placeholderSearch={"Ceci est un placeholder" }/>

                    <div className="relative">
                        <img src={light} alt="ligh-bulb" className="absolute left-0 mt-16"/>
                    </div>
                </>

            )}
        </section>


    )
}

export default LastContacts;