import React from "react";
import Table from "../Table";
import AppContext from "../../context";


function Indexes() {
    const {index,setIndex} = React.useContext(AppContext)


    return (
        <Table data={index} setData={setIndex} />
    )
}

export default Indexes;
