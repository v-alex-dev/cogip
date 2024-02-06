import React, { useState, useEffect } from 'react';
import DataForPagination from './dataForPagination.jsx';


const TableDashboard = ({data, loading, tableKey, tableHead, link}) => {

    return (
        <div className="w-full  overflow-x-auto">
            <table className="mx-6-auto w-full">
                <thead className="text-left font-inter font-semibold">
                    <tr>
                        {tableHead.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <DataForPagination data={data} loading={loading} value={tableKey} link={link}/>
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboard;