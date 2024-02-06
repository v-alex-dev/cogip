import { useState, useEffect } from 'react';
import { getCompanies } from '../api/companies.js';
import Loader from '../layouts/loader.jsx';

const SelectCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCompanies()
        .then((companies) =>  {setCompanies(companies.data); setLoading(false)})
        .catch((error) => {console.error('Error fetching companies:', error.message); setLoading(true)});
    }, []);

    return (
        <>
            {loading ?
                <Loader/>
                :
                <select name="companies" className="bg-bg-dashboard p-4 m-4 rounded-md">
                    {companies.map((company) => (
                        <option key={company.id} value={company.id}> {company.name} </option>
                    ))}
                </select>
            }
        </>
    )
}

export default SelectCompanies;
