import React, { useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu";
import CarrinhoDeCompra from "../CarrinhoCompra";
import Pesquisa from '../Pesquisa'


import { FaShoppingCart, FaBars, FaUser } from "react-icons/fa";

import * as actionsMenu from '../../store/modules/menu/actions';
import * as actionsCarrinho from '../../store/modules/carrinhodecompra/actions';

import { Navv } from "./styled";

export default function Nav() {
    const dispatch = useDispatch();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


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

            </> :
                <>
                    <nav className="nav">
                        <div id="noMenu">
                            <h1 id="h11"><a href="/">Hzine</a></h1>
                            <Pesquisa />
                            <span className="car" onClick={handleClickCarrinho}>
                                <FaShoppingCart />
                            </span>
                            {window.innerWidth >= 1200 ?
                                <>
                                    <span className="userLogin">
                                        <FaUser className="FaUser" />
                                        <p>Bem vindo</p>
                                        <a className="login" href="/login">Acesse seu perfil</a>
                                    </span>
                                </>


                                :
                                <span className="menuBars" onClick={handleClickMenu}>
                                    <FaBars />
                                </span>}


                        </div>
                    </nav>
                    {window.innerWidth >= 1200 ?
                                            <div className="categorias">
                                            <a href="/roupas">
                                                <div>Roupas</div>
                                            </a>
                                            <a href="/suplementos">
                                                <div>Suplementos</div>
                                            </a>
                                            <a href="/acessorios">
                                                <div>Acessoriso</div>
                                            </a>
                                        </div> : ''

                    }

                </>
            }
        </Navv>

    )
}

