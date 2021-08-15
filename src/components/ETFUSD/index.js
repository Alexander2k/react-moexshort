import React from "react";
import Table from "../Table";
import AppContext from "../../context";


function ETFUSD() {
    const {etfUsd,setEtfUsd} = React.useContext(AppContext)

    return (
        <Table data={etfUsd} setData={setEtfUsd}/>
    )
}

export default ETFUSD;
