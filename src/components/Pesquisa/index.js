import React from "react";
import { FaSearch } from "react-icons/fa";

import Searchh from './styled'

export default function Pesquisa() {
    return (
        <Searchh>
            <form className="form">
                <input type="text" placeholder="Busque por aqui"></input>
                <span className="search">
                    <FaSearch />
                </span>
            </form>
        </Searchh>
    )
}