import styled from "styled-components";

export const Footerr = styled.footer`
    :root {
    --cor1: #211915;
    --cor2: #E30613;

    --fonte-padrao: Arial, Helvetica, sans-serif;
    --fonte-destaque: 'rough', sans-serif;
    --fonte-titulos: 'mooli', sans-serif ;
    }
    
    background-color: var(--cor1);
    color: white;
    padding: 20px;
    font-weight: bold;

    .groupOfAnchors {
        position: relative;
        margin-bottom: 15px;
        
    }

    .groupOfAnchors .arrowIconR {
        position: absolute;
        right: 5px;
    }

    .groupOfAnchors button {
        background-color: var(--cor2);
        color: white;
        font-weight: bolder;
        padding: 10px 15px;
        border: none;
    }

    .network p {
        font-size: 2em;
        text-align: center;
        margin-top: 20px;
    }

    .networkLogos {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 20px;
    }

    .networkLogos img {
        width: 30px;
        height: 25px;
        margin-left: 20px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px black;
    }

    .address {
        margin-top: 30px;
        text-align: center;
    }
    
`