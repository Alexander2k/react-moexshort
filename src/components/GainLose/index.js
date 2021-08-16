import React from 'react';
import AppContext from "../../context";

function GainLose() {

    const {stock} = React.useContext(AppContext)

    const gainers = [...stock].sort((a, b) => a.pctchange < b.pctchange ? 1 : 0).slice(0,10)

    const losers = [...stock].sort((a, b) => a.pctchange > b.pctchange ? 1 : 0).slice(0,10)

    return (
        <div className={'gainlose'}>

            <div className={'gainlose__gain'}>
                <h2>Лидеры роста</h2>
                <table border="1" className={'table'}>

                    <thead>
                    <tr>
                        <th>Тикер</th>
                        <th>Цена закрытия</th>
                        <th>% изменения к закрытию</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gainers.map((d, index) => (
                        <tr key={index}>
                            <td>{d.ticker}</td>
                            <td>{d.lastprice}</td>
                            <td>{d.pctchange}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={'gainlose__lose'}>
                <h2>Лидеры падения</h2>
                <table border="1" className={'table'}>
                    <thead>
                    <tr>
                        <th>Тикер</th>
                        <th>Цена закрытия</th>
                        <th>% изменения к закрытию</th>
                    </tr>
                    </thead>
                    <tbody>
                    {losers.map((d, index) => (
                        <tr key={index}>
                            <td>{d.ticker}</td>
                            <td>{d.lastprice}</td>
                            <td>{d.pctchange}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default GainLose;
