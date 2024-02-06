import DynamicTitle from "../components/dynamic-title.jsx";
import React, { useState, useEffect, useMemo } from 'react';
import {getCompany} from '../api/companies.js';
import { useParams } from "react-router-dom";

const InfosCompany = () => {
    const id = useParams();
    const [company, setCompany] = useState([]);

    useEffect(() => {
    getCompany(id.id)
    .then((company) =>  setCompany(company.data))
    .catch((error) => console.error('Error fetching company:', error.message));
    }, []);

    return (
         <div>
            <div className={"w-1/2 ml-24"}>
                <DynamicTitle title={company.name}/>
            </div>
            <div className="pt-32 ml-24">
                <p className="font-roboto font-medium capitalize"> <span className="font-bold">Name: </span> {company.name}</p>
                <p className="font-roboto font-medium"> <span className="font-bold">TVA: </span> {company.tva}</p>
                <p className="font-roboto font-medium capitalize"> <span className="font-bold">Country: </span> {company.country}</p>
                <p className="font-roboto font-medium capitalize"> <span className="font-bold">Type: </span> {company.types_name}</p>
            </div>
         </div>
    )
}

export default InfosCompany;