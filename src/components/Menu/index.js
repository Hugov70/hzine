import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { IoCart, IoCloseOutline } from 'react-icons/io5';
import { MdChatBubbleOutline } from 'react-icons/md';
import githubLogo from "../../imagens/githubLogo.png";
import * as actions from '../../store/modules/menu/actions';

export default function Menu() {
    const dispatch = useDispatch();
    function handleClick(e) {
        dispatch(actions.clicouMenu());
    }
    
    return (
        <>
            <div className="menu" id="menu">
                <header className="headerMenu">
                    <p className="boasVindas">Seja bem vindo</p>
                    <p><a href="/login">Acesse seu perfil</a></p>
                    <span className="menuClose" onClick={handleClick}>
                        <IoCloseOutline />
                    </span>
                </header>
                <aside>
                    <p>Conheça também</p>
                    <a href="https://github.com/Hugov70" target="external"><img src={githubLogo} /></a>
                </aside>
                <div className="produtos">
                    <p><a href="/roupas">Roupas</a></p>
                    <p><a href="/suplementos">Suplementos</a></p>
                    <p><a href="/acessorios" >Acessórios</a></p>
                </div>
                <div className="userInteration">
                    <p><a href="">
                        <IoCart /> Meus pedidos
                    </a></p>
                    <p><a href="">
                        <MdChatBubbleOutline /> Atendimento
                    </a></p>
                </div>
            </div>
        </>
    )
}