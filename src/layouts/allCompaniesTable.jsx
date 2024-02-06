import React, { useState, useEffect } from 'react';
import Table from "../components/table.jsx";
import { getCompanies} from '../api/companies.js';
import Loader from "./loader.jsx";

const AllContactsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCompanies()
            .then(res => {
                const formattedCompanies = res.data.map(data => ({
                    id:data.id,
                    Name: data.name,
                    TVA: data.tva,
                    Country: data.country,
                    Type: data.types_name,
                    Created_At: new Date(data.created_at).toLocaleDateString('en-US', {
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

    const companies = data.map(data => data.Name);
    const handleShowDetail = (rowData) => {
        const id = rowData.id
        window.location.pathname= `/showcompany/${id}`
    }
    return (
        <div>
            {loading ? (
                <Loader primaryColor={"#F9DE4E"} secondaryColor={"#6dafa7"}/>
            ) : (
                <Table
                    dataTable={data}
                    isFilter
                    titleTable={"All companies"}
                    elementFilter={companies}
                    placeholderSearch={"Search companies"}
                    paginator
                    valueSearch={"Name"}
                    detailsRow={handleShowDetail}
                />
            )}
        </div>
    );
}

export default AllContactsTable;