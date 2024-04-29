import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCart, IoCloseOutline, IoTrash } from 'react-icons/io5';
import { AiOutlineMinus } from 'react-icons/ai';
import { useEffect, useState } from "react";

import * as actions from '../../store/modules/carrinhodecompra/actions';
import { Carrinho } from "./styled";
import { ProdutoPicture } from "./styled";

export default function CarrinhoDeCompra() {
    const dispatch = useDispatch();
    const itensCarrinho = useSelector(state => state.carrinhodecompra.itensCarrinho);
    const [forceUpdate, setForceUpdate] = useState(false);

    function handleClick(e) {
        dispatch(actions.clicouCarrinho());
    }

    const handleClickAdd = (e, nomeProduto, preco) => {
        let precoProduto = String(preco); 
        precoProduto = precoProduto.replace(',', '.'); 
        dispatch(actions.addOneProduct({nomeProduto, precoProduto}));
        setForceUpdate(prevState => !prevState);
    }

    const handleClickRemove = (e, nomeProduto, preco) => {
        let precoProduto = String(preco); 
        precoProduto = precoProduto.replace(',', '.'); 
        dispatch(actions.removeOneProduct({nomeProduto, precoProduto}));
        setForceUpdate(prevState => !prevState);
    }

    const handleClickDelete = (e, nomeProduto) => {
        dispatch(actions.deleteProduct(nomeProduto));
        setForceUpdate(prevState => !prevState);
    }

    useEffect(() => {

    }, [itensCarrinho, forceUpdate]); 

    return (
        <Carrinho>
            <div className="carrinhoDeCompras">
                <div className="header">
                    <IoCloseOutline onClick={handleClick} className="closeButton" />
                    <h2>Carrinho</h2>
                </div>
                {itensCarrinho.length > 0 ?
                    
                    itensCarrinho.map(produto => (
                        <div key={produto.nomeProduto} className="produtos">
                            <ProdutoPicture>
                                <img src={produto.imagemProduto} />
                            </ProdutoPicture>
                            <h2>{produto.nomeProduto}</h2>
                            <span className="lixoBotao" onClick={e => handleClickDelete(e, produto.nomeProduto)}><IoTrash/></span>
                            <p className="precoProduto">R${produto.precoTotalProduto.toString().substring(0, 5)}</p>
                            <p className="quantidadeProduto">{produto.quantidade}</p>
                            <span className="botaoAdicionar" onClick={e => handleClickAdd(e, produto.nomeProduto, produto.precoProduto)}>+</span>
                            <span className="botaoRemover" onClick={e => handleClickRemove(e, produto.nomeProduto, produto.precoProduto)}><AiOutlineMinus/></span>
                        </div>
                    ))


                    :

                    <div className="emptyCar">
                        <IoCart className="buyCar" />
                        <h2>Sua sacola está vazia</h2>
                        <p>Adicione itens em sua sacola</p>
                        <button onClick={handleClick}>Continuar Comprando</button>
                    </div>

                }
            </div>
        </Carrinho>
    )
}