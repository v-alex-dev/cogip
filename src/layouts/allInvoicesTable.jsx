import React, { useState, useEffect } from 'react';
import Table from "../components/table.jsx";
import { getInvoices } from "../api/getInvoices.js";
import Loader from "./loader.jsx";

const AllInvoiceTable = () => {
    const [invoicesData, setInvoicesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInvoices()
            .then(res => {
                const formattedInvoices = res.data.map(data => ({
                    id:data.id,
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
                setInvoicesData(formattedInvoices);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error.message);
                setLoading(false);
            });
    }, []);

    const company = invoicesData.map(data => data.Company);
    const handleDetailsRow = (rowData) => {
        const id = rowData.id;

    }
    return (
        <div>
            {loading ? (
                <Loader primaryColor={"#F9DE4E"} secondaryColor={"#6dafa7"}/>
            ) : (
                <Table
                    dataTable={invoicesData}
                    isFilter
                    titleTable={"All invoices"}
                    elementFilter={company}
                    placeholderSearch={"Search company"}
                    paginator
                    valueSearch={"Company"}
                    detailsRow={handleDetailsRow}
                />
            )}
        </div>
    );
}

export default AllInvoiceTable;
