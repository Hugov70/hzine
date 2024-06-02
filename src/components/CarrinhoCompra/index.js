import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCart, IoCloseOutline, IoTrash } from 'react-icons/io5';
import { AiOutlineMinus } from 'react-icons/ai';
import { useEffect, useState } from "react";

import * as actions from '../../store/modules/carrinhodecompra/actions';
import { Carrinho } from "./styled";
import { ProdutoPicture } from "./styled";
import './Carrinho.css'

export default function CarrinhoDeCompra() {
    const dispatch = useDispatch();
    const itensCarrinho = useSelector(state => state.carrinhodecompra.itensCarrinho);
    const valorTotalCarrinho = useSelector (state => state.carrinhodecompra.valorItensCarrinho)
    const [forceUpdate, setForceUpdate] = useState(false);

    function handleClick(e) {
        dispatch(actions.clicouCarrinho());
    }

    const handleClickAdd = (e, nomeProduto, preco) => {
        let precoProduto = String(preco);
        precoProduto = precoProduto.replace(',', '.');
        dispatch(actions.addOneProduct({ nomeProduto, precoProduto }));
        setForceUpdate(prevState => !prevState);
    }

    const handleClickRemove = (e, nomeProduto, preco) => {
        let precoProduto = String(preco);
        precoProduto = precoProduto.replace(',', '.');
        dispatch(actions.removeOneProduct({ nomeProduto, precoProduto }));
        setForceUpdate(prevState => !prevState);
    }

    const handleClickDelete = (e, nomeProduto) => {
        dispatch(actions.deleteProduct(nomeProduto));
        setForceUpdate(prevState => !prevState);
    }

    useEffect(() => {

    }, [itensCarrinho, forceUpdate]);

    return (
        <div className="carrinhoCompras">
            <div className="carrinhoDeCompras">
                <div className="header">
                    <IoCloseOutline onClick={handleClick} className="closeButton" />
                    <h2>Carrinho</h2>
                </div>
                {itensCarrinho.length > 0 ?
                    <>
                        {itensCarrinho.map(produto => (
                            <div key={produto.nomeProduto} className="produtos">
                                <div className=".produtoPicture">
                                    <img src={produto.imagemProduto} />
                                </div>
                                <h2>{produto.nomeProduto}</h2>
                                <span className="lixoBotao" onClick={e => handleClickDelete(e, produto.nomeProduto)}><IoTrash /></span>
                                <p className="precoProduto">R${produto.precoTotalProduto.toString().substring(0, 5).replace('.',',')}</p>
                                <p className="quantidadeProduto">{produto.quantidade}</p>
                                <span className="botaoAdicionar" onClick={e => handleClickAdd(e, produto.nomeProduto, produto.precoProduto)}>+</span>
                                <span className="botaoRemover" onClick={e => handleClickRemove(e, produto.nomeProduto, produto.precoProduto)}><AiOutlineMinus /></span>
                            </div>
                        ))}

                        <div className="buyCarFinal">
                            <p className="subtotal">Subtotal: <span className="subtotalValue">{valorTotalCarrinho.toString().substring(0, 5).replace('.',',')}</span></p>
                            <div className="calcularFrete">Calcular Frete: 
                                <input type="text" placeholder="Digite seu cep"/>
                                <button>Calcular</button>
                            </div>
                            <p className="total">Total <span className="totalValue">{valorTotalCarrinho.toString().substring(0, 5).replace('.',',')}</span></p>
                            <button className="finalizarCompra">Finalizar compra</button>
                            <button className="continuarComprando">Continuar comprando</button>
                        </div>
                    </>


                    :

                    <div className="emptyCar">
                        <IoCart className="buyCar" />
                        <h2>Sua sacola está vazia</h2>
                        <p>Adicione itens em sua sacola</p>
                        <button onClick={handleClick}>Continuar Comprando</button>
                    </div>

                }
            </div>
        </div>
    )
}