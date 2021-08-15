import React from "react";
import Table from "../Table";
import AppContext from "../../context";


function Stocks() {
    const {stock,setStock} = React.useContext(AppContext)
    return (
        <Table data={stock} setData={setStock}/>
    )
}

export default Stocks;
