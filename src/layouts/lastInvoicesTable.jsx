import manager from '../assets/manager.svg';
import React, {useState, useEffect, Suspense} from 'react';
import Table from "../components/table.jsx";
import Loader from "./loader.jsx";
import {Await} from "react-router-dom";
import {getInvoices} from "../api/getInvoices.js";

const LastInvoices = () => {
    const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInvoices()
            .then(res => {
                const formattedCompanies = res.data.slice(0,5).map(data => ({
                    Invoices_number: data.ref,
                    Due_Date: new Date(data.due_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    }),
                    Company: data.name,
                    Created_At: new Date(data.updated_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    })
                }));
                setData(formattedCompanies);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error.message);
                setLoading(false);
            });
    }, []);

    return (
       <div className="w-full mt-48">
           {loading ? (
               <Loader primaryColor={"#F9DE4E"} secondaryColor={"#6dafa7"}/>
           ) : (
               <Table
                   dataTable={data}
                   titleTable={"Last invoices"}
                   />

           )}
           <div className="relative">
                <img src={manager} alt="manager" className={"absolute right-0 mt-16 " + (window.location.pathname == "/" ? "" : "opacity-0") } />
            </div>
        </div>
    )
}

export default LastInvoices;