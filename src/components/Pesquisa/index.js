import React from "react";
import { FaSearch } from "react-icons/fa";

import './Search.css'

export default function Pesquisa() {
    return (
        <div>
            <form className="form">
                <input type="text" placeholder="Busque por aqui"></input>
                <span className="search">
                    <FaSearch />
                </span>
            </form>
        </div>
    )
}