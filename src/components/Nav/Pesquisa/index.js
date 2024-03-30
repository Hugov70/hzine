import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";


import { Search } from "./styled";

export default function Pesquisa() {
    return (
        <Search>
            <form className="form">
                <input type="text" placeholder="Busque por aqui"></input>
                <span className="search">
                    <FaSearch />
                </span>
            </form>
        </Search>
    )
}