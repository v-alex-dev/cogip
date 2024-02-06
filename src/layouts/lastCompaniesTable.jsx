import React, {useState, useEffect, Suspense} from 'react';
import Table from "../components/table.jsx";
import Loader from "./loader.jsx";
import {Await} from "react-router-dom";
import {getCompanies} from "../api/companies.js";

const LastCompanies = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCompanies()
            .then(res => {
                const formattedCompanies = res.data.slice(0,5).map(data => ({
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

    return (
        <>
            {loading ? (
                <Loader primaryColor={"#F9DE4E"} secondaryColor={"#6dafa7"}/>
            ) : (
                <Table
                    dataTable={data}
                    titleTable={"Last companies"}
                    placeholderSearch={"Ceci est un placeholder" }/>

            )}
        </>
    )
}

export default LastCompanies;