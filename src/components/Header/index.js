import React from 'react';
import { NavLink} from 'react-router-dom';


function Header() {

        return (
        <div className={"header"}>
            <ul className={"nav nav-pills nav-fill"}>
                <li className={"nav-item"}>
                    <NavLink exact activeClass={'active'} className={"nav-link"} to="/" onlyActiveOnIndex>
                        Главная
                    </NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink className={"nav-link"} to="/stock">
                        Акции
                    </NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink  className={"nav-link"} to="/index">
                        Индексы
                    </NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink  className={"nav-link"} to="/etf_rus">
                        ETFRUB
                    </NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink  className={"nav-link"} to="/etf_usd">
                        ETFUSD
                    </NavLink>
                </li>
            </ul>
        </div>

    )
}


export default Header;
