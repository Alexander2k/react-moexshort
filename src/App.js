import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import AppContext from './context';
import api from "./api";


import Header from "./components/Header";
import {router} from "./router";

function sharesData(d) {
    const finalData = []
    const sData = d['securities'].data.sort()
    const mData = d['marketdata'].data.sort()

    for (let i = 0; i < sData.length; i++) {
        finalData.push(
            {
                "ticker": sData[i][0],
                "fullname": sData[i][9],
                "lastprice": mData[i][12],
                "pctchange": mData[i][25],
                "volume": mData[i][54]
            }
        )
    }
    return finalData

}

function indexData(d) {
    const finalData = []
    const sData = d['securities'].data.sort()
    const mData = d['marketdata'].data.sort()

    for (let i = 0; i < sData.length; i++) {
        finalData.push(
            {
                "ticker":sData[i][0],
                "fullname":sData[i][2],
                "lastprice":mData[i][3],
                "pctchange":mData[i][9],
                "volume":mData[i][10]
            }
        )
    }
    return finalData

}

function App() {
    const [etfRub,setEtfRub] = useState([]);
    const [etfUsd,setEtfUsd] = useState([]);
    const [index,setIndex] = useState([]);
    const [stock,setStock] = useState([]);

    async function getData() {
        try {
            const [etfRubResp, etfUsdResp, indexResp, stockResp] = await Promise.all([
                api.get('engines/stock/markets/shares/boards/TQTF/securities.json'),
                api.get('engines/stock/markets/shares/boards/TQTD/securities.json'),
                api.get('engines/stock/markets/index/securities.json'),
                api.get('engines/stock/markets/shares/boards/tqbr/securities.json')
            ])

            setEtfRub(sharesData(etfRubResp.data))
            setEtfUsd(sharesData(etfUsdResp.data))
            setIndex(indexData(indexResp.data))
            setStock(sharesData(stockResp.data))
        } catch (e) {
            alert('Error Response!!!')
            console.log(e)
        }
    }

    useEffect(() => {
        getData();
        // const intervalData = setInterval(getData,10000);
        // return()=> clearInterval(intervalData)
    },[])



    return (
        <AppContext.Provider value={{etfRub,etfUsd,index,stock,setIndex,setEtfUsd,setEtfRub,setStock}}>
        <div className='container px-4'>
            <Header/>
            <Switch>
                {router.map(rout =>
                    <Route
                        component={rout.component}
                        path={rout.path}
                        exact={rout.exact}
                    />
                )}
                <Redirect to={'/'}/>
            </Switch>
        </div>
        </AppContext.Provider>

    );
}

export default App;
