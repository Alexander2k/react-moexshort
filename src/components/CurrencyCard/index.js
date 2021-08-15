import React from 'react';


function CurrencyCard({name,price,pctchange}) {

    return(
        <div className={"card text-end m-3"}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>{name}</h5>
                <h2><p className={"card-text"}>{price}</p></h2>
                <p className={"card-text"}>{pctchange + ' %'}</p>
            </div>
        </div>
    )

}

export default CurrencyCard;
