import React, { useState, useEffect } from 'react';
import Table from "../components/table.jsx";
import { getContacts } from '../api/contacts.js';
import Loader from "./loader.jsx";

const AllContactsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getContacts()
            .then(res => {
                const formattedContacts = res.data.map(data => ({
                    id:data.id,
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

    const contacts = data.map(data => data.Name);
    const handleShowContact = (rowData) => {
        const id = rowData.id
        window.location.pathname = `/showcontact/${id}`
    }
    return (
        <div>
            {loading ? (
                <Loader primaryColor={"#F9DE4E"} secondaryColor={"#6dafa7"}/>
            ) : (
                <Table
                    dataTable={data}
                    isFilter
                    titleTable={"All contacts"}
                    elementFilter={contacts}
                    placeholderSearch={"Search contacts"}
                    paginator
                    valueSearch={"Name"}
                    detailsRow={handleShowContact}
                />
            )}
        </div>
    );
}

export default AllContactsTable;