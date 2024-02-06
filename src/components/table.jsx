import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {useEffect, useState} from "react";
import InputSearch from "./input-search.jsx";
import DynamicTitle from "./dynamic-title.jsx";
import {motion} from "framer-motion";

/**
 * Table allows data to be displayed with an object. The object in question must not contain a
 * @param(object) Object can't contain additional objects, otherwise columns won't work
 * @param(elementFilter) Is the element used to filter the elements of the array. This element must be one of the columns of the object
 * @param(isFilter) Boolean to display the filter
 * @param(titleTable) Title for the table
 * @param(placeholderSearch) init placeholder into search
 * @param(valueSearch) init value as search
 * @param(detailsRow) The event handler function to be invoked when a row is clicked.
 *     This function should accept the selected row data as an argument.
 *     For example, if using handleRowClick, it represents the click event handler function.
 *     Replace this with the actual parameter name used in your function.
 *     If not exist selectRow not exist
 * */
const Table = ({dataTable, elementFilter, isFilter, titleTable, placeholderSearch, paginator, valueSearch, detailsRow}) => {
    const [first, setFirst] = useState(0);
    const [filter, setFilter] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);



    useEffect(() => {
        setFilter(dataTable);
    }, [dataTable]);
    const columns = dataTable.length > 0 ? Object.keys(dataTable[0]) : [];

    const handleDataFiltered = (property, filteredResults) => {
        const matchingData = dataTable.filter(item =>
            filteredResults.some(filterValue => item[property] === filterValue)
        );
        setFilter(matchingData);
        setFirst(0);
    };

    return (
        <>
            <motion.div
                className={"mx-auto flex flex-col w-5/6 my-8"}
                initial={{y: -200, opacity: -1}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    duration: 1,
                    type: 'tween',
                    ease: 'easeOut'
                }}
            >
                <div className={"flex flex-col mb-24 md:flex md:justify-between md:pb-8 md:items-center"}>
                    <DynamicTitle title={titleTable}/>
                    {isFilter && elementFilter && (
                        <InputSearch
                            placeholder={placeholderSearch}
                            data={elementFilter}
                            dataFiltered={(filteredResults) => handleDataFiltered(valueSearch, filteredResults)}
                        />
                    )}
                </div>
                <DataTable
                    id={"main-table"}
                    className={"font-black font-roboto"}
                    value={filter}
                    {...(detailsRow ? {
                        selectionMode: "single",
                        selection: selectedProduct
                    }: {})}
                    tableStyle={{ maxWidth: '100%' }}
                    dataKey={"id"}
                    onSelectionChange={(e) => detailsRow(e.value)}
                    rowClassName={"py-2"}

                    {...(paginator
                        ? {
                            paginator: true,
                            rows: 10,
                            totalRecords: filter.length,
                            filter: 'true',
                            removableSort: true,
                        }
                        : {})}
                >
                    {columns
                        .filter((col) => col !== 'id')
                        .map((col, index) => (
                            <Column
                                key={index}
                                field={col}
                                stripedRows
                                header={col.charAt(0).toUpperCase() + col.slice(1)}
                                className={index % 2 === 0 ? 'even-row' : 'odd-row'}
                                {...(paginator
                                    ? {
                                        sortable: true,
                                    }
                                    : {})}
                            />
                        ))}
                </DataTable>
            </motion.div>
        </>
    );
};

export default Table;
