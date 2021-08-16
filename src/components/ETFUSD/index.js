import React from "react";
import Table from "../Table";
import AppContext from "../../context";
import Currency from "../Сurrency";


function ETFUSD() {
    const {etfUsd,setEtfUsd} = React.useContext(AppContext)

    return (
        <div>
            <Currency/>
            <Table data={etfUsd} setData={setEtfUsd}/>
        </div>
    )
}

export default ETFUSD;
