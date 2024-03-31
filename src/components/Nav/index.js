import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu";
import Pesquisa from '../Pesquisa'


import { FaShoppingCart, FaBars } from "react-icons/fa";


import { Navv } from "./styled";

export default function Nav() {
    const dispatch = useDispatch();
    function handleClick(e) {
        dispatch({
            type: 'BOTAO_MENU_CLICADO',
        }); 
    }

    const menuAberto = useSelector(state => state.menuAberto)
    
    return (
        <Navv>
            {menuAberto ? <Menu /> :         <nav className="nav">
            <div id="noMenu">
                <h1 id="h11">Hzine</h1>
                <Pesquisa />
                <span className="car">
                    <FaShoppingCart />
                </span>
                <span className="menuBars" onClick={handleClick}>
                    <FaBars  />
                </span>
                
            </div>
        </nav>}
        </Navv>

    )
}

