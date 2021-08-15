import React, {useState} from 'react';


function Table({data,setData}) {

    const [searchValue, setSearchValue ] = useState("");
    const [isSorted,setIsSorted] = useState(true)

    const filteredData = data.filter((d) => {
        if (!searchValue) return d
        return d.ticker.toLowerCase().includes(searchValue.toLowerCase()) || d.fullname.toLowerCase().includes(searchValue.toLowerCase())
    })

    const sortDataHandler = (callBack) => {
                setIsSorted(!isSorted)
        if (isSorted) {
            setData([...data.sort((a, b) => a[callBack] > b[callBack] ? 1 : -1)])
        } else setData([...data.sort((a, b) => a[callBack] < b[callBack] ? 1 : -1)])
    }

    return (
        <div>
            <div className={"input-group mb-3"}>
                <input type="text"
                       className={"form-control"}
                       placeholder={"Поиск тикера"}
                       onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            <table border="1" className={'table'}>
                <thead>
                <tr>
                    <th onClick={()=>sortDataHandler('ticker')}>Тикер</th>
                    <th onClick={()=>sortDataHandler('fullname')}>Название</th>
                    <th onClick={()=>sortDataHandler('lastprice')}>Цена закрытия</th>
                    <th onClick={()=>sortDataHandler('pctchange')}>% изменения к закрытию</th>
                    <th onClick={()=>sortDataHandler('volume')}>Оборот</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((d, index) => (
                    <tr key={index}>
                        <td>{d.ticker}</td>
                        <td>{d.fullname}</td>
                        <td>{d.lastprice}</td>
                        <td>{d.pctchange}</td>
                        <td>{d.volume}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default React.memo(Table);
