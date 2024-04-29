import styled from "styled-components";
import * as colors from '../../config/colors'

export const Carrinho = styled.div `
    width: 330px;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    background-color: white;
    overflow-x: hidden;
    z-index: 1000000000000;
    .header {
        background-color: ${colors.primaryColor};
        color: white;
        padding: 10px;
        display: flex;
        align-items: center;
    }

    .header .closeButton {
       font-size: 2em;
    }

    .header h2 {
        display: block;
        margin: auto;
    }

    .emptyCar {
        margin: auto;
        padding: 10px;
        margin-top: 170px;
        text-align: center;
    }

    .emptyCar .buyCar {
        display: block;
        margin: auto;
        opacity: 30%;
        font-size: 10em;

    }

    .emptyCar button {
        margin-top: 10px;
        width: 60%;
        padding: 10px;
        background-color: white;
        color: ${colors.primaryColor};
    }

    .produtos {
        display: flex;
        margin: 10px 10px;
        position: relative;
        
    }

    .produtos h2 {
        font-size: 1.1em;
        margin-left: 8px;
    }

    .produtos .precoProduto {
        color: ${colors.secondColor};
        position: absolute;
        bottom: 10px;
        left: 112px;
    }

    .produtos .lixoBotao {
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 1.5em;
    }

    .produtos .quantidadeProduto {
        position: absolute;
        bottom: 12px;
        right: 50px;
    }

    .produtos .botaoAdicionar {
        position: absolute;
        bottom: 10px;
        right: 15px; 
        background-color: ${colors.primaryColor};
        color: white;
        width: 25px;
        height: 25px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .produtos .botaoRemover {
        position: absolute;
        bottom: 10px;
        right: 70px; 
        background-color: ${colors.grayColor};
        color: black;
        width: 25px;
        height: 25px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
    }

    
`

export const ProdutoPicture = styled.div `
    background-color: ${colors.grayColor};
    max-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 70px;
        height: 70px;
        padding: 20px;
    }
`