import React from 'react';
import Loader from "../layouts/loader.jsx";
import {Link} from "react-router-dom";

const DataForPagination = ({data, loading, value, link }) => {


    return (
        <>

            {loading ?
                data.map((item) => (
                    <tr key={item.id} className={"border-b"}>
                        {value.map((key) => (
                            <td key={key} className={"p-4"}><Link to={`/dashboard/${link}/${item.id}`}>{item[key]}</Link></td>
                        ))}
                    </tr>
                ))
                :

                <Loader primaryColor={"#4d4cac"} secondaryColor={"#ffffff"}/>
            }
        </>
    )
}

export default DataForPagination;