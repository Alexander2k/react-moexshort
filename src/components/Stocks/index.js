import React from "react";
import Table from "../Table";
import AppContext from "../../context";
import Currency from "../Сurrency";


function Stocks() {
    const {stock,setStock} = React.useContext(AppContext)
    return (
        <div>
            <Currency/>
            <Table data={stock} setData={setStock}/>
        </div>
    )
}

export default Stocks;
