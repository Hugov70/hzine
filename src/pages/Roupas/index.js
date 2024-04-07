import React from "react";
import { useSelector } from "react-redux";
import { ContainerRoupas, RoupaPicture } from "./styled";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import bannerRoupas from '../../imagens/banners/bannerRoupas.png'
import { BiFilter } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import { RoupasProdutos } from "./roupas";
import Newsletter from "../../components/Newsletter";


export default function Roupas() {

    const menuAberto = useSelector(state => state.menu.menuAberto)
    return (
        <ContainerRoupas>
            <Nav />
            {!menuAberto ?
                <>
                    <div className="pathTraveled">
                        <p><a href="/">Home</a> | <a id="pageNow" href="/roupas">Roupas</a></p>
                    </div>
                    <img src={bannerRoupas} />
                    <div className="filter">
                        <span> <BiFilter /> Filtrar </span>
                        <span> <FaSortAmountDown /> Relevancia </span>
                    </div>
                    <div className="produtosRoupas">
                        {RoupasProdutos.map( roupa => (
                            
                            <div key={String(roupa.nome)} className="roupaContainer">
                                {console.log(roupa)}
                                <RoupaPicture>
                                    <img src={roupa.imagemRoupa} />
                                </RoupaPicture>
                                <h3>{roupa.nome}</h3>
                                <p className="precoRoupa">R${roupa.preco}</p>
                                {roupa.quantidade > 0 ? <button className="buttonComprar">Comprar</button> : 
                                <div className="semProduto">
                                    <p className="msg1">Produto indisponível no momento</p>
                                    <p className="msg2">Avise-me quando voltar</p>    
                                </div>
                                
                                
                                } 
                            </div>
                        ) )}
                    </div>
                    <Newsletter/>
                    <Footer />
                </>

                : ''}
            </ContainerRoupas>
            ) 
}