import React from "react";
import { useSelector } from "react-redux";
import { ContainerRoupas, AcessorioPicture } from "./styled";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import bannerAcessorios from '../../imagens/banners/bannerAcessorios.png'
import { BiFilter } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import { AcessoriosProdutos } from "./acessorios";
import Newsletter from "../../components/Newsletter";


export default function Acessorios() {
    const carrinhoAberto = useSelector(state => state.carrinhodecompra.carrinhoAberto);
    const menuAberto = useSelector(state => state.menu.menuAberto)
    return (
        <ContainerRoupas>
            <Nav />
            {!menuAberto ?
                <>
                    <div className="pathTraveled">
                        <p><a href="/">Home</a> | <a id="pageNow" href="/acessorios">Acessorios</a></p>
                    </div>
                    <img src={bannerAcessorios} />
                    <div className="filter">
                        <span> <BiFilter /> Filtrar </span>
                        <span> <FaSortAmountDown /> Relevancia </span>
                    </div>
                    <div className="produtosAcessorios">
                        {AcessoriosProdutos.map( acessorio => (
                            
                            <div key={String(acessorio.nome)} className="acessorioContainer">
                                <AcessorioPicture>
                                    <img src={acessorio.imagemAcessorio} />
                                </AcessorioPicture>
                                <h3>{acessorio.nome}</h3>
                                <p className="precoAcessorio">R${acessorio.preco}</p>
                                {acessorio.quantidade > 0 ? <button className="buttonComprar">Comprar</button> : 
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