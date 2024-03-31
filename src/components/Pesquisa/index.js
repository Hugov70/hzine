import React from "react";
import { FaSearch } from "react-icons/fa";

import { BarraDeBusca } from "./styled";

export default function Pesquisa() {
    return (
        <BarraDeBusca>
            <form className="form">
                <input type="text" placeholder="Busque por aqui"></input>
                <span className="search">
                    <FaSearch />
                </span>
            </form>
        </BarraDeBusca>
    )
}