import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContainerSuplemento, RoupaPicture } from "./styled";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import bannerSuplemento from '../../imagens/banners/bannerSuplementos.png'
import { BiFilter } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import { SuplementosProdutos } from "./suplementos";
import Newsletter from "../../components/Newsletter";
import * as actions from '../../store/modules/carrinhodecompra/actions';


export default function Suplemento() {
    const dispatch = useDispatch();
    const carrinhoAberto = useSelector(state => state.carrinhodecompra.carrinhoAberto);
    const menuAberto = useSelector(state => state.menu.menuAberto)

    const handleClickComprar = (e, nomeProduto, preco, imagemProduto) => {
        e.preventDefault();
        let precoProduto = String(preco);
        precoProduto = precoProduto.replace(',', '.');
        dispatch(actions.clicouBotaoComprar({ nomeProduto, precoProduto, imagemProduto }))
    }

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
                        {SuplementosProdutos.map(suplemento => (

                            <div key={String(suplemento.nome)} className="suplementoContainer">
                                <RoupaPicture>
                                    <img src={suplemento.imagemSuplemento} />
                                </RoupaPicture>
                                <h3>{suplemento.nome}</h3>
                                <p className="precoRoupa">R${suplemento.preco}</p>
                                {suplemento.quantidade > 0 ? <button className="buttonComprar"
                                    onClick={e => handleClickComprar(e, suplemento.nome, suplemento.preco, suplemento.imagemSuplemento)}
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
        </ContainerSuplemento>
    )
}