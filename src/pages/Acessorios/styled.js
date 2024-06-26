import styled from "styled-components";
import * as colors from '../../config/colors'

export const ContainerRoupas = styled.section`
    :root {
        --cor1: #211915;
        --cor2: #E30613;
        --cor3: #F5F5F5;

        --fonte-padrao: Arial, Helvetica, sans-serif;
        --fonte-destaque: 'rough', sans-serif;
        --fonte-titulos: 'mooli', sans-serif ;
}


    div.pathTraveled {
        padding: 20px;
    }
    div.pathTraveled a{
        cursor: pointer;
        text-decoration: none;
        color: gray;
    }
    div.pathTraveled a#pageNow {
        color: var(--cor2);
        
    }
    img {
        width: 100%;
        max-height: 500px;
    }

    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.grayColor};
        padding: 20px;
        width: 80%;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 20px;
        text-align: center;
    }

    .filter span {
        margin: 0px 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .produtosAcessorios {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        margin: 0px;
       
    

    }

    .produtosAcessorios div {
        margin: 0px;
        padding: 10px;
        max-width: 180px;
    }

    .produtosAcessorios .acessorioContainer {
        max-width: 150px;
        height: 350px;
    }

    .produtosAcessorios div h3 {
        margin: 10px 0px;
    }

    .produtosAcessorios div .precoAcessorio {
        color: var(--cor2);
    }

    .produtosAcessorios div .buttonComprar {
        width: 100%;
        height: 50px;
        background-color: var(--cor1);
        font-weight: bolder;
        font-size: 1.1em;
        color: white;
        margin-top: 5px;
        border-radius: 4px;
        transition-duration: 0.5s;
    }

    .produtosAcessorios div .buttonComprar:hover {
        background-color: white;
        color: var(--cor1);
        border: 1px solid var(--cor1);
    }

    .produtosAcessorios div .semProduto {
        padding: 0px;
    }

    .produtosAcessorios div .semProduto .msg1{
        color: darkred;
        background-color: #FFE8E5;
        margin: 10px 0px;
        padding: 10px;
        font-size: 0.9em;
        text-align: center;
    }

    .produtosAcessorios div .semProduto .msg2{

        background-color: ${colors.grayColor};
        margin: 10px 0px;
        padding: 10px;
        text-align: center;
    }

    
`

export const AcessorioPicture = styled.div `
    background-color: ${colors.grayColor};
    img {
        width: 90px;
        height: 90px;
        padding: 20px;
    }
`