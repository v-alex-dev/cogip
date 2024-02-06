import TableDashboard from "../components/table-dashboard";
import {useEffect, useState} from "react";
import {getContacts} from "../api/contacts.js";
import { useParams } from "react-router-dom";

const LastContactsDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const tableKey = ['name', 'phone', 'email'];
    const tableHead = ['Name', 'Phone', 'Email'];
    const id = useParams();

    useEffect(() => {
        getContacts()
        .then((contacts) => {
            setContacts(contacts.data.slice(0, 5))
            setLoading(true);
        })
        .catch((error) => {
            console.error('Error fetching contacts:', error.message)
            setLoading(false);
        });
    }, []);

    return (
        <div className="w-full md:w-11/12 mt-16 p-4 rounded-md font-inter shadow-md shadow-gray-200 bg-white">
            <h2 className="font-inter mx-6 mb-6 font-bold text-xl border-b-2 border-slate-100 pb-4"> Last Contacts </h2>
            <TableDashboard data={contacts} loading={loading} tableKey={tableKey} tableHead={tableHead} link={`new-contact`}/>
        </div>
    )
}

export default LastContactsDashboard;