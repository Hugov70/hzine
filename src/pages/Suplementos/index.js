import React from "react";
import { useSelector } from "react-redux";
import { ContainerSuplemento, RoupaPicture } from "./styled";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import bannerSuplemento from '../../imagens/banners/bannerSuplementos.png'
import { BiFilter } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import { SuplementosProdutos } from "./suplementos";
import Newsletter from "../../components/Newsletter";


export default function Suplemento() {

    const menuAberto = useSelector(state => state.menu.menuAberto)
    return (
        <ContainerSuplemento>
            <Nav />
            {!menuAberto ?
                <>
                    <div className="pathTraveled">
                        <p><a href="/">Home</a> | <a id="pageNow" href="/suplementos">Suplemento</a></p>
                    </div>
                    <img src={bannerSuplemento} />
                    <div className="filter">
                        <span> <BiFilter /> Filtrar </span>
                        <span> <FaSortAmountDown /> Relevancia </span>
                    </div>
                    <div className="produtosSuplemento">
                        {SuplementosProdutos.map( suplemento => (
                            
                            <div key={String(suplemento.nome)} className="suplementoContainer">
                                {console.log(suplemento)}
                                <RoupaPicture>
                                    <img src={suplemento.imagemSuplemento} />
                                </RoupaPicture>
                                <h3>{suplemento.nome}</h3>
                                <p className="precoRoupa">R${suplemento.preco}</p>
                                {suplemento.quantidade > 0 ? <button className="buttonComprar">Comprar</button> : 
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
            </ContainerSuplemento>
            ) 
}