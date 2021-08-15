import React from "react";
import AppContext from "../../context";
import Table from "../Table";


function ETFRUB() {
    const {etfRub,setEtfRub} = React.useContext(AppContext)
    return (
        <Table data={etfRub} setData={setEtfRub}/>
    )
}

export default ETFRUB;
