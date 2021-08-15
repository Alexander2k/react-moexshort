import React, {useState, useEffect} from 'react';
import api from "../../api";
import CurrencyCard from "../CurrencyCard";




function Currency() {
    // https://iss.moex.com/iss/engines/currency/markets/selt/boards/CETS/securities
    // USD https://iss.moex.com/iss/engines/currency/markets/selt/boards/CETS/securities/USD000UTSTOM.json
    // EUR https://iss.moex.com/iss/engines/currency/markets/selt/boards/CETS/securities/EUR_RUB__TOM.json

    const [usd, setUsd] = useState([]);
    const [eur, setEur] = useState([]);
    const [moex, setMoex] = useState([]);
    const [rtsi, setRtsi] = useState([]);
    const timer = 100000;


    async function getUSD() {
        try {
            const usd_result = await api.get('/engines/currency/markets/selt/boards/CETS/securities/USD000UTSTOM.json');
            setUsd(usd_result.data.marketdata.data[0]);
        } catch (e) {
            console.log(e)
        }
    }

    async function getEUR() {
        try {
            const eur_result = await api.get('engines/currency/markets/selt/boards/CETS/securities/EUR_RUB__TOM.json');
            setEur(eur_result.data.marketdata.data[0]);
        } catch (e) {
            console.log(e)
        }
    }

    async function getRTSI() {
        try {
            const res = await api.get('engines/stock/markets/index/securities/RTSI.json');
            setRtsi(res.data.marketdata.data[0]);
        } catch (e) {
            console.log(e)
        }
    }

    async function getIMOEX() {
        try {
            const res = await api.get('engines/stock/markets/index/securities/IMOEX.json');
            setMoex(res.data.marketdata.data[0]);
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getUSD();
        getEUR();
        getRTSI();
        getIMOEX();
        const intervalUSD = setInterval(getUSD, timer);
        const intervalEUR = setInterval(getEUR, timer);
        const intervalRTSI = setInterval(getRTSI, timer);
        const intervalIMOEX = setInterval(getIMOEX, timer);
        return () => clearInterval(intervalUSD, intervalEUR,intervalRTSI,intervalIMOEX);
    }, []);




    return (

        <div className={'row justify-content-center m-2'}>

            <CurrencyCard name={'USD/RUB'} price={usd[8]} pctchange={usd[37] }/>
            <CurrencyCard name={'EUR/RUB'} price={eur[8]} pctchange={eur[37] }/>
            <CurrencyCard name={rtsi[0]} price={rtsi[2]} pctchange={rtsi[9] }/>
            <CurrencyCard name={moex[0]} price={moex[2]} pctchange={moex[9] }/>

        </div>



    );

}


export default Currency;
