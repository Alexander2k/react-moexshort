import React from "react";
import AppContext from "../../context";
import Table from "../Table";
import Currency from "../Сurrency";


function ETFRUB() {
    const {etfRub,setEtfRub} = React.useContext(AppContext)
    return (
        <div>
            <Currency/>
            <Table data={etfRub} setData={setEtfRub}/>
        </div>
    )
}

export default ETFRUB;
