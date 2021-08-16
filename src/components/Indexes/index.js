import React from "react";
import Table from "../Table";
import AppContext from "../../context";
import Currency from "../Сurrency";


function Indexes() {
    const {index,setIndex} = React.useContext(AppContext)


    return (
        <div>
            <Currency/>
            <Table data={index} setData={setIndex} />
        </div>
    )
}

export default Indexes;
