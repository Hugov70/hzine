import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContainerRoupas, AcessorioPicture } from "./styled";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import bannerAcessorios from '../../imagens/banners/bannerAcessorios.png'
import { BiFilter } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import { AcessoriosProdutos } from "./acessorios";
import Newsletter from "../../components/Newsletter";
import * as actions from '../../store/modules/carrinhodecompra/actions';


export default function Acessorios() {
    const dispatch = useDispatch();
    const carrinhoAberto = useSelector(state => state.carrinhodecompra.carrinhoAberto);
    const menuAberto = useSelector(state => state.menu.menuAberto);

    const handleClickComprar = (e, nomeProduto, preco, imagemProduto) => {
        e.preventDefault();
        let precoProduto = String(preco);
        precoProduto = precoProduto.replace(',', '.');
        dispatch(actions.clicouBotaoComprar({ nomeProduto, precoProduto, imagemProduto }))
    }

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
                        {AcessoriosProdutos.map(acessorio => (

                            <div key={String(acessorio.nome)} className="acessorioContainer">
                                <AcessorioPicture>
                                    <img src={acessorio.imagemAcessorio} />
                                </AcessorioPicture>
                                <h3>{acessorio.nome}</h3>
                                <p className="precoAcessorio">R${acessorio.preco}</p>
                                {acessorio.quantidade > 0 ? <button className="buttonComprar"
                                    onClick={e => handleClickComprar(e, acessorio.nome, acessorio.preco, acessorio.imagemAcessorio)}
                                >Comprar</button> :
                                    <div className="semProduto">
                                        <p className="msg1">Produto indisponível no momento</p>
                                        <p className="msg2">Avise-me quando voltar</p>
                                    </div>


                                }
                            </div>
                        ))}
                    </div>
                    <Newsletter />
                    <Footer />
                </>

                : ''}
        </ContainerRoupas>
    )
}