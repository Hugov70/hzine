import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ContainerSuplemento, RoupaPicture } from "./styled";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import bannerSuplemento from '../../imagens/banners/bannerSuplementos.png'
import { BiFilter } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import Newsletter from "../../components/Newsletter";
import axios from '../../services/axios';
import { get } from 'loadsh';
import suplementoIcon from '../../imagens/icons/proteina.png'


export default function Suplemento() {
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
                        {produtos.map(produto => (
                            produto.categoria === 'suplemento' ?
                                <div key={String(produto.id)} className="suplementoContainer">
                                    <RoupaPicture>
                                        {get(produto, 'Imagems[0].url', false) ? (
                                            <img crossorigin="anonymous" src={produto.Imagems[0].url} alt="" />
                                        ) : (
                                            <img src={suplementoIcon} />
                                        )}
                                    </RoupaPicture>
                                    <h3>{produto.nome}</h3>
                                    <p className="precoRoupa">R${produto.preco.replace('.', ',')}</p>
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
        </ContainerSuplemento>
    )
}