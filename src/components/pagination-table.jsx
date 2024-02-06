import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DataForPagination from './dataForPagination.jsx';
import Pagination from './pagination.jsx';

const PaginationTable = ({data, loading, tableKey, tableHead}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    
    // Get current data
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <div>
            <div className="w-full mt-16 pt-32">
                <div className="flex justify-center">
                    <table className="w-11/12 py-6 mx-24 font-roboto font-semibold">
                        <thead className="bg-yellow">
                            <tr>
                                {tableHead.map((item, index) => (
                                    <th key={index}>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="w-11/12">
                            <DataForPagination data={currentData} loading={loading} value={tableKey}/>
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate}/>
        </div>
    )
}

export default PaginationTable;