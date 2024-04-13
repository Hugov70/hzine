import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ContainerRoupas, RoupaPicture } from "./styled";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import bannerRoupas from '../../imagens/banners/bannerRoupas.png'
import { BiFilter } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import Newsletter from "../../components/Newsletter";
import axios from '../../services/axios';
import { get } from 'loadsh';
import roupaIcon from '../../imagens/icons/camiseta.png'


export default function Roupas() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/produtos')
            setProdutos(response.data)
            console.log(response)
        }

        getData()
    }, [])

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
                        {produtos.map(produto => (
                            produto.categoria === 'roupa' ?
                                <div key={String(produto.id)} className="roupaContainer">
                                    {console.log(produto)}
                                    <RoupaPicture>
                                        {get(produto, 'Imagems[0].url', false) ? (
                                            <img crossorigin="anonymous" src={produto.Imagems[0].url} alt="" />
                                        ) : (
                                            <img src={roupaIcon} />
                                        )}
                                    </RoupaPicture>
                                    <h3>{produto.nome}</h3>
                                    <p className="precoRoupa">R${produto.preco}</p>
                                    {produto.quantidade > 0 ? <button className="buttonComprar">Comprar</button> :
                                        <div className="semProduto">
                                            <p className="msg1">Produto indisponível no momento</p>
                                            <p className="msg2">Avise-me quando voltar</p>
                                        </div>


                                    }
                                </div> : ''

                        ))}
                    </div>
                    <Newsletter />
                    <Footer />
                </>

                : ''}
        </ContainerRoupas>
    )
}