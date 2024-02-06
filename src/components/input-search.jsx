import React, { useState } from 'react';

/**
 * Input type text for filter result of search
 *
 * @param(placeholder) Insert placeholder text
 * @param(data) insert the search item there
 * @param(dataFiltered) insert the function filter
 * */
const InputSearch = ({ placeholder, data, dataFiltered }) => {
    const [inputValue, setInputValue] = useState('');
    const handleFilter = (event) => {
        const value = event.target.value;
        setInputValue(value);

        // Implémentez votre logique de filtrage ici
        const filteredResults =  data.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );


        if(dataFiltered){
            return dataFiltered(filteredResults)
        }
    };

    return (
        <>
            <input
                type={'text'}
                className={'px-3 py-2 rounded border  bg-white h-7 font-roboto top-10 relative mr-5'}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleFilter}
            />
        </>
    );
};

export default InputSearch;