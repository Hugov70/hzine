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
                    <p><a>Acesse seu perfil</a></p>
                    <span className="menuClose" onClick={handleClick}>
                        <IoCloseOutline />
                    </span>
                </header>
                <aside>
                    <p>Conheça também</p>
                    <img src={githubLogo} />
                </aside>
                <div className="produtos">
                    <p><a>Roupas</a></p>
                    <p><a>Suplementos</a></p>
                    <p><a>Acessórios</a></p>
                </div>
                <div className="userInteration">
                    <p><IoCart /> Meus pedidos</p>
                    <p><MdChatBubbleOutline /> Atendimento</p>
                </div>
            </div>
        </>
    )
}