import React from 'react';

const Pagination = ({dataPerPage, totalData, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }



    return (
        <div>
            <ul className="flex justify-center">
                {pageNumbers.map(number => (
                    <li key={number} className="mx-2">
                        <button onClick={() => paginate(number)} > {number}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;