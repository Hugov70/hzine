import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu";
import CarrinhoDeCompra from "../CarrinhoCompra";
import Pesquisa from '../Pesquisa'


import { FaShoppingCart, FaBars } from "react-icons/fa";

import * as actionsMenu from '../../store/modules/menu/actions';
import * as actionsCarrinho from '../../store/modules/carrinhodecompra/actions';

import { Navv } from "./styled";

export default function Nav() {
    const dispatch = useDispatch();
    function handleClickMenu(e) {
        dispatch(actionsMenu.clicouMenu());
    }

    function handleClickCarrinho(e) {
        dispatch(actionsCarrinho.clicouCarrinho());
    }

    const menuAberto = useSelector(state => state.menu.menuAberto);
    const carrinhoAberto = useSelector(state => state.carrinhodecompra.carrinhoAberto);
    
    return (
        <Navv>
            {menuAberto ? <Menu /> : carrinhoAberto ? <> 
            <CarrinhoDeCompra /> 
            
            </>  : <nav className="nav">
            <div id="noMenu">
                <h1 id="h11">Hzine</h1>
                <Pesquisa />
                <span className="car" onClick={handleClickCarrinho}>
                    <FaShoppingCart />
                </span>
                <span className="menuBars" onClick={handleClickMenu}>
                    <FaBars  />
                </span>
                
            </div>
        </nav>}
        </Navv>

    )
}

