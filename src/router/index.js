import Home from "../pages/Home";
import Stocks from "../components/Stocks";
import ETFRUB from "../components/ETFRUB";
import ETFUSD from "../components/ETFUSD";
import Indexes from "../components/Indexes";


export const router = [
    {path: '/', component:Home,exact:true},
    {path: '/stock', component:Stocks,exact:true},
    {path: '/etf_rus', component:ETFRUB,exact:true},
    {path: '/etf_usd', component:ETFUSD,exact:true},
    {path: '/index', component:Indexes,exact:true}
]
